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
import SingleProfile from "../Pages/Profile/SingleProfile";
import PrivateRoute from "./PrivateRoute";
import InvalidAccess from "../Layout/Shared/404/InvalidAccess";
import AdminRouter from "./AdminRouter";
import Profile from "../Pages/Profile/Profile";
import ResultForHome from "../Pages/result/resultForHome";
 
import CumpusLife from "../Pages/HomePage/CumpusLife/CumpusLife";
 

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
      {
        path: "/result",
        element: <ResultForHome />,
      },
      {
        path: "gallery",
        element: <CumpusLife />,
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
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),

    children: [
      {
        path: "/dashboard/",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },

      {
        path: "/dashboard/user-management",
        element: (
          <AdminRouter>
            <ManageUser />
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/student-list",
        element: (
          <AdminRouter>
            <StudentList />
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/singleUserInfo/:id",
        element: <SingleProfile />,
      },
    ],
  },
  {
    path: "invalidAccess",
    element: <InvalidAccess />,
  },
]);
