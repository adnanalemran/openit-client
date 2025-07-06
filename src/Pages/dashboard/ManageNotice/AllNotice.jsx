import { useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaTrash, FaPlus, FaSpinner } from "react-icons/fa";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

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
      title: "আপনি কি নিশ্চিত?",
      text: "এই নোটিশটি মুছে ফেলা হবে!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "হ্যাঁ, মুছে ফেলুন!",
      cancelButtonText: "বাতিল",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/notice/${notice?._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "মুছে ফেলা হয়েছে!",
              text: "নোটিশটি সফলভাবে মুছে ফেলা হয়েছে।",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">নোটিশ তালিকা</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg shadow hover:scale-105 transition-transform duration-200">
          <FaPlus /> <span>নতুন নোটিশ</span>
        </button>
      </div>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-x-auto">
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <FaSpinner className="animate-spin text-3xl text-orange-500" />
            <span className="ml-3 text-orange-500 font-semibold">লোড হচ্ছে...</span>
          </div>
        ) : (
          <table className="min-w-full table-auto">
            <thead className="sticky top-0 bg-gradient-to-r from-orange-50 to-red-50 z-10">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">#</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">বিষয়</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">নোটিশ তারিখ</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">তৈরির তারিখ</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody>
              {notices?.map((notice, index) => (
                <tr
                  key={notice?._id}
                  className={
                    index % 2 === 0
                      ? "bg-orange-50 hover:bg-orange-100 transition"
                      : "bg-white hover:bg-orange-100 transition"
                  }
                >
                  <td className="px-4 py-3 font-semibold text-gray-700">{index + 1}</td>
                  <td className="px-4 py-3 text-blue-600 font-medium">{notice.noticeTitle}</td>
                  <td className="px-4 py-3 text-gray-600">{formatDate(notice.noticeDate)}</td>
                  <td className="px-4 py-3 text-gray-500">{formatDate(notice.postDate)}</td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => handleDeleteNoticce(notice)}
                      className="p-2 rounded-full bg-red-100 hover:bg-red-500 hover:text-white transition-all duration-200 shadow tooltip"
                      title="নোটিশ মুছুন"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
              {notices.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-gray-400 font-semibold">
                    কোনো নোটিশ পাওয়া যায়নি
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AllNotice;
