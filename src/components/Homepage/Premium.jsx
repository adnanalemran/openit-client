import faground from "../../assets/Group 327.svg";
import hearts from "../../assets/hearts 1.png";
import jigsaw from "../../assets/jigsaw 1.png";
 
const Premium = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="hero min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <img className="moving-image absolute inset-0 w-full h-full object-cover opacity-10" src={faground} alt="" />

        <div className="hero-content text-gray-900 w-full relative z-10">
          <div className="w-full gap-16 flex flex-col lg:flex-row-reverse items-center">
            {/* Content Section */}
            <div className="lg:w-1/2 w-full">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="font-bold text-4xl lg:text-6xl leading-tight">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      প্রিমিয়াম
                    </span>{" "}
                    <span className="text-orange-500">শিক্ষা</span>
                    <br />
                    <span className="text-gray-800">অভিজ্ঞতা</span>
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    আমাদের আধুনিক শিক্ষা প্ল্যাটফর্মে অভিজ্ঞতা করুন যা আপনার শিক্ষার যাত্রাকে আরও সহজ এবং কার্যকর করে তোলে
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex items-start gap-6 p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="bg-gradient-to-br from-purple-600 to-purple-800 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                      <img className="p-3 w-full h-full object-contain" src={hearts} alt="সহজ প্রবেশ" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl text-gray-800">সহজ প্রবেশ</h3>
                      <p className="text-gray-600 leading-relaxed">
                        ওপেন-আইটি এর সাথে শিক্ষা খুবই আরামদায়ক হবে। যেকোনো সময়, যেকোনো জায়গা থেকে আপনার কোর্সে প্রবেশ করুন
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
                        আমরা ওপেন-আইটি শিক্ষার্থীদের জন্য আমাদের নতুন ওয়েব অ্যাপ্লিকেশন এবং স্টুডেন্ট পোর্টাল চালু করেছি!
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    এখনই শুরু করুন
                  </button>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 w-full p-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl transform rotate-3"></div>
                <img
                  className="relative rounded-2xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500"
                  src="https://demo.edublink.co/wp-content/uploads/2023/06/about-26.webp"
                  alt="প্রিমিয়াম শিক্ষা অভিজ্ঞতা"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
