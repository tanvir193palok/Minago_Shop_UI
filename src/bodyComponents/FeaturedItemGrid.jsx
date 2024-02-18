import React, { useState } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import FeaturedItem from "../bodyComponents/FeaturedItem";
import useFeaturedProducts from "../hooks/useFeaturedProducts";

const FeaturedItemGrid = () => {
  const { products, loading } = useFeaturedProducts();
  const [startIndex, setStartIndex] = useState(0);

  const scrollLeft = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const scrollRight = () => {
    if (startIndex < productItems.length - 4) {
      setStartIndex(startIndex + 1);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  const productArray = Object.values(products);
  const productItems = productArray[0];

  return (
    <div className="featured-item-container">
      <div className="featured-item-header">
        <p className="featured-title">Featured Item</p>
        <div className="featured-item-navigation">
          <ArrowBackOutlinedIcon
            style={{ color: startIndex === 0 ? "#a2a1a1" : "#3b82f6" }}
            onClick={scrollLeft}
          />
          <ArrowForwardOutlinedIcon
            style={{
              color:
                startIndex === productItems.length - 4 ? "#a2a1a1" : "#3b82f6",
            }}
            onClick={scrollRight}
          />
        </div>
      </div>
      <div className="item-grid">
        {productItems.slice(startIndex, startIndex + 4).map((product) => (
          <FeaturedItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedItemGrid;
