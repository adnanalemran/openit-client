import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, Navigate } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosPublic";
import Swal from "sweetalert2";
import {
 
  FaEdit,
  FaMoneyBill,
  FaPhone,
  FaUser,
  FaSignOutAlt
} from "react-icons/fa";

import { FiDollarSign, FiMail, FiFacebook } from "react-icons/fi";
const Profile = () => {
  const showSuccessAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Log out",
      text: "Successfully logged out",
    });
  };

  const { user, logOut } = useContext(AuthContext);
  const [dbuser, setDbuser] = useState(null);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosSecure.get(`/user/email/${user?.email}`);
        setDbuser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (user?.email) {
      fetchData();
    }
  }, [axiosSecure, user?.email]);

 
  const handleSignOut = async () => {
    try {
      await logOut();
      showSuccessAlert();
      Navigate(location?.state?.from ? location.state.from : "/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-base-300   p-8 rounded-lg shadow-md">
      {dbuser?.userType === "user" && (
        <h2 className="text-red-500 text-2xl p-4">
          আপনি একজন আবেদনকারী ,এজেন্ট হিসেবে যুক্ত হতে কর্তৃপক্ষের সাথে যোগাযোগ
          করুন
        </h2>
      )}

      <div className="flex flex-col lg:flex-row-reverse w-full">
        <div className="w-full lg:w-1/2">
          <div className="avatar">
            <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={dbuser?.photoURL} alt={user?.displayName} />
            </div>
          </div>

          <div className="p-4 text-sm">
            <p className="mt-4 text-center text-gray-500">
              BTEB Id :
              {!user?.btebId && (
                <span className="text-red-600"> Student not registered </span>
              )}
              {user?.btebId}
            </p>
            <p className="mt-4 text-center text-gray-500">
              Profile Id: {dbuser?._id}
            </p>
          </div>

          <div className="w-full flex gap-4 mx-auto items-center justify-center">
  <button
    onClick={handleSignOut}
    className="px-8 py-3 font-semibold rounded-full btn bg-slate-300 flex items-center"
  >
    <FaSignOutAlt className="mr-2" /> Log-out
  </button>

  <Link className="text-blue-800 font-bold">
    <button className="px-8 py-3 font-semibold rounded-full btn bg-purple-500 text-white">
      <FaEdit /> Edit User info
    </button>
  </Link>
</div>
        </div>
        <div className="w-full lg:w-1/2 text-left mt-4 lg:ml-8 text-gray-800">
          <p className="text-xl font-bold mb-4 text-gray-900">
            {dbuser?.displayName}`s profile information
          </p>
          <hr className=" border-dashed border-1 border-indigo-400 p-4 my-4" />
          <div className="flex flex-col gap-2">
            <p>
              <span className="font-bold flex gap-2">
                <FaUser /> <p>Name:{dbuser?.displayName}</p>
              </span>
            </p>

            <p className="flex gap-2">
              <FaPhone />{" "}
              <a href={`tel:${dbuser?.phoneNo}`}>{dbuser?.phoneNo}</a>
            </p>

            <p className="flex gap-2">
              <FiMail /> <a href={`mailto:${dbuser?.email}`}>{dbuser?.email}</a>
            </p>
            <p className="flex gap-2">
              <FiFacebook /> Facebook:
              <a
                href={dbuser?.userData?.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {dbuser?.userData?.facebookUrl}
              </a>
            </p>

            <p>
              <span className="font-bold flex  gap-2 items-center ">
                <FaMoneyBill />
                <p>Total Buy Amount: {dbuser?.totalPurchesAmmount}</p>
              </span>
            </p>
            <p>
              <span className="font-bold flex  gap-2 items-center  ">
                <FiDollarSign /> <p>Total given: {dbuser?.totalSellPrice}</p>
              </span>
            </p>
            <p>
              <span className="font-bold flex  gap-2 items-center">
                <FiDollarSign /> <p>Total Due: {dbuser?.totalDueAmmout}</p>
              </span>
            </p>
          </div>

          <div className="flex gap-4 mt-4 justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
