import faground from "../../assets/Group 327.svg";
import image from "../../assets/OBJECTS.svg";
import { TypeAnimation } from "react-type-animation";
import "./HeroSection.css"; // Import CSS file for custom styles
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div>
      <div className="hero min-h-screen overflow-hidden">
        <img className="moving-image" src={faground} alt="" />

        <div className="hero-content text-gray-900 w-full">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="lg:w-1/2 w-full pt-12">
              <div className="">
                <h1 className="font-bold text-5xl lg:py-4 pb-4 pt-36">
                  The <span className="text-orange-500"> Smart</span>
                  <br />
                  <TypeAnimation
                    sequence={[
                      " Choice For Future...",
                      1000,
                      " Choice open-it Institute",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ display: "inline-block" }}
                    repeat={Infinity}
                  />
                  <br />
                </h1>

                <p className="text-gray-400 font-semibold">
                  Open IT is a leading BTEB training provider operating
                  throughout Bangladesh, specializing in professional and
                  customized training courses. We excel in delivering tailored
                  solutions that meet the diverse needs of our clients, ensuring
                  their success in the dynamic world of technology.
                </p>
                <div className="flex justify-end py-16 pr-7">
                  <Link to="/dashboard">
                    <button className="px-8 py-3 font-semibold rounded-full btn bg-slate-300 flex items-center">
                      Explore dashboard
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full image-container">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
