import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosPublic";

const CumpusLife = () => {
  const axiosSecure = useAxiosSecure();

  const { data: blogs = [] } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosSecure.get("/blog", {});
      if (res.data) {
        // setLoading(false);
      }
      return res.data;
    },
  });

  // if (loading === true) {
  //   return <Loading />;
  // }

  return (
    <div className="py-8 text-bangla lg:pt-16">
      <div className="text-center ">
        <h2 className="text-3xl font-semibold text-gray-950 pb-3">
          Camps time..
        </h2>
        <p className="text-gray-700">Discover the open-it blog !</p>
      </div>

      <div className=" flex flex-col-reverse gap-6 w-full py-12 px-4   ">
        {blogs?.map((blog) => (
          <div key={blog?._id}>
            <div className=" my-5 flex gap-6  items-center justify-center align-middle  w-full   shadow-xl relative  ">
              <figure data-aos="flip-left" className=" w-1/2  ">
                <img
                  src={blog?.imageUrl}
                  alt="Image"
                  className="rounded-xl       object-cover  "
                />
              </figure>

              <div className="w-1/2 pb-5">
                <div className=" pl-3  ">
                  <h2 className="  font-bold text-3xl py-6  text-blue-500  ">
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

export default CumpusLife;
