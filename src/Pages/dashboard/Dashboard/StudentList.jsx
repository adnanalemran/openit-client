import { useQuery } from "@tanstack/react-query";
 
import useAxiosSecure from "../../../Hook/useAxiosPublic";
import { Link } from "react-router-dom";
import { useState } from "react";
 
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
      <table className="table w-full">
          <thead>
            <tr>
              <th className="text-left">No</th>
              <th className="text-left">Name</th>
              <th className="text-left">Beach No</th>
              <th className="text-left">Email</th>
              <th className="text-left">Mobile No</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <Link
                    to={`/dashboard/singleUserInfo/${user._id}`}
                    className="text-blue-800 font-bold"
                  >
                    {user.displayName}
                  </Link>
                </td>
                <td>{user.beach}</td>
                <td>{user.email}</td>
                <td>{user.phoneNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
