const StudentNotice = () => {
  return (
    <div className="card bg-gradient-to-b from-purple-400 to-purple-600">
      <div className="text-xl pt-3 pb-2  text-white font-bold">
        {" "}
        Student notice
      </div>
      <hr className="border-b-1 border-purple-400" />
      <form className="p-4">
        <input
          type="text"
          placeholder="Type Notice"
          className="input  input-bordered  w-full max-w-xs mb-2"
        />
        <input
          type="date"
          placeholder="Type Notice"
          className="input  input-bordered   w-full max-w-xs mb-2"
        />
        <br />
        <button className="btn   ">Add Notice</button>
      </form>
      {/* <div>
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
    </div> */}
    </div>
  );
};

export default StudentNotice;
