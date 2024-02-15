import React from "react";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const Sidebar = () => {
  const categories = [
    "Smart Phones",
    "Laptops",
    "fragrances",
    "Skincare",
    "Groceries",
    "Home Decoration",
  ];

  return (
    <div className="sidebar-container">
      {categories.map((category, index) => (
        <div className="sidebar-item" key={index}>
          <div className="item">{category}</div>
          <KeyboardArrowRightOutlinedIcon />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

