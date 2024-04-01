import { useEffect, useState } from "react";
import { FaPhone, FaUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
const Faculty = () => {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    fetch("/faculty.json")
      .then((res) => res.json())
      .then((data) => setFaculty(data));
  }, []);

  return (
    <div className="py-8    ">
      <div className="text-center ">
        <h2 className="text-4xl font-bold text-gray-950 pb-3">
          Our Mentor
        </h2>
        <p className="text-gray-700">
          Discover the ideal course from top skilled Mentor !
        </p>
      </div>

      <div className=" text-bangla lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full py-12 ">
        {faculty.map((singlefaculty) => (
          <div key={singlefaculty.id} className="card      p-2     ">
            <div className="card w-full   shadow-xl relative hover:shadow-2xl mx-auto ">
              <a title="click for product detail page">
                <figure className=" px-2">
                  <img
                    src={singlefaculty.photoUrl}
                    alt="man"
                    className="rounded-xl my-2 w-[390px] h-[270px] object-cover  "
                  />
                </figure>
              </a>
              <div className=" pb-5">
                <div className="  ">
                  <div className="flex justify-between p-4">
                    <div className="">
                      <h2 className="   font-bold  text-xl  text-gray-900  ">
                        {singlefaculty?.name}
                      </h2>
                    </div>

                    <div className=""></div>
                  </div>
                  <div className="flex justify-between text-gray-600 text-xs p-4 ">
                    <div className="">{singlefaculty?.profession}</div>
                  </div>

                  <div className="text-gray-600 text-xs px-4  ">
                    {singlefaculty?.about}
                  </div>

                  <div className="text-orange-500  text-xs p-4">
                    {singlefaculty?.designation}
                  </div>

                  <div className="card-actions justify-end px-4   text-gray-600 text-xs ">
                   
                    <p className="flex gap-2 items-center">
                      <FiMail size={20} />
                      <a href={`mailto:${singlefaculty?.email}`}>
                        {singlefaculty?.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:flex gap-6 w-full py-12   "></div>
    </div>
  );
};

export default Faculty;
