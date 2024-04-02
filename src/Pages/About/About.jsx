import bannar from "../../assets/tablet-white.png";
import adnan from "../../assets/adnan.jfif";

import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
const About = () => {
  return (
    <div className="pt-16 overflow-hidden">
      <div className="grid max-w-screen-2xl grid-cols-1  gap-8 px-8 py-16 mx-auto my-4 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-base-200 rounded-lg">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
          <h2 className="text-xl font-bold leading-tight lg:text-5xl">
              Open IT Institute
            </h2>
            <div className=" text-gray-600  ">Version:1.0.0 </div>
          
          </div>
          <div className=" my-4 w-full  shadow border-warning border rounded-lg">
            <div className="card-body">
              <h2 className="card-title">What is new ! 1.0.0 </h2>
              <div className=" text-gray-600  ">Date: 02-04-2024 </div>
              <ul className="list-disc px-4">
                <li>Full website brand new design </li>
                <li>Admin portal </li>
                <li>Student portal </li>
                <li>Optimized and improved </li>
              </ul>
            </div>
            <figure>
              <img className="p-4 " src={bannar} alt="Open it" />
            </figure>
          </div>
        </div>
        <div className="flex flex-col  ">
          <div className="space-y-2 pb-8">
            <h2 className="text-xl font-bold leading-tight lg:text-5xl">
            Developer Information  
            </h2>
          </div>
          <div className=" my-4 w-full   border-warning border rounded-lg">
            <div className="flex flex-col justify-center  p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
              <img
                src={adnan}
                alt=""
                className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
              />
              <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                <div className="my-2 space-y-1">
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    Adnan al-emran
                  </h2>
                  <p className="px-5 text-xs sm:text-base dark:text-gray-600">
                    BSc in CSE, Green University of Bangladesh
                  </p>
                </div>
                <div className="flex justify-center pt-2 space-x-4 align-center">
                  contact info:
                </div>
                <div className="flex justify-center pt-2 space-x-4 align-center">
                  <a
                    href="tel:+8801917019619"
                    className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                  >
                    <FaPhoneAlt />
                  </a>
                  <a
                    href="mailto:adnanalemranontor@gmail.com"
                    className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                  >
                    <FiMail />
                  </a>

                  <a
                    href="https://bd.linkedin.com/in/adnanalemran"
                    className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/adnanalemran"
                    className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
