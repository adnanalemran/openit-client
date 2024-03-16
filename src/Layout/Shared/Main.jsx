import Nav from "./Nav/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Main = () => {
  return (
    <div className="bg-white">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
