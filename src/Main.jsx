import React from "react";
import { ReactTyped } from "react-typed";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
      <div className="flex justify-end p-8 mr-40">
        <button
          className="text-4xl font-varela text-gray-400 cursor-pointer hover:text-gray-300 transition-colors group mr-10"
          onClick={() => scrollToPosition(1200)} // Scroll to Projects
        >
          <span className="relative">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </button>
        <button
          className="text-4xl font-varela text-gray-400 cursor-pointer hover:text-gray-300 transition-colors group"
          onClick={() => scrollToPosition(2400)} // Scroll to Contact
        >
          <span className="relative">
            Contact me
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </button>
      </div>
      <div className="justify-center text-center flex">
        <p className="text-white text-6xl md:text-8xl font-anton p-24 -mt-1 font-semibold tracking-wider">
          Hello!{" "}
          <p className="text-white text-5xl md:text-7xl font-anton inline-block font-medium tracking-wide">
            My name is
          </p>{" "}
          <p className="text-white text-7xl md:text-9xl mt-3 font-semibold tracking-wider">
            Giannis Theo
          </p>
          <p className="text-white text-4xl md:text-6xl mt-3 font-medium tracking-wider">
            and I'm a front-end developer.
          </p>{" "}
          <p className="text-xl sm:text-2xl font-semibold tracking-normal mt-16 font-sans">
            Lets take a look at various projects, skills and traits of my
            character that i have developed over time!
          </p>
        </p>
      </div>
    </div>
  );
}

export default Main;
