import useAxiosSecure from "../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const Analisys = () => {
  const axiosSecure = useAxiosSecure();

  const { data: user = [],   } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user", {});
      
      return res.data;
    },
  });
  return (
    <div className="flex  gap-4 p-4">
      <div className="card  w-1/3  bg-primary text-primary-content">
        <div className="card  bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Total User</h2>
            <div className="flex items-center justify-between">
              <img
                className="w-16"
                src="https://i.ibb.co/rmkcddQ/teamwork.png"
                alt="Trophy"
              />
              <div className="text-4xl font-bold">{user?.length}</div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="card  w-1/3  bg-primary text-primary-content">
        <div className="card  bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Total Student</h2>
            <div className="flex items-center justify-between">
              <img
                className="w-16"
                src="https://i.ibb.co/1vmrrMR/students.png"
                alt="Trophy"
              />
              <div className="text-4xl font-bold">00</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card  w-1/3  bg-primary text-primary-content">
        <div className="card  bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Course Complete Student</h2>
            <div className="flex items-center justify-between">
              <img
                className="w-16"
                src="https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/misc/trophy.png"
                alt="Trophy"
              />
              <div className="">00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analisys;