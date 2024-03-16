import React from "react";

const CumpusLife = () => {
  return (
    <div className="py-8 text-bangla">
      <h2  data-aos="flip-up" className="text-center text-5xl font-bold py-4 ">ক্যাম্পাস সময়</h2>
      <h4 className="text-center text-sm font-bold py-4 border-b-2">
        আমাদের শিক্ষার্থীদের অতিরিক্ত পাঠ্যক্রম
      </h4>

      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img data-aos="zoom-out-right"
            src="https://i.ibb.co/3sRZdqt/lab1.jpg"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 "
          />
          <img
          data-aos="zoom-in-right"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 "
            src="https://i.ibb.co/rbSrV1t/image.jpg"
          />
          <img
          data-aos="zoom-out-left"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 "
            src="https://i.ibb.co/pQLyV6q/image.jpg"
          />
          <img
          data-aos="zoom-in-left"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 "
            src="https://i.ibb.co/zPQz7D8/361225113-667181538118822-4546841579589704082-n.jpg"
          />
          <img
          data-aos="zoom-in-down"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 "
            src="https://i.ibb.co/nDtLZC6/image.jpg"
          />
        </div>
      </section>
    </div>
  );
};

export default CumpusLife;
