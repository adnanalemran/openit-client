import { FaEnvelope, FaArrowRight, FaBell, FaCheckCircle } from "react-icons/fa";

const Subscribe = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Illustration */}
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              {/* Modern illustration placeholder */}
              <div className="relative mx-auto max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto">
                      <FaBell className="text-white text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">আপডেট থাকুন</h3>
                    <p className="text-gray-600">সর্বশেষ আপডেট এবং বিশেষ অফার পান</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-1/2 w-full">
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                  <FaEnvelope className="text-orange-500" />
                  <span>নিউজলেটার</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  আমাদের{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    নিউজলেটারে সাবস্ক্রাইব করুন!
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  আমাদের সর্বশেষ কোর্স, বিশেষ অফার এবং শিক্ষামূলক অন্তর্দৃষ্টি নিয়ে আপডেট থাকুন। 
                  হাজার হাজার শিক্ষার্থী আমাদের সাথে তাদের পেশাদার উন্নয়নের জন্য বিশ্বাস করে।
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                  <span className="text-gray-700">নতুন কোর্সে আগাম প্রবেশাধিকার পান</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                  <span className="text-gray-700">বিশেষ ছাড় এবং অফার</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                  <span className="text-gray-700">সাপ্তাহিক শিক্ষামূলক কনটেন্ট</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                  <span className="text-gray-700">ক্যারিয়ার পরামর্শ এবং টিপস</span>
                </div>
              </div>

              {/* Subscribe Form */}
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="আপনার ইমেইল ঠিকানা লিখুন"
                    className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300 pr-32"
                  />
                  <button className="absolute right-2 top-2 px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    সাবস্ক্রাইব
                    <FaArrowRight className="text-sm" />
                  </button>
                </div>
                <p className="text-sm text-gray-500">
                  আমরা আপনার গোপনীয়তা সম্মান করি। যেকোনো সময় সাবস্ক্রিপশন বাতিল করতে পারেন।
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">১০K+</div>
                  <div className="text-gray-600 text-sm">সাবস্ক্রাইবার</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">৯৯%</div>
                  <div className="text-gray-600 text-sm">সন্তুষ্টি</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">২৪/৭</div>
                  <div className="text-gray-600 text-sm">সহায়তা</div>
                </div>
              </div>

              {/* Additional Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-4 rounded-xl border border-orange-200">
                  <h4 className="font-semibold text-orange-700 mb-2">🎯 ব্যক্তিগতকৃত কনটেন্ট</h4>
                  <p className="text-sm text-gray-600">আপনার আগ্রহ অনুযায়ী কাস্টমাইজড আপডেট</p>
                </div>
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-xl border border-blue-200">
                  <h4 className="font-semibold text-blue-700 mb-2">📱 মোবাইল ফ্রেন্ডলি</h4>
                  <p className="text-sm text-gray-600">যেকোনো ডিভাইস থেকে সহজে অ্যাক্সেস</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
