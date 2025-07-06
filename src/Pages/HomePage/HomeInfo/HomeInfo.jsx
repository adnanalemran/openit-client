import Notice from "./Notice";
import { FaQuoteLeft, FaQuoteRight, FaSignature, FaAward, FaGraduationCap, FaUsers, FaRocket } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const HomeInfo = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MdSchool className="text-orange-500" />
            <span>নেতৃত্বের বার্তা</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            প্রতিষ্ঠানের প্রধান কর্তৃক{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">বার্তা</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            আমাদের প্রতিষ্ঠাতার কাছ থেকে সরাসরি আমাদের দৃষ্টিভঙ্গি, মিশন এবং উৎকর্ষতার প্রতিশ্রুতি সম্পর্কে জানুন
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left: Notice Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  <FaRocket className="text-blue-500" />
                  <span>সর্বশেষ আপডেট</span>
                </div>
              </div>
              <Notice />
            </div>
          </div>

          {/* Right: Message Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-red-100 rounded-full transform translate-x-16 -translate-y-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full transform -translate-x-12 translate-y-12 opacity-50"></div>
              
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-orange-200">
                <FaQuoteLeft className="text-6xl" />
              </div>
              
              <div className="relative z-10">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 italic font-medium">
                    "পৃথিবীর প্রতি ব্যক্তি নিজেকে বেঁচে থাকে, আমি ও তাই। কেবল নিজের
                    জন্য জীবন যাপন করতে মানুষত্ব নেই, মানুষ হওয়ার সার্থকতা হলো
                    অন্যদের উদ্ধার করা!"
                  </p>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    আমি তৈরি আছি যাতে আবিষ্কৃত হয় যা মেয়াদ শেষে দুঃখ এবং কঠিনাইতে পড়ার অর্থ থাকে। 
                    "ওপেন আইটি ইনস্টিটিউট" একটি আধুনিক কম্পিউটার প্রশিক্ষণ কেন্দ্র। 
                    এটি "বাংলাদেশ টেকনিক্যাল এজুকেশন বোর্ড" এর সংলগ্ন।
                  </p>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    আমরা মনে করি এই সাফল্যের কারণ হলো আমাদের লক্ষ্য-উদ্দেশ্য এবং সবার সহযোগিতা। 
                    আমাদের লক্ষ্য-উদ্দেশ্য হলো সমস্ত মানুষকে তথ্য এবং যোগাযোগ প্রযুক্তি সম্পর্কে জানানো।
                  </p>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">এটা করার জন্য আমাদের পক্ষ থেকে ধাপসমূহ:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                          ১
                        </div>
                        <span className="text-gray-700">অভিজ্ঞ প্রশিক্ষক</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                          ২
                        </div>
                        <span className="text-gray-700">ডিজিটাল কম্পিউটার ল্যাব এবং ক্লাসরুম</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                          ৩
                        </div>
                        <span className="text-gray-700">কোর্সের শেষে: একবারের বৃত্তি, একবারের ঋণ সুবিধা, বিনামূল্যে অধিক কোর্স সুবিধা এবং বিটেবি সার্টিফিকেট প্রদান</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                          ৪
                        </div>
                        <span className="text-gray-700">২৪ ঘণ্টা বিদ্যুৎ সরবরাহ এবং ইন্টারনেট অ্যাক্সেস সহ</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    তাই আমরা আপনাকে ভর্তি হওয়ার আগে আমাদের ইনস্টিটিউট দেখতে আমন্ত্রিত করছি। ধন্যবাদ।
                  </p>
                </div>
                
                {/* Signature Section */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 gap-6">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full ring-4 ring-orange-200 overflow-hidden">
                        <img 
                          src="https://i.ibb.co/s5RQDc5/nur.jpg" 
                          alt="মোঃ নুরুজ্জামান"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                        <FaAward className="text-white text-xs" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-xl text-gray-900">মোঃ নুরুজ্জামান</div>
                      <div className="text-orange-600 font-semibold">প্রতিষ্ঠাতা ও প্রধান নির্বাহী</div>
                      <div className="text-gray-600 text-sm">ওপেন আইটি ইনস্টিটিউট</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <FaSignature className="text-white text-2xl" />
                    </div>
                    <div className="text-right text-orange-200">
                      <FaQuoteRight className="text-4xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Vision & Mission Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <FaRocket className="text-orange-200" />
                  আমাদের দৃষ্টিভঙ্গি
                </h4>
                <p className="text-orange-100">
                  বাংলাদেশের শীর্ষস্থানীয় প্রযুক্তি শিক্ষা প্রতিষ্ঠান হওয়া, 
                  আধুনিক কম্পিউটার দক্ষতা এবং পেশাদার উৎকর্ষতার মাধ্যমে শিক্ষার্থীদের ক্ষমতায়ন করা।
                </p>
              </div>
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <FaGraduationCap className="text-red-200" />
                  আমাদের মিশন
                </h4>
                <p className="text-red-100">
                  অভিজ্ঞ প্রশিক্ষক, আধুনিক সুবিধা এবং শিল্প-স্বীকৃত সনদপত্রের মাধ্যমে 
                  ব্যাপক কম্পিউটার প্রশিক্ষণ প্রদান করা।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
