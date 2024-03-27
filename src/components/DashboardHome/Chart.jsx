import { PieChart } from "react-minimal-pie-chart";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosPublic";

const Chart = () => {
  const axiosSecure = useAxiosSecure();

  const { data: user = [] } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("/userv2/userNumber", {});
      return res.data;
    },
  });

  const totalAdmins = user?.totalAdmins || 0;
  const totalStudents = user?.totalStudents || 0;
  const outOfService = user?.outService || 0;
  const applied_student = user?.applied_student || 0;

  const total = totalAdmins + totalStudents + outOfService + applied_student;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">User Distribution</h1>
      <div className="flex justify-center">
        <div className="w-full  p-6  rounded-lg  ">
          <PieChart
            data={[
              { title: "Admins", value: totalAdmins, color: "#61CDBB" },
              { title: "Students", value: totalStudents, color: "#F1E15B" },
              {
                title: "Out of Service",
                value: outOfService,
                color: "#F57560",
              },
              {
                title: "applied student",
                value: applied_student,
                color: "#E8C1A0",
              },
            ]}
            label={({ dataEntry }) =>
              `${dataEntry.title}: ${dataEntry.value} (${(
                (dataEntry.value / total) *
                100
              ).toFixed(2)}%)`
            }
            labelStyle={{
              fontSize: "4px",
              fontFamily: "sans-serif",
            }}
            lineWidth={60}
            paddingAngle={5}
            radius={42}
            animate
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
