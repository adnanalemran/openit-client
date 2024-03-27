import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  FaDownload,
  FaEdit,
  FaMoneyBill,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosPublic";

import { FiDollarSign, FiFacebook, FiMail } from "react-icons/fi";
import Loading from "../Loading/Loading";

const SingleProfile = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const { data: user = [] } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${id}`);
      setLoading(false);
      return res.data;
    },
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-base-300 p-8 rounded-lg shadow-md">
      {user ? (
        <>
          {user?.userType === "user" && (
            <h2 className="text-gray-500 p-4">সে একজন আবেদনকারী</h2>
          )}
          <div className="flex flex-col lg:flex-row-reverse w-full">
            <div className="w-full lg:w-1/2">
              <p className="p-4">
                <span className="font-bold text-blue-500"> </span>

                {!user?.beach && <span>Beach No select</span>}
                <div className=" ">
                  <div className="text-2xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text "><span > {user?.beach}</span>  batch student</div>
                   
                </div>
              </p>

              <div className="avatar">
                <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} alt={user?.displayName} />
                </div>
              </div>

              <div className="p-4 text-sm">
                <p className="mt-4 text-center text-gray-500">
                  BTEB Id :
                  {!user?.btebId && (
                    <span className="text-red-600">Student not registered</span>
                  )}
                  {user?.btebId}
                </p>
                <p className="mt-4 text-center text-gray-500">
                  Profile Id: {user?._id}
                </p>
              </div>

              <div className=" w-full flex gap-4 mx-auto items-center justify-center">
                <Link to={user?.photoURL}>
                  <button className="btn btn-1">
                    <FaDownload /> Image download
                  </button>
                </Link>

                <Link
                  to={`/dashboard/EditProfile/${user?._id}`}
                  className="text-blue-800 font-bold"
                >
                  <button className="btn btn-info">
                    <FaEdit /> Edit User info
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-left mt-4 lg:ml-8 text-gray-800">
              <p className="text-xl font-bold mb-4 text-gray-900">
                {user?.displayName}`s profile information
              </p>
              <hr className=" border-dashed border-1 border-indigo-400 p-4 my-4" />
              <div className="flex flex-col gap-2">
                <p>
                  <span className="font-bold flex gap-2">
                    <FaUser /> <p>Name:{user?.displayName}</p>
                  </span>
                </p>

                <p className="flex gap-2">
                  <FaPhone />
                  <a href={`tel:${user?.phoneNo}`}>{user?.phoneNo}</a>
                </p>

                <p className="flex gap-2">
                  <FiMail /> <a href={`mailto:${user?.email}`}>{user?.email}</a>
                </p>
                <p className="flex gap-2">
                  <FiFacebook /> Facebook:
                  <a
                    href={user?.userData?.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {user?.userData?.facebookUrl}
                  </a>
                </p>

                <p>
                  <span className="font-bold flex  gap-2 items-center ">
                    <FaMoneyBill />
                    <p>Total Buy Amount: {user?.totalPurchesAmmount}</p>
                  </span>
                </p>
                <p>
                  <span className="font-bold flex  gap-2 items-center  ">
                    <FiDollarSign /> <p>Total given: {user?.totalSellPrice}</p>
                  </span>
                </p>
                <p>
                  <span className="font-bold flex  gap-2 items-center">
                    <FiDollarSign /> <p>Total Due: {user?.totalDueAmmout}</p>
                  </span>
                </p>
              </div>

              <div className="flex gap-4 mt-4 justify-end"></div>
            </div>
          </div>

          <hr className=" border-dashed border-1 border-indigo-400 p-4 my-4" />

          <div className=" flex flex-col gap-2 text-left lg:px-8">
            <p>
              <span className="font-bold text-blue-500">Name: </span>
              {user?.userData.displayName}
            </p>
            <p>
              <span className="font-bold text-blue-500">Father Name: </span>
              {user?.userData.fatherName}
            </p>
            <p>
              <span className="font-bold text-blue-500">Mother Name: </span>
              {user?.userData.motherName}
            </p>
            <p>
              <span className="font-bold text-blue-500">Date Of Birth : </span>
              {user?.userData.dateOfBirth}
            </p>
            <p>
              <span className="font-bold text-blue-500">
                Education Qualification :
              </span>
              {user?.userData.educationQualification}
            </p>
            <p>
              <span className="font-bold text-blue-500">
                School/University name :
              </span>
              {user?.userData.schoolUniversity}
            </p>
            <p>
              <span className="font-bold text-blue-500">SSC Roll No :</span>
              {user?.userData.sscRollNo}
            </p>
            <p>
              <span className="font-bold text-blue-500">SSC Reg No :</span>
              {user?.userData.sscRegNo}
            </p>
            <p>
              <span className="font-bold text-blue-500">SSC Board Name :</span>
              {user?.userData.SSCBoardName}
            </p>
            <p>
              <span className="font-bold text-blue-500">
                SSC Passing Year :
              </span>
              {user?.userData.passingYear}
            </p>
            <p>
              <span className="font-bold text-blue-500">Role No:</span>
              {user?.userType}
            </p>
          </div>
        </>
      ) : (
        // Render skeleton loader while data is being fetched
        <div className="flex flex-col gap-4 text-gray-500">
          <Skeleton height={20} width={300} />
          <Skeleton height={20} width={200} />
          <Skeleton height={20} width={400} />
          <Skeleton height={20} width={350} />
          {/* Add more Skeleton elements as needed */}
        </div>
      )}
    </div>
  );
};

export default SingleProfile;
