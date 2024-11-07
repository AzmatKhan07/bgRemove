import React from "react";
import { assets } from "../assets/assets";

const StepCard = (props) => {
  return (
    <div className="bg-white shadow-lg p-8 rounded-lg flex justify-center gap-4 hover:scale-105 transition-all duration-300 border border-gray-200">
      <div>
        <img src={props.image} alt="upload" />
      </div>

      <div>
        <h5 className="text-xl font-semibold">{props.title}</h5>
        <p className="text-gray-600">{props.text}</p>
      </div>
    </div>
  );
};

export default StepCard;
