import StudentNotice from "./StudentNotice";
import WebNotice from "./WebNotice";

const ManageNotice = () => {
  return (
    <div>
      <marquee className="text-2xl pb-8">
        Welcome to Notice control panel
      </marquee>
      <div className="flex gap-4  w-full">
        <div className="  w-1/2  ">
          <WebNotice />
        </div>
        <div className="w-1/2 ">
          <StudentNotice className=" " />
        </div>
      </div>
    </div>
  );
};

export default ManageNotice;
