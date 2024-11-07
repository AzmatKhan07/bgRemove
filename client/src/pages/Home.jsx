import React from "react";
import Hero from "../components/Hero";
import Steps from "../components/Steps";
import Info from "../components/Info";
import Testimonal from "../components/Testimonal";
import Tryout from "../components/Tryout";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Steps />
      <Info />
      <Testimonal />
      <Tryout />
    </div>
  );
};
