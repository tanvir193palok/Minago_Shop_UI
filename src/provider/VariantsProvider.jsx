import React from "react";
import { variantsContext } from "../context/index";
import { transition } from "../transition";

const textVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, type: "linear", staggerChildren: 0.1 },
  },
};

const previewVariants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, type: "tween", staggerChildren: 0.1 },
  },
};

const VariantsProvider = ({ children }) => {
  return (
    <variantsContext.Provider value={{ textVariants, previewVariants }}>
      {children}
    </variantsContext.Provider>
  );
};

export default VariantsProvider;
