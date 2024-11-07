import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="py-3">
      <div className="container flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link to="/">
            <img className="w-32 sm:w-44" src={assets.logo} alt="logo" />
          </Link>
          <p className="hidden md:block">|</p>
          <p className="text-gray-600 text-sm">
            Copyright @AzmatGraphic & Softs | All right reserved.
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <a href="#">
            <img className="w-10" src={assets.facebook_icon} alt="icon" />
          </a>
          <a href="#">
            <img className="w-10" src={assets.twitter_icon} alt="icon" />
          </a>
          <a href="#">
            <img className="w-10" src={assets.google_plus_icon} alt="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
