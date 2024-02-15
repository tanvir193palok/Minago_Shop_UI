import React from "react";
import Navbar from "../headerComponents/Navbar";
import BrowsePages from "../headerComponents/BrowsePages";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header-container">
      <Navbar />
      <BrowsePages />
    </header>
  );
};

export default Header;
