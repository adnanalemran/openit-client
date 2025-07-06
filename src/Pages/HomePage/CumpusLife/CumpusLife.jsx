import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosPublic";
import { useState } from "react";
import { FaSearch, FaCalendarAlt, FaEye, FaShare, FaBookmark, FaFilter, FaNewspaper } from "react-icons/fa";
import Loading, { CardSkeleton } from "../../Loading/Loading";

const CumpusLife = () => {
  const axiosSecure = useAxiosSecure();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosSecure.get("/blog", {});
      return res.data;
    },
  });

  // Get unique categories for filter
  const uniqueCategories = Array.isArray(blogs) 
    ? [...new Set(blogs.map(blog => blog.category).filter(Boolean))]
    : [];

  // Filter blogs based on search and category
  const filteredBlogs = Array.isArray(blogs)
    ? blogs.filter((blog) => {
        const matchesSearch = blog.noticeTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             blog.noticeDetails?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "all" || blog.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
    : [];

  // Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

  // Reset to first page when search or filter changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">News & Updates</h1>
          </div>
          <CardSkeleton count={6} />
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaNewspaper className="text-orange-500" />
            <span>Latest Updates</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            News &{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Updates
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, events, and announcements from Open IT Institute. 
            Discover what's happening in our community.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
            {/* Search Input */}
            <div className="relative w-full max-w-md">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300"
                placeholder="Search news and updates..."
              />
            </div>

            {/* Category Filter */}
            <div className="relative w-full max-w-xs">
              <FaFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300 appearance-none bg-white"
              >
                <option value="all">All Categories</option>
                {uniqueCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Items per page */}
            <div className="relative w-full max-w-xs">
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors duration-300 appearance-none bg-white"
              >
                <option value={6}>6 per page</option>
                <option value={9}>9 per page</option>
                <option value={12}>12 per page</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-orange-600">{startIndex + 1}</span> to{" "}
              <span className="font-semibold text-orange-600">{Math.min(endIndex, filteredBlogs.length)}</span> of{" "}
              <span className="font-semibold text-gray-900">{filteredBlogs.length}</span> articles
            </p>
          </div>
        </div>

        {/* News Grid */}
        {currentBlogs.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaNewspaper className="text-gray-400 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
            {currentBlogs.map((blog) => (
              <article key={blog._id} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  {/* Article Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.imageUrl || 'https://via.placeholder.com/600x400?text=News'}
                      alt={blog.noticeTitle}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    {blog.category && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {blog.category}
                        </span>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200">
                        <FaBookmark className="text-gray-600 text-sm" />
                      </button>
                      <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200">
                        <FaShare className="text-gray-600 text-sm" />
                      </button>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {/* Date */}
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <FaCalendarAlt className="text-orange-500" />
                        <span>{blog.postDate || 'Recent'}</span>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {blog.noticeTitle}
                      </h2>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed line-clamp-3">
                        {blog.noticeDetails}
                      </p>

                      {/* Read More Button */}
                      <div className="flex items-center justify-between pt-4">
                        <button className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300">
                          Read More
                          <FaEye className="text-sm" />
                        </button>
                        
                        {/* Views/Stats */}
                        <div className="flex items-center gap-4 text-gray-500 text-sm">
                          <span className="flex items-center gap-1">
                            <FaEye />
                            <span>1.2k views</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8">
            <div className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                Previous
              </button>
              
              <div className="flex items-center gap-1">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      i + 1 === currentPage
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-700 bg-white border border-gray-300 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 mb-12 text-white">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Stay Updated</h3>
            <p className="text-orange-100">Get the latest news and updates delivered to your inbox</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CumpusLife;
