import { useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import { 
  FaBell, 
  FaCalendarAlt, 
  FaEye, 
  FaSearch, 
  FaFilter, 
  FaArrowRight, 
  FaClock,
  FaNewspaper,
  FaSort,
  FaSortUp,
  FaSortDown
} from "react-icons/fa";
import { MdNotificationsActive, MdClear } from "react-icons/md";

const Notices = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  
  const { data: notices = [], refetch } = useQuery({
    queryKey: ["all-notices"],
    queryFn: async () => {
      const res = await axiosSecure.get("/notice", {});
      if (res.data) {
        setLoading(false);
      }
      return res.data;
    },
  });

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
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

  // Function to get category from notice title or description
  const getCategory = (notice) => {
    const title = notice.noticeTitle?.toLowerCase() || "";
    const description = notice.noticeDescription?.toLowerCase() || "";
    const text = title + " " + description;
    
    if (text.includes("exam") || text.includes("পরীক্ষা")) return "exam";
    if (text.includes("holiday") || text.includes("ছুটি")) return "holiday";
    if (text.includes("admission") || text.includes("ভর্তি")) return "admission";
    if (text.includes("result") || text.includes("ফলাফল")) return "result";
    if (text.includes("class") || text.includes("ক্লাস")) return "class";
    return "general";
  };

  // Filter and sort notices
  const filteredNotices = notices
    .filter(notice => {
      const matchesSearch = notice.noticeTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           notice.noticeDescription?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || getCategory(notice) === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return sortOrder === "desc" 
          ? new Date(b.noticeDate) - new Date(a.noticeDate)
          : new Date(a.noticeDate) - new Date(b.noticeDate);
      }
      if (sortBy === "title") {
        return sortOrder === "desc"
          ? b.noticeTitle?.localeCompare(a.noticeTitle)
          : a.noticeTitle?.localeCompare(b.noticeTitle);
      }
      return 0;
    });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNotices = filteredNotices.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);

  // Categories for filtering
  const categories = [
    { value: "all", label: "All Notices", count: notices.length },
    { value: "exam", label: "Examinations", count: notices.filter(n => getCategory(n) === "exam").length },
    { value: "holiday", label: "Holidays", count: notices.filter(n => getCategory(n) === "holiday").length },
    { value: "admission", label: "Admissions", count: notices.filter(n => getCategory(n) === "admission").length },
    { value: "result", label: "Results", count: notices.filter(n => getCategory(n) === "result").length },
    { value: "class", label: "Classes", count: notices.filter(n => getCategory(n) === "class").length },
    { value: "general", label: "General", count: notices.filter(n => getCategory(n) === "general").length },
  ];

  if (loading === true) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaBell className="text-orange-500" />
            <span>Notice Board</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Notices</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest announcements, exam schedules, and important information from Open IT Institute
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <FaNewspaper className="text-blue-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{notices.length}</div>
                <div className="text-sm text-gray-600">Total Notices</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <MdNotificationsActive className="text-red-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {notices.filter(notice => isRecent(notice.noticeDate)).length}
                </div>
                <div className="text-sm text-gray-600">Recent</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <FaCalendarAlt className="text-green-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {notices.filter(notice => getCategory(notice) === "exam").length}
                </div>
                <div className="text-sm text-gray-600">Exams</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <FaClock className="text-purple-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {notices.filter(notice => getCategory(notice) === "holiday").length}
                </div>
                <div className="text-sm text-gray-600">Holidays</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <MdClear />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="relative">
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="relative">
              <FaSort className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={`${sortBy}-${sortOrder}`}
                onChange={(e) => {
                  const [sort, order] = e.target.value.split("-");
                  setSortBy(sort);
                  setSortOrder(order);
                }}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="date-desc">Date (Newest First)</option>
                <option value="date-asc">Date (Oldest First)</option>
                <option value="title-asc">Title (A-Z)</option>
                <option value="title-desc">Title (Z-A)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-gray-600">
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredNotices.length)} of {filteredNotices.length} notices
          </div>
          {searchTerm && (
            <div className="text-sm text-gray-500">
              Search results for: "{searchTerm}"
            </div>
          )}
        </div>

        {/* Notices Grid */}
        {currentNotices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
            <FaNewspaper className="text-gray-300 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No notices found</h3>
            <p className="text-gray-600 mb-6">
              {searchTerm ? `No notices match your search for "${searchTerm}"` : "No notices available"}
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Clear Search
              </button>
            )}
          </div>
        ) : (
          <div className="grid gap-6">
            {currentNotices.map((notice, index) => (
              <div
                key={notice._id}
                className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 ${
                  isRecent(notice.noticeDate) ? 'border-l-red-500' : 'border-l-orange-500'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-lg">
                        {indexOfFirstItem + index + 1}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {notice.noticeTitle}
                        </h3>
                        {isRecent(notice.noticeDate) && (
                          <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                            New
                          </span>
                        )}
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          getCategory(notice) === 'exam' ? 'bg-red-100 text-red-600' :
                          getCategory(notice) === 'holiday' ? 'bg-green-100 text-green-600' :
                          getCategory(notice) === 'admission' ? 'bg-blue-100 text-blue-600' :
                          getCategory(notice) === 'result' ? 'bg-purple-100 text-purple-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {getCategory(notice).charAt(0).toUpperCase() + getCategory(notice).slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="text-gray-400" />
                          <span>{formatDate(notice.noticeDate)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {notice.noticeDescription && (
                  <div className="mb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {notice.noticeDescription.length > 200 
                        ? `${notice.noticeDescription.substring(0, 200)}...` 
                        : notice.noticeDescription
                      }
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <Link
                    to={`/notice/${notice._id}`}
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
                  >
                    <FaEye className="text-sm" />
                    <span>Read Full Notice</span>
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center mt-12">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === page
                      ? 'bg-orange-500 text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notices; 