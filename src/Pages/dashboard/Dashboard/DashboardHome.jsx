import { Player } from "@lottiefiles/react-lottie-player";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import animation from "../../../assets/animation/Animation - 1710595501629.json";
import useAdmin from "../../../Hook/useAdmin";
import useStudent from "../../../Hook/useStudent";
import Analisys from "../../../components/DashboardHome/Analisys";
import Gatting from "../../../components/DashboardHome/Gatting";
import Time from "../../../components/DashboardHome/Time";
import Chart from "../../../components/DashboardHome/Chart";
import { 
  FaUsers, 
  FaNewspaper, 
  FaChartLine, 
  FaCalendarAlt, 
  FaClock, 
  FaBell,
  FaDownload,
  FaEye,
  FaUserPlus,
  FaUserCheck,
  FaExclamationTriangle,
  FaCheckCircle,
  FaSpinner
} from "react-icons/fa";

const DashboardHome = () => {
  const [status, setStatus] = useState("");
  const [isAdmin] = useAdmin();
  const [isStudent] = useStudent();

  useEffect(() => {
    fetch("https://openit-server.vercel.app/")
      .then((res) => res.text())
      .then((data) => setStatus(data))
      .catch((error) => {
        console.error("Error fetching database status:", error.message);
        setStatus(
          "ডাটাবেস সংযুক্ত নয়, দয়া করে যোগাযোগ করুন: 01917019619 (Adnan, Software Developer)"
        );
      });
  }, []);

  // Mock data for charts and reports
  const recentActivities = [
    { id: 1, type: "user", action: "নতুন শিক্ষার্থী যোগ হয়েছে", time: "2 মিনিট আগে", icon: FaUserPlus, color: "text-green-500" },
    { id: 2, type: "notice", action: "নতুন নোটিশ প্রকাশিত হয়েছে", time: "15 মিনিট আগে", icon: FaNewspaper, color: "text-blue-500" },
    { id: 3, type: "system", action: "সিস্টেম আপডেট সম্পন্ন হয়েছে", time: "1 ঘন্টা আগে", icon: FaCheckCircle, color: "text-purple-500" },
    { id: 4, type: "alert", action: "ডাটাবেস ব্যাকআপ প্রয়োজন", time: "2 ঘন্টা আগে", icon: FaExclamationTriangle, color: "text-orange-500" },
  ];

  const quickStats = [
    { title: "মোট ব্যবহারকারী", value: "1,234", change: "+12%", icon: FaUsers, color: "bg-blue-500" },
    { title: "সক্রিয় নোটিশ", value: "45", change: "+5%", icon: FaNewspaper, color: "bg-green-500" },
    { title: "আজকের ভিজিট", value: "892", change: "+23%", icon: FaEye, color: "bg-purple-500" },
    { title: "নতুন আবেদন", value: "23", change: "+8%", icon: FaUserPlus, color: "bg-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-4 px-2 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Compact Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="text-center md:text-left">
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">ড্যাশবোর্ড ওভারভিউ</h1>
              <p className="text-sm text-gray-600">সর্বশেষ আপডেট: <Time /></p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
              status ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              <div className={`w-2 h-2 rounded-full ${status ? 'bg-green-500' : 'bg-red-500'}`}></div>
              {status ? 'অনলাইন' : 'অফলাইন'}
            </span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600 font-medium">{stat.title}</p>
                  <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-green-600 font-medium">{stat.change}</p>
                </div>
                <div className={`${stat.color} text-white p-2 rounded-lg`}>
                  <stat.icon className="text-sm" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        {isAdmin ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Charts Section */}
            <div className="lg:col-span-2 space-y-4">
              {/* User Distribution Chart */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-gray-800">ব্যবহারকারীর পরিসংখ্যান</h3>
                  <button className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <FaDownload className="text-xs" />
                    রিপোর্ট
                  </button>
                </div>
                <Chart />
              </div>

              {/* Analytics Grid */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <h3 className="text-sm font-bold text-gray-800 mb-4">সার্বিক বিশ্লেষণ</h3>
                <Analisys />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Recent Activities */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-gray-800">সাম্প্রতিক কার্যক্রম</h3>
                  <FaBell className="text-xs text-gray-400" />
                </div>
                <div className="space-y-3">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className={`${activity.color} p-1 rounded-full`}>
                        <activity.icon className="text-xs text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-800 truncate">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Status */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <h3 className="text-sm font-bold text-gray-800 mb-3">সিস্টেম স্ট্যাটাস</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600">ডাটাবেস</span>
                    <span className="text-green-600 font-medium">সক্রিয়</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600">সার্ভার</span>
                    <span className="text-green-600 font-medium">অনলাইন</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600">মেমরি</span>
                    <span className="text-orange-600 font-medium">৭৫%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600">স্টোরেজ</span>
                    <span className="text-blue-600 font-medium">৬০%</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <h3 className="text-sm font-bold text-gray-800 mb-3">দ্রুত অ্যাকশন</h3>
                <div className="space-y-2">
                  <button className="w-full text-left text-xs p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors">
                    নতুন নোটিশ যোগ করুন
                  </button>
                  <button className="w-full text-left text-xs p-2 rounded-lg hover:bg-green-50 text-green-600 transition-colors">
                    ব্যবহারকারী ব্যবস্থাপনা
                  </button>
                  <button className="w-full text-left text-xs p-2 rounded-lg hover:bg-purple-50 text-purple-600 transition-colors">
                    রিপোর্ট ডাউনলোড
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : isStudent ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <h2 className="text-lg font-bold text-gray-800 mb-2">শিক্ষার্থী ড্যাশবোর্ড</h2>
            <p className="text-sm text-gray-600 mb-4">আপনার জন্য ড্যাশবোর্ড ফিচারসমূহ খুব শীঘ্রই আসছে!</p>
            <Player
              autoplay
              loop
              src={animation}
              style={{ height: "120px", width: "120px", margin: "0 auto" }}
            />
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <Player
              autoplay
              loop
              src={animation}
              style={{ height: "120px", width: "120px", margin: "0 auto" }}
            />
            <h2 className="text-lg font-bold text-red-500 mb-2">সেবা সীমার বাইরে</h2>
            <p className="text-sm text-gray-600 mb-4">
              আপনি হয়তো সেবার বাইরে আছেন অথবা আপনার আবেদন প্রক্রিয়াধীন।
              বিস্তারিত জানতে 01707530810 নম্বরে কল করুন।
            </p>
            <Link to="/">
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-medium rounded-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300">
                হোমে ফিরে যান
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;
