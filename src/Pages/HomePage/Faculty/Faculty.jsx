import { useEffect, useState } from "react";
import { FaUser, FaPhone } from "react-icons/fa";
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
      <h2
        data-aos="fade-down"
        className="text-center text-5xl font-bold py-4 border-b-2 "
      >
        শিক্ষক-শিক্ষিকা বৃন্দ
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 shadow  mt-4 p-4 ">
        {faculty.map((singlefaculty) => (
          <div
            key={singlefaculty.id}
            className="card card-compact bg-base-300 p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
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
              <p>Designation: {singlefaculty.designation} </p>{" "}
              <div className="card-actions justify-end">
                <p className="flex gap-2">
                  <FaPhone size={16} />{" "}
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
