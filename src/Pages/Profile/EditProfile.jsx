import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const EditProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: user = [], isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${id}`);
      return res.data;
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      displayName: e.target.displayName.value,
      phoneNo: e.target.phoneNo.value,
      userData: {
        fatherName: e.target.fatherName.value,
        motherName: e.target.motherName.value,
        educationQualification: user.userData.educationQualification,
      },
      beach: parseInt(e.target.beach.value),
    };

    try {
      const updateRes = await axiosSecure.put(`/user/${id}`, formData);

      if (updateRes.data) {
        navigate(`/dashboard/singleUserInfo/${user?._id}`);
        Swal.fire({
          text: updateRes.data.message,
          icon: "success",
          position: "top-right",
          timer: 1000,
        });
      } else {
        Swal.fire({
          icon: "error",
          text: updateRes.data.message,
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error updating user: ", error);
      Swal.fire({
        icon: "error",
        text: "An error occurred while updating the user.",
        position: "top-right",
      });
    }
  };

  return (
    <div className="w-11/12 mx-auto max-w-4xl p-8 space-y-3 rounded-xl m-5 ">
      <h1 className="text-2xl font-bold text-center">Update Profile </h1>
      <hr className="border-1 border-gray-700" />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form
          className=" grid grid-cols-1 md:grid-cols-2 grid-rows-5 gap-4  "
          onSubmit={handleSubmit}
        >
          <div className="space-y-1 text-sm">
            <label className="block dark-text-gray-400">Name</label>
            <input
              type="text"
              name="displayName"
              defaultValue={user?.displayName}
              className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block dark-text-gray-400">Phone number</label>
            <input
              type="text"
              name="phoneNo"
              defaultValue={user?.phoneNo}
              className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label className="block ">Beach number</label>
            <input
              type="text"
              name="beach"
              defaultValue={user?.beach}
              className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label className="block   ">Father Name</label>
            <input
              type="text"
              name="fatherName"
              defaultValue={user?.userData.fatherName}
              className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
            />
          </div>





          
          <div className="space-y-1 text-sm">
            <label className="block   ">Mother Name</label>
            <input
              type="text"
              name="motherName"
              defaultValue={user?.userData.motherName}
              className="text-gray-900 w-full px-4 py-3 rounded-md dark-border-gray-700 dark-bg-gray-900 dark-text-gray-100 focus:dark-border-violet-400"
            />
          </div>










          <div className="col-span-2 flex justify-end">
            <button
              type="submit"
              className=" px-8 py-3 font-semibold rounded-full btn hover:bg-[#ff6d48] bg-purple-500 text-white  items-center  "
            >
              Update Profile
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditProfile;
