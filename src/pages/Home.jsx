import React from "react";
import Hero from "../components/home/Hero";
import Partners from "../components/home/Partners";
import OurFleet from "../components/home/OurFleet";
import BigCar from "../components/home/BigCar";
import HowItWorks from "../components/home/howitworks";

const Home = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <OurFleet />
      <BigCar />
      <HowItWorks />
    </div>
  );
};

export default Home;
