import React from "react";
import { assets } from "../assets/assets";

const Tryout = () => {
  return (
    <div className="my-[100px]">
      <div className="container flex justify-center items-center flex-col gap-10">
        <h1 className="mb-12 md:md-20 text-4xl text-center font-bold text-gray-600">
          See the magic. Try now
        </h1>

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
    </div>
  );
};

export default Tryout;
