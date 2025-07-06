import { useQuery } from "@tanstack/react-query";
import { FaUsers, FaNewspaper, FaUserShield, FaUserGraduate, FaUserTimes, FaUserPlus } from "react-icons/fa";
import useAxiosSecure from "../../Hook/useAxiosPublic";
import { FaSpinner } from "react-icons/fa";

const Analysis = () => {
  const axiosSecure = useAxiosSecure();

  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("/userv2/userNumber", {});
      return res.data;
    },
  });

  // Calculate percentages
  const total =
    (user?.totalAdmins || 0) +
    (user?.totalStudents || 0) +
    (user?.outService || 0) +
    (user?.applied_student || 0);
  const percent = (val) =>
    total > 0 ? ((val / total) * 100).toFixed(2) : "0.00";

  return (
    <div className="w-full px-2 py-4">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">সার্বিক বিশ্লেষণ</h2>
      {isLoading || !user ? (
        <div className="flex justify-center items-center py-12">
          <FaSpinner className="animate-spin text-3xl text-blue-500" />
          <span className="ml-3 text-blue-500 font-semibold">লোড হচ্ছে...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Admins */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-300 rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:shadow-2xl transition-all duration-300">
            <div className="bg-blue-500 text-white rounded-full p-4 text-3xl shadow">
              <FaUserShield />
            </div>
            <div>
              <div className="text-lg font-bold text-blue-700">অ্যাডমিন</div>
              <div className="text-2xl font-extrabold text-blue-900">{user?.totalAdmins || 0} <span className="text-base font-semibold">({percent(user?.totalAdmins)}%)</span></div>
            </div>
          </div>
          {/* Students */}
          <div className="bg-gradient-to-br from-orange-100 to-orange-300 rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:shadow-2xl transition-all duration-300">
            <div className="bg-orange-500 text-white rounded-full p-4 text-3xl shadow">
              <FaUserGraduate />
            </div>
            <div>
              <div className="text-lg font-bold text-orange-700">শিক্ষার্থী</div>
              <div className="text-2xl font-extrabold text-orange-900">{user?.totalStudents || 0} <span className="text-base font-semibold">({percent(user?.totalStudents)}%)</span></div>
            </div>
          </div>
          {/* Out of Service */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-300 rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:shadow-2xl transition-all duration-300">
            <div className="bg-gray-500 text-white rounded-full p-4 text-3xl shadow">
              <FaUserTimes />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-700">সেবা সীমার বাইরে</div>
              <div className="text-2xl font-extrabold text-gray-900">{user?.outService || 0} <span className="text-base font-semibold">({percent(user?.outService)}%)</span></div>
            </div>
          </div>
          {/* Applied Students */}
          <div className="bg-gradient-to-br from-green-100 to-green-300 rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:shadow-2xl transition-all duration-300">
            <div className="bg-green-500 text-white rounded-full p-4 text-3xl shadow">
              <FaUserPlus />
            </div>
            <div>
              <div className="text-lg font-bold text-green-700">আবেদনকারী শিক্ষার্থী</div>
              <div className="text-2xl font-extrabold text-green-900">{user?.applied_student || 0} <span className="text-base font-semibold">({percent(user?.applied_student)}%)</span></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analysis;
