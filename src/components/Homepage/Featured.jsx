import { Link } from "react-router-dom";
import gpdesign from "../../assets/1_uw8prVHOb4-8rE5EM_JYjg.jpg";
import mran from "../../assets/MERN-Stack-Development.png";
import office from "../../assets/office_application.jpg";
import { FaClock, FaPlay, FaStar, FaArrowRight } from "react-icons/fa";

const Featured = () => {
  const courses = [
    {
      id: 1,
      title: "অফিস অ্যাপ্লিকেশন",
      image: office,
      price: "৫০০০ টাকা",
      duration: "২০০ ঘণ্টা ৩০ মিনিট",
      classes: "৫০টি ক্লাস",
      sales: "২৫টি বিক্রয়",
      rating: 5,
      category: "অফিস দক্ষতা"
    },
    {
      id: 2,
      title: "গ্রাফিক ডিজাইন",
      image: gpdesign,
      price: "৬০০০ টাকা",
      duration: "১৮০ ঘণ্টা ৪৫ মিনিট",
      classes: "৪৫টি ক্লাস",
      sales: "৩০টি বিক্রয়",
      rating: 4,
      category: "ডিজাইন"
    },
    {
      id: 3,
      title: "মার্ন স্ট্যাক ডেভেলপমেন্ট",
      image: mran,
      price: "৮০০০ টাকা",
      duration: "২৫০ ঘণ্টা ১৫ মিনিট",
      classes: "৬০টি ক্লাস",
      sales: "২০টি বিক্রয়",
      rating: 5,
      category: "ওয়েব ডেভেলপমেন্ট"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaStar className="text-orange-500" />
            <span>বৈশিষ্ট্যযুক্ত কোর্স</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            আমাদের ট্র্যাক এবং কোর্স
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            আমাদের সাথে আপনার ইচ্ছার তালিকা থেকে আদর্শ কোর্স আবিষ্কার করুন! 
            আপনার সাফল্যের জন্য বিশেষজ্ঞ-নেতৃত্বাধীন প্রশিক্ষণ।
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                {/* Course Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {course.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <FaPlay className="text-orange-500 text-sm" />
                    </div>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {course.title}
                  </h3>
                  
                  {/* Course Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FaClock className="text-orange-500" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {course.classes}
                    </div>
                  </div>

                  {/* Price and Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-orange-600">
                      {course.price}
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-sm ${
                            i < course.rating ? "text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Sales Info */}
                  <div className="text-sm text-gray-500 mb-6">
                    {course.sales}
                  </div>

                  {/* CTA Button */}
                  <Link to="/signUp">
                    <button className="w-full group/btn px-6 py-3 font-semibold rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                      কোর্সে যোগ দিন
                      <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center mt-12">
          <Link to="/courses">
            <button className="px-8 py-4 font-semibold rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
              সব কোর্স দেখুন
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
