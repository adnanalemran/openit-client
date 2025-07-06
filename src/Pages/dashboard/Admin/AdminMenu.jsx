import { 
  FaHome, 
  FaNewspaper, 
  FaList, 
  FaUser, 
  FaUsers, 
  FaUserPlus,
  FaChartBar,
  FaCog
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
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
              <span className="font-medium">ড্যাশবোর্ড</span>
            </div>
          )}
        </NavLink>

        <NavLink to="/dashboard/notice" className="block">
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

        <NavLink to="/dashboard/student-list" className="block">
          {({ isActive }) => (
            <div className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
              isActive 
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105' 
                : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
            }`}>
              <FaList className="text-lg mr-3" />
              <span className="font-medium">শিক্ষার্থী তালিকা</span>
            </div>
          )}
        </NavLink>

        <NavLink to="/dashboard/applied_student" className="block">
          {({ isActive }) => (
            <div className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
              isActive 
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105' 
                : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
            }`}>
              <FaUserPlus className="text-lg mr-3" />
              <span className="font-medium">আবেদনকারী শিক্ষার্থী</span>
              <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">নতুন</span>
            </div>
          )}
        </NavLink>

        <NavLink to="/dashboard/user-management" className="block">
          {({ isActive }) => (
            <div className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
              isActive 
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105' 
                : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
            }`}>
              <FaUsers className="text-lg mr-3" />
              <span className="font-medium">ব্যবহারকারী ব্যবস্থাপনা</span>
            </div>
          )}
        </NavLink>

        <div className="pt-4 border-t border-gray-200">
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

export default AdminMenu;
