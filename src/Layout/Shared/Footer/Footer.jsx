import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart, FaCode } from "react-icons/fa";
import logo from "../../../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logo} 
                alt="ওপেন আইটি লোগো" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-xl font-bold">ওপেন আইটি ইনস্টিটিউট</h3>
                <p className="text-gray-300 text-sm">বিটিইবি প্রশিক্ষণ প্রদানকারী</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              ওপেন আইটি বাংলাদেশের একটি শীর্ষস্থানীয় বিটিইবি প্রশিক্ষণ প্রদানকারী প্রতিষ্ঠান। 
              আমরা পেশাদার এবং কাস্টমাইজড প্রশিক্ষণ কোর্সে বিশেষজ্ঞ, যা আমাদের ক্লায়েন্টদের 
              বিভিন্ন চাহিদা পূরণের জন্য উপযুক্ত সমাধান প্রদানে দক্ষ।
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transform hover:scale-110 transition-all duration-300"
                aria-label="ফেসবুক"
              >
                <FaFacebook />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transform hover:scale-110 transition-all duration-300"
                aria-label="টুইটার"
              >
                <FaTwitter />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transform hover:scale-110 transition-all duration-300"
                aria-label="ইনস্টাগ্রাম"
              >
                <FaInstagram />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transform hover:scale-110 transition-all duration-300"
                aria-label="লিংকডইন"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  হোম
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  যোগাযোগ
                </Link>
              </li>
              <li>
                <Link 
                  to="/courses" 
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  কোর্স
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">যোগাযোগ</h4>
            <div className="space-y-3 text-gray-300">
              <p>ঠিকানা: ঢাকা, বাংলাদেশ</p>
              <p>ফোন: +৮৮০ ১৭১২-৩৪৫৬৭৮</p>
              <p>ইমেইল: info@openit.edu.bd</p>
              <p>ওয়েব: www.openit.edu.bd</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {currentYear} ওপেন আইটি ইনস্টিটিউট। সর্বস্বত্ব সংরক্ষিত।
            </p>
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <span>ডেভেলপ করেছেন</span>
              <FaCode className="text-orange-400" />
              <span className="text-orange-400 font-medium">আদনান আল-ইমরান</span>
              <FaHeart className="text-red-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
