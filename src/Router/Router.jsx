import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Shared/Main";
import HomePage from "../Pages/HomePage/HomePage";
import Faculty from "../Pages/HomePage/Faculty/Faculty";
import Signin from "../Pages/Auth/Signin/Signin";
import Dashboard from "../Pages/dashboard/Dashboard";
import Error from "../Layout/Shared/404/Error";
import SignUp from "../Pages/Auth/Signin/SignUp";
import DashboardHome from "../Pages/dashboard/Dashboard/DashboardHome";

import ManageUser from "../Pages/dashboard/Dashboard/ManageUser";
import StudentList from "../Pages/dashboard/Dashboard/StudentList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/Faculty",
        element: <Faculty />,
      },
    ],
  },
  {
    path: "/signIn",
    element: <Signin />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,

    children: [
      {
        path: "/dashboard/",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/user-management",
        element: <ManageUser />,
      },
      {
        path: "/dashboard/student-list",
        element: <StudentList />,
      },
    ],
  },
]);
