import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
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
  </>
);
const Navv2 = () => {
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
            <img className="w-12" src={logo} alt="" />
            <a className=" font-extrabold text-xl  ">Open IT Institute</a>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <div className="items-center flex-shrink-0 lg:flex">
          <div className="navbar-end lg:flex">
            {user ? (
              <>
                <div className="flex items-center justify-center">
                  <div className="dropdown p-4 cursor-pointer  ">
                    <label tabIndex={0} className="flex   backdrop: ">
                      <div className="avatar">
                        <div className="w-10 rounded-full cursor-pointer">
                          <img src={displayPhotoURL} />
                        </div>
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="menu text-2xl shadow menu-sm dropdown-content right-1 mt-3 z-[5] p-3 gap-2  rounded-box w-52 bg-[#1B1D4D]"
                    >
                      <p className="font-bold text-xl">{displayName}</p>

                      <li>
                        <Link className="bg-gray-700  p-3" to="/Dashboard">
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="bg-red-400 p-3 hover:bg-red-700"
                          onClick={handleSignOut}
                        >
                          Log Out
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link className=" " to="/signIn">
                  <button
                    type="button"
                    className="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800"
                  >
                    {" "}
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navv2;
