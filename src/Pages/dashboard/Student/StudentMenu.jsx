import { NavLink } from "react-router-dom";
import { FaMoneyBill } from "react-icons/fa";
import { SiSpeedtest } from "react-icons/si";
import { FaHome, FaNewspaper, FaChartLine, FaList } from "react-icons/fa";
const StudentMenu = () => {
  return (
    <div className="flex flex-col gap-4">
      <NavLink to="/dashboard">
        <li className="flex p-2 gap-1 bg-gradient-to-r from-[#ba97e9] to-[#9756F5] text-white w-full items-center rounded-r-3xl hover:from-[#ac8cd6] hover:to-[#9756F5] transition-all duration-500">
          <FaHome className="mx-4" />
          <p className="font-medium text-lg">My Dashboard</p>
        </li>
      </NavLink>

      <NavLink to="/dashboard/news">
        <li className="flex p-2 gap-1 bg-gradient-to-r from-[#ba97e9] to-[#9756F5] text-white w-full items-center rounded-r-3xl hover:from-[#ac8cd6] hover:to-[#9756F5] transition-all duration-500">
          <FaNewspaper className="mx-4" />
          <p className="font-medium text-lg">Notice</p>
        </li>
      </NavLink>

      <NavLink to="/dashboard/analytics">
        <li className="flex p-2 gap-1 bg-gradient-to-r from-[#ba97e9] to-[#9756F5] text-white w-full items-center rounded-r-3xl hover:from-[#ac8cd6] hover:to-[#9756F5] transition-all duration-500">
          <FaChartLine className="mx-4" />
          <p className="font-medium text-lg">Status Analytics</p>
        </li>
      </NavLink>

      <NavLink to="/dashboard/resource">
        <li className="flex p-2 gap-1 bg-gradient-to-r from-[#ba97e9] to-[#9756F5] text-white w-full items-center rounded-r-3xl hover:from-[#ac8cd6] hover:to-[#9756F5] transition-all duration-500">
 
          <SiSpeedtest className="mx-4"/>
          <p className="font-medium text-lg">resource </p>
        </li>
      </NavLink>  <NavLink to="/dashboard/TypingTest">
        <li className="flex p-2 gap-1 bg-gradient-to-r from-[#ba97e9] to-[#9756F5] text-white w-full items-center rounded-r-3xl hover:from-[#ac8cd6] hover:to-[#9756F5] transition-all duration-500">
 
          <SiSpeedtest className="mx-4"/>
          <p className="font-medium text-lg">Typing  test </p>
        </li>
      </NavLink>

      <NavLink to="/dashboard/cost-management">
        <li className="flex p-2 gap-1 bg-gradient-to-r from-[#ba97e9] to-[#9756F5] text-white w-full items-center rounded-r-3xl hover:from-[#ac8cd6] hover:to-[#9756F5] transition-all duration-500">
          <FaMoneyBill className="mx-4" />
          <p className="font-medium text-lg">Cost Management</p>
        </li>
      </NavLink>
    </div>
  );
};

export default StudentMenu;
