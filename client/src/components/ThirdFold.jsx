import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import cleaver from "../assets/cleaver.png";

const ThirdFold = () => {
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    if (popUp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [popUp]);

  const handlePopClick = () => {
    setPopUp(!popUp);
  };
  return (
    <div className="bg-[#AC2E24] text-[#F9F7F7]  py-8 h-96 shadow-lg">
      <div className="lg:px-12 px-4">
        <h2 className="text-3xl font-bold font-display py-3">
          Welcome to the Chicken Eater Calculator!
        </h2>
        <p className=" font-mono text-[12px] py-3">
          Ever wondered how many chickens have fallen victim to your insatiable
          appetite? Well, peck no further. We’ve hatched the ultimate Chicken
          Eater Calculator to satisfy your curiosity.
        </p>
        <p className=" font-mono text-[12px] py-3">
          So, flap your wings and let’s dive head-first into the world of
          chicken consumption!
        </p>
        <button
          type="submit"
          className=" flex justify-center bg-[#E56A55] border border-[#E56A55] shadow-lg px-4 py-2 mt-4  lg:px-8 lg:py-4 lg:mt-10 lg:w-[60%] mx-auto text-lg font-bold text-[#F9F7F7] font-mono items-center group hover:bg-[#F29C2E] "
          onClick={handlePopClick}
        >
          Let's count!
          <img
            src={cleaver}
            alt="Knife"
            className="w-8 h-8 group-hover:rotate-90 group-hover:ease-in-out "
          />
        </button>
        {popUp && <Popup setPopUp={setPopUp} />}
      </div>
    </div>
  );
};

export default ThirdFold;
