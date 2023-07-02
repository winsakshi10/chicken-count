import { set } from "mongoose";
import React, { useState } from "react";
import AllDishes from "./AllDishes";
import Search from "./Search";

const Form = () => {
  const [selectedDish, setSelectedDish] = useState([]);

  const handleDelete = (dish) => {
    const updatedDishes = selectedDish.filter((myDish) => myDish !== dish);
    setSelectedDish(updatedDishes);
  };
  const handleCalculate = () => {
    let totalWeight = 0;

    selectedDish.forEach((dish) => {
      const { quantity, portion, frequency, months, years } = dish;

      // Find the selected portion's weight
      const selectedPortion = dish.portions.find((p) => p.size === portion);
      console.log(selectedPortion);

      const portionWeight = selectedPortion.weight;

      let totalTime = 0;
      if (frequency === "daily") {
        totalTime = months * 30 + years * 365;
      } else if (frequency === "weekly") {
        totalTime = (months * 30 + years * 365) / 7;
      } else if (frequency === "monthly") {
        totalTime = months + years * 12;
      }

      // Calculate the total weight
      const portionWeightPerUnit = portionWeight * quantity;
      const totalWeightForDish = portionWeightPerUnit * totalTime;

      // Accumulate the total weight
      totalWeight += totalWeightForDish;
    });

    // Perform any desired action with the calculated totalWeight
    console.log("Total weight of chicken eaten: ", totalWeight, "g");
  };

  return (
    <div className=" bg-red-300 min-h-screen">
      <Search setSelectedDish={setSelectedDish} />
      <div className="bg-white w-[70%] flex mx-auto my-10 p-5 rounded-md flex-col">
        {selectedDish &&
          selectedDish.map((dish, index) => (
            <AllDishes
              key={index}
              selectedDish={dish}
              onDelete={handleDelete}
            />
          ))}
        {selectedDish.length > 0 && (
          <div className="flex justify-center">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md mt-5"
              onClick={handleCalculate}
            >
              Calculate
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
