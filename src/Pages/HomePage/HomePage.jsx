import React from "react";
import Slider from "./Slider/Slider";
import HomeInfo from "./HomeInfo/HomeInfo";
import Faculty from "./Faculty/Faculty";
import CumpusLife from "./CumpusLife/CumpusLife";
import OurAlumni from "./OurAlumni/OurAlumni";

import Subscribe from "../../components/Homepage/Subscribe";
import Featured from "../../components/Homepage/Featured";
import DealsAndOffers from "../../components/Homepage/DealsAndOffers";
import HeroSection from "../../components/Homepage/HeroSection";
import Premium from "../../components/Homepage/Premium";
import CumpusLifesmall from "./CumpusLife/CumpusLifesmall";
import Book from "../../components/Homepage/book";
import Patnar from "../../components/Homepage/Patnar";

const HomePage = () => {
  return (
    <div className="">
   
      {/* <Slider /> */}
      <HeroSection />

      <div className="   mx-auto overflow-hidden ">
        <HomeInfo />
        <Featured />
        <Premium />
        <Book/>
        <Faculty />
        <Patnar/>
        <CumpusLifesmall />
        
        <OurAlumni />
        <Subscribe />
      </div>
    </div>
  );
};

export default HomePage;
