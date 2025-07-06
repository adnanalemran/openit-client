import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosPublic";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  FaTrash, 
  FaUser, 
  FaSearch, 
  FaFilter, 
  FaEye, 
  FaCheckCircle, 
  FaTimesCircle,
  FaUserPlus,
  FaGraduationCap,
  FaClock,
  FaSort,
  FaSortUp,
  FaSortDown,
  FaUsers,
  FaSpinner,
  FaArrowLeft,
  FaArrowRight,
  FaCalendarAlt,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";
import Loading from "../../Loading/Loading";

const Applied_studentList = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [processingId, setProcessingId] = useState(null);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["appliedStudents"],
    queryFn: async () => {
      const res = await axiosSecure.get("userv2/appliedStudent", {});
      if (res.data) {
        setLoading(false);
      }
      return res.data;
    },
  });

  // Filter and search functionality
  const filteredUsers = users?.filter(user => {
    const matchesSearch = user?.displayName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user?.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user?.phoneNo?.includes(searchTerm);
    
    const matchesStatus = statusFilter === "all" || user?.userType === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Sorting functionality
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    let aValue, bValue;
    
    switch (sortBy) {
      case "name":
        aValue = a?.displayName?.toLowerCase();
        bValue = b?.displayName?.toLowerCase();
        break;
      case "email":
        aValue = a?.email?.toLowerCase();
        bValue = b?.email?.toLowerCase();
        break;
      case "date":
        aValue = new Date(a?.createdAt);
        bValue = new Date(b?.createdAt);
        break;
      default:
        aValue = a?.displayName?.toLowerCase();
        bValue = b?.displayName?.toLowerCase();
    }

    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = sortedUsers.slice(startIndex, endIndex);

  const handleRoleChange = async (e, user) => {
    e.preventDefault();
    setProcessingId(user._id);

    const newRole = e.target.role.value;
    const newBeach = e.target.beach.value;

    if (!newBeach) {
      Swal.fire({
        title: "ত্রুটি!",
        text: "ব্যাচ নম্বর প্রয়োজন",
        icon: "error",
        position: "top-right",
      });
      setProcessingId(null);
      return;
    }

    try {
      const res = await axiosSecure.patch(`/userv2/${user?._id}`, { 
        role: newRole, 
        beach: parseInt(newBeach) 
      });
      
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: "সফল!",
          text: "শিক্ষার্থী সফলভাবে যোগ করা হয়েছে",
          icon: "success",
          position: "top-right",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "ত্রুটি!",
        text: "কিছু ভুল হয়েছে",
        icon: "error",
        position: "top-right",
      });
    } finally {
      setProcessingId(null);
    }
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const getSortIcon = (field) => {
    if (sortBy !== field) return <FaSort className="text-gray-400" />;
    return sortOrder === "asc" ? <FaSortUp className="text-blue-600" /> : <FaSortDown className="text-blue-600" />;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Not available";
    return new Date(dateString).toLocaleDateString('bn-BD', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                <FaUserPlus className="text-blue-600" />
                আবেদনকারী শিক্ষার্থী
              </h1>
              <p className="text-gray-600 mt-2">নতুন আবেদনকারীদের তালিকা এবং ব্যবস্থাপনা</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-figure text-blue-600">
                    <FaUsers className="text-2xl" />
                  </div>
                  <div className="stat-title">মোট আবেদন</div>
                  <div className="stat-value text-blue-600">{users?.length || 0}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filter Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="নাম, ইমেইল বা ফোন নম্বর অনুসন্ধান করুন..."
                  className="input input-bordered w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-square">
                  <FaSearch />
                </button>
              </div>
            </div>

            <div className="form-control">
              <select
                className="select select-bordered w-full"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">সব অবস্থা</option>
                <option value="applied_student">আবেদনকারী</option>
                <option value="isStudent">শিক্ষার্থী</option>
              </select>
            </div>

            <div className="form-control">
              <select
                className="select select-bordered w-full"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">নাম অনুসারে</option>
                <option value="email">ইমেইল অনুসারে</option>
                <option value="date">তারিখ অনুসারে</option>
              </select>
            </div>

            <div className="form-control">
              <button
                onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                className="btn btn-outline w-full"
              >
                {sortOrder === "asc" ? "আরোহী" : "অবরোহী"}
              </button>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-600">
                মোট ফলাফল: <span className="font-semibold text-blue-600">{filteredUsers.length}</span>
              </span>
              <span className="text-gray-600">
                পৃষ্ঠা: <span className="font-semibold text-blue-600">{currentPage}</span> / <span className="font-semibold text-blue-600">{totalPages}</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">প্রতি পৃষ্ঠায়:</span>
              <span className="badge badge-primary">{itemsPerPage}</span>
            </div>
          </div>
        </div>

        {/* Students List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {currentUsers?.map((user, index) => (
            <div key={user?._id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 h-12 rounded-full ring-2 ring-white">
                        <img
                          src={user?.photoURL || '/default-avatar.png'}
                          alt={user?.displayName}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{user?.displayName}</h3>
                      <p className="text-blue-100 text-sm">#{startIndex + index + 1}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-yellow-300" />
                    <span className="text-sm">{formatDate(user?.createdAt)}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <FaEnvelope className="text-blue-600 w-4" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-600">ইমেইল</p>
                      <p className="font-medium text-gray-800 truncate">{user?.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <FaPhone className="text-green-600 w-4" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-600">ফোন নম্বর</p>
                      <p className="font-medium text-gray-800">{user?.phoneNo || 'Not provided'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <FaGraduationCap className="text-purple-600 w-4" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-600">বর্তমান অবস্থা</p>
                      <span className="badge badge-warning badge-sm">
                        {user?.userType === 'applied_student' ? 'আবেদনকারী' : 'শিক্ষার্থী'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Form */}
                <form onSubmit={(e) => handleRoleChange(e, user)} className="space-y-4">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">ব্যাচ নম্বর</span>
                      </label>
                      <input
                        name="beach"
                        type="number"
                        required
                        placeholder="ব্যাচ নম্বর লিখুন"
                        className="input input-bordered w-full focus:border-blue-500 focus:ring-blue-500"
                        min="1"
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">অ্যাকশন</span>
                      </label>
                      <select
                        name="role"
                        defaultValue="isStudent"
                        className="select select-bordered w-full focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="isStudent">শিক্ষার্থী হিসেবে গ্রহণ করুন</option>
                        <option value="applied_student">আবেদনকারী হিসেবে রাখুন</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      to={`/dashboard/single-user-info/${user?._id}`}
                      className="btn btn-outline btn-sm flex-1 gap-2"
                    >
                      <FaEye /> দেখুন
                    </Link>
                    <button
                      type="submit"
                      disabled={processingId === user._id}
                      className="btn btn-primary btn-sm flex-1 gap-2"
                    >
                      {processingId === user._id ? (
                        <>
                          <FaSpinner className="animate-spin" />
                          প্রক্রিয়াকরণ...
                        </>
                      ) : (
                        <>
                          <FaCheckCircle />
                          গ্রহণ করুন
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-600">
                দেখানো হচ্ছে {startIndex + 1} থেকে {Math.min(endIndex, filteredUsers.length)} এর মধ্যে {filteredUsers.length} টি ফলাফল
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="btn btn-outline btn-sm gap-2"
                >
                  <FaArrowLeft /> আগের
                </button>
                
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pageNum = i + 1;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`btn btn-sm ${currentPage === pageNum ? 'btn-primary' : 'btn-outline'}`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="btn btn-outline btn-sm gap-2"
                >
                  পরের <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {currentUsers.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="flex flex-col items-center gap-4">
              <FaUsers className="text-6xl text-gray-300" />
              <h3 className="text-xl font-semibold text-gray-600">কোন আবেদনকারী পাওয়া যায়নি</h3>
              <p className="text-gray-500">আপনার অনুসন্ধান মানদণ্ড পরিবর্তন করে আবার চেষ্টা করুন</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Applied_studentList;
