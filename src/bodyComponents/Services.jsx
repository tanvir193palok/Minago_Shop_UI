// Services.js
import React from "react";
import FreeShipping from "../assets/freeshipping.png";
import Support from "../assets/Support.png";
import BestPrice from "../assets/best.png";
import EasyReturn from "../assets/easy-return.png";
import Shipping from "./Shipping";

const Services = () => {
  const data = [
    {
      icon: FreeShipping,
      title: "Free Shipping",
      subTitle: "Minimum order $90",
    },
    {
      icon: Support,
      title: "24/7 Support",
      subTitle: "Contact us 24 Hours",
    },
    {
      icon: BestPrice,
      title: "Best Prices & offers",
      subTitle: "Order $100 or more",
    },
    {
      icon: EasyReturn,
      title: "Easy Returns",
      subTitle: "Within 30 Days",
    },
  ];

  return (
    <div className="services-container">
      {data.map((service, index) => (
        <Shipping key={index} data={service} />
      ))}
    </div>
  );
};

export default Services;
