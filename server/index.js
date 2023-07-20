import express from "express";
import cors from "cors";
import connectDB from "./mongoDB/db.js";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import { saveDishes } from "./dishList.js";
import ChickenDish from "./mongoDB/models/dishModel.js";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/search/:term", async (req, res) => {
  const searchTerm = req.params.term;

  try {
    // Perform the search query using the searchTerm
    const searchResults = await ChickenDish.find({
      name: { $regex: searchTerm, $options: "i" },
    });

    // Return the search results as the API response
    res.json(searchResults);
  } catch (error) {
    console.error("Error searching dishes:", error);
    res
      .status(500)
      .json({ error: "An error occurred while searching for dishes" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    //saveDishes();
    app.listen(8080, () => {
      console.log("Server is running on port 8080");
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
