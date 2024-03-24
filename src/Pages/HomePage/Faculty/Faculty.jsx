import { useEffect, useState } from "react";
import { FaPhone, FaUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
const Faculty = () => {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    fetch("/faculty.json")
      .then((res) => res.json())
      .then((data) => setFaculty(data));
  }, []);

  return (
    <div className="py-8 text-bangla   ">
       <div className="text-center ">
        <h2 className="text-3xl font-semibold text-gray-950 pb-3">
          Our Mentor
        </h2>
        <p className="text-gray-700">
          Discover the ideal course from top skilled Mentor !
        </p>
      </div>

     


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 shadow  mt-4 p-4 ">
        {faculty.map((singlefaculty) => (
          <div
            key={singlefaculty.id}
            className="card card-compact bg-base-300 p-6 hover:shadow-lg transition duration-300    hover:scale-105 shadow-xl"
          >
            <div className="avatar mt-4">
              <div className="w-44 mx-auto rounded-full">
                <img src={singlefaculty.photoUrl} />
              </div>
            </div>
            <div className="card-body ">
              <h2 className="card-title">
                <FaUser size={15} /> {singlefaculty?.name}
              </h2>
              <p>Designation: {singlefaculty.designation} </p>
              <div className="card-actions justify-end">
                <p className="flex gap-2">
                  <FaPhone size={16} />
                  <a href={`tel:${singlefaculty?.mobileNo}`}>
                    {singlefaculty?.mobileNo}
                  </a>
                </p>
                <p className="flex gap-2">
                  <FiMail size={20} />
                  <a href={`mailto:${singlefaculty?.email}`}>
                    {singlefaculty?.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
