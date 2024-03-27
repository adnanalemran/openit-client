import { useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading/Loading";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const WebNotice = () => {
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

  const showSuccessAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Success...",
      text: "Publish success",
    });
  };
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, date, notice } = e.target.elements;

    const noticeTitle = title.value;
    const noticeDate = date.value;
    const noticeDetails = notice.value;

    const postDate = new Date().toLocaleDateString();

    const formData = {
      noticeTitle: noticeTitle,
      noticeDate: noticeDate,
      postDate: postDate,
      noticeDetails: noticeDetails,
    };
 
    axiosSecure.post("/notice", formData).then(() => {
      refetch();
      showSuccessAlert();
    });
  };
  if (loading === true) {
    return <Loading />;
  }
  return (
    <div className="">
      <div className="card bg-gradient-to-b from-blue-400 to-blue-600">
        <div className="text-2xl pt-3 pb-2 text-white font-bold">
          Write a Website notice
        </div>
        <div className="text-white">
          <h4>Total Publish notice : {notices?.length}</h4>
        </div>
        <hr className="border-b-1 border-purple-400" />
        <form className="p-4" onSubmit={handleSubmit}>
          <div className="flex justify-between gap-4">
            <input
              type="text"
              name="title"
              className="input input-bordered w-1/2 mb-2"
              placeholder="Title"
            />
            <input
              type="date"
              name="date"
              className="input input-bordered w-1/2 mb-2"
            />
          </div>

          <textarea
            type="text"
            name="notice"
            rows="5"
            cols="50"
            className="  w-full   mb-2 textarea textarea-bordered"
            placeholder="notice "
          />

          <br />
          <div className="flex justify-end gap-4">
            <Link to="/dashboard/allNotice">
              <button className="btn  ">See All notice</button>
            </Link>
            <button type="submit" className="btn">
              Publish Notice
            </button>
          </div>
        </form>
        
      </div>
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
               
               <Link className="text-blue-800 " to={`/notice/${notice?._id}`}>
                  <p>
                    <td className="text-blue-500">{notice?.noticeTitle}</td>
                  </p>
                </Link>
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

export default WebNotice;
