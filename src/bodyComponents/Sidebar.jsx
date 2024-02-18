import React, { useState } from "react";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const Sidebar = () => {
  const categories = [
    "Fashion Collection",
    "Electronics Item",
    "Home Applicance",
    "Kitchen Item",
    "Furniture",
    "Food",
    "Gadgets",
    "Toys and Games",
    "Health & beauty",
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
          <KeyboardArrowRightOutlinedIcon style={{ color: "#777" }} />
        </div>
      ))}
      <div className="sidebar-item-last">
        <div className="item" style={{ color: "#3b82f6" }}>
          View All Categories
        </div>
        <AddOutlinedIcon style={{ color: "#3b82f6" }} />
      </div>
    </div>
  );
};

export default Sidebar;
