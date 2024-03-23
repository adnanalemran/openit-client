import { useQuery } from "@tanstack/react-query";
import { FaUsers, FaUserGraduate, FaUserAltSlash, FaUser,FaNewspaper } from 'react-icons/fa';
import useAxiosSecure from "../../Hook/useAxiosPublic";

const Analisys = () => {
  const axiosSecure = useAxiosSecure();

  const { data: user = [] } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("/userv2/userNumber", {});
      return res.data;
    },
  });

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8"> Analysis</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card bg-gradient-to-b from-purple-400 to-purple-600 text-white shadow-lg p-6 rounded-lg">
          <div className="flex items-center justify-center mb-4">
            <FaUser className="w-12 h-12 mr-2" />
            <h2 className="text-xl font-bold">Total Admin</h2>
          </div>
          <div className="text-2xl font-bold text-center">{user?.totalAdmins}</div>
        </div>
        <div className="card bg-gradient-to-b from-blue-400 to-blue-600 text-white shadow-lg p-6 rounded-lg">
          <div className="flex items-center justify-center mb-4">
            <FaUserGraduate className="w-12 h-12 mr-2" />
            <h2 className="text-xl font-bold">Total Student</h2>
          </div>
          <div className="text-2xl font-bold text-center">{user?.totalStudents}</div>
        </div>
        <div className="card bg-gradient-to-b from-green-400 to-green-600 text-white shadow-lg p-6 rounded-lg">
          <div className="flex items-center justify-center mb-4">
            <FaUsers className="w-12 h-12 mr-2" />
            <h2 className="text-xl font-bold">Total User</h2>
          </div>
          <div className="text-2xl font-bold text-center">{user?.totalUser}</div>
        </div>
        <div className="card bg-gradient-to-b from-yellow-400 to-yellow-600 text-white shadow-lg p-6 rounded-lg">
          <div className="flex items-center justify-center mb-4">
            <FaUserAltSlash className="w-12 h-12 mr-2" />
            <h2 className="text-xl font-bold">Out of Service</h2>
          </div>
          <div className="text-2xl font-bold text-center">{user?.outService}</div>
        </div> 
          <div className="card bg-gradient-to-b from-purple-400 to-purple-600 text-white shadow-lg p-6 rounded-lg">
          <div className="flex items-center justify-center mb-4">
            <FaNewspaper className="w-12 h-12 mr-2" />
            <h2 className="text-xl font-bold">Total Notice</h2>
          </div>
          <div className="text-2xl font-bold text-center">{user?.totalNotice}</div>
        </div>
      </div>
    </div>
  );
};

export default Analisys;
