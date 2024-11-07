import React from "react";
import StepCard from "./StepCard";
import { assets } from "../assets/assets";

const Steps = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 px-10 md:px-0">
      <h1 className="text-4xl text-center font-bold text-gray-600">
        Steps to remove background <br className="hidden md:block" /> image in
        seconds
      </h1>

      <div className="container grid grid-cols-1 md:grid-cols-3 gap-10">
        <StepCard
          title="Upload image"
          text="This is a demo text, will replace it later.
This is a demo.."
          image={assets.upload_icon}
        />
        <StepCard
          title="Remove background"
          text="This is a demo text, will replace it later.
This is a demo.."
          image={assets.remove_bg_icon}
        />
        <StepCard
          title="Download image"
          text="This is a demo text, will replace it later.
This is a demo.."
          image={assets.download_icon}
        />
      </div>
    </div>
  );
};

export default Steps;
