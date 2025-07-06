import { useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading/Loading";
import { Link } from "react-router-dom";
import { FaBell, FaCalendarAlt, FaEye, FaNewspaper, FaArrowRight, FaClock } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";

const Notice = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [selectedNotice, setSelectedNotice] = useState(null);
  
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

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('bn-BD', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Function to check if notice is recent (within 7 days)
  const isRecent = (dateString) => {
    const noticeDate = new Date(dateString);
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return noticeDate > sevenDaysAgo;
  };

  if (loading === true) {
    return (
      <div className="space-y-4">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
            <FaBell className="text-orange-500 text-sm" />
          </div>
          <h3 className="font-bold text-gray-900">নোটিশ বোর্ড</h3>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <FaClock className="text-gray-400" />
          <span>সর্বশেষ আপডেট</span>
        </div>
      </div>

      {/* Notice Count Badge */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          {notices?.length}টি নোটিশ উপলব্ধ
        </div>
        {notices?.some(notice => isRecent(notice.noticeDate)) && (
          <div className="flex items-center gap-1 bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
            <MdNotificationsActive className="text-red-500" />
            <span>নতুন</span>
          </div>
        )}
      </div>

      {/* Notices List */}
      <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
        {notices?.length === 0 ? (
          <div className="text-center py-8">
            <FaNewspaper className="text-gray-300 text-4xl mx-auto mb-3" />
            <p className="text-gray-500 text-sm">কোন নোটিশ নেই</p>
          </div>
        ) : (
          notices?.map((notice, index) => (
            <div
              key={notice?._id}
              className={`group relative bg-white border border-gray-200 rounded-lg p-4 hover:border-orange-300 hover:shadow-md transition-all duration-300 cursor-pointer ${
                isRecent(notice.noticeDate) ? 'ring-2 ring-orange-100' : ''
              }`}
              onClick={() => setSelectedNotice(selectedNotice === notice?._id ? null : notice?._id)}
            >
              {/* New Badge */}
              {isRecent(notice.noticeDate) && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  নতুন
                </div>
              )}

              {/* Notice Number */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-orange-600 transition-colors">
                      {notice?.noticeTitle}
                    </h4>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-gray-400 text-xs" />
                  <span className="text-xs text-gray-500">
                    {formatDate(notice?.noticeDate)}
                  </span>
                </div>
              </div>

              {/* Expandable Content */}
              {selectedNotice === notice?._id && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="text-sm text-gray-600 mb-3">
                    {notice?.noticeDescription || 'কোন বিবরণ নেই'}
                  </div>
                  <Link
                    to={`/notice/${notice?._id}`}
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>সম্পূর্ণ নোটিশ পড়ুন</span>
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )}

              {/* Hover Action */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
            </div>
          ))
        )}
      </div>

      {/* View All Button */}
      {notices?.length > 0 && (
        <div className="pt-4 border-t border-gray-100">
          <Link
            to="/notices"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
          >
            <FaEye className="text-sm" />
            <span>সব নোটিশ দেখুন</span>
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <div className="text-blue-600 font-bold text-lg">
            {notices?.filter(notice => isRecent(notice.noticeDate)).length}
          </div>
          <div className="text-blue-600 text-xs">সাম্প্রতিক</div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <div className="text-green-600 font-bold text-lg">
            {notices?.length}
          </div>
          <div className="text-green-600 text-xs">মোট</div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
