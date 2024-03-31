import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../../public/animation/loading.json";
const Loading = () => {
  return (
    <div>
      <div className="min-h-screen">
        <Player
          autoplay
          loop
          src={animation}
          style={{ height: "300px", width: "300px" }}
        ></Player>
        <p className="text-3xl  text-center">Loading....</p>
      </div>
    </div>
  );
};

export default Loading;
