import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import logo from "../../../assets/logo.png";
import "./nav.css";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const displayName = user?.displayName;
  const displayPhotoURL = user?.photoURL;

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error(error);
    }
  };

  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/faculty">Faculty Members</NavLink>
      </li>
      <li>
        <NavLink to="/result">Results</NavLink>
      </li>
      <li>
        <NavLink to="https://elibrary.worldbank.org/">e-Library</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar lg:px-8">
      <style>
        {`
          .active {
            background-color: #2C3E4F !important;
            color:white;

          }

      
        `}
      </style>

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
          <ul className="menu menu-sm dropdown-content mt-3 z-[4] p-2 shadow bg-base-100 rounded-box gap-3 w-52">
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <div className="flex align-middle justify-center items-center gap-2">
            <img className="w-12" src={logo} alt="" />
            <a className="font-extrabold text-xl">Open IT Institute</a>
          </div>
        </Link>
      </div>

      {/* large */}
      <div className="navbar-center hidden lg:flex font-bold text-gray-900">
        <ul className="menu menu-horizontal  gap-2">{navItems}</ul>
      </div>

      <div className="navbar-end">
        <div className="items-center flex-shrink-0 lg:flex">
          <div className="navbar-end lg:flex">
            {user ? (
              <div className="flex items-center justify-center">
                <div className="dropdown  cursor-pointer">
                  <label tabIndex={0} className="flex backdrop: ">
                    <div className="avatar">
                      <div className="w-10  rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                        <img src={displayPhotoURL} alt="User avatar" />
                      </div>
                    </div>
                  </label>
                  <ul className="menu shadow menu-sm dropdown-content right-1 mt-3 z-[5] p-3 gap-2 rounded-box w-52 bg-base-100    ">
                    <p className="font-bold">{displayName}</p>
                    <li>
                      <Link className="btn btn-1   " to="/Dashboard">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-error text-white"
                        onClick={handleSignOut}
                      >
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link to="/signIn">
                <button type="button" className="btn btn-1">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
