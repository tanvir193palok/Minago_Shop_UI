import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ScreenRotationIcon from "@mui/icons-material/ScreenRotation";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Icons = () => {
  return (
    <div className="icons-container">
      <div className="icons-group">
        <ScreenRotationIcon />
        <FavoriteBorderIcon />
        <div className="cart-icon-container">
          <ShoppingCartIcon />
          <p className="cart-count">0</p>
        </div>
      </div>
      <div className="user-info">
        <p>Account</p>
        <PersonOutlineOutlinedIcon style={{ color: "blue" }} />
        <p className="price">$20.00</p>
      </div>
    </div>
  );
};

export default Icons;
