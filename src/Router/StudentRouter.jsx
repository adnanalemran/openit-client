import React, { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaSpinner, FaUserGraduate, FaExclamationTriangle, FaLock, FaGraduationCap, FaTimesCircle } from "react-icons/fa";

const StudentRouter = ({ children }) => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  const { data: userData, isLoading, error } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      if (!user?.email) throw new Error("No user email");
      const res = await axiosSecure.get(`/user/email/${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
    retry: 2,
    retryDelay: 1000,
  });

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Show loading state for authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
          <div className="relative">
            <FaSpinner className="animate-spin text-4xl text-blue-500 mx-auto mb-4" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">প্রমাণীকরণ হচ্ছে...</h2>
          <p className="text-gray-500 mb-4">অনুগ্রহ করে অপেক্ষা করুন</p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <FaLock className="text-xs" />
            <span>নিরাপদ অ্যাক্সেস</span>
          </div>
        </div>
      </div>
    );
  }

  // Show loading state for user data
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
          <div className="relative">
            <FaSpinner className="animate-spin text-4xl text-green-500 mx-auto mb-4" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-green-200 border-t-green-500 rounded-full animate-spin"></div>
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">ব্যবহারকারীর তথ্য লোড হচ্ছে...</h2>
          <p className="text-gray-500 mb-4">অনুগ্রহ করে অপেক্ষা করুন</p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <FaUserGraduate className="text-xs" />
            <span>শিক্ষার্থী যাচাইকরণ</span>
          </div>
        </div>
      </div>
    );
  }

  // Handle error
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md">
          <FaExclamationTriangle className="text-4xl text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">ত্রুটি ঘটেছে</h2>
          <p className="text-gray-500 mb-4">ব্যবহারকারীর তথ্য লোড করতে সমস্যা হয়েছে</p>
          <div className="space-y-2">
            <button 
              onClick={() => window.location.reload()}
              className="btn btn-error btn-sm mr-2"
            >
              আবার চেষ্টা করুন
            </button>
            <button 
              onClick={() => window.history.back()}
              className="btn btn-outline btn-sm"
            >
              ফিরে যান
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Check if user is student (handle both "isStudent" and "student" values)
  const isStudent = userData?.userType === "isStudent" || userData?.userType === "student";
  
  if (isStudent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Student indicator */}
        <div className="fixed top-4 right-4 z-50">
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-green-200">
            <FaGraduationCap className="text-green-500 text-sm" />
            <span className="text-xs text-green-700 font-medium">শিক্ষার্থী</span>
          </div>
        </div>
        
        {children}
      </div>
    );
  }

  // User is not student, redirect to invalid access
  return (
    <Navigate 
      to="/invalidAccess" 
      state={{ 
        from: location.pathname, 
        reason: "student_access_denied",
        userType: userData?.userType,
        message: "এই পৃষ্ঠা দেখতে শিক্ষার্থী অধিকার প্রয়োজন"
      }}
      replace 
    />
  );
};

export default StudentRouter;
