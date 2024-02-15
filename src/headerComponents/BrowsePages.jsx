import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const BrowsePages = () => {
  return (
    <div className="browse-pages-container">
        <div>
          <MenuIcon style={{ marginRight: "10px" }} />
          Browse Categories
        </div>
        <div className="pages-container">
          <div>
            <div>Home</div>
          </div>
          <div>
            <div>
              Products <ExpandMoreIcon />
            </div>
          </div>
          <div>
            <div>
              Categories <ExpandMoreIcon />
            </div>
          </div>
          <div>
            <div>
              Pages <ExpandMoreIcon />
            </div>
          </div>
          <div>
            <div>Campaign</div>
          </div>
          <div>
            <div>Offer</div>
          </div>
          <div>
            <div>Blog</div>
          </div>
          <div>
            <div>Review</div>
          </div>
          <div>
            <div>Flash Sale</div>
          </div>
          <div>
            <div>Contact us</div>
          </div>
        </div>
    </div>
  );
};

export default BrowsePages;
