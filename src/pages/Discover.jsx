import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import PremiumCarRent from "../components/home/PremiumCarRent";
import AdventureSlider from "../components/home/AdventureSlider";
import DiscoverSectionTwo from "../components/discover/DiscoverSectionTwo";
import DiscoverSectionThree from "../components/discover/DiscoverSectionThree";

const Discover = () => {
  return (
    <>
      <PageHeader
        title={"Discover Automate"}
        banner={"/images/discover-bg.png"}
      />
      <AdventureSlider />
      <DiscoverSectionTwo />
      <DiscoverSectionThree />
      <PremiumCarRent />
    </>
  );
};

export default Discover;
