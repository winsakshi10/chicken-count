import { set } from "mongoose";
import React, { useState } from "react";
import AllDishes from "./AllDishes";
import Popup from "./Popup";
import Search from "./Search";

const Form = () => {
  const [selectedDish, setSelectedDish] = useState([]);

  const handleDelete = (dish) => {
    const updatedDishes = selectedDish.filter((myDish) => myDish !== dish);
    setSelectedDish(updatedDishes);
  };
  const handleCalculate = () => {};

  return (
    <div className="">
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
