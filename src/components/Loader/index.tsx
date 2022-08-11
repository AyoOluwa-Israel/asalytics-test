import GridLoader from "react-spinners/GridLoader";
import React from "react";

import { motion } from "framer-motion";



const Loader = () => {
  return (
    <div className="absolute w-[100%] h-[100vh] bg-primary flex items-center justify-center flex-col font-primary transition ease-in-out delay-150 duration-300" data-aos="zoom-in"
    data-aos-duration="1000" data-aos-easing="ease-in-back" data-testid="loader">
      <p className="text-[24px] mb-[1.5em]" data-testid="loader-text">Loading Assets</p>
      <GridLoader className="text-black mx-auto" />
    </div>
  );
};

export default Loader;
