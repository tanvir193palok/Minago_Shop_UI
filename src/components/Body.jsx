import React from "react";
import Sidebar from "../bodyComponents/Sidebar";
import Banner from "../bodyComponents/Banner";
import "../styles/body.css";

const Body = () => {
  return (
    <div className="body-container">
      <div className="body-content">
        <Sidebar />
        <Banner />
      </div>
    </div>
  );
};

export default Body;
