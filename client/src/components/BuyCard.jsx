import React from "react";
import { assets } from "../assets/assets";

const BuyCard = (props) => {
  return (
    <div className="bg-white border border-gray-300 p-14 rounded-lg">
      <img className="w-12 mb-5" src={assets.logo_icon} alt="icon" />

      <h2 className="font-bold text-2xl text-gray-600">{props.name}</h2>
      <p className="text-gray-500 mb-6">{props.details}</p>
      <p className="font-bold text-4xl mb-4">
        {props.price}
        <span className="text-lg text-gray-600 font-normal">
          {props.credit}
        </span>
      </p>

      <button className="mt-6 block w-full bg-gray-900 text-white py-3 px-7 rounded-lg transition-all duration-300 hover:scale-105">
        Purchase
      </button>
    </div>
  );
};

export default BuyCard;
