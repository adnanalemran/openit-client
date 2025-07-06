import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/animation/loading.json";
import { useState, useEffect } from "react";
import { FaSpinner, FaGraduationCap, FaBook, FaUsers, FaStar } from "react-icons/fa";

const Loading = () => {
  const [loadingText, setLoadingText] = useState("Loading");
  const [dots, setDots] = useState("");

  // Animated loading text with dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "" : prev + ".");
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Rotating loading text
  useEffect(() => {
    const texts = ["Loading", "Preparing", "Almost ready", "Setting up"];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setLoadingText(texts[currentIndex]);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center space-y-8">
        {/* Logo and Title */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
              <FaGraduationCap className="text-white text-2xl" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Open IT Institute
              </h1>
              <p className="text-sm text-gray-600">Loading your experience</p>
            </div>
          </div>
        </div>

        {/* Main Loading Animation */}
        <div className="relative">
          {/* Lottie Animation */}
          <div className="relative">
            <Player
              autoplay
              loop
              src={animation}
              style={{ height: "200px", width: "200px" }}
              className="mx-auto"
            />
            
            {/* Pulsing ring around animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 border-4 border-orange-200 rounded-full animate-ping opacity-20"></div>
              <div className="absolute w-48 h-48 border-4 border-orange-300 rounded-full animate-ping opacity-30" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute w-48 h-48 border-4 border-orange-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">
            {loadingText}{dots}
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Please wait while we prepare everything for you
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
        </div>

        {/* Loading Tips */}
        <div className="max-w-md mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Did you know?</h3>
            <div className="text-xs text-gray-600 space-y-1">
              <div className="flex items-center gap-2">
                <FaUsers className="text-orange-500" />
                <span>We have trained over 500+ students</span>
              </div>
              <div className="flex items-center gap-2">
                <FaBook className="text-blue-500" />
                <span>50+ professional courses available</span>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-500" />
                <span>98% student satisfaction rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Spinner for additional loading indication */}
        <div className="flex items-center justify-center gap-2 text-gray-500">
          <FaSpinner className="animate-spin text-orange-500" />
          <span className="text-sm">Initializing...</span>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 animate-bounce" style={{ animationDelay: '0.5s' }}>
        <div className="w-4 h-4 bg-orange-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-1/3 right-1/4 animate-bounce" style={{ animationDelay: '1s' }}>
        <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-bounce" style={{ animationDelay: '1.5s' }}>
        <div className="w-5 h-5 bg-purple-400 rounded-full opacity-60"></div>
      </div>
    </div>
  );
};

// Skeleton Loading Component for content areas
export const SkeletonLoading = ({ rows = 3, className = "" }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {[...Array(rows)].map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="flex space-x-4">
            <div className="rounded-full bg-gray-300 h-12 w-12"></div>
            <div className="flex-1 space-y-2 py-1">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Card Skeleton Loading
export const CardSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(count)].map((_, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
          <div className="h-64 bg-gray-300"></div>
          <div className="p-6 space-y-4">
            <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto"></div>
            <div className="h-10 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
