import HomeInfo from "./HomeInfo/HomeInfo";
import Faculty from "./Faculty/Faculty";



import Subscribe from "../../components/Homepage/Subscribe";
import Featured from "../../components/Homepage/Featured";

import HeroSection from "../../components/Homepage/HeroSection";
import Premium from "../../components/Homepage/Premium";

import Book from "../../components/Homepage/Book";
import Patnar from "../../components/Homepage/Patnar";

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />

      <div className=" mx-auto overflow-hidden ">
        <HomeInfo />
        <Featured />

        <Premium />
        <Book />
        <Faculty />
        <Patnar />


        <Subscribe />
      </div>
    </div>
  );
};

export default HomePage;
