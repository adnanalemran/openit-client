import { useContext } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { 
  FaArrowLeft, 
  FaSignOutAlt, 
  FaUser, 
  FaCog, 
  FaBell, 
  FaHome,
  FaUserTie,
  FaGraduationCap
} from "react-icons/fa";
import useAdmin from "../../Hook/useAdmin";
import useStudent from "../../Hook/useStudent";
import { AuthContext } from "../../providers/AuthProvider";
import AdminMenu from "./Admin/AdminMenu";
import StudentMenu from "./Student/StudentMenu";
import UserMenu from "./User/UserMenu";
import "./dashboard.css";

const showSuccessAlert = () => {
  Swal.fire({
    icon: "success",
    title: "লগআউট সফল",
    text: "সফলভাবে লগআউট হয়েছে",
  });
};

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isStudent] = useStudent();

  const location = useLocation();
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = async () => {
    try {
      await logOut();
      showSuccessAlert();
      navigate(location?.state?.from ? location.state.from : "/");
    } catch (error) {
      console.error(error);
    }
  };

  const getUserRole = () => {
    if (isAdmin) return "অ্যাডমিন";
    if (isStudent) return "শিক্ষার্থী";
    return "ব্যবহারকারী";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Back to Home */}
            <Link
              to="/"
              className="flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-300"
            >
              <FaArrowLeft className="mr-2" />
              <span className="font-medium">হোমে ফিরে যান</span>
            </Link>

            {/* User Info */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{user?.displayName}</p>
                  <p className="text-xs text-gray-500">{getUserRole()}</p>
                </div>
                <img
                  src={user?.photoURL || "https://via.placeholder.com/40"}
                  alt={user?.displayName}
                  className="h-10 w-10 rounded-full object-cover border-2 border-orange-200"
                />
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                <Link
                  to="/dashboard/profile"
                  className="p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300"
                  title="প্রোফাইল"
                >
                  <FaUser className="text-lg" />
                </Link>
                <button
                  onClick={handleSignOut}
                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300"
                  title="লগআউট"
                >
                  <FaSignOutAlt className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* User Profile Card */}
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
                <div className="text-center">
                  <div className="relative inline-block">
                    <img
                      src={user?.photoURL || "https://via.placeholder.com/80"}
                      alt={user?.displayName}
                      className="h-20 w-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mt-3">{user?.displayName}</h3>
                  <p className="text-orange-100 text-sm">{getUserRole()}</p>
                  <p className="text-orange-100 text-xs mt-1">{user?.email}</p>
                </div>
              </div>

              {/* Navigation Menu */}
              <div className="p-4">
                <div className="space-y-2">
                  {isAdmin ? (
                    <AdminMenu />
                  ) : isStudent ? (
                    <StudentMenu />
                  ) : (
                    <UserMenu />
                  )}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="p-4 border-t border-gray-100">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <FaBell className="text-orange-500" />
                  দ্রুত পরিসংখ্যান
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-orange-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-orange-600">12</div>
                    <div className="text-xs text-orange-600">নোটিশ</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-blue-600">45</div>
                    <div className="text-xs text-blue-600">শিক্ষার্থী</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Content Header */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">ড্যাশবোর্ড</h2>
                    <p className="text-sm text-gray-600">আপনার অ্যাকাউন্টের ওভারভিউ</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300">
                      <FaCog className="text-lg" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
