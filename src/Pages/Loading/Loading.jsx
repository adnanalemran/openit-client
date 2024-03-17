  
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../../public/animation/loading.json";
const Loading = () => {
    return (
        <div>
            <div className="">
            <Player
                autoplay
                loop
                src={animation}
                style={{ height: "300px", width: "300px" }}
              >
                
              </Player>
            </div>



        </div>
    );
};

export default Loading;
