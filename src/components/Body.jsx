import React from "react";
import Sidebar from "../bodyComponents/Sidebar";
import Banner from "../bodyComponents/Banner";
import "../styles/body.css";
import Preview from "../bodyComponents/Preview";
import Services from "../bodyComponents/Services";
import FeaturedItemGrid from "../bodyComponents/FeaturedItemGrid";

const Body = () => {
  return (
    <div className="body-container">
      <div className="body-content">
        <Sidebar />
        <Banner />
      </div>
      <Preview />
      <div className="featured-content">
        <Services />
        <FeaturedItemGrid />
      </div>
    </div>
  );
};

export default Body;
