import React from "react";
import Slider from "./Slider/Slider";
import HomeInfo from "./HomeInfo/HomeInfo";
import Faculty from "./Faculty/Faculty";
import CumpusLife from "./CumpusLife/CumpusLife";
import OurAlumni from "./OurAlumni/OurAlumni";
import Sectian from "./Sectian/Sectian";
import Subscribe from "../../components/Homepage/Subscribe";
import Featured from "../../components/Homepage/Featured";
import DealsAndOffers from "../../components/Homepage/DealsAndOffers";
import HeroSection from "../../components/Homepage/HeroSection";
import Premium from "../../components/Homepage/Premium";

const HomePage = () => {
  return (
    <div className="">
      {/* <Slider /> */}
      <HeroSection />

      <div className=" container mx-auto overflow-hidden ">
        <HomeInfo />

        <Featured/>
        <Premium/>
        <DealsAndOffers />
        <Faculty />
        <CumpusLife />
        <Sectian />
        <OurAlumni />
        <Subscribe />
      </div>
    </div>
  );
};

export default HomePage;
