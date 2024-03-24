import faground from "../../assets/Group 327.svg";
import image from "../../assets/OBJECTS.svg";
const HeroSection = () => {
  return (
    <div>
      <div
        className="hero min-h-screen    "
        style={
          {
            //   backgroundImage: `url(${faground})`,
          }
        }
      >
        <img src={faground} alt="" />

        <div className="hero-content   text-gray-900 w-full">
          <div className=" w-full flex flex-col lg:flex-row">
            <div className="lg:w-1/2 w-full">
              <div className="">
                <h1 className="text-5xl font-bold lg:py-4  pb-4 pt-32 ">The <span className="text-orange-500"> Smart</span>
                <br /> Choice For <span className="text-orange-500"> Future</span></h1>
                <p className="text-gray-500 font-semibold">Open IT is a leading BTEB training provider operating throughout Bangladesh, specializing in professional and customized training courses. We excel in delivering tailored solutions that meet the diverse needs of our clients, ensuring their success in the dynamic world of technology.</p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full  ">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
