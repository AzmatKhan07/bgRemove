import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="container flex flex-col-reverse md:flex-row justify-center items-center gap-5 px-8 md:px-0 h-[70vh]">
      <div className="flex flex-col gap-4 flex-1">
        <h1 className="font-bold text-4xl md:text-6xl">
          Remove the <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
            Background
          </span>
          {""} from
          <br className="hidden md:block" />
          images for free.
        </h1>
        <p className="text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br className="hidden md:block" /> Lorem Ipsum has been the
          industry's standard dummy text ever.
        </p>

        <div className="">
          <input type="file" name="upload" id="upload1" hidden />
          <label
            className="inline-flex items-center justify-center gap-3 py-3 px-6 text-white bg-gradient-to-r from-sky-500 to-blue-700 rounded-full text-sm cursor-pointer hover:scale-105 transition-all"
            htmlFor="upload1"
          >
            <img
              className="w-5 h-5"
              src={assets.upload_btn_icon}
              alt="upload"
            />
            <span>Upload your image</span>
          </label>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img className="w-2/3" src={assets.header_img} alt="heroImage" />
      </div>
    </div>
  );
};

export default Hero;
