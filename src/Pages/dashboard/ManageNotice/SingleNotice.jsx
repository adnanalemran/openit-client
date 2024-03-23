import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hook/useAxiosPublic";
import Loading from "../../Loading/Loading";

const SingleNotice = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const { data: notice = [] } = useQuery({
    queryKey: ["notice"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/notice/${id}`);
      setLoading(false);
      return res.data;
    },
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-base-300 pt-16 p-12 rounded-lg shadow-md text-bangla   mx-auto">
    <div className="container mx-auto">
    <h2 className="text-3xl py-8 font-semibold text-center   text-gray-800">
      Open IT Institute
      </h2>
      <div className="flex justify-between ">
        <div className="">Notice Date {notice?.noticeDate}</div>
       <p>Publish date {notice?.postDate} </p> 
      </div>
      <hr className="border-1 border-purple-300 mb-8" />
      <h1 className="text-3xl "> Title: {notice?.noticeTitle}</h1>

      <br />
      {notice?.noticeDetails}
    </div>
    </div>
  );
};

export default SingleNotice;
