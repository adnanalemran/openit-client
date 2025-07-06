import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosPublic";
import { Link } from "react-router-dom";
import { useState } from "react";
import Loading from "../../Loading/Loading";
import { 
  FaSearch, 
  FaUserGraduate, 
  FaEye, 
  FaEdit, 
  FaTrash, 
  FaDownload,
  FaFilter,
  FaChevronLeft,
  FaChevronRight,
  FaSpinner,
  FaPhone,
  FaEnvelope,
  FaIdCard,
  FaUsers,
  FaUserCheck,
  FaUserClock,
  FaUserTimes,
  FaChartBar,
  FaSort,
  FaSortUp,
  FaSortDown,
  FaPlus,
  FaEllipsisV
} from "react-icons/fa";

const StudentList = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [viewMode, setViewMode] = useState("table"); // table or grid

  const { data: user = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("userv2/studentAllData", {});
      if (res.data) {
        setLoading(false);
      }
      return res?.data;
    },
  });

  // Filter and sort users
  const filteredUsers = Array.isArray(user) 
    ? user.filter((user) =>
        user.displayName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.beach?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.phoneNo?.includes(searchQuery)
      )
    : [];

  // Sort users
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    let aValue, bValue;
    
    switch (sortBy) {
      case "name":
        aValue = a.displayName || "";
        bValue = b.displayName || "";
        break;
      case "beach":
        aValue = a.beach || "";
        bValue = b.beach || "";
        break;
      case "email":
        aValue = a.email || "";
        bValue = b.email || "";
        break;
      default:
        aValue = a.displayName || "";
        bValue = b.displayName || "";
    }

    if (sortOrder === "asc") {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = sortedUsers.slice(startIndex, endIndex);

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  // Calculate statistics
  const totalStudents = user?.length || 0;
  const activeStudents = Math.floor(totalStudents * 0.85); // Mock data
  const newStudents = Math.floor(totalStudents * 0.15); // Mock data

  const getStatusBadge = (student) => {
    // Mock status based on student data
    const isActive = Math.random() > 0.2; // 80% active
    return isActive ? (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
        <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
        সক্রিয়
      </span>
    ) : (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
        <div className="w-2 h-2 bg-gray-400 rounded-full mr-1"></div>
        নিষ্ক্রিয়
      </span>
    );
  };

  if (loading === true) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-orange-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">শিক্ষার্থীদের তথ্য লোড হচ্ছে...</h2>
          <p className="text-gray-500">অনুগ্রহ করে অপেক্ষা করুন</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-6 px-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <FaUserGraduate className="text-orange-500" />
                শিক্ষার্থী তালিকা
              </h1>
              <p className="text-gray-600 mt-1">সকল নিবন্ধিত শিক্ষার্থীদের তথ্য দেখুন এবং পরিচালনা করুন</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium">মোট শিক্ষার্থী: <span className="font-bold">{totalStudents}</span></span>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                <FaDownload className="text-sm" />
                <span className="text-sm">রিপোর্ট</span>
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">মোট শিক্ষার্থী</p>
                <p className="text-3xl font-bold">{totalStudents}</p>
              </div>
              <FaUsers className="text-4xl text-blue-200" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">সক্রিয় শিক্ষার্থী</p>
                <p className="text-3xl font-bold">{activeStudents}</p>
              </div>
              <FaUserCheck className="text-4xl text-green-200" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">নতুন শিক্ষার্থী</p>
                <p className="text-3xl font-bold">{newStudents}</p>
              </div>
              <FaUserClock className="text-4xl text-purple-200" />
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="text"
                  placeholder="শিক্ষার্থীর নাম, ইমেইল, বা বিচ নম্বর দিয়ে খুঁজুন..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => handleSort(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              >
                <option value="name">নাম অনুযায়ী</option>
                <option value="beach">বিচ নম্বর অনুযায়ী</option>
                <option value="email">ইমেইল অনুযায়ী</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {sortOrder === "asc" ? <FaSortUp /> : <FaSortDown />}
              </button>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              >
                <option value={5}>5 per page</option>
                <option value={10}>10 per page</option>
                <option value={20}>20 per page</option>
                <option value={50}>50 per page</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center">
          <p className="text-gray-600">
            দেখানো হচ্ছে <span className="font-semibold text-orange-600">{startIndex + 1}</span> থেকে{" "}
            <span className="font-semibold text-orange-600">{Math.min(endIndex, sortedUsers.length)}</span> এর মধ্যে{" "}
            <span className="font-semibold text-gray-900">{sortedUsers.length}</span> জন শিক্ষার্থী
          </p>
        </div>

        {/* Student Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">শিক্ষার্থী</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">বিচ নম্বর</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">যোগাযোগ</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">স্ট্যাটাস</th>
                  <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">অ্যাকশন</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentUsers.map((user, index) => (
                  <tr key={user._id} className="hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {startIndex + index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full object-cover border-2 border-orange-200"
                            src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}&background=ff6b35&color=fff`}
                            alt={user.displayName}
                          />
                        </div>
                        <div className="ml-4">
                          <Link
                            to={`/dashboard/single-user-info/${user._id}`}
                            className="text-sm font-medium text-gray-900 hover:text-orange-600 transition-colors"
                          >
                            {user.displayName}
                          </Link>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex items-center gap-2">
                        <FaIdCard className="text-orange-500" />
                        <span className="font-medium">{user.beach || "N/A"}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <FaEnvelope className="text-gray-400" />
                          <span className="text-xs">{user.email}</span>
                        </div>
                        {user.phoneNo && (
                          <div className="flex items-center gap-2">
                            <FaPhone className="text-gray-400" />
                            <span className="text-xs">{user.phoneNo}</span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(user)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Link
                          to={`/dashboard/single-user-info/${user._id}`}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="দেখুন"
                        >
                          <FaEye className="text-sm" />
                        </Link>
                        <Link
                          to={`/dashboard/edit-profile/${user._id}`}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="সম্পাদনা করুন"
                        >
                          <FaEdit className="text-sm" />
                        </Link>
                        <button
                          className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                          title="আরও অপশন"
                        >
                          <FaEllipsisV className="text-sm" />
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
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  পৃষ্ঠা {currentPage} এর {totalPages}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg hover:bg-white transition-colors"
                  >
                    <FaChevronLeft className="text-sm" />
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                        currentPage === page
                          ? "bg-orange-500 text-white shadow-lg"
                          : "text-gray-700 hover:bg-white"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg hover:bg-white transition-colors"
                  >
                    <FaChevronRight className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentUsers.length === 0 && (
            <div className="text-center py-12">
              <FaUserGraduate className="text-4xl text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">কোনো শিক্ষার্থী পাওয়া যায়নি</h3>
              <p className="text-gray-600">অনুসন্ধানের শব্দ পরিবর্তন করুন অথবা নতুন শিক্ষার্থী যোগ করুন</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentList;
