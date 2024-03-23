import { useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading/Loading";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const Notice = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const { data: notices = [], refetch } = useQuery({
    queryKey: ["notice"],
    queryFn: async () => {
      const res = await axiosSecure.get("/notice/latest", {});
      if (res.data) {
        setLoading(false);
      }
      return res.data;
    },
  });


  if (loading === true) {
    return <Loading />;
  }


  return (
    <div data-aos="fade-left" className="border rounded-lg border-gray-500">
      <h2 className="text-center font-bold text-xl border-b-2 py-4 border-gray-500">
        নোটিশ বোর্ড
      </h2>

      <div className="overflow-x-auto pt-8">
        <table className="table">
          <thead>
            <tr>
              <td>no:</td>
              <th>title</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {notices?.map((notice, index) => (
              <tr key={notice?._id}>
                <td>{index + 1}</td>

                <Link className="text-blue-800 " to={`/notice/${notice?._id}`}>
                  <marquee>
                    <td className="text-blue-500">{notice?.noticeTitle}</td>
                  </marquee>
                </Link>

                <td>{notice?.noticeDate}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-sm  mr-6 mb-3 ">See more </button> */}
        </div>
      </div>
    </div>
  );
};

export default Notice;
