import { useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";
const AllNotice = () => {

    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(true);
    const { data: notices = [], refetch } = useQuery({
      queryKey: ["notice"],
      queryFn: async () => {
        const res = await axiosSecure.get("/notice", {});
        if (res.data) {
          setLoading(false);
        }
        return res.data;
      },
    });

    const handleDeleteNoticce = (notice) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/notice/${notice?._id}`).then((res) => {
              if (res.data.deletedCount > 0) {
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            });
          }
        });
      };




  
    return (
        <div>
             <div className="card w-full glass">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>no</th>
                <th>title</th>
                <th>Notice Date </th>
                <th>Create  Date </th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
            {notices?.map((notice, index) => (
              <tr key={notice?._id}> <td>{index + 1}</td>
                  <td className="text-blue-500">{notice.noticeTitle}</td>
                  <td>{notice.postDate}</td>
                  <td>{notice.noticeDate}</td>
                  <td>
                  <button
                    onClick={() => handleDeleteNoticce(notice)}
                    className="btn btn-sm btn-error"
                  >
                    <FaTrash />
                  </button>
                </td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        </div>
    );
};

export default AllNotice;