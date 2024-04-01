import faground from "../../assets/Group 327.svg";
import hearts from "../../assets/hearts 1.png";
import jigsaw from "../../assets/jigsaw 1.png";
 
const Premium = () => {
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
   <img  className="moving-image" src={faground} alt="" />

      <div className="hero-content text-gray-900 w-full">
        <div className=" w-full gap-16 flex flex-col lg:flex-row-reverse items-center align-middle">
      
          <div className="lg:w-1/2 w-full  ">
            <div className="">
              <h1 className=" font-bold text-5xl lg:py-8 py-2  ">









                  Premium <span className="text-orange-500"> Learning</span>
                  <br />
                  Experience
                </h1>
                <div className="flex">
                  <div className="flex items-center align-middle gap-4">
                    <div className="bg-purple-950 w-20 h-20 rounded-xl   align-middle">
                      <img className="p-4" src={hearts} alt="" />
                    </div>
                    <div className=" font-semibold text-gray-600">
                      <p>Easily Accessible</p>
                      <p>Learning Will fell Very Comfortable With open-it.</p>
                    </div>
                  </div>
                </div>{" "}
                <div className="flex pt-4">
                  <div className="flex items-center align-middle gap-4">
                    <div className="bg-purple-950 w-20 h-20 rounded-xl   align-middle">
                      <img className="p-4" src={jigsaw} alt="" />
                    </div>
                    <div className=" font-semibold text-gray-600">
                      <p>Online and smart support </p>
                      <p>
                        We launch our new web application and student portal for
                        open it students !
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full   p-4  ">
              <div className=""></div>
              <img
                className="rounded-lg"
                src="https://demo.edublink.co/wp-content/uploads/2023/06/about-26.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
