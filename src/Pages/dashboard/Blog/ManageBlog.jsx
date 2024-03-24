 
import { useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading/Loading";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageBlog = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const { data: notices = [], refetch } = useQuery({
    queryKey: ["notice"],
    queryFn: async () => {
      const res = await axiosSecure.get("/blog", {});
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, image, notice } = e.target.elements;

    const noticeTitle = title.value;
    const imageUrl = image.value;
    const noticeDetails = notice.value;

    const postDate = new Date().toLocaleDateString();

    const formData = {
      noticeTitle: noticeTitle,
      imageUrl: imageUrl,
      postDate: postDate,
      noticeDetails: noticeDetails,
    };
 
    axiosSecure.post("/blog", formData).then(() => {
      refetch();
      showSuccessAlert();
    });
  };
  if (loading === true) {
    return <Loading />;
  }
  return (
    <div className="">
      <div className="card bg-gradient-to-b  ">
        <div className="text-2xl pt-3 pb-2   font-bold">
          Write a Website Blog
        </div>
        <div className=" ">
          <h4>Total Publish Blog : {notices?.length}</h4>
        </div>
        <hr className="border-b-1 border-purple-400" />
        <form className="p-4" onSubmit={handleSubmit}>
          <div className="flex justify-between gap-4">
            <input
              type="text"
              name="title"
              required
              className="input input-bordered w-1/2 mb-2"
              placeholder="Title"
            />
            <input
              type="text"
              name="image"
              required
              className="input input-bordered w-1/2 mb-2"
            />
          </div>

          <textarea
            type="text"
            name="notice"
            required
            rows="5"
            cols="50"
            className="  w-full   mb-2 textarea textarea-bordered"
            placeholder="notice "
          />

          <br />
          <div className="flex justify-end gap-4">
           
            <button type="submit" className="btn">
              Publish Blog
            </button>
          </div>
        </form>
        







        
      </div>
    </div>
  );
};

 

export default ManageBlog;