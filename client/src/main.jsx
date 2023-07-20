import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SelectedDishesProvider } from "./utils/SelectedDishesContext.jsx";
import { AllDishesProvider } from "./utils/AllDishesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SelectedDishesProvider>
      <AllDishesProvider>
        <App />
      </AllDishesProvider>
    </SelectedDishesProvider>
  </React.StrictMode>
);
