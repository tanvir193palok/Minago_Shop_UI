import React, { useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { variantsContext } from "../context";

const Shipping = ({ data }) => {
  const { previewVariants } = useContext(variantsContext);
  const { icon, title, subTitle } = data;

  const ref = useRef();
  const isInView = useInView(ref, { triggerOnce: true });
  return (
    <motion.div
      variants={previewVariants}
      initial="animate"
      animate={isInView ? "animate" : "initial"}
      ref={ref}
      className="shipping-item"
    >
      <div className="icon-container">
        <img src={icon} alt="Icon" className="icon" />
      </div>
      <div className="info-container">
        <p className="title">{title}</p>
        <p className="subtitle">{subTitle}</p>
      </div>
    </motion.div>
  );
};

export default Shipping;
