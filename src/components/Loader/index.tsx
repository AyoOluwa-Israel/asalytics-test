import GridLoader from "react-spinners/GridLoader";
import React from "react";

import { motion } from "framer-motion";

const backdrop = {
  visible: {
    opacity: 1,
    transition: {
      duration: 4,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 4,
    },
  },
};

const Loader = () => {
  return (
    <motion.div className="absolute w-[100%] h-[100vh] bg-primary flex items-center justify-center flex-col font-primary transition ease-in-out delay-150 duration-300" data-aos="zoom-in"
    data-aos-duration="1000" data-aos-easing="ease-in-back">
      <p className="text-[24px] mb-[1.5em]">Loading Assets</p>
      <GridLoader className="text-black mx-auto " />
    </motion.div>
  );
};

export default Loader;
