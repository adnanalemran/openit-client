import faground from "../../assets/Group 327.svg";
import image from "../../assets/OBJECTS.svg";
import { TypeAnimation } from "react-type-animation";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPlay, FaUsers, FaGraduationCap, FaStar } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="hero min-h-screen relative z-10">
        <img className="moving-image absolute top-10 right-10 opacity-20" src={faground} alt="" />

        <div className="hero-content text-gray-900 w-full max-w-7xl mx-auto px-4">
          <div className="w-full flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2 w-full pt-12">
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                  <FaStar className="text-orange-500" />
                  <span>শীর্ষস্থানীয় বিটিইবি প্রশিক্ষণ প্রদানকারী</span>
                </div>

                {/* Main Heading */}
                <h1 className="font-bold text-5xl lg:text-6xl lg:leading-tight">
                  ভবিষ্যতের{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    স্মার্ট
                  </span>
                  <br />
                  <TypeAnimation
                    sequence={[
                      "পছন্দ...",
                      2000,
                      "পছন্দ ওপেন-আইটি ইনস্টিটিউট",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    style={{ display: "inline-block" }}
                    repeat={Infinity}
                  />
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                  ওপেন আইটি বাংলাদেশের একটি শীর্ষস্থানীয় বিটিইবি প্রশিক্ষণ প্রদানকারী প্রতিষ্ঠান, 
                  যা পেশাদার এবং কাস্টমাইজড প্রশিক্ষণ কোর্সে বিশেষজ্ঞ। আমরা আমাদের ক্লায়েন্টদের 
                  বিভিন্ন চাহিদা পূরণের জন্য উপযুক্ত সমাধান প্রদানে দক্ষ।
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-8 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <FaUsers className="text-orange-500 text-xl" />
                    </div>
                    <div>
                      <div className="font-bold text-2xl text-gray-900">৫০০+</div>
                      <div className="text-gray-600 text-sm">শিক্ষার্থী</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <FaGraduationCap className="text-blue-500 text-xl" />
                    </div>
                    <div>
                      <div className="font-bold text-2xl text-gray-900">৫০+</div>
                      <div className="text-gray-600 text-sm">কোর্স</div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/dashboard">
                    <button className="group px-8 py-4 font-semibold rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                      ড্যাশবোর্ড দেখুন
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  <button className="px-8 py-4 font-semibold rounded-full border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    <FaPlay className="text-sm" />
                    ডেমো দেখুন
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 w-full image-container">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl transform rotate-6 opacity-20"></div>
                <img 
                  src={image} 
                  alt="শিক্ষা চিত্র" 
                  className="relative z-10 transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
