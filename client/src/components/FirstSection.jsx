import React, { useState } from "react";

import "./styles.css";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const FirstSection = () => {
  return (
    <div className=" h-[calc(60vh)] items-center parallax py-10">
      <div className="items-center pt-56 lg:pt-48 parallax-content">
        <h1 className="text-3xl m-auto  py-3 px-1 rounded-lg lg:text-7xl bg-[#F9F7F7] text-[#1b1b1b] flex justify-center font-display font-extrabold  mx-24 ">
          CHICKENS
        </h1>
      </div>
    </div>
  );
};

export default FirstSection;
