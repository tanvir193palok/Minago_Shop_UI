import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Searchbox = () => {
  const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setIsDropdownOpen(false);
  };

  return (
    <div className="searchbox-container">
      {/* Input Field */}
      <input
        type="search"
        id="searchInput"
        name="searchInput"
        className="search-input"
        placeholder="Search for Products"
        required
      />

      {/* Categories Dropdown */}
      <div className="dropdown-container">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="dropdown-button"
        >
          {selectedCategory}
          <ArrowDropDownIcon className="dropdown-icon" />
        </button>

        {isDropdownOpen && (
          <ul className="dropdown-list">
            <li>
              <button
                onClick={() =>
                  handleCategoryChange({ target: { value: "All Categories" } })
                }
                className="dropdown-item"
              >
                All Categories
              </button>
            </li>
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  onClick={() =>
                    handleCategoryChange({ target: { value: category } })
                  }
                  className="dropdown-item"
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Search Button */}
      <button type="submit" className="search-button">
        <SearchIcon />
        <span className="sr-only">Search</span>
      </button>
    </div>
  );
};

export default Searchbox;
