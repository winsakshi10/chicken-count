import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./result.css";
import chickenLeg from "../assets/chickenLeg.png";

const ResultPage = () => {
  const location = useLocation();
  const amounts = location.state?.finalAmount || 0;

  const [displayedAmount, setDisplayedAmount] = useState(0);

  useEffect(() => {
    const numChickens = 50;
    const chickenElements = [];

    const createChicken = () => {
      const chickenElement = document.createElement("div");
      chickenElement.className = "falling-chicken";
      chickenElement.style.left = `${Math.random() * window.innerWidth}px`;
      chickenElement.style.animationDuration = `${Math.random() * 2 + 1}s`;
      chickenElement.style.backgroundImage = `url(${chickenLeg})`;
      document.getElementById("chicken-container").appendChild(chickenElement);

      const index = chickenElements.length;
      const stackOffset = 2; // Adjust this value to control the spacing between stacked chickens
      const topPosition = index * stackOffset;
      chickenElement.style.top = `${topPosition}px`;

      const timer = setTimeout(() => {
        chickenElement.classList.remove("fall");
        chickenElement.classList.add("fallen-chicken");
      }, 6000);

      chickenElement.addEventListener("animationend", () => {
        clearTimeout(timer);
        chickenElement.style.animation = "none"; // Stop the animation
        chickenElement.style.transform = "translateY(700px)";
      });

      chickenElements.push(chickenElement);
    };

    // Create chickens
    for (let i = 0; i < numChickens; i++) {
      createChicken();
    }

    // Cleanup: remove chickens and event listeners when component unmounts
    return () => {
      chickenElements.forEach((chickenElement) => chickenElement.remove());
    };
  }, []);

  useEffect(() => {
    // Function to handle the animation for rolling numbers
    const animateNumber = () => {
      const step = Math.ceil(amounts / 50); // Update the number in 100 steps
      let currentAmount = 0;

      const interval = setInterval(() => {
        currentAmount += step;
        if (currentAmount >= amounts) {
          currentAmount = amounts;
          clearInterval(interval);
        }
        setDisplayedAmount(currentAmount);
      }, 50); // Update every 50ms for smooth animation
    };

    animateNumber();
  }, [amounts]);

  return (
    <div className="py-10">
      <div id="chicken-container" className="chicken-container mb-10"></div>

      <h2 className="font-display text-2xl font-bold text-center">
        WINNER WINNER CHICKEN DINNER
      </h2>
      <div className="mt-20 font-mono">
        <div className="bg-[#AC2E24] z-20 p-8 py-20 flex flex-col lg:flex-row items-center justify-center gap-14 text-center text-[#F9F7F7] ">
          <p>You have eaten </p>
          <h2 className="my-10 text-8xl font-bold">{displayedAmount}</h2>
          <p>chickens in your lifetime.</p>
        </div>
      </div>

      {/* <div className="flex  justify-center font-mono">
        
      </div> */}
    </div>
  );
};

export default ResultPage;
