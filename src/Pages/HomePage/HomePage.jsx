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

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className=" container mx-auto overflow-hidden ">
        <HomeInfo />
        {/* <Featured/> */}
        <DealsAndOffers/>
        <Faculty />
        <CumpusLife />
        <Sectian />
        <OurAlumni />
<Subscribe/>
      </div>
    </div>
  );
};

export default HomePage;
