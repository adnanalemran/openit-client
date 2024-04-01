import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosPublic";
const CumpusLifesmall = () => {
  const axiosSecure = useAxiosSecure();

  const { data: blogs = [] } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosSecure.get("/blog/latest", {});
      if (res.data) {
        // setLoading(false);
      }
      return res.data;
    },
  });

 

  return (
    <div className="py-8 lg:pt-16">
      <div className="text-center ">
        <h2 className="text-4xl font-bold text-gray-950 pb-3">Camps time..</h2>
        <p className="text-gray-700">Discover the open-it blog !</p>
      </div>

      <div className=" gap-6 w-full py-12 px-4   text-bangla  ">
        {blogs?.map((blog) => (
          <div key={blog?._id}>
            <div className=" my-5 flex   items-center justify-center align-middle  w-full   shadow-xl relative  ">
              <figure className=" w-1/4  ">
                <img
                  src={blog?.imageUrl}
                  alt="Image"
                  className="rounded-xl  h-60 object-cover  "
                />
              </figure>

              <div className="w-3/4 pb-5">
                <div className=" pl-3  ">
                  <h2 className="  font-bold   text-blue-500  ">
                    {blog?.noticeTitle}
                  </h2>{" "}
                  <p className="text-sm  ">{blog?.postDate}</p>
                  <p>{blog?.noticeDetails}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CumpusLifesmall;
