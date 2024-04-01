import { Player } from "@lottiefiles/react-lottie-player";

import animation from "../../../../public/animation/Animation - 1710596968227.json";
import Info from "../../../Pages/Auth/Signin/Info";
const InvalidAccess = () => {
  return (
    <div className="p-4">
      <Info />
      <Player
        autoplay
        loop
        src={animation}
        style={{ height: "300px", width: "300px" }}
      ></Player>
      <div className="text-center text-2xl ">! Invalid Access</div>
    </div>
  );
};

export default InvalidAccess;
