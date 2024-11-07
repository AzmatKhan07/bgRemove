import React, { useState } from "react";
import { assets } from "../assets/assets";

const Info = () => {
  const [silderPosition, SetSilderPosition] = useState(50);

  const handleSilderChange = (e) => {
    SetSilderPosition(e.target.value);
  };

  return (
    <div className="my-[200px]">
      <div className="container px-10 md:px-0">
        <h1 className="mb-12 md:md-20 text-4xl text-center font-bold text-gray-600">
          Remove Background With High <br className="hidden md:block" />
          Quality and Accuracy
        </h1>

        <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
          <img
            src={assets.image_w_bg}
            alt="bg"
            style={{ clipPath: `inset(0 ${100.2 - silderPosition}% 0 0)` }}
          />

          <img
            src={assets.image_wo_bg}
            className="absolute top-0 left-0 w-full h-full"
            alt="gb"
            style={{ clipPath: `inset(0 0 0 ${silderPosition}%)` }}
          />

          <input
            type="range"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-10 slider"
            min={0}
            max={100}
            value={silderPosition}
            onChange={handleSilderChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
