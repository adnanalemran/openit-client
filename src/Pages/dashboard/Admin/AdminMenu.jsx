import {
  FaHome,
  FaNewspaper,
  FaChartLine,
  FaList,
  FaMoneyBill,
  FaUser,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <NavLink to="/dashboard">
          <li className="flex p-2 gap-1 bg-gradient-to-r from-[#ba97e9] to-[#9756F5] text-white w-full items-center rounded-r-3xl hover:from-[#ac8cd6] hover:to-[#9756F5] transition-all duration-500">
            <FaHome className="mx-4" />
            <p className="font-medium text-lg">Home</p>
          </li>
        </NavLink>
        <NavLink to="/dashboard/news">
          <li className="flex p-2 gap-1 bg-gradient-to-r from-[#ba97e9] to-[#9756F5] text-white w-full items-center rounded-r-3xl hover:from-[#ac8cd6] hover:to-[#9756F5] transition-all duration-500">
            <FaNewspaper className="mx-4" />
            <p className="font-medium text-lg">News</p>
          </li>
        </NavLink>
        <NavLink to="/dashboard/analytics">
          <li className="flex p-2 gap-1 bg-gradient-to-r from-[#ba97e9] to-[#9756F5] text-white w-full items-center rounded-r-3xl hover:from-[#ac8cd6] hover:to-[#9756F5] transition-all duration-500">
            <FaChartLine className="mx-4" />
            <p className="font-medium text-lg">Analytics</p>
          </li>
        </NavLink>
        <NavLink to="/dashboard/student-list">
          <li className="flex p-2 gap-1 bg-gradient-to-r from-[#ba97e9] to-[#9756F5] text-white w-full items-center rounded-r-3xl hover:from-[#ac8cd6] hover:to-[#9756F5] transition-all duration-500">
            <FaList className="mx-4" />
            <p className="font-medium text-lg">Student List</p>
          </li>
        </NavLink>{" "}
        <NavLink to="/dashboard/attendance">
          <li className="flex p-2 gap-1 bg-gradient-to-r from-[#ba97e9] to-[#9756F5] text-white w-full items-center rounded-r-3xl hover:from-[#ac8cd6] hover:to-[#9756F5] transition-all duration-500">
            <FaList className="mx-4" />
            <p className="font-medium text-lg">Attendance</p>
          </li>
        </NavLink>
        <NavLink to="/dashboard/cost-management">
          <li className="flex p-2 gap-1 bg-gradient-to-r from-[#ba97e9] to-[#9756F5] text-white w-full items-center rounded-r-3xl hover:from-[#ac8cd6] hover:to-[#9756F5] transition-all duration-500">
            <FaMoneyBill className="mx-4" />
            <p className="font-medium text-lg">Cost Management</p>
          </li>
        </NavLink>
        <NavLink to="/dashboard/user-management">
          <li className="flex p-2 gap-1 bg-gradient-to-r from-[#ba97e9] to-[#9756F5] text-white w-full items-center rounded-r-3xl hover:from-[#ac8cd6] hover:to-[#9756F5] transition-all duration-500">
            <FaUser className="mx-4" />
            <p className="font-medium text-lg">User Management</p>
          </li>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;
