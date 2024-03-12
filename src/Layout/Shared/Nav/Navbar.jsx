import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
const navItem = (
  <>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/faculty">Faculty Members</NavLink>
    </li>
    <li>
      <NavLink to="/result">View Results</NavLink>
    </li>
    <li>
      <NavLink to="/e-library">e-Library</NavLink>
    </li>
    <li>
      <NavLink to="/dashboard">Deshbord </NavLink>
    </li>
  </>
);
const Nav = () => {
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link>
          <div className="flex align-middle justify-center items-center gap-2">
            <img
              className="w-12"
              src={logo}
              alt=""
            />
            <a className=" font-extrabold text-xl  ">Open IT Institute</a>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/signIn">
          <p className="btn btn-sm btn-outline">Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
