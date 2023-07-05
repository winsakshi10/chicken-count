import React, { useState } from "react";
import Popup from "./Popup";

const FirstSection = () => {
  const [popUp, setPopUp] = useState(false);

  const handlePopClick = () => {
    setPopUp(!popUp);
  };

  return (
    <div>
      <h1 className="text-9xl text-[#fa8072] flex justify-center font-display mt-20 mx-8 font-extrabold tracking-wider ">
        Feathered Facts
      </h1>
      <div className="text-xl text-[#1b1b1b] flex flex-col justify-center mx-auto w-[50%] text-center leading-relaxed mt-2">
        <p className="">Ever Wondered How Many Chickens Have You Eaten?</p>
        <button
          type="submit"
          className=" bg-[#48D1CC] rounded-lg px-4 py-2 mt-4 w-[40%] mx-auto text-base font-bold text-[#FFFAF0] hover:bg-[#008080]"
          onClick={handlePopClick}
        >
          Let's count!
        </button>
        {popUp && <Popup setPopUp={setPopUp} />}
      </div>
    </div>
  );
};

export default FirstSection;
