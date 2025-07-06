import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import logo from "../../../assets/logo.png";
import { FaUser, FaSignOutAlt, FaHome, FaSignInAlt, FaBars, FaTimes, FaChevronDown, FaCog, FaInfoCircle, FaPhone, FaGraduationCap, FaUsers } from "react-icons/fa";
import useAuth from "../../../Hook/useAuth";
import useAdmin from "../../../Hook/useAdmin";
import useStudent from "../../../Hook/useStudent";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAdmin] = useAdmin();
  const [isStudent] = useStudent();
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false); // Close mobile menu on route change
    setIsProfileOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogOut = () => {
    logOut();
    setIsProfileOpen(false);
  };

  const navLinks = [
    { name: "হোম", path: "/", icon: FaHome },
    { name: "আমাদের সম্পর্কে", path: "/about", icon: FaInfoCircle },
    { name: "যোগাযোগ", path: "/contact", icon: FaPhone },
    { name: "নিউজ", path: "/notices", icon: FaGraduationCap },
    { name: "শিক্ষার্থী", path: "/student-for-public", icon: FaUsers },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white/80 backdrop-blur-sm"
      }`}
      style={{
        boxShadow: isScrolled
          ? "0 4px 20px 0 rgba(0, 0, 0, 0.08)"
          : "none",
      }}
      aria-label="প্রধান ন্যাভিগেশন"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-lg" aria-label="হোম">
            <img
              src={logo}
              alt="ওপেন আইটি লোগো"
              className="h-10 w-10 lg:h-12 lg:w-12 group-hover:scale-110 transition-transform duration-300"
            />
            <div className="hidden sm:block">
              <h1
                className={`font-bold text-xl lg:text-2xl transition-colors duration-300 ${
                  isScrolled ? "text-gray-900" : "text-gray-900"
                }`}
              >
                ওপেন আইটি
              </h1>
              <p
                className={`text-xs lg:text-sm transition-colors duration-300 ${
                  isScrolled ? "text-gray-600" : "text-gray-500"
                }`}
              >
                বিটিইবি প্রশিক্ষণ প্রদানকারী
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-white hover:bg-orange-50 hover:text-orange-600 transform hover:scale-105 ${
                  isActive(link.path)
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25"
                    : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                }`}
                aria-current={isActive(link.path) ? "page" : undefined}
                tabIndex={0}
              >
                <link.icon className={`text-sm ${isActive(link.path) ? "text-white" : "text-gray-500 group-hover:text-orange-600"}`} />
                {link.name}
              </Link>
            ))}
          </div>

          {/* User Menu / Auth Buttons */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className={`flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 hover:bg-orange-50 hover:text-orange-600 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                    isScrolled ? "text-gray-700 hover:bg-orange-50 hover:text-orange-600" : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                  aria-haspopup="true"
                  aria-expanded={isProfileOpen}
                  tabIndex={0}
                >
                  <FaUser className="text-lg" />
                  <span className="hidden sm:block font-medium">
                    {user.displayName || user.email}
                  </span>
                </button>

                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">
                        {user.displayName || "ব্যবহারকারী"}
                      </p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>

                    <div className="py-2">
                      <Link
                        to="/dashboard"
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
                        tabIndex={0}
                      >
                        <FaCog className="mr-3 text-gray-400" />
                        ড্যাশবোর্ড
                      </Link>

                      <button
                        onClick={handleLogOut}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
                        tabIndex={0}
                      >
                        <FaSignOutAlt className="mr-3 text-gray-400" />
                        লগআউট
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden sm:flex items-center space-x-3">
                <Link
                  to="/signin"
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-orange-50 hover:text-orange-600 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                    isScrolled ? "text-gray-700 hover:bg-orange-50 hover:text-orange-600" : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                  tabIndex={0}
                >
                  সাইন ইন
                </Link>
                <Link
                  to="/signUp"
                  className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                  tabIndex={0}
                >
                  সাইন আপ
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled ? "text-gray-700 hover:bg-orange-50 hover:text-orange-600" : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              } focus:outline-none focus:ring-2 focus:ring-orange-400`}
              aria-label="মোবাইল মেনু টগল"
              aria-expanded={isOpen}
              tabIndex={0}
            >
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white rounded-xl shadow-xl border border-gray-200 mt-4 mb-4">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                    isActive(link.path) 
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25" 
                      : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                  aria-current={isActive(link.path) ? "page" : undefined}
                  tabIndex={0}
                >
                  <link.icon className={`text-lg ${isActive(link.path) ? "text-white" : "text-gray-500"}`} />
                  {link.name}
                </Link>
              ))}

              {!user && (
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <Link
                    to="/signin"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    tabIndex={0}
                  >
                    <FaUser className="text-lg" />
                    সাইন ইন
                  </Link>
                  <Link
                    to="/signUp"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    tabIndex={0}
                  >
                    <FaUser className="text-lg" />
                    সাইন আপ
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
