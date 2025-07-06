import bannar from "../../assets/tablet-white.png";
import adnan from "../../assets/adnan.jfif";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaGraduationCap, FaCode, FaRocket, FaUsers, FaAward, FaLightbulb, FaHeart, FaStar, FaCheckCircle, FaArrowRight, FaPhone } from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";
import { MdSchool, MdComputer, MdSecurity } from "react-icons/md";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // Add fade-in animation on mount
    document.body.classList.add("about-fade-in");
    return () => document.body.classList.remove("about-fade-in");
  }, []);

  const features = [
    {
      icon: FaGraduationCap,
      title: "পেশাদার প্রশিক্ষণ",
      description: "বিশেষজ্ঞ প্রশিক্ষকদের দ্বারা পরিচালিত উচ্চমানের কোর্স"
    },
    {
      icon: FaUsers,
      title: "ব্যক্তিগতকৃত শিক্ষা",
      description: "প্রতিটি শিক্ষার্থীর চাহিদা অনুযায়ী কাস্টমাইজড প্রোগ্রাম"
    },
    {
      icon: FaAward,
      title: "সনদপত্র",
      description: "বিটিইবি অনুমোদিত সনদপত্র এবং আন্তর্জাতিক স্বীকৃতি"
    },
    {
      icon: FaLightbulb,
      title: "নবীন প্রযুক্তি",
      description: "সর্বশেষ প্রযুক্তি এবং ট্রেন্ড অনুসরণ করে আপডেটেড কোর্স"
    }
  ];

  const achievements = [
    { number: "৫০০+", label: "সফল শিক্ষার্থী" },
    { number: "৫০+", label: "বিভিন্ন কোর্স" },
    { number: "৯৫%", label: "সন্তুষ্টি হার" },
    { number: "১০+", label: "বছরের অভিজ্ঞতা" }
  ];

  const team = [
    {
      name: "আদনান আল-ইমরান",
      role: "প্রধান প্রশিক্ষক",
      expertise: "ওয়েব ডেভেলপমেন্ট",
      experience: "৫+ বছর"
    },
    {
      name: "রাহুল আহমেদ",
      role: "গ্রাফিক ডিজাইন বিশেষজ্ঞ",
      expertise: "ডিজাইন ও মাল্টিমিডিয়া",
      experience: "৪+ বছর"
    },
    {
      name: "ফাতিমা খান",
      role: "অফিস অ্যাপ্লিকেশন প্রশিক্ষক",
      expertise: "মাইক্রোসফট অফিস",
      experience: "৩+ বছর"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden fade-in-section">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FaStar className="text-orange-500" />
            <span>আমাদের সম্পর্কে</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            ভবিষ্যতের জন্য{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              স্মার্ট শিক্ষা
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ওপেন আইটি বাংলাদেশের একটি শীর্ষস্থানীয় বিটিইবি প্রশিক্ষণ প্রদানকারী প্রতিষ্ঠান। 
            আমরা আমাদের শিক্ষার্থীদের ভবিষ্যতের চ্যালেঞ্জ মোকাবেলার জন্য প্রস্তুত করতে প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="h-1 bg-gradient-to-r from-orange-200 via-orange-400 to-red-200 rounded-full my-12 opacity-60"></div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 fade-in-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  আমাদের মিশন ও ভিশন
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  আমরা বিশ্বাস করি যে প্রতিটি ব্যক্তিরই সফল হওয়ার অধিকার রয়েছে। 
                  আমাদের মিশন হল উচ্চমানের শিক্ষা প্রদানের মাধ্যমে শিক্ষার্থীদের 
                  তাদের স্বপ্ন পূরণে সাহায্য করা।
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaLightbulb className="text-orange-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">আমাদের মিশন</h3>
                    <p className="text-gray-600">
                      উচ্চমানের প্রযুক্তি শিক্ষা প্রদানের মাধ্যমে শিক্ষার্থীদের 
                      কর্মজীবনে সফল হওয়ার জন্য প্রস্তুত করা।
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaRocket className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">আমাদের ভিশন</h3>
                    <p className="text-gray-600">
                      বাংলাদেশের শীর্ষস্থানীয় প্রযুক্তি প্রশিক্ষণ প্রতিষ্ঠান হিসেবে 
                      স্বীকৃতি লাভ করা এবং আন্তর্জাতিক মানের শিক্ষা প্রদান করা।
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6">কেন আমাদের বেছে নিন?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-300" />
                    <span>বিটিইবি অনুমোদিত কোর্স</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-300" />
                    <span>অভিজ্ঞ প্রশিক্ষক</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-300" />
                    <span>আধুনিক ল্যাব সুবিধা</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-300" />
                    <span>ক্যারিয়ার গাইডেন্স</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-300" />
                    <span>জব প্লেসমেন্ট সহায়তা</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="h-1 bg-gradient-to-r from-orange-200 via-orange-400 to-red-200 rounded-full my-12 opacity-60"></div>
      </div>

      {/* Features */}
      <section className="py-20 bg-gray-50 fade-in-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              আমাদের বৈশিষ্ট্য
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              আমরা আমাদের শিক্ষার্থীদের সর্বোচ্চ মানের শিক্ষা প্রদানের জন্য 
              বিভিন্ন বৈশিষ্ট্য নিয়ে এসেছি
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 fade-in-section">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="text-orange-500 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="h-1 bg-gradient-to-r from-orange-200 via-orange-400 to-red-200 rounded-full my-12 opacity-60"></div>
      </div>

      {/* Achievements */}
      <section className="py-20 fade-in-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              আমাদের অর্জন
            </h2>
            <p className="text-xl text-gray-600">
              বছরের পর বছর ধরে আমরা অসংখ্য সাফল্য অর্জন করেছি
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center fade-in-section">
                <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="h-1 bg-gradient-to-r from-orange-200 via-orange-400 to-red-200 rounded-full my-12 opacity-60"></div>
      </div>

      {/* Team */}
      <section className="py-20 bg-gray-50 fade-in-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              আমাদের দল
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              অভিজ্ঞ এবং দক্ষ প্রশিক্ষকদের নিয়ে গঠিত আমাদের দল
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center fade-in-section">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <FaUsers className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 mb-2">{member.expertise}</p>
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                  <FaStar className="text-orange-500" />
                  <span>{member.experience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="h-1 bg-gradient-to-r from-orange-200 via-orange-400 to-red-200 rounded-full my-12 opacity-60"></div>
      </div>

      {/* CTA Section */}
      <section className="py-20 fade-in-section">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-white shadow-xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              আপনার ভবিষ্যত শুরু করুন
            </h2>
            <p className="text-xl mb-8 opacity-90">
              আজই আমাদের সাথে যোগ দিন এবং আপনার স্বপ্নের ক্যারিয়ার গড়ে তুলুন
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/courses" className="px-8 py-4 bg-white text-orange-500 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
                কোর্স দেখুন
                <FaArrowRight />
              </a>
              <a href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-orange-500 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
                যোগাযোগ করুন
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeInUp 1s forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: none;
          }
        }
        .about-fade-in .fade-in-section {
          opacity: 1 !important;
          transform: none !important;
        }
      `}</style>
    </div>
  );
};

export default About;
