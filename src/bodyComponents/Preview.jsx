import React from "react";
import PreviewItem from "./PreviewItem";
import Mobile from '../assets/mobile.png'
import Ring from '../assets/ring.png'
import Chair from '../assets/chair.png'
import Perfume from '../assets/perfume.png'

const Preview = () => {
  const data = [
    {
      title: "Gadget Store",
      subTitle: "30% Sale",
      isShop: true,
      isBuy: true,
      image: Mobile,
      color: "#98EECC",
    },
    {
      title: "Bundle Package",
      subTitle: "Save 30%",
      isShop: false,
      isBuy: false,
      image: Perfume,
      color: "#FFB7B7",
    },
    {
      title: "Valentines Offer",
      subTitle: "30% Sale",
      isShop: true,
      isBuy: true,
      image: Ring,
      color: "#FFF6E9",
    },
    {
      title: "Relax Chair",
      subTitle: "New Arrival",
      isShop: true,
      isBuy: true,
      image: Chair,
      color: "#B2FCFF",
    },
  ];

  return (
    <div className="grid-container">
      {data.map((data, index) => (
        <div
          className="grid-item"
          style={{ backgroundColor: data.color }}
          key={index}
        >
          <PreviewItem data={data} />
        </div>
      ))}
    </div>
  );
};

export default Preview;
