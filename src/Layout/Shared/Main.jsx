import Nav from "./Nav/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import AnimatedCursor from "react-animated-cursor";
const Main = () => {
  return (
    <div className="bg-white">
      <AnimatedCursor
      className="z-10"
        innerSize={12}
        outerSize={28}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
