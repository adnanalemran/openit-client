import { useState } from "react";
import { FaPlus, FaNewspaper, FaChartBar } from "react-icons/fa";
import WebNotice from "./WebNotice";

const ManageNotice = () => {
  const [activeTab, setActiveTab] = useState("create");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-6 px-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <FaNewspaper className="text-orange-500" />
                নোটিশ ব্যবস্থাপনা
              </h1>
              <p className="text-gray-600 mt-1">নতুন নোটিশ তৈরি করুন এবং বিদ্যমান নোটিশসমূহ পরিচালনা করুন</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium">মোট নোটিশ: <span className="font-bold">১২৩</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("create")}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === "create"
                  ? "text-orange-600 border-b-2 border-orange-500 bg-orange-50"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              <FaPlus className="text-xs" />
              নতুন নোটিশ তৈরি
            </button>
            <button
              onClick={() => setActiveTab("manage")}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === "manage"
                  ? "text-orange-600 border-b-2 border-orange-500 bg-orange-50"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              <FaChartBar className="text-xs" />
              নোটিশ পরিচালনা
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "create" ? (
              <WebNotice />
            ) : (
              <div className="text-center py-12">
                <FaChartBar className="text-4xl text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">নোটিশ পরিচালনা</h3>
                <p className="text-gray-600">নোটিশ পরিচালনার জন্য "সকল নোটিশ দেখুন" বাটনে ক্লিক করুন</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageNotice;
