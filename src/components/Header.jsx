import React from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

export const Header = () => {
  return (
    <header className="py-5 px-5 md:px-0">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <img className="w-32 sm:w-44" src={assets.logo} alt="" />
        </Link>
        <button className="bg-black text-white py-3 px-6 flex items-center justify-center rounded-full gap-3 text-sm">
          Get Started
          <img className="w-4 h-4" src={assets.arrow_icon} alt="icon" />
        </button>
      </div>
    </header>
  );
};
