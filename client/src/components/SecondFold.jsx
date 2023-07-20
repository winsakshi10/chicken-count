import React from "react";
import chick1 from "../assets/chick1.png";
import fatChciken from "../assets/fatChicken.png";
import legHorn from "../assets/legHorn.png";

const SecondFold = () => {
  return (
    <div className="">
      <div className=" backdrop-blur-lg text-[#1b1b1b] bg-[#7E7E7E]/25  shadow-lg py-10 flex flex-col lg:flex-row">
        <div className="flex flex-col gap-4 py-3 lg:px-12 px-4 lg:w-[50%] w-full">
          <h3 className="text-3xl font-bold font-display">How does it work?</h3>
          <p className="font-mono text-sm">
            Just answer a few deviously clever questions about how many chickens
            you think you’ve consumed (don’t worry — we won’t tell!).
          </p>
        </div>
        <div className="font-mono ">
          <div className="flex flex-row lg:gap-4 gap-1 px-4 items-center p-2 ">
            <h3 className="text-xl font-bold">1.</h3>
            <p className="text-sm">
              Search Your favorite chicken Dish or Add your custom dish.
            </p>
          </div>
          <div className="flex flex-row lg:gap-4 gap-1 px-4 items-center p-2 ">
            <h3 className="text-xl font-bold">2.</h3>
            <p className="text-sm">
              Specify the portion size and the duration you've been consuming
              the dish.
            </p>
          </div>

          <div className="flex flex-row lg:gap-4 gap-1 px-4 items-center  p-2 ">
            <h3 className="text-xl font-bold">3.</h3>
            <p className="text-sm">
              Add as many dishes as you like to get a comprehensive count.
            </p>
          </div>
          <div className="flex flex-row lg:gap-4 gap-1 px-4 items-center p-2">
            <h3 className="text-xl font-bold">4.</h3>
            <p className="text-sm">
              Click on the calculate button to discover your total chicken
              consumption.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#AC2E24] py-10 text-[#F9F7F7]">
        <h2 className="font-bold font-display text-3xl flex py-3 p-6 justify-center mx-auto">
          Did you Know?
        </h2>
        <div className="p-6 flex flex-col gap-10 lg:flex-row lg:gap-2">
          <div className="flex flex-row gap-2 lg:flex-col lg:gap-2 text-center ">
            <img
              src={chick1}
              className="w-32 h-32 lg:flex lg:justify-center lg:mx-auto"
            />
            <p className="font-mono text-[12px] lg:px-10">
              Chickens outnumber humans: There are over 25 billion chickens in
              the world, outnumbering humans by about three to one.
            </p>
          </div>
          <div className="flex flex-row gap-2 lg:flex-col lg:gap-2 text-center">
            <img
              src={fatChciken}
              className="w-32 h-32  lg:flex lg:justify-center lg:mx-auto"
            />
            <p className="font-mono text-[12px] lg:px-10">
              The heaviest chicken ever recorded was a Brahma rooster named "Big
              Boy" weighing a whopping 18 pounds or 8.16 Kg!
            </p>
          </div>
          <div className="flex flex-row gap-2 lg:flex-col lg:gap-2 text-center">
            <img
              src={legHorn}
              className="w-32 h-32 lg:flex lg:justify-center lg:mx-auto"
            />
            <p className="font-mono text-[12px] lg:px-10">
              Though chickens can't fly, they run at 14-16 km/h; Leghorn breeds
              reach 24 km/h - don't underestimate them in a race!"
            </p>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="flex flex-col justify-center text-[#f9f7f7] py-10 px-4 lg:px-12 bg-[#ac2e24] "
      >
        <h3 className="font-display text-3xl font-bold justify-center mx-auto">
          About us
        </h3>
        <p className="text-xs py-6 font-mono justify-center mx-auto">
          Introducing the Chicken Counter! I created this fun website to help
          you keep track of the number of chickens you eat. Using simple inputs,
          you can log your chicken consumption. Whether you're a chicken lover
          or just curious about your poultry intake, the Chicken Counter is here
          to add up those delicious bites. So let's embark on this cluck-tastic
          journey together and see how many chickens we can count!
        </p>
      </div>
    </div>
  );
};

export default SecondFold;
