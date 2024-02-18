import React, { useState } from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import ImageHoveredIcons from "./ImageHoveredIcons";

const FeaturedItem = ({ product }) => {
  //state for image hover to show the icons
  const [isHovered, setIsHovered] = useState(false);

  //Destructuring Product data
  const { title, thumbnail, rating, stock, discountPercentage, price } =
    product;

  //Calculating discount price
  const discountedPrice = (
    price -
    (price * Math.round(discountPercentage)) / 100
  ).toFixed(2);

  if (!product) {
    return <p>Error: Product data is missing</p>;
  }

  return (
    <div className="item-grid-item">
      <div
        className="image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p className="discount">- {Math.round(discountPercentage)} %</p>
        <ImageHoveredIcons isHovered={isHovered} />
        <img className="image" src={thumbnail} alt={title} />
      </div>
      <div>
        <p className="title">{title || "Unknown Title"}</p>
        <div className="rating">
          {/* Render stars based on rating */}
          {[...Array(Math.round(rating))].map((_, index) => (
            <StarOutlinedIcon
              key={index}
              style={{ color: "yellow", fontSize: 15 }}
            />
          ))}
          <p className="rating-count">({stock})</p>
          <p className="availability">
            {stock ? "Stock Available" : "No Stock"}
          </p>
        </div>
        <div className="price">
          <p className="discounted-price">${discountedPrice}</p>
          <div className="original-price">
            <hr className="price-divider" />
            <p className="actual-price">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
