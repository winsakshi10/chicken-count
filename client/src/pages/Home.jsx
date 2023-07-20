import React from "react";
import FirstSection from "../components/FirstSection";
import SecondFold from "../components/SecondFold";
import newbg from "../assets/newbg.png";

import Footer from "../components/Footer";

import ThirdFold from "../components/ThirdFold";

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${newbg})`,
    backgroundSize: "38rem",
    backgroundRepeat: "repeat",
    backgroundAttachment: "fixed",
  };

  return (
    <div className="bg-center bg-contain " style={backgroundStyle}>
      <FirstSection />
      <ThirdFold />
      <SecondFold />
    </div>
  );
};

export default Home;
