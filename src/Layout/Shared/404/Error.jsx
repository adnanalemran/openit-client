import { Link } from "react-router-dom";
import Info from "../../../Pages/Auth/Signin/Info";

const Error = () => {
  return (
    <section className="flex items-center h-[100vh] p-16  bg-[#F1F5F9] text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <Info />

          <Link rel="noopener noreferrer" to="/">
            
            <img
              src="https://i.ibb.co/s1KDXcK/1-z-BFBJkt-PD3-z0-S-35k-O5-Hg.gif"
              alt=""
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
