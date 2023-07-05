import React from "react";
import logo from "../assets/logo.png";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
  return (
    <nav className="flex flex-row justify-between shadow-lg shadow-[#fad0cd] rounded-lg items-center">
      <p className="font-display text-[#FA8072] text-2xl px-8 flex items-center py-4">
        Chick-O-Nomics
      </p>
      <div className="font-display text-[#FA8072] text-2xl px-8 flex items-center gap-4 ">
        <GitHubIcon />
        <p>About</p>
      </div>
    </nav>
  );
};

export default Header;
