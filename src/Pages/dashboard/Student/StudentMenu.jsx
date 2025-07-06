import { NavLink } from "react-router-dom";
import { 
  FaHome, 
  FaBook, 
  FaKeyboard, 
  FaHistory, 
  FaMoneyBill, 
  FaNewspaper,
  FaGraduationCap,
  FaCog
} from "react-icons/fa";

const StudentMenu = () => {
  return (
    <div>
      <div className="space-y-1">
        <NavLink to="/dashboard" className="block">
          {({ isActive }) => (
            <div className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
              isActive 
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105' 
                : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
            }`}>
              <FaHome className="text-lg mr-3" />
              <span className="font-medium">আমার ড্যাশবোর্ড</span>
            </div>
          )}
        </NavLink>

        <NavLink to="/dashboard/resource" className="block">
          {({ isActive }) => (
            <div className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
              isActive 
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105' 
                : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
            }`}>
              <FaBook className="text-lg mr-3" />
              <span className="font-medium">রিসোর্স</span>
            </div>
          )}
        </NavLink>

        <NavLink to="/dashboard/TypingTest" className="block">
          {({ isActive }) => (
            <div className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
              isActive 
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105' 
                : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
            }`}>
              <FaKeyboard className="text-lg mr-3" />
              <span className="font-medium">টাইপিং টেস্ট</span>
            </div>
          )}
        </NavLink>

        <NavLink to="/dashboard/result-history" className="block">
          {({ isActive }) => (
            <div className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
              isActive 
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105' 
                : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
            }`}>
              <FaHistory className="text-lg mr-3" />
              <span className="font-medium">ফলাফলের ইতিহাস</span>
            </div>
          )}
        </NavLink>

        <NavLink to="/dashboard/bill-history" className="block">
          {({ isActive }) => (
            <div className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
              isActive 
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105' 
                : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
            }`}>
              <FaMoneyBill className="text-lg mr-3" />
              <span className="font-medium">বিলের ইতিহাস</span>
            </div>
          )}
        </NavLink>

        <NavLink to="/dashboard/notices" className="block">
          {({ isActive }) => (
            <div className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
              isActive 
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105' 
                : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
            }`}>
              <FaNewspaper className="text-lg mr-3" />
              <span className="font-medium">নোটিশ</span>
            </div>
          )}
        </NavLink>

        <div className="pt-4 border-t border-gray-200">
          <NavLink to="/dashboard/profile" className="block">
            {({ isActive }) => (
              <div className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105' 
                  : 'text-gray-500 hover:bg-blue-50 hover:text-blue-600'
              }`}>
                <FaGraduationCap className="text-lg mr-3" />
                <span className="font-medium">প্রোফাইল</span>
              </div>
            )}
          </NavLink>

          <NavLink to="/dashboard/settings" className="block">
            {({ isActive }) => (
              <div className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg transform scale-105' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              }`}>
                <FaCog className="text-lg mr-3" />
                <span className="font-medium">সেটিংস</span>
              </div>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default StudentMenu;
