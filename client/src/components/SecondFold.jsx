import React from "react";

const SecondFold = () => {
  return (
    <div className="bg-[#FDFD96] text-[#1B1B1B] mt-56 p-8 py-16 h-96 border border-[#f4f447] rounded-lg shadow-lg shadow-[#f3f3b5] ">
      <div className="flex flex-row gap-16 h-[90%]">
        <div className="flex flex-col gap-4 w-[35%] px-8">
          <h3 className="text-3xl font-bold">How does it work?</h3>
          <p>Get your chicken count in 4 quick steps.</p>
        </div>
        <div className="gap-12">
          <div className="grid grid-cols-2 h-[50%]">
            <div className="flex flex-row gap-4 px-8">
              <h3 className="text-4xl font-bold">1</h3>
              <p className="">
                Search Your favorite chicken Dish or Add your custom dish.
              </p>
            </div>
            <div className="flex flex-row gap-4 px-8">
              <h3 className="text-4xl font-bold">2</h3>
              <p className="">
                Specify the portion size and the duration you've been consuming
                the dish.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-8">
            <div className="flex flex-row gap-4 px-8">
              <h3 className="text-4xl font-bold">3</h3>
              <p className="">
                Add as many dishes as you like to get a comprehensive count.
              </p>
            </div>
            <div className="flex flex-row gap-4 px-8">
              <h3 className="text-4xl font-bold">4</h3>
              <p className="">
                Click on the calculate button to discover your total chicken
                consumption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondFold;
