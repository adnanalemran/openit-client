import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosPublic";
// import EditProfile from "./EditProfile";
import { useQuery } from "@tanstack/react-query";
import { FaPhone, FaEdit, FaDownload } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
const SingleProfile = () => {
  const { id } = useParams();

  const axiosSecure = useAxiosSecure();
  const { data: user = [] } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${id}`);
      return res.data;
    },
  });

  return (
    <div className="bg-base-300   p-8 rounded-lg shadow-md">
      {user?.userType === "user" && (
        <h2 className="text-gray-500  p-4">সে একজন আবেদনকারী</h2>
      )}
      <div className="flex flex-col lg:flex-row-reverse w-full">
        <div className="w-full lg:w-1/2">
          <div className="avatar">
            <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL} alt={user?.displayName} />
            </div>
          </div>

          <p className="mt-4 text-center text-gray-500">Id: {user?._id}</p>

          <div className=" w-full flex gap-4 mx-auto items-center justify-center">
            <Link to={user?.photoURL}>
              <button className="btn btn-1">
                <FaDownload /> Image download
              </button>
            </Link>

            <Link
              className="text-blue-800 font-bold"
              // Assuming you want to navigate to the user's profile edit page
              // to={`/EditProfile/${user?._id}`}
            >
              <button className="btn btn-info">
                <FaEdit /> Edit User info
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-left mt-4 lg:ml-8">
          <p className="text-xl font-bold mb-4 text-gray-800">
            {user?.displayName}`s profile information
          </p>
          <p>
            <span className="font-bold text-blue-500">Name: </span>
            {user?.displayName}
          </p>

          <p className="flex gap-2 text-purple-600">
            <FaPhone /> <a href={`tel:${user?.phoneNo}`}>{user?.phoneNo}</a>
          </p>

          <p className="flex gap-2 text-purple-600">
            <FiMail /> <a href={`mailto:${user?.email}`}>{user?.email}</a>
          </p>

          <p>
            <span className="font-bold flex  gap-2 items-center text-green-500">
              <FaMoneyBill />{" "}
              <p>Total Buy Amount: {user?.totalPurchesAmmount}</p>
            </span>
          </p>
          <p>
            <span className="font-bold flex  gap-2 items-center  text-info">
              <FiDollarSign /> <p>Total given: {user?.totalSellPrice}</p>
            </span>
          </p>
          <p>
            <span className="font-bold flex  gap-2 items-center text-red-500">
              <FiDollarSign /> <p>Total Due: {user?.totalDueAmmout}</p>
            </span>
          </p>
          <div className="flex gap-4 mt-4 justify-end"></div>
        </div>
      </div>

      <hr  className=" border-dashed border-1 border-indigo-400 p-4 my-4"/>

    <div className=" text-left">
    <p>
        <span className="font-bold text-blue-500" >Role No:</span>
        {user?.userType}
      </p>
      <p>
        <span className="font-bold text-blue-500">Beach No: </span>
        {!user?.beach && <span>Beach No select</span>}
        {user?.beach}
      </p>
    </div>

    </div>
  );
};

export default SingleProfile;
