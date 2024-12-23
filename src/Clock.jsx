import { animate, motion } from "framer-motion";
import React from "react";

const textSlide = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      duration: 20,
    },
  },
};

function Clock() {
  return (
    <div
      className="bg-gray-200 absolute top-[900px] w-full h-[500px] 
                 justify-items-center content-center grid gap-3"
    >
      <motion.p
        className="w-full font-bold text-7xl absolute top-2 left-3 whitespace-nowrap text-gray-600 opacity-75"
        variants={textSlide}
        initial="initial"
        animate="animate"
      >
        John Doe Coder Content Creator Experienced
      </motion.p>
      <motion.div
        className="size-36 bg-black"
        animate={{ rotate: "180deg" }}
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
        initial={{ rotate: "0deg" }}
      ></motion.div>
    </div>
  );
}

export default Clock;
