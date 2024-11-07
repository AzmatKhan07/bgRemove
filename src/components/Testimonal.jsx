import React from "react";
import { assets, testimonialsData } from "../assets/assets";

const Testimonal = () => {
  return (
    <div className="mb-[100px]">
      <div className="container px-10 md:px-0">
        <h1 className="mb-12 md:md-20 text-4xl text-center font-bold text-gray-600">
          Customer Testimonials
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonialsData.map((item, key) => (
            <div
              key={key}
              className="bg-white shadow-sm p-10 rounded-lg hover:scale-105 transition-all duration-500 border border-gray-500/20"
            >
              <p className="text-5xl font-serif">"</p>
              <p className="text-gray-600">{item.text}</p>

              <div className="mt-5 flex gap-3 items-center">
                <img
                  src={item.image}
                  alt="profile"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <p className="font-semibold">{item.author}</p>
                  <p className="text-gray-600 text-sm">{item.jobTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
