import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Icons = () => {
  return (
    <div className="icons-container">
      <div className="icons-group">
        <FullscreenOutlinedIcon />
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
