import { useQuery } from "@tanstack/react-query";
import { FaUsers, FaNewspaper } from "react-icons/fa";
import useAxiosSecure from "../../Hook/useAxiosPublic";

const Analysis = () => {
  const axiosSecure = useAxiosSecure();

  const { data: user = [] } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("/userv2/userNumber", {});
      return res.data;
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Analysis</h1>
      <div className="grid grid-cols-1  gap-4">
        <div className="bg-green-400 text-white rounded-lg p-6 flex flex-col justify-center items-center">
          <FaUsers className="w-12 h-12 mb-4" />
          <h2 className="text-xl font-bold mb-2">Total Users</h2>
          <div className="text-xl font-bold">{user?.totalUser}</div>
        </div>

        <div className="bg-blue-400 text-white rounded-lg p-6 flex flex-col justify-center items-center">
          <FaNewspaper className="w-12 h-12 mb-4" />
          <h2 className="text-xl font-bold mb-2">Total Notices</h2>
          <div className="text-xl font-bold">{user?.totalNotice}</div>
        </div>

        <div className="bg-purple-500 text-white rounded-lg p-6 flex flex-col justify-center items-center">
          <FaNewspaper className="w-12 h-12 mb-4" />
          <h2 className="text-xl font-bold mb-2">Total Blogs</h2>
          <div className="text-xl font-bold">{user?.blog}</div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
