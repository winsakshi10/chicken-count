import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DishCard from "./DishCard";
import icon1 from "../assets/icon1.png";

import { AllDishesContext } from "../utils/AllDishesContext";
import Popup from "./Popup";
import Footer from "./Footer";

const DetailsDish = () => {
  const { allDishes, setAllDishes } = useContext(AllDishesContext);
  const [totalAmount, setTotalAmount] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const navigate = useNavigate();

  const handlePopUp = () => {
    setPopUp(!popUp);
  };

  const handleSaveAmount = (amount, index) => {
    setTotalAmount((prevAmounts) => {
      const updatedAmounts = [...prevAmounts];
      updatedAmounts[index] = amount;
      return updatedAmounts;
    });
  };

  const handleDelete = (index) => {
    setTotalAmount((prevAmounts) => {
      const updatedAmounts = [...prevAmounts];
      updatedAmounts.splice(index, 1);
      return updatedAmounts;
    });

    setAllDishes((prevDishes) => {
      const updatedDishes = [...prevDishes];
      updatedDishes.splice(index, 1);
      return updatedDishes;
    });
  };

  const handleCalculate = () => {
    let finalAmount;
    let i = 0;
    finalAmount = Math.ceil(totalAmount.reduce((acc, curr) => acc + curr, i));
    navigate("/result", { state: { finalAmount: finalAmount } });
  };

  return (
    <div className=" px-3">
      <h2 className="mt-14 mb-6 text-[#1b1b1b] text-lg font-bold font-mono">
        Add your favourite chicken dishes
      </h2>
      <div className="flex flex-col">
        <ul>
          {allDishes.map((dish, index) => (
            <li key={index}>
              <DishCard
                key={dish.id}
                dish={dish}
                onSaveAmount={handleSaveAmount}
                onDelete={handleDelete}
                index={index}
              />
            </li>
          ))}
        </ul>

        <div className="fixed lg:bottom-36 lg:right-28 group bottom-28 right-3">
          <img
            src={icon1}
            className="w-10 h-10 group-hover:animate-bounce hover:ease-in-out group"
          />
          <button
            className=" bg-green-500 text-white px-4 py-2 text-center mx-auto font-bold font-mono group-hover:bg-green-700"
            onClick={handlePopUp}
          >
            Add More
          </button>
        </div>
        {popUp && <Popup setPopUp={setPopUp} />}

        <button
          className="bg-[#E56A55] mt-6 px-4 py-2 text-center my-10 mx-auto text-[#F9F7F7] font-mono font-bold w-full  hover:bg-[#F29C2E]"
          onClick={handleCalculate}
        >
          Count my chicks!
        </button>
      </div>
    </div>
  );
};

export default DetailsDish;
