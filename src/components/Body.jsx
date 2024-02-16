import React from "react";
import Sidebar from "../bodyComponents/Sidebar";
import Banner from "../bodyComponents/Banner";
import "../styles/body.css";
import Preview from "../bodyComponents/Preview";

const Body = () => {
  return (
    <div className="body-container">
      <div className="body-content">
        <Sidebar />
        <Banner />
      </div>
      <Preview />
    </div>
  );
};

export default Body;
