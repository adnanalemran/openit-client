import Nav from "./Nav/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navv2 from "./Nav/Navv2";

const Main = () => {
  return (
    <div>


      <Nav />

      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
