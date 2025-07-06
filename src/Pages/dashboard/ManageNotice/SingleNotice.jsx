import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hook/useAxiosPublic";
import Loading from "../../Loading/Loading";
import { 
  FaBell, 
  FaCalendarAlt, 
  FaClock, 
  FaArrowLeft, 
  FaShare, 
  FaPrint, 
  FaDownload, 
  FaEye,
  FaNewspaper,
  FaUser,
  FaBuilding,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";
import { MdNotificationsActive, MdContentCopy } from "react-icons/md";

const SingleNotice = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  
  const { data: notice = [] } = useQuery({
    queryKey: ["notice", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/notice/${id}`);
      setLoading(false);
      return res.data;
    },
  });

  // Function to format date
  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });
  };

  // Function to check if notice is recent (within 7 days)
  const isRecent = (dateString) => {
    if (!dateString) return false;
    const noticeDate = new Date(dateString);
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return noticeDate > sevenDaysAgo;
  };

  // Function to get category from notice content
  const getCategory = (notice) => {
    const title = notice.noticeTitle?.toLowerCase() || "";
    const details = notice.noticeDetails?.toLowerCase() || "";
    const text = title + " " + details;
    
    if (text.includes("exam") || text.includes("পরীক্ষা")) return "exam";
    if (text.includes("holiday") || text.includes("ছুটি")) return "holiday";
    if (text.includes("admission") || text.includes("ভর্তি")) return "admission";
    if (text.includes("result") || text.includes("ফলাফল")) return "result";
    if (text.includes("class") || text.includes("ক্লাস")) return "class";
    return "general";
  };

  // Function to copy notice link
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Function to print notice
  const printNotice = () => {
    window.print();
  };

  if (loading) {
    return <Loading />;
  }

  if (!notice) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <FaNewspaper className="text-gray-300 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Notice Not Found</h2>
          <p className="text-gray-600 mb-6">The notice you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/notices"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            <FaArrowLeft className="text-sm" />
            <span>Back to Notices</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
          >
            <FaArrowLeft className="text-sm" />
            <span>Back to Notices</span>
          </button>
        </div>

        {/* Main Notice Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full transform -translate-x-12 translate-y-12"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <FaBell className="text-white text-xl" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">Open IT Institute</h1>
                    <p className="text-orange-100">Official Notice</p>
                  </div>
                </div>
                {isRecent(notice.noticeDate) && (
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <MdNotificationsActive />
                    <span>New</span>
                  </div>
                )}
              </div>

              {/* Category Badge */}
              <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                {getCategory(notice).charAt(0).toUpperCase() + getCategory(notice).slice(1)} Notice
              </div>

              {/* Notice Title */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {notice.noticeTitle}
              </h2>

              {/* Date Information */}
              <div className="flex flex-wrap items-center gap-6 text-orange-100">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  <span>Notice Date: {formatDate(notice.noticeDate)}</span>
                </div>
                {notice.postDate && (
                  <div className="flex items-center gap-2">
                    <FaClock />
                    <span>Published: {formatDate(notice.postDate)}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8 pb-6 border-b border-gray-200">
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <MdContentCopy className="text-sm" />
                <span>{copied ? 'Copied!' : 'Copy Link'}</span>
              </button>
              <button
                onClick={printNotice}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <FaPrint className="text-sm" />
                <span>Print</span>
              </button>
              <a
                href={`data:text/plain;charset=utf-8,${encodeURIComponent(notice.noticeDetails)}`}
                download={`notice-${id}.txt`}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <FaDownload className="text-sm" />
                <span>Download</span>
              </a>
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-sm text-gray-500">Share:</span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <FaShare className="text-xs" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(notice.noticeTitle)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <FaShare className="text-xs" />
                </a>
              </div>
            </div>

            {/* Notice Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FaNewspaper className="text-orange-500" />
                  Notice Details
                </h3>
                <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {notice.noticeDetails}
                </div>
              </div>
            </div>

            {/* Additional Information */}
            {notice.noticeDate && (
              <div className="bg-orange-50 rounded-xl p-6 mt-8">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <FaCalendarAlt className="text-orange-500" />
                  Important Dates
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <FaCalendarAlt className="text-orange-500 text-sm" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Notice Date</div>
                      <div className="font-medium text-gray-900">{formatDate(notice.noticeDate)}</div>
                    </div>
                  </div>
                  {notice.postDate && (
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <FaClock className="text-blue-500 text-sm" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Published Date</div>
                        <div className="font-medium text-gray-900">{formatDate(notice.postDate)}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FaBuilding className="text-orange-500" />
            Contact Information
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <FaMapMarkerAlt className="text-orange-500" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Address</div>
                <div className="font-medium text-gray-900">Dhaka, Bangladesh</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <FaPhone className="text-blue-500" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Phone</div>
                <div className="font-medium text-gray-900">+880 1917-019619</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <FaEnvelope className="text-green-500" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Email</div>
                <div className="font-medium text-gray-900">info@openit.edu.bd</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <FaUser className="text-purple-500" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Director</div>
                <div className="font-medium text-gray-900">Md. Nuruzzaman</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <Link
            to="/notices"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
          >
            <FaEye className="text-sm" />
            <span>View All Notices</span>
          </Link>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: white !important;
          }
          .print-content {
            padding: 20px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SingleNotice;
