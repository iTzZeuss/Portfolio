import React from "react";
import { ReactTyped } from "react-typed";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, easeIn } from "motion/react";
import { easeInOut } from "motion";
import { type } from "@testing-library/user-event/dist/type";
function Main({ scrollToComponent }) {
  const scrollToPosition = (position) => {
    window.scrollTo({
      top: position, // Scroll to this vertical position
      behavior: "smooth", // Smooth scroll
    });
  };

  return (
    <div className="relative w-full bg-bg2 bg-cover bg-center">
      {/* Navigation Links */}
      <motion.div
        className="flex justify-center p-12"
        onClick={() => scrollToPosition(1000)} // Scroll to Projects
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <motion.button
          className="text-3xl md:text-4xl font-varela text-gray-400 cursor-pointer hover:text-gray-300 transition-colors group mr-10"
          initial={{ opacity: "0%" }}
          animate={{ opacity: "100%" }}
          transition={{ duration: 2 }}
        >
          <span className="relative">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </motion.button>
        <motion.button
          className="text-3xl md:text-4xl font-varela whitespace-nowrap text-gray-400 cursor-pointer hover:text-gray-300 transition-colors group"
          onClick={() => scrollToPosition(2400)} // Scroll to Contact
          initial={{ opacity: "0%" }}
          animate={{ opacity: "100%" }}
          transition={{ duration: 2 }}
        >
          <span className="relative">
            Contact me
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </motion.button>
      </motion.div>
      <motion.div className="justify-center text-center flex -mt-12">
        <motion.p
          className="text-white text-5xl md:text-8xl font-anton p-24 -mt-1 font-semibold tracking-wider"
          animate={{ opacity: ["0%", "100%"] }}
          transition={{ duration: 2 }}
        >
          Hello!{" "}
          <motion.p
            className="text-white text-4xl md:text-7xl font-anton inline-block font-medium tracking-wide"
            animate={{ x: ["200vw", "0%"] }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
          >
            My name is
          </motion.p>{" "}
          <motion.p
            className="text-white text-6xl md:text-9xl mt-3 font-semibold tracking-wider whitespace-nowrap"
            variants={{
              hidden: { x: "200vw", opacity: 0 },
              visible: { x: "0%", opacity: 1 },
            }}
            initial="hidden"
            animate="visible"
            transition={{
              x: { type: "string", delay: 3, stiffness: 100, damping: 10 },
              opacity: { delay: 3.5, duration: 2 },
            }}
          >
            Giannis Theo
          </motion.p>
          <motion.p className="text-white text-3xl md:text-6xl mt-3 font-medium tracking-wider">
            and I'm a front-end developer.
          </motion.p>{" "}
          <motion.p className="text-base sm:text-2xl font-semibold tracking-normal mt-16 font-sans">
            Let's take a look at various projects, skills, and traits of my
            character that I have developed over time!
          </motion.p>
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Main;
