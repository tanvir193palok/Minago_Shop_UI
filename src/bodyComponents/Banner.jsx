import React, { useContext } from "react";
import CoverImage from "../assets/cover.png";
import { motion } from "framer-motion";
import { variantsContext } from "../context";

const Banner = () => {
  //using text variants from variants context
  const { textVariants } = useContext(variantsContext);

  return (
    <div className="banner-container">
      <div className="banner-content">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="banner-text"
        >
          <motion.p
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="banner-title"
          >
            Up to <span className="highlight-title">70%</span> off on Black
            Friday
          </motion.p>
          <p className="banner-subtitle">
            TRENDY <span className="highlight">FASHION</span> COLLECTION
          </p>
          <button className="banner-button">Buy Now</button>
        </motion.div>
        <motion.img
          whileHover={{ x: "-20%" }}
          transition={{ transition: { duration: 1 } }}
          src={CoverImage}
          alt="cover"
          className="banner-image"
        />
      </div>
    </div>
  );
};

export default Banner;
