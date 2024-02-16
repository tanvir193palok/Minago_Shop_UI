// PreviewItem.js
import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const PreviewItem = ({ data }) => {
  return (
    <div className="preview-item-container">
      <div className="preview-item-info">
        <p>{data.title}</p>
        <p className="sale-text">{data.subTitle}</p>
        <div className="buy-now-section">
          {data.isShop ? <ShoppingBagOutlinedIcon /> : <p>See All</p>}
          {data.isBuy && <p>Buy Now</p>}
        </div>
      </div>
      <img src={data.image} alt="Chair" className="preview-item-image" />
    </div>
  );
};

export default PreviewItem;
