import React from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

const FeaturedItem = ({ product }) => {
  if (!product) {
    return <p>Error: Product data is missing</p>;
  }

  // Destructure product properties
  const { title, thumbnail, rating, stock, discountPercentage, price } =
    product;

  // Calculate discounted price
  const discountedPrice = price - (price * discountPercentage) / 100;

  // Calculate the number of stars to display
  const numStars = Number.isInteger(rating) ? Math.round(rating) : 0;

  return (
    <div className="item-grid-item">
      <div className="image-container">
        <img className="image" src={thumbnail} alt={title} />
      </div>
      <div>
        {/* Check if title exists */}
        <p className="title">{title || "Unknown Title"}</p>
        <div className="rating">
          {/* Render stars based on rating */}
          {[...Array(numStars)].map((_, index) => (
            <StarOutlinedIcon
              key={index}
              style={{ color: "yellow", fontSize: 18 }}
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
