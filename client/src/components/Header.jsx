import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex flex-row justify-between border-b mb-6 border-[#7E7E7E] w-[70%] mx-auto items-center">
      <Link to="/">
        <p className="font-display text-[#1b1b1b1] text-lg lg:text-2xl px-3 lg:px-8 flex items-center py-4">
          Chick-O-Nomics
        </p>
      </Link>
      <div className="font-display text-[#1b1b1b] text-lg lg:text-2xl px-3 lg:px-8 flex items-center gap-4 ">
        <a href="#">
          <GitHubIcon />
        </a>
        <a href="/#about">
          <p>About</p>
        </a>
      </div>
    </nav>
  );
};

export default Header;
