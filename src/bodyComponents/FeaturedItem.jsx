import React, { useContext, useRef, useState } from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import ImageHoveredIcons from "./ImageHoveredIcons";
import { motion, useInView } from "framer-motion";
import { variantsContext } from "../context";

const FeaturedItem = ({ product }) => {
  //using text variants from varaints context
  const { textVariants } = useContext(variantsContext);

  //state for image hover to show the icons
  const [isHovered, setIsHovered] = useState(false);

  //Destructuring Product data
  const { title, thumbnail, rating, stock, discountPercentage, price } =
    product;

  //Calculating discount price
  const discountedPrice = (
    price -
    (price * Math.round(discountPercentage)) / 100
  ).toFixed(2);

  const ref = useRef();
  const isInView = useInView(ref, { triggerOnce: true });

  return (
    <div className="item-grid-item">
      <div
        className="image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p className="discount">- {Math.round(discountPercentage)} %</p>
        <ImageHoveredIcons isHovered={isHovered} />
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ transition: { duration: 1 } }}
          className="image"
          src={thumbnail}
          alt={title}
        />
      </div>
      <motion.div
        variants={textVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        ref={ref}
      >
        <p className="title">{title || "Unknown Title"}</p>
        <motion.div
          variants={textVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          ref={ref}
          className="rating"
        >
          {/* Render stars based on rating */}
          {[...Array(Math.round(rating))].map((_, index) => (
            <StarOutlinedIcon
              key={index}
              style={{ color: "#FFB000", fontSize: 15 }}
            />
          ))}
          <p className="rating-count">({stock})</p>
          <p className="availability">
            {stock ? "Stock Available" : "No Stock"}
          </p>
        </motion.div>
        <div className="price">
          <p className="discounted-price">${discountedPrice}</p>
          <div className="original-price">
            <hr className="price-divider" />
            <p className="actual-price">${price}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedItem;
