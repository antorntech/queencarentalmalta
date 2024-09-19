import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import PremiumCarRent from "../components/home/PremiumCarRent";
import AdventureSlider from "../components/home/AdventureSlider";
import DiscoverSectionTwo from "../components/discover/DiscoverSectionTwo";
import DiscoverSectionThree from "../components/discover/DiscoverSectionThree";
import Faq from "../components/faq/Faq";

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
      <Faq />
      <PremiumCarRent />
    </>
  );
};

export default Discover;
