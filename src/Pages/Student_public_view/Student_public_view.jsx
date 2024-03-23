import { useQuery } from "@tanstack/react-query";

import { useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosPublic";
import Loading from "../Loading/Loading";

const Student_public_view = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const { data: user = [] } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("userv2/studentAllData", {});
      if (res.data) {
        setLoading(false);
      }
      return res?.data;
    },
  });

  const filteredUsers = Array.isArray(user)
    ? user.filter((user) =>
        user.displayName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  if (loading === true) {
    return (
      <div className="  ">
        <Loading />
      </div>
    );
  }

  //this a comment
  return (
   <div className="pt-16  ">
     <div className="  ">
      <h2 className="text-3xl py-8 font-semibold text-center    text-gray-800">
        Our student List
      </h2>
      <hr />

      <label
        data-aos="fade-right"
        className="input input-bordered flex items-center gap-2 w-1/2 mx-auto my-8 "
      >
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target?.value)}
          className="grow "
          placeholder="Search Student by name "
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      <div className="overflow-x-auto container mx-auto  ">
        <div className="table w-full">
          <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full py-12 ">
            {filteredUsers.map((user) => (
              <div key={user._id}>
                <div
                  data-aos="zoom-in-up"
                  className="card w-full max-w-sm  shadow-xl relative hover:shadow-2xl mx-auto "
                >
                  <figure className=" px-2">
                    <img
                      src={user?.photoURL}
                      alt="Image"
                      className="rounded-xl my-2 w-[390px] h-[370px]  object-cover  "
                    />
                  </figure>

                  <div className=" pb-5">
                    <div className="  ">
                      <h2 className="text-center text-2xl  font-bold py-8 text-gray-900  ">
                        {user.displayName}
                      </h2>

                      <div className="card-actions items-center justify-center pb-4">
                        <div className=" bg-purple-300    py-4 rounded-lg px-8">
                          Batch number: {user.beach}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Student_public_view;
