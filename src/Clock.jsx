import { animate, motion } from "framer-motion";
import React from "react";

const textSlide1 = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-80vw",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
    },
  },
};

const textSlide2 = {
  initial: {
    x: -1500,
  },
  animate: {
    x: "10vw",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
    },
  },
};

function Clock() {
  return (
    <div
      className="bg-gray-900 absolute top-[1000px] w-full h-[900px] 
                 justify-items-center content-center grid gap-3 overflow-hidden"
    >
      <motion.p
        className="w-full font-bold text-8xl absolute top-2 left-[370px] whitespace-nowrap text-gray-500 opacity-75"
        variants={textSlide1}
        initial="initial"
        animate="animate"
      >
        John Doe Programmer Experienced Proffesional Animator Designer
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
      <motion.p
        className="w-full font-bold text-8xl absolute bottom-12 left-[70px] whitespace-nowrap text-gray-500 opacity-75"
        variants={textSlide2}
        initial="initial"
        animate="animate"
      >
        John Doe Programmer Experienced Proffesional Animator Designer
      </motion.p>
    </div>
  );
}

export default Clock;
