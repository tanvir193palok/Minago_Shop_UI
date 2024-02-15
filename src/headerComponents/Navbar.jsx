import React from "react";
import Searchbox from "./Searchbox";
import Icons from "./Icons";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <div className="logo">minago</div>
        <Searchbox />
        <Icons />
      </div>
    </nav>
  );
};

export default Navbar;
