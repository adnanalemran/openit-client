import { useContext } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../../components/Shared/Header/Header";
import { AuthContext } from "../../providers/AuthProvider";
import AdminMenu from "./Admin/AdminMenu";
import StudentMenu from "./Student/StudentMenu.jsx";
import UserMenu from "./User/UserMenu.jsx";
import "./dashboard.css";
import useAdmin from "../../Hook/useAdmin";

// import useStudent from "../../Hook/useStudent.jsx";

const showSuccessAlert = () => {
  Swal.fire({
    icon: "success",
    title: "Log out",
    text: "Successfully logged out",
  });
};

const Dashboard = () => {
  // const [isAdmin] = useAdmin();
  const isAdmin = true;
  // const [isStudent] = useStudent();

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

  return (
    <div className="min-h-screen">
      <div className="lg:h-[150px] md:h-[100px] bg-cover bg-center lg:relative"></div>
      <div className="flex flex-col lg:flex-row w-full container mx-auto">
        <div className="w-full lg:w-1/5 sticky top-10">
          <div className="justify-around p-4 text-center rounded-lg lg:-mt-32 bg-base-300 w-full mx-auto flex lg:flex-col  ">
            <div className="mb-4">
              <img
                src={user?.photoURL}
                alt={user?.displayName}
                className="h-28 lg:h-44 mx-auto rounded-full aspect-square object-cover border-2 border-primary"
              />
            </div>

            <div className="space-y-2 text-center divide-y">
              <h4 className="text-lg font-bold">Name: {user?.displayName}</h4>

              <div className="flex gap-2 justify-center pt-3">
                <Link to="/profile">
                  <button
                    type="button"
                    className="px-8 py-3 font-semibold rounded-full btn-1  "
                  >
                    Profile
                  </button>

                 
                </Link>

                <button onClick={handleSignOut} className="px-8 py-3 font-semibold rounded-full  btn bg-slate-300  ">
                  Log-out
                </button>
              </div>
            </div>
          </div>
          <div className="justify-around      text-center rounded-lg my-8 bg-base-300 w-full mx-auto">
            <div>
              {isAdmin ? (
                <AdminMenu />
              ) : isStudent ? (
                <StudentMenu />
              ) : (
                <UserMenu />
              )}
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-4/5  sticky">
          <div className="w-full justify-around lg:p-8  border-2 border-[#9756f5]  text-center rounded-lg lg:-mt-32 bg-base-300">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
