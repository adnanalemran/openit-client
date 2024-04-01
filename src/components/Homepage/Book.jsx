import { FaNodeJs } from "react-icons/fa";
import faground from "../../assets/Group 327.svg";
import hearts from "../../assets/books.png";
import jigsaw from "../../assets/jigsaw 1.png";
import book from "../../assets/smiling-feeling-positive-happy-young-asian-woman-freelancer-working-computer-home-attractive-businesswoman-studying-online-using-laptop-software-web-surfing-information-shopping_126277-1562.jpg";

const Book = () => {
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
          <div className=" w-full gap-16 flex flex-col lg:flex-row items-center align-middle">
        
            <div className="lg:w-1/2 w-full  ">
              <div className="">
                <h1 className=" font-bold text-5xl lg:py-8 py-2  ">
                  Premium <span className="text-orange-500"> Learning</span>
                  <br />
                  Book And resource
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
                </div>   <div className="flex pt-4">
                  <div className="flex items-center align-middle gap-4">
                    <div className="bg-purple-950 w-20 h-20 rounded-xl   align-middle">
                      <img className="p-4" src={jigsaw} alt="" />
                     
                    </div>
                    <div className=" font-semibold text-gray-600">
                        <p>Online and smart support </p>
                        <p>We launch our new web application and student portal !</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full   p-4  ">
              <div className="">

              </div>
              <img className="rounded-lg" src={book} alt="" />

              
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
