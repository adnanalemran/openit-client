import { useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading/Loading";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { 
  FaTrash, 
  FaPlus, 
  FaEye, 
  FaEdit, 
  FaCalendarAlt, 
  FaNewspaper,
  FaChevronLeft,
  FaChevronRight,
  FaSearch
} from "react-icons/fa";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const WebNotice = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

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

  // Filter notices based on search query
  const filteredNotices = notices.filter((notice) =>
    notice.noticeTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    notice.noticeDetails?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNotices = filteredNotices.slice(startIndex, endIndex);

  const showSuccessAlert = () => {
    Swal.fire({
      icon: "success",
      title: "সফল!",
      text: "নোটিশ সফলভাবে প্রকাশিত হয়েছে",
    });
  };

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
      e.target.reset(); // Reset form
    });
  };

  if (loading === true) {
    return <Loading />;
  }

  return (
    <div className="space-y-6">
      {/* Create Notice Form */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <FaNewspaper />
              নতুন নোটিশ তৈরি করুন
            </h2>
            <p className="text-blue-100 text-sm mt-1">মোট প্রকাশিত নোটিশ: {notices?.length}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">নোটিশের শিরোনাম</label>
              <input
                type="text"
                name="title"
                required
                className="w-full px-4 py-3 rounded-lg border-0 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
                placeholder="নোটিশের শিরোনাম লিখুন"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">নোটিশের তারিখ</label>
              <input
                type="date"
                name="date"
                required
                className="w-full px-4 py-3 rounded-lg border-0 text-gray-800 focus:ring-2 focus:ring-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">নোটিশের বিবরণ</label>
            <textarea
              name="notice"
              required
              rows="4"
              className="w-full px-4 py-3 rounded-lg border-0 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none resize-none"
              placeholder="নোটিশের বিস্তারিত বিবরণ লিখুন"
            />
          </div>

          <div className="flex justify-end gap-3">
            <Link to="/dashboard/allNotice">
              <button type="button" className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors">
                সকল নোটিশ দেখুন
              </button>
            </Link>
            <button type="submit" className="px-6 py-2 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-medium transition-colors flex items-center gap-2">
              <FaPlus className="text-sm" />
              নোটিশ প্রকাশ করুন
            </button>
          </div>
        </form>
      </div>

      {/* Notice List */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-lg font-bold text-gray-800">নোটিশ তালিকা</h3>
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="নোটিশ খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">শিরোনাম</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">প্রকাশের তারিখ</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">নোটিশের তারিখ</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentNotices.map((notice, index) => (
                <tr key={notice?._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {startIndex + index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      to={`/notice/${notice?._id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      {notice?.noticeTitle}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(notice.postDate)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(notice.noticeDate)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Link
                        to={`/notice/${notice?._id}`}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="দেখুন"
                      >
                        <FaEye className="text-sm" />
                      </Link>
                      <button
                        onClick={() => handleDeleteNoticce(notice)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="মুছুন"
                      >
                        <FaTrash className="text-sm" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">
                দেখানো হচ্ছে {startIndex + 1} থেকে {Math.min(endIndex, filteredNotices.length)} এর মধ্যে {filteredNotices.length} টি
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <FaChevronLeft className="text-sm" />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                      currentPage === page
                        ? "bg-orange-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <FaChevronRight className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        )}

        {currentNotices.length === 0 && (
          <div className="text-center py-12">
            <FaNewspaper className="text-4xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">কোনো নোটিশ পাওয়া যায়নি</h3>
            <p className="text-gray-600">নতুন নোটিশ তৈরি করুন অথবা অনুসন্ধানের শব্দ পরিবর্তন করুন</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebNotice;
