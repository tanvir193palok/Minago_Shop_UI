import React from "react";
import image from "../assets/mobile.png";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

const FeaturedItem = () => {
  return (
    <div className="item-grid-item">
      <div className="image-container">
        <img className="image" src={image} alt="" />
      </div>
      <div>
        <p className="title">Premium Quality Black Iphone</p>
        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <StarOutlinedIcon
              key={index}
              style={{ color: "yellow", fontSize: 15 }}
            />
          ))}
          <p className="rating-count">(35)</p>
          <p className="availability">Stock Available</p>
        </div>
        <div className="price">
          <p className="discounted-price">$20.00</p>
          <div className="original-price">
            <hr className="price-divider" />
            <p className="actual-price">$40.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
