import { animate, motion } from "framer-motion";
import React from "react";

const textSlide2 = {
  initial: {
    x: -1500,
  },
  animate: {
    x: "10vw",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 7,
    },
  },
};

function Clock() {
  return (
    <div
      className="bg-gray-900 absolute top-[1000px] w-full h-[900px] 
                 justify-items-center content-center grid gap-3 overflow-hidden"
    >
      <div
        className={`bg-[url('./left.png')] w-16 h-16 bg-cover cursor-pointer`}
      ></div>
      <div
        className={`bg-[url('./right.png')] w-16 h-16 bg-cover cursor-pointer`}
      ></div>
      <p className="absolute left-[1714px] top-[567px] text-white font-semibold">
        Pause Animation
      </p>
      <div
        className={`bg-[url('./pause.png')] w-16 h-16 bg-cover cursor-pointer absolute left-[1740px] top-[590px] hover:w-20 hover:h-20`}
      ></div>

      <motion.p className="font-calli text-6xl text-white absolute top-[590px] left-[2000px]">
        self-discipline will get you farther than motivation ever will.
      </motion.p>
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
