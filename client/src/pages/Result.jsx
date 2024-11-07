import React from "react";
import { assets } from "../assets/assets";

export const Result = () => {
  return (
    <div className="container min-h-[75vh]">
      <div className="bg-white rounded-lg px-8 py-6 drop-shadow-sm">
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8">
          <div>
            <p className="font-semibold text-gray-600 mb-2">Original</p>
            <img className="rounded-md border" src={assets.image_w_bg} alt="" />
          </div>

          <div className="flex flex-col">
            <p className="font-semibold text-gray-600 mb-2">
              Background Removed
            </p>
            <div className="rounded-md border border-gray-300 mb-2 h-[100%] relative bg-layer overflow-hidden">
              <img src={assets.image_wo_bg} alt="" />

              {/* <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                <div className="border-4 border-sky-600 rounded-full h-12 w-12 border-t-transparent animate-spin"></div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end mt-4 gap-3 items-center">
          <button className="border border-blue-600 text-blue-600 py-3 px-7 rounded-full hover:scale-105 transition-all duration-300">
            Try another image
          </button>
          <button className="bg-gradient-to-r from-blue-600 to-sky-600 py-3 px-7 rounded-full text-white hover:scale-105 transition-all duration-300">
            Download image
          </button>
        </div>
      </div>
    </div>
  );
};
