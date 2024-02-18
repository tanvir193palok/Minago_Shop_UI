import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const ImageHoveredIcons = ({ isHovered }) => {
  const icons = [
    ShoppingBagOutlinedIcon,
    FavoriteBorderIcon,
    FullscreenOutlinedIcon,
    VisibilityOutlinedIcon,
  ];

  const [selectedIcon, setSelectedIcon] = useState(icons[0]);

  return (
    <div className={`hovered-icons-container ${isHovered ? "" : "hidden"}`}>
      {icons.map((Icon, index) => (
        <div
          className={`featured-icon-container ${
            selectedIcon === Icon ? "selected" : ""
          }`}
          key={index}
          onClick={() => setSelectedIcon(Icon)}
        >
          <Icon style={{ fontSize: "15px" }} />
        </div>
      ))}
    </div>
  );
};

export default ImageHoveredIcons;
