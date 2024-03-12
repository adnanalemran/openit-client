import React from "react";
import Slider from "./Slider/Slider";
import HomeInfo from "./HomeInfo/HomeInfo";
import Faculty from "./Faculty/Faculty";
import CumpusLife from "./CumpusLife/CumpusLife";
import OurAlumni from "./OurAlumni/OurAlumni";
import Sectian from "./Sectian/Sectian";

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className=" max-w-7xl mx-auto overflow-hidden ">
        <HomeInfo />
        <Faculty />
        <CumpusLife />
        <Sectian />
        <OurAlumni />
      </div>
    </div>
  );
};

export default HomePage;
