import WebNotice from "./WebNotice";

const ManageNotice = () => {
  return (
    <div className="min-h-screen">
      <marquee className="text-2xl pb-8">
        Welcome to Notice control panel
      </marquee>
      <div className="flex flex-col gap-4  w-full">
        <div className="   ">
          <WebNotice />
        </div>
        <div className="  ">{/* <StudentNotice className=" " /> */}</div>
      </div>
    </div>
  );
};

export default ManageNotice;
