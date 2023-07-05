import React from "react";
import Search from "./Search";

const Popup = ({ setPopUp }) => {
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
  ];

  return (
    <div
      className="fixed inset-0 bg-[#FFFAF0] bg-opacity-50 flex items-center justify-center backdrop-blur-md"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-[#fa8072] w-[80%] h-[60%] relative rounded-xl py-8"
        onClick={(e) => e.stopPropagation()}
      >
        <Search />
        <div className="my-6 py-4 flex justify-center mx-auto w-[70%] bg-[#FFFAF0] rounded-lg">
          <div className="w-full">
            <p className=" text-left py-4 border-b border-[#hover:bg-[#B0E0E6]] px-8 rounded-lg">
              Popular Dishes
            </p>
            <div className="">
              {popularDishes.map((dish) => (
                <p className="hover:bg-[#B0E0E6] text-sm text-left py-4 border-b px-8">
                  {dish.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
