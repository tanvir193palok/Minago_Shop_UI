import React, { useState } from "react";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const Sidebar = () => {
  const categories = [
    "Smart Phones",
    "Laptops",
    "Fragrances",
    "Skincare",
    "Groceries",
    "Home Decoration",
  ];

  const [selected, setSelected] = useState(categories[0]);

  return (
    <div className={`sidebar-container ${selected ? "selected" : ""}`}>
      {categories.map((category, index) => (
        <div
          className={`sidebar-item ${category === selected ? "selected" : ""}`}
          key={index}
          onClick={() => setSelected(category)}
        >
          <div className="item">{category}</div>
          <KeyboardArrowRightOutlinedIcon />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
