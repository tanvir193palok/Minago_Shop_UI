import React, { useRef } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import FeaturedItem from "./FeaturedItem";

const FeaturedItemGrid = () => {
  const gridRef = useRef(null);

  const scrollLeft = () => {
    if (gridRef.current) {
      gridRef.current.scrollLeft -= gridRef.current.offsetWidth;
    }
  };

  const scrollRight = () => {
    if (gridRef.current) {
      gridRef.current.scrollLeft += gridRef.current.offsetWidth;
    }
  };

  return (
    <div className="featured-item-container">
      <div className="featured-item-header">
        <p className="featured-title">Featured Item</p>
        <div className="featured-item-navigation">
          <ArrowBackOutlinedIcon onClick={scrollLeft} />
          <ArrowForwardOutlinedIcon onClick={scrollRight} />
        </div>
      </div>
      <div className="item-grid" ref={gridRef}>
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
      </div>
    </div>
  );
};

export default FeaturedItemGrid;
