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
            src="https://i.ibb.co/6ynwMwd/83718654-2523276754443333-3255213648452255744-n.jpg"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 "
          />
          <img
          data-aos="zoom-in-right"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 "
            src="https://c7.alamy.com/zooms/9/bae3b2b499704ebd85b5ecf4544a4ef2/2r9d74f.jpg"
          />
          <img
          data-aos="zoom-out-left"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 "
            src="https://c7.alamy.com/zooms/9/f2567d05526a42bbbd52f6cae600a807/ed88p5.jpg"
          />
          <img
          data-aos="zoom-in-left"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 "
            src="https://i.ytimg.com/vi/HzfPiTXGtVA/maxresdefault.jpg"
          />
          <img
          data-aos="zoom-in-down"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 "
            src="https://cdn4.sharechat.com/img_820555_1cf3139b_1668502817992_sc.jpg?tenant=sc&referrer=tag-service&f=992_sc.jpg"
          />
        </div>
      </section>
    </div>
  );
};

export default CumpusLife;
