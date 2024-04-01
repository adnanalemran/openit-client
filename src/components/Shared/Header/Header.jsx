import { Link, NavLink } from "react-router-dom";

import logo from "../../../assets/logo.png";

import "./header.css";

import Swal from "sweetalert2";

const Header = () => {
  const handleClick = () => {
    Swal.fire({
      title: "Error",
      text: `No item in the card`,
      icon: "error",
    });
  };

  const menu = (
    <>
      <li className="flex">
        <NavLink to="/" className="flex items-center px-8 py-3 font-semibold  ">
          Home
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-green-400 ">
      <div className="navbar  text-white container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-[#8981D7]"
            >
              {menu}
            </ul>
          </div>
          <Link to="/" className="text-2xl font-bold flex gap-4 ">
            <div className="w-16 mx-auto block rounded-full  ">
              <img src={logo} />
            </div>
            <p className=" hidden lg:flex  lg:text-2xl  my-auto  ">Open it </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{menu}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
