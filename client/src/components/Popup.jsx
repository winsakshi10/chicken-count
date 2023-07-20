import React, { useContext } from "react";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import "./popup.css";
import egg from "../assets/egg.png";
import iconchick from "../assets/iconchick.png";
import icon1 from "../assets/icon1.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import { AllDishesContext } from "../utils/AllDishesContext";

const Popup = ({ setPopUp }) => {
  const navigate = useNavigate();
  const { allDishes, setAllDishes } = useContext(AllDishesContext);
  const handleBackdropClick = () => {
    setPopUp(false);
  };

  const popularDishes = [
    {
      name: "Tandoori Chicken",
      portions: [
        { size: "Full", measurement: "piece(s)", weight: 300 },
        { size: "Half", measurement: "piece(s)", weight: 150 },
      ],
    },
    {
      name: "Chicken Biryani",
      portions: [
        { size: "Regular", measurement: "plate", weight: 400 },
        { size: "Family", measurement: "plate", weight: 800 },
      ],
    },
    {
      name: "Chicken Shawarma",
      portions: [
        { size: "Regular", measurement: "wrap", weight: 250 },
        { size: "Large", measurement: "wrap", weight: 400 },
      ],
    },
    {
      name: "Chicken Fried Rice",
      portions: [
        { size: "Regular", measurement: "plate", weight: 300 },
        { size: "Large", measurement: "plate", weight: 500 },
      ],
    },
    {
      name: "Chicken Curry",
      portions: [
        { size: "Regular", measurement: "plate", weight: 300 },
        { size: "Large", measurement: "plate", weight: 500 },
      ],
    },
  ];

  const handleDishClick = (dish) => {
    setAllDishes((prev) => [...prev, dish]);
    setPopUp(false);
    navigate("/details");
  };

  return (
    <div
      className="fixed inset-0  flex items-center justify-center backdrop-blur-md z-10"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-[#AC2E24] w-[90%] px-4 lg:w-[80%] h-[80%] relative  py-8"
        onClick={(e) => e.stopPropagation()}
      >
        <Search navigateToDetails={true} setPopUp={setPopUp} />
        <div className="my-10 pb-10 flex justify-center mx-auto w-auto lg:w-[70%] bg-[#F9F7F7] text-[#1b1b1b]">
          <div className="w-full font-mono">
            <p className=" text-left font-bold py-8 border-b border-[#hover:bg-[#B0E0E6]] px-8 ">
              Popular Dishes
            </p>
            <div className="">
              {popularDishes.map((dish, index) => (
                <p
                  key={index}
                  className="hover:bg-[#F29C2E]  text-sm text-left py-4  border-b px-8 cursor-pointer"
                  onClick={() => handleDishClick(dish)}
                >
                  {dish.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="marquee-container pt-6">
          <div className="marquee-icons">
            <img src={egg} alt="Icon 1" className="marquee-icon" />
            <img src={iconchick} alt="Icon 2" className="marquee-icon" />
            <img src={icon1} alt="Icon 3" className="marquee-icon" />
            <img src={icon4} alt="Icon 4" className="marquee-icon" />
            <img src={icon5} alt="Icon 5" className="marquee-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
