import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  FaDownload,
  FaEdit,
  FaMoneyBill,
  FaPhone,
  FaUser,
  FaEnvelope,
  FaFacebook,
  FaGraduationCap,
  FaCalendarAlt,
  FaSchool,
  FaIdCard,
  FaUserTie,
  FaUserFriends,
  FaPrint,
  FaShare,
  FaArrowLeft,
  FaCrown,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
} from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import { Link, useParams, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosPublic";
import { FiDollarSign, FiMail, FiTrendingUp, FiActivity } from "react-icons/fi";
import Loading from "../Loading/Loading";

const SingleProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  
  const { data: user = [] } = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${id}`);
      setLoading(false);
      return res.data;
    },
  });

  if (loading) {
    return <Loading />;
  }

  const formatDate = (dateString) => {
    if (!dateString) return "Not provided";
    return new Date(dateString).toLocaleDateString('bn-BD', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'active':
        return <span className="badge badge-success gap-1"><FaCheckCircle /> সক্রিয়</span>;
      case 'pending':
        return <span className="badge badge-warning gap-1"><FaClock /> অপেক্ষমান</span>;
      case 'inactive':
        return <span className="badge badge-error gap-1"><FaExclamationTriangle /> নিষ্ক্রিয়</span>;
      default:
        return <span className="badge badge-info gap-1">অজানা</span>;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${user?.displayName} - Student Profile`,
          text: `View ${user?.displayName}'s profile information`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('লিংক কপি করা হয়েছে!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate(-1)}
                className="btn btn-ghost btn-circle hover:bg-blue-100"
              >
                <FaArrowLeft className="text-blue-600" />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  শিক্ষার্থীর প্রোফাইল
                </h1>
                <p className="text-gray-600">বিস্তারিত তথ্য এবং পরিসংখ্যান</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handlePrint}
                className="btn btn-outline btn-sm gap-2"
              >
                <FaPrint /> প্রিন্ট
              </button>
              <button
                onClick={handleShare}
                className="btn btn-outline btn-sm gap-2"
              >
                <FaShare /> শেয়ার
              </button>
            </div>
          </div>

          {/* Profile Header */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="avatar">
                <div className="w-32 h-32 rounded-full ring-4 ring-blue-200 shadow-lg">
                  <img 
                    src={user?.photoURL || '/default-avatar.png'} 
                    alt={user?.displayName}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              {user?.userType === 'admin' && (
                <div className="absolute -top-2 -right-2">
                  <FaCrown className="text-yellow-500 text-2xl" />
                </div>
              )}
            </div>

            {/* Basic Info */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {user?.displayName}
                </h2>
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-3">
                  <span className="badge badge-primary badge-lg">
                    {user?.userType === 'admin' ? 'অ্যাডমিন' : 'শিক্ষার্থী'}
                  </span>
                  {getStatusBadge(user?.status || 'active')}
                </div>
                <p className="text-lg text-blue-600 font-semibold">
                  {user?.beach} ব্যাচের শিক্ষার্থী
                </p>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <FaPhone className="text-blue-600" />
                  <a href={`tel:${user?.phoneNo}`} className="text-gray-700 hover:text-blue-600">
                    {user?.phoneNo || 'Not provided'}
                  </a>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <FaEnvelope className="text-blue-600" />
                  <a href={`mailto:${user?.email}`} className="text-gray-700 hover:text-blue-600">
                    {user?.email}
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link to={user?.photoURL}>
                  <button className="btn btn-primary btn-sm gap-2">
                    <FaDownload /> ছবি ডাউনলোড
                  </button>
                </Link>
                <Link to={`/dashboard/admin-edit-profile/${user?._id}`}>
                  <button className="btn btn-secondary btn-sm gap-2">
                    <FaEdit /> সম্পাদনা
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">মোট ক্রয়</p>
                <p className="text-2xl font-bold text-gray-800">
                  ৳{user?.totalPurchesAmmount || 0}
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <FiTrendingUp className="text-blue-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">মোট প্রদত্ত</p>
                <p className="text-2xl font-bold text-gray-800">
                  ৳{user?.totalSellPrice || 0}
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <FiDollarSign className="text-green-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">মোট বকেয়া</p>
                <p className="text-2xl font-bold text-gray-800">
                  ৳{user?.totalDueAmmout || 0}
                </p>
              </div>
              <div className="p-3 bg-orange-100 rounded-full">
                <FaMoneyBill className="text-orange-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">অ্যাকাউন্ট স্ট্যাটাস</p>
                <p className="text-lg font-bold text-gray-800">
                  {user?.userType === 'admin' ? 'অ্যাডমিন' : 'শিক্ষার্থী'}
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <FaUser className="text-purple-600 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FaUser className="text-blue-600" />
              ব্যক্তিগত তথ্য
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <FaUserTie className="text-blue-600 w-5" />
                <div>
                  <p className="text-sm text-gray-600">পিতার নাম</p>
                  <p className="font-semibold">{user?.userData?.fatherName || 'Not provided'}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <FaUserFriends className="text-blue-600 w-5" />
                <div>
                  <p className="text-sm text-gray-600">মাতার নাম</p>
                  <p className="font-semibold">{user?.userData?.motherName || 'Not provided'}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <FaCalendarAlt className="text-blue-600 w-5" />
                <div>
                  <p className="text-sm text-gray-600">জন্ম তারিখ</p>
                  <p className="font-semibold">{formatDate(user?.userData?.dateOfBirth)}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <FaGraduationCap className="text-blue-600 w-5" />
                <div>
                  <p className="text-sm text-gray-600">শিক্ষাগত যোগ্যতা</p>
                  <p className="font-semibold">{user?.userData?.educationQualification || 'Not provided'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FaSchool className="text-green-600" />
              শিক্ষাগত তথ্য
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <FaSchool className="text-green-600 w-5" />
                <div>
                  <p className="text-sm text-gray-600">স্কুল/বিশ্ববিদ্যালয়</p>
                  <p className="font-semibold">{user?.userData?.schoolUniversity || 'Not provided'}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <FaIdCard className="text-green-600 w-5" />
                <div>
                  <p className="text-sm text-gray-600">SSC রোল নং</p>
                  <p className="font-semibold">{user?.userData?.sscRollNo || 'Not provided'}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <FaIdCard className="text-green-600 w-5" />
                <div>
                  <p className="text-sm text-gray-600">SSC রেজিস্ট্রেশন নং</p>
                  <p className="font-semibold">{user?.userData?.sscRegNo || 'Not provided'}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <FaSchool className="text-green-600 w-5" />
                <div>
                  <p className="text-sm text-gray-600">SSC বোর্ড</p>
                  <p className="font-semibold">{user?.userData?.SSCBoardName || 'Not provided'}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <FaCalendarAlt className="text-green-600 w-5" />
                <div>
                  <p className="text-sm text-gray-600">পাসের বছর</p>
                  <p className="font-semibold">{user?.userData?.passingYear || 'Not provided'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FiActivity className="text-purple-600" />
            অতিরিক্ত তথ্য
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <FaIdCard className="text-purple-600 w-5" />
                <div>
                  <p className="text-sm text-gray-600">BTEB ID</p>
                  <p className="font-semibold">
                    {user?.btebID ? user.btebID : (
                      <span className="text-red-600">শিক্ষার্থী নিবন্ধিত নয়</span>
                    )}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <FaIdCard className="text-purple-600 w-5" />
                <div>
                  <p className="text-sm text-gray-600">প্রোফাইল ID</p>
                  <p className="font-mono text-sm">{user?._id}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <FaUser className="text-purple-600 w-5" />
                <div>
                  <p className="text-sm text-gray-600">রোল</p>
                  <p className="font-semibold">{user?.userType}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              {user?.userData?.facebookUrl && (
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <FaFacebook className="text-blue-600 w-5" />
                  <div>
                    <p className="text-sm text-gray-600">ফেসবুক</p>
                    <a
                      href={user?.userData?.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline break-all"
                    >
                      {user?.userData?.facebookUrl}
                    </a>
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <FaGraduationCap className="text-purple-600 w-5" />
                <div>
                  <p className="text-sm text-gray-600">ব্যাচ</p>
                  <p className="font-semibold">{user?.beach || 'Not specified'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="text-center sm:text-left">
              <p className="text-gray-600">
                সর্বশেষ আপডেট: {formatDate(user?.updatedAt)}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => navigate(-1)}
                className="btn btn-outline btn-sm gap-2"
              >
                <FaArrowLeft /> ফিরে যান
              </button>
              <Link to={`/dashboard/admin-edit-profile/${user?._id}`}>
                <button className="btn btn-primary btn-sm gap-2">
                  <FaEdit /> সম্পাদনা করুন
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProfile;
