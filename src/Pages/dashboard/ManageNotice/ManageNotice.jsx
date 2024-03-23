const ManageNotice = () => {
  return (
    <div>
      <marquee className="text-2xl pb-8">
        Welcome to Notice control panel
      </marquee>
      <div className="flex  w-full">
        <div className="w-1/2 border-r-2 border-purple-800">
          <div className="text-xl"> Website notice</div>
          <hr className="border-b-1 border-purple-800" />
          <form className="pt-4">
            <input
              type="text"
              placeholder="Type Notice"
              className="input input-sm input-bordered input-primary w-full max-w-xs mb-2"
            />
            <input
              type="date"
              placeholder="Type Notice"
              className="input input-sm input-bordered input-primary w-full max-w-xs mb-2"
            />
            <br />
            <button className="btn btn-sm btn-primary">Add</button>
          </form>
          <div>
            <div className="text-xl"> Website notice list</div>
            <hr className="border-b-1 border-purple-800" />

            <div className=" border-r-1 border-purple-800">
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Title</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>demo Title </td>
                      <td> demo date </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2  ">
          <div className="text-xl"> Student notice</div>
          <hr className="border-b-1 border-purple-800" />
          <form className="pt-4">
            <input
              type="text"
              placeholder="Type Notice"
              className="input input-sm input-bordered input-primary w-full max-w-xs mb-2"
            />
            <select className="select select-sm input-bordered input-primary w-full max-w-xs mb-2">
              <option disabled selected>
                Select Batch number
              </option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </select>

            <br />
            <button className="btn btn-sm btn-primary">Update</button>
          </form>

          <div className="">
            <div className="text-xl"> Student notice list</div>
            <hr className="border-b-1 border-purple-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageNotice;
