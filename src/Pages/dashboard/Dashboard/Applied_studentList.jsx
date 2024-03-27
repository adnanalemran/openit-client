import { useQuery } from "@tanstack/react-query";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosPublic";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaTrash, FaUser } from "react-icons/fa";
import Loading from "../../Loading/Loading";
import { IoMdPersonAdd } from "react-icons/io";
const Applied_studentList = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const { data: user = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("userv2/appliedStudent", {});
      if (res.data) {
        setLoading(false);
      }
      return res.data;
    },
  });

  const handleRoleChange = (e, user) => {
    e.preventDefault();

    const newRole = e.target.role.value;
    const newBeach = e.target.beach.value;

    axiosSecure
      .patch(`/userv2/${user?._id}`, { role: newRole, beach: newBeach })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `success  Change role!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (loading === true) {
    return <Loading />;
  }

  //this a comment
  return (
    <div className="bg-base-200 p-0 m-0 lg:p-4 lg:m-4 rounded-xl">
      <div className="text-3xl py-2">
        <h2>Applied Student user</h2>
      </div>
      <div className="flex w-full  "></div>
      <h4>Total user : {user?.length}</h4>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="text-left">No</th>
              <th className="text-left">Image</th>
              <th className="text-left">Name</th>

              <th className="text-left">Role</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>
          <tbody className=" ">
            {user?.map((user, index) => (
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
                      className="text-blue-800 "
                      to={`/dashboard/singleUserInfo/${user?._id}`}
                    >
                      <div className="">{user?.displayName}</div>
                    </Link>
                  </div>
                </td>
                <td></td>

                <td>
                  <form onSubmit={(e) => handleRoleChange(e, user)}>
                    <div className=" text-sm flex gap-2">
                      <select
                        name="role"
                        defaultValue={user?.userType}
                        className="px-4 py-0  rounded-md text-black"
                      >
                        <option value="isStudent">Make Student</option>
                        <option value="applied_student">applied_student</option>
                      </select>

                      <input name="beach"  className="px-4 py-0  rounded-md text-black" required placeholder="batch  no" type="number" />

                      <button type="submit" className="btn btn-sm btn-1 ">
                        <IoMdPersonAdd /> Accept 
                      </button>
                    </div>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applied_studentList;
