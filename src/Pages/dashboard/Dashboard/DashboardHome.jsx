import { Player } from "@lottiefiles/react-lottie-player";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import animation from "../../../../public/animation/Animation - 1710595501629.json";
import useAdmin from "../../../Hook/useAdmin";
import useStudent from "../../../Hook/useStudent";
import Analisys from "../../../components/DashboardHome/Analisys";
import Gatting from "../../../components/DashboardHome/Gatting";
import Time from "../../../components/DashboardHome/Time";
import Chart from "../../../components/DashboardHome/Chart";
 

const DashboardHome = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("https://openit-server.vercel.app/")
      .then((res) => res.text())
      .then((data) => setStatus(data))
      .catch((error) => {
        console.error("Error fetching database status:", error.message);
        setStatus(
          "! DB not connected , please contact: 01917019619 (Adnan, Software Developer)"
        );
      });
  }, []);

  const [isAdmin] = useAdmin();
  const [isStudent] = useStudent();

  return (
    <div>
 
      <div>
        {isAdmin ? (
          <p>
            <Gatting />
            <Time />
            <p className="p-4">{status}</p>

            <div className="flex w-full">
              <Chart className="w-full lg:w-1/2" />
              <Analisys className="w-full lg:w-1/2" />
            </div>
          </p>
        ) : isStudent ? (
          <p>Student Dashboard come in soon</p>
        ) : (
          <div className="">
            <Player
              autoplay
              loop
              src={animation}
              style={{ height: "300px", width: "300px" }}
            ></Player>
            <p className="text-2xl text-error p-4">
              You are either outside the service or your application is being
              processed. Contact 01707530810 by mobile number or email at
              nuruzzaman.engbd@gmail.com to inquire about the status of your
              application.
            </p>
            <Link to="/">
              <button className="btn btn-1">Home</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;
