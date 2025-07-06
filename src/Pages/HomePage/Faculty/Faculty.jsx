import { useEffect, useState } from "react";
import { 
  FaPhone, 
  FaUser, 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaStar, 
  FaGraduationCap, 
  FaAward,
  FaArrowRight,
  FaUsers,
  FaCode,
  FaLightbulb
} from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";
import { MdSchool, MdComputer, MdBusinessCenter } from "react-icons/md";

const Faculty = () => {
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/faculty.json")
      .then((res) => res.json())
      .then((data) => {
        setFaculty(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading faculty data:", error);
        setLoading(false);
      });
  }, []);

  // Function to get expertise based on designation
  const getExpertise = (designation, profession) => {
    const text = (designation + " " + profession).toLowerCase();
    if (text.includes("office") || text.includes("application")) return "অফিস অ্যাপ্লিকেশন";
    if (text.includes("web") || text.includes("development")) return "ওয়েব ডেভেলপমেন্ট";
    if (text.includes("graphic") || text.includes("design")) return "গ্রাফিক ডিজাইন";
    if (text.includes("programming") || text.includes("coding")) return "প্রোগ্রামিং";
    if (text.includes("ceo") || text.includes("entrepreneur")) return "নেতৃত্ব ও ব্যবস্থাপনা";
    return "কম্পিউটার বিজ্ঞান";
  };

  // Function to get experience level
  const getExperienceLevel = (designation) => {
    if (designation?.toLowerCase().includes("ceo")) return "১০+ বছর";
    if (designation?.toLowerCase().includes("executive")) return "৫+ বছর";
    if (designation?.toLowerCase().includes("instructor")) return "৩+ বছর";
    return "২+ বছর";
  };

  if (loading) {
    return (
      <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <FaUsers className="text-orange-500" />
              <span>আমাদের দল</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              আমাদের <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">মেন্টর</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              আপনার সাফল্যের জন্য নিবেদিত আমাদের অভিজ্ঞ মেন্টরদের সাথে পরিচিত হন
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaUsers className="text-orange-500" />
            <span>আমাদের দল</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            আমাদের <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">বিশেষজ্ঞ মেন্টরদের</span> সাথে পরিচিত হন
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            প্রযুক্তি শিক্ষায় বছরের পর বছর অভিজ্ঞতা সম্পন্ন শিল্প বিশেষজ্ঞদের কাছ থেকে শিখুন। 
            আমাদের মেন্টররা আপনার কর্মজীবনের লক্ষ্য অর্জনে সাহায্য করতে নিবেদিত।
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaGraduationCap className="text-orange-500 text-2xl" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{faculty.length}</div>
            <div className="text-gray-600">বিশেষজ্ঞ মেন্টর</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCode className="text-blue-500 text-2xl" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">১৫+</div>
            <div className="text-gray-600">বছরের সম্মিলিত অভিজ্ঞতা</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaStar className="text-green-500 text-2xl" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">৫০০+</div>
            <div className="text-gray-600">মেন্টরকৃত শিক্ষার্থী</div>
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((mentor) => (
            <div key={mentor.id} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                {/* Mentor Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={mentor.photoUrl}
                    alt={mentor.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Expertise Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {getExpertise(mentor.designation, mentor.profession)}
                    </span>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                      {getExperienceLevel(mentor.designation)}
                    </span>
                  </div>

                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex justify-center gap-2">
                      <a
                        href={`mailto:${mentor.email}`}
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                      >
                        <FaEnvelope className="text-sm" />
                      </a>
                      <a
                        href={`tel:${mentor.mobileNo}`}
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors"
                      >
                        <FaPhone className="text-sm" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mentor Info */}
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {mentor.name}
                    </h3>
                    <p className="text-orange-600 font-semibold mb-1">
                      {mentor.designation}
                    </p>
                    <p className="text-gray-600 text-sm mb-3">
                      {mentor.profession}
                    </p>
                  </div>

                  {/* About Section */}
                  <div className="mb-4">
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                      {mentor.about}
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FaEnvelope className="text-orange-500" />
                      <a 
                        href={`mailto:${mentor.email}`}
                        className="hover:text-orange-600 transition-colors"
                      >
                        {mentor.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FaPhone className="text-green-500" />
                      <a 
                        href={`tel:${mentor.mobileNo}`}
                        className="hover:text-green-600 transition-colors"
                      >
                        {mentor.mobileNo}
                      </a>
                    </div>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                      {getExpertise(mentor.designation, mentor.profession)}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {getExperienceLevel(mentor.designation)} অভিজ্ঞতা
                    </span>
                  </div>

                  {/* View Profile Button */}
                  <button className="w-full group/btn px-4 py-3 font-semibold rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                    <span>প্রোফাইল দেখুন</span>
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                সেরাদের কাছ থেকে শিখতে প্রস্তুত?
              </h3>
              <p className="text-orange-100 text-lg mb-6">
                আমাদের কোর্সে যোগ দিন এবং আপনার সাফল্যের প্রতি আগ্রহী শিল্প বিশেষজ্ঞদের কাছ থেকে মেন্টরশিপ পান।
              </p>
              <button className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
                <FaLightbulb className="text-orange-500" />
                <span>আজই শিখতে শুরু করুন</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
