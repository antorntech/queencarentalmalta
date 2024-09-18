import React from "react";
import Hero from "../components/home/Hero";
import Partners from "../components/home/Partners";
import OurFleet from "../components/home/OurFleet";
import BigCar from "../components/home/BigCar";
import WorksProcess from "../components/home/WorksProcess";
import AdventureSlider from "../components/home/AdventureSlider";

const Home = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <OurFleet />
      <BigCar />
      <WorksProcess />
      <AdventureSlider />
    </div>
  );
};

export default Home;
