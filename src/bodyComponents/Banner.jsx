import React from "react";
import CoverImage from "../assets/cover.png";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="banner-text">
          <p className="banner-title">Up to <span className="highlight-title">70%</span> off on Black Friday</p>
          <p className="banner-subtitle">TRENDY <span className="highlight">FASHION</span> COLLECTION</p>
          <button className="banner-button">Buy Now</button>
        </div>
        <img src={CoverImage} alt="cover" className="banner-image" />
      </div>
    </div>
  );
};

export default Banner;

