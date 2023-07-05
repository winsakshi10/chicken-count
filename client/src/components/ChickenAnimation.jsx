import React, { useEffect, useRef } from "react";
import chickenImage1 from "../assets/chickenImage1.png";
import chickenImage2 from "../assets/chickenImage2.png";
import "./animate.css";

const chickenImages = [chickenImage1, chickenImage2];
const numberOfChickens = 8;

function ChickenAnimation() {
  return (
    <div className="wrapper z-0">
      {Array.from({ length: numberOfChickens }).map((_, index) => (
        <div key={index}>
          <img
            src={chickenImages[index % chickenImages.length]}
            className="chicken"
            alt="Chicken"
          />
        </div>
      ))}
    </div>
  );
}

export default ChickenAnimation;
