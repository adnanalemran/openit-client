import React from "react";

const Notice = () => {
  return (
    <div data-aos="fade-left" className="border rounded-lg border-gray-500">
      <h2 className="text-center font-bold text-xl border-b-2 py-4 border-gray-500">
      নোটিশ বোর্ড
      </h2>

      <div className="overflow-x-auto pt-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <td>no:</td>
              <th>title</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-base-200">
              <th>1</th>
              <td>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium quibusdam nobis possimus voluptates
              </td>
              <td>01/01/21</td>
            </tr>
            <tr className="bg-base-200">
              <th>1</th>
              <td>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium quibusdam nobis possimus voluptates
              </td>
              <td>01/01/21</td>
            </tr>
            <tr className="bg-base-200">
              <th>1</th>
              <td>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium quibusdam nobis possimus voluptates
              </td>
              <td>01/01/21</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notice;
