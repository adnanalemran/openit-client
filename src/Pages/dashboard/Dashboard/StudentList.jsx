import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosPublic";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaTrash, FaUser } from "react-icons/fa";
import Loading from "../../Loading/Loading";

const StudentList = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const { data: user = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("userv2/studentAllData", {});
      if (res.data) {
        setLoading(false);
      }
      return res?.data;
    },
  });


  const filteredUsers = Array.isArray(user) ? user.filter((user) =>
  user.displayName.toLowerCase().includes(searchQuery.toLowerCase())
) : [];




  if (loading === true) {
    return (
      <div className="  ">
        <Loading />
      </div>
    );
  }

  //this a comment
  return (
    <div className="bg-base-200 p-0 m-0 lg:p-4 lg:m-4 rounded-xl">
      <div className="text-3xl py-2">
        <h2>Student list</h2>
      </div>
      <h4>Total student : {user?.length}</h4>

      <label className="input input-bordered flex items-center gap-2 w-1/2 mx-auto my-8 ">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target?.value)}
          className="grow "
          placeholder="Search Student by name "
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

    
      <div className="overflow-x-auto ">
        <table className="table">
          <thead className="text-sm   text-left">
            <th>No</th>
            <th>image</th>
            <th>Name</th>
            <th>beach no</th>
            <th>Email</th>
            <th>Mobile no</th>
          </thead>
          <tbody className=" text-left">
            {filteredUsers.map((user, index) => (
              <tr key={user?._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user?.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>

                <td>
                  <div>
                  <Link
                      className="text-blue-800 font-bold"
                      to={`/dashboard/singleUserInfo/${user?._id}`}
                    >
                      <div className="font-bold">{user?.displayName}</div>
                    </Link>
                  </div>
                </td>

                <td>
                  <div>
                    <div className="font-bold">{user?.beach} </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{user?.email} </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{user?.phoneNo} </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
