import React from "react";
import BuyCard from "../components/BuyCard";
import { assets, plans } from "../assets/assets";

const BuyCredit = () => {
  return (
    <div className="mb-[100px]">
      <div className="container px-5 md:px-0">
        <div className="mb-[100px] text-center">
          <h3 className="inline-block py-3 px-7 border border-gray-300 text-gray-600 uppercase text-sm font-semibold rounded-full mb-3">
            Our Plans
          </h3>
          <h1 className="mb-12 md:md-20 text-4xl text-center font-bold text-gray-600">
            Choose the plan that’s right for you
          </h1>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-5">
          {/* <BuyCard
            name="Basic"
            details="Best for personal use."
            price="$10"
            credit="/ 100 credits"
          />
          <BuyCard
            name="Advanced"
            details="Best for Business use."
            price="$50"
            credit="/ 500 credits"
          />
          <BuyCard
            name="Business"
            details="Best for enterprise use."
            price="$250"
            credit="/ 5000 credits"
          /> */}

          {plans.map((plan, index) => (
            <BuyCard
              key={index}
              name={plan.id}
              details={plan.desc}
              price={"$" + plan.price}
              credit={"/" + plan.credits}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyCredit;
