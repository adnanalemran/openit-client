import { FaNodeJs } from "react-icons/fa";
import faground from "../../assets/Group 327.svg";
import hearts from "../../assets/books.png";
import jigsaw from "../../assets/jigsaw 1.png";
import book from "../../assets/smiling-feeling-positive-happy-young-asian-woman-freelancer-working-computer-home-attractive-businesswoman-studying-online-using-laptop-software-web-surfing-information-shopping_126277-1562.jpg";

const Book = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="hero min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        <img className="moving-image absolute inset-0 w-full h-full object-cover opacity-10" src={faground} alt="" />

        <div className="hero-content text-gray-900 w-full relative z-10">
          <div className="w-full gap-16 flex flex-col lg:flex-row items-center">
            {/* Content Section */}
            <div className="lg:w-1/2 w-full">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="font-bold text-4xl lg:text-6xl leading-tight">
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      প্রিমিয়াম
                    </span>{" "}
                    <span className="text-orange-500">শিক্ষা</span>
                    <br />
                    <span className="text-gray-800">বই এবং সম্পদ</span>
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    আমাদের বিশাল ডিজিটাল লাইব্রেরি এবং শিক্ষামূলক সম্পদে প্রবেশ করুন যা আপনার জ্ঞান বৃদ্ধিতে সহায়তা করবে
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex items-start gap-6 p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="bg-gradient-to-br from-green-600 to-green-800 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                      <img className="p-3 w-full h-full object-contain" src={hearts} alt="সহজ প্রবেশ" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl text-gray-800">সহজ প্রবেশ</h3>
                      <p className="text-gray-600 leading-relaxed">
                        ওপেন-আইটি এর সাথে শিক্ষা খুবই আরামদায়ক হবে। হাজার হাজার বই এবং শিক্ষামূলক সম্পদ আপনার আঙুলের ডগায়
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-start gap-6 p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                      <img className="p-3 w-full h-full object-contain" src={jigsaw} alt="অনলাইন সহায়তা" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl text-gray-800">অনলাইন এবং স্মার্ট সহায়তা</h3>
                      <p className="text-gray-600 leading-relaxed">
                        আমরা আমাদের নতুন ওয়েব অ্যাপ্লিকেশন এবং স্টুডেন্ট পোর্টাল চালু করেছি যা আপনার শিক্ষার অভিজ্ঞতাকে উন্নত করবে!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-4 rounded-xl border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-2">📚 ডিজিটাল লাইব্রেরি</h4>
                    <p className="text-sm text-gray-600">হাজার হাজার ই-বুক এবং রেফারেন্স ম্যাটেরিয়াল</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-xl border border-blue-200">
                    <h4 className="font-semibold text-blue-700 mb-2">🎥 ভিডিও টিউটোরিয়াল</h4>
                    <p className="text-sm text-gray-600">ইন্টারেক্টিভ ভিডিও লেসন এবং প্র্যাকটিক্যাল গাইড</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 rounded-xl border border-purple-200">
                    <h4 className="font-semibold text-purple-700 mb-2">📝 অ্যাসাইনমেন্ট</h4>
                    <p className="text-sm text-gray-600">প্রোগ্রেস ট্র্যাকিং এবং ফিডব্যাক সিস্টেম</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-4 rounded-xl border border-orange-200">
                    <h4 className="font-semibold text-orange-700 mb-2">👥 স্টাডি গ্রুপ</h4>
                    <p className="text-sm text-gray-600">সহপাঠীদের সাথে সহযোগিতা এবং আলোচনা</p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    সম্পদ দেখুন
                  </button>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 w-full p-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-2xl transform -rotate-3"></div>
                <img 
                  className="relative rounded-2xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500"
                  src={book} 
                  alt="প্রিমিয়াম শিক্ষা বই এবং সম্পদ" 
                />
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">📚</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">💡</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
