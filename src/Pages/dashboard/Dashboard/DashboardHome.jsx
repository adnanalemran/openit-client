import { useEffect, useState } from "react";
import Time from "../../../components/DashboardHome/Time";
import Gatting from "../../../components/DashboardHome/Gatting";
import BtebIframe from "../../../components/DashboardHome/BtebIfrem";
import Typingtest from "../../../components/DashboardHome/Typingtest";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.text())
      .then((data) => setStatus(data))
      .catch((error) => {
        console.error("Error fetching database status:", error.message);
        setStatus(`! DB not connected , please contact: 01917019619 (Adnan,Software Developer)
           
          `);
      });
  }, []);
  return (
    <div>
      {" "}
      <Gatting />
      <Time />
      <div className=" ">
        <p className="p-4">{status}</p>
      </div>
      <div className="h-80">
        <Link to="/">
          <button className="btn btn-1">Home</button>
        </Link>
      </div>{" "}
      <div className="h-80">
        <Link to="/">
          <button className="btn btn-1">Home</button>
        </Link>
      </div>{" "}
      <div className="h-80">
        <Link to="/">
          <button className="btn btn-1">Home</button>
        </Link>
      </div>{" "}
      <div className="h-80">
        <Link to="/">
          <button className="btn btn-1">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardHome;
