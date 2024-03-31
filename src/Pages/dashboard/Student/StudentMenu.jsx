import { NavLink } from "react-router-dom";
import { FaCoffee, FaMoneyBill } from "react-icons/fa";
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
      
      <NavLink to="/dashboard/resource">
        <li className="flex p-2 gap-1 bg-gradient-to-r from-[#ba97e9] to-[#9756F5] text-white w-full items-center rounded-r-3xl hover:from-[#ac8cd6] hover:to-[#9756F5] transition-all duration-500">
          <FaCoffee className="mx-4" />
          <p className="font-medium text-lg">Resource </p>
        </li>
      </NavLink>{" "}
      <NavLink to="/dashboard/TypingTest">
        <li className="flex p-2 gap-1 bg-gradient-to-r from-[#ba97e9] to-[#9756F5] text-white w-full items-center rounded-r-3xl hover:from-[#ac8cd6] hover:to-[#9756F5] transition-all duration-500">
          <SiSpeedtest className="mx-4" />
          <p className="font-medium text-lg">Typing test </p>
        </li>
      </NavLink>
      <NavLink to="/dashboard/cost-management">
        <li className="flex p-2 gap-1 bg-gradient-to-r from-[#ba97e9] to-[#9756F5] text-white w-full items-center rounded-r-3xl hover:from-[#ac8cd6] hover:to-[#9756F5] transition-all duration-500">
          <FaMoneyBill className="mx-4" />
          <p className="font-medium text-lg">Result history</p>
        </li>
      </NavLink>
      <NavLink to="/dashboard/cost-management">
        <li className="flex p-2 gap-1 bg-gradient-to-r from-[#ba97e9] to-[#9756F5] text-white w-full items-center rounded-r-3xl hover:from-[#ac8cd6] hover:to-[#9756F5] transition-all duration-500">
          <FaMoneyBill className="mx-4" />
          <p className="font-medium text-lg">Bill history</p>
        </li>
      </NavLink>
    </div>
  );
};

export default StudentMenu;
