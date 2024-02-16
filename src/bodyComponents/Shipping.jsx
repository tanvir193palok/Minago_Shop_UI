import React from "react";

const Shipping = ({ data }) => {
  const { icon, title, subTitle } = data;
  return (
    <div className="shipping-item">
      <div className="icon-container">
        <img src={icon} alt="Icon" className="icon" />
      </div>
      <div className="info-container">
        <p className="title">{title}</p>
        <p className="subtitle">{subTitle}</p>
      </div>
    </div>
  );
};

export default Shipping;
