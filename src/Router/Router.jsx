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
import SingleProfile from "../Pages/Profile/SingleProfile";
import PrivateRoute from "./PrivateRoute";
import InvalidAccess from "../Layout/Shared/404/InvalidAccess";
import AdminRouter from "./AdminRouter";
import Profile from "../Pages/Profile/Profile";
import ResultForHome from "../Pages/result/resultForHome";
import CumpusLife from "../Pages/HomePage/CumpusLife/CumpusLife";
import Student_public_view from "../Pages/Student_public_view/Student_public_view";
import ManageNotice from "../Pages/dashboard/ManageNotice/ManageNotice";
import AllNotice from "../Pages/dashboard/ManageNotice/AllNotice";
import SingleNotice from "../Pages/dashboard/ManageNotice/SingleNotice";
import ManageBlog from "../Pages/dashboard/Blog/ManageBlog";
import EditProfile from "../Pages/Profile/EditProfile";
import AdministratorByEditProfile from "../Pages/Profile/AdministratorByEditProfile";
import Applied_studentList from "../Pages/dashboard/Dashboard/applied_studentList";
import StudentRouter from "./StudentRouter";
import TypingTest from "../Pages/STUDENT/TypingTest";
import Resorse from "../Pages/STUDENT/Resorse";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import StudentList from "../Pages/dashboard/Dashboard/StudentList";

import Checking from "../Pages/Checking/Checking";


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
        path: "/About",
        element: <About />,
      }, {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/student-for-public",
        element: <Student_public_view />,
      },
      {
        path: "/result",
        element: <ResultForHome />,
      },
      {
        path: "/gallery",
        element: <CumpusLife />,
      },
      {
        path: "/notice/:id",
        element: <SingleNotice />,
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
    path: "/checking/:id",
    element: <Checking/>,
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
        path: "/dashboard/applied_student",
        element: (
          <AdminRouter>
            <Applied_studentList />
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/notice",
        element: (
          <AdminRouter>
            <ManageNotice />
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/blog",
        element: (
          <AdminRouter>
            <ManageBlog />
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/allNotice",
        element: (
          <AdminRouter>
            <AllNotice />
          </AdminRouter>
        ),
      },

      {
        path: "/dashboard/singleUserInfo/:id",
        element: <SingleProfile />,
      },

      {
        path: "/dashboard/EditProfile/:id",
        element: <EditProfile />,
      },

      {
        path: "/dashboard/AdminEditProfile/:id",
        element: (
          <AdminRouter>
            <AdministratorByEditProfile />,
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/student-list",
        element: (
          <AdminRouter>
            <StudentList />,
          </AdminRouter>
        ),
      },

      // Student router

      {
        path: "/dashboard/TypingTest",
        element: (
          <StudentRouter>
            <TypingTest />,
          </StudentRouter>
        ),
      },
      {
        path: "/dashboard/resource",
        element: (
          <StudentRouter>
            <Resorse />,
          </StudentRouter>
        ),
      },

    ],
  },
  {
    path: "invalidAccess",
    element: <InvalidAccess />,
  },
]);
