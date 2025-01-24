import React from "react";
import { ReactTyped } from "react-typed";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const textVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
    exit: {
      x: -100,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  },
};

function Main({ scrollToComponent }) {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);

  const scrollToPosition = (position) => {
    window.scrollTo({
      top: position, // Scroll to this vertical position
      behavior: "smooth", // Smooth scroll
    });
  };

  return (
    <div className="h-48">
      {/* Navigation Links */}
      <div className="flex justify-end p-8 mr-40">
        <button
          className="text-4xl font-varela text-gray-400 cursor-pointer hover:text-gray-300 transition-colors group mr-10"
          onClick={() => scrollToPosition(1000)} // Scroll to Projects
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
      <div className="-mt-20">
        <p className="text-white text-8xl font-anton p-24 -mt-10 font-semibold tracking-wider">
          Hello!{" "}
          <p className="text-white text-7xl font-anton inline-block font-medium tracking-wide">
            My name is
          </p>{" "}
          <p className="text-white text-9xl mt-3 font-semibold tracking-wider">
            Giannis Theo
          </p>
          <p className="text-white text-6xl mt-3 font-medium tracking-wider">
            and I'm a front-end developer.
          </p>
        </p>
      </div>
      <div className="absolute top-[100px] right-[920px] scale-125">
        <motion.h1 //first button text
          className={`text-white text-3xl font-bold absolute top-[85px] left-[141px]`}
          style={{ opacity: isHovered1 ? 1 : 0 }}
        >
          Skills
        </motion.h1>
        <motion.button //first button
          className={`bg-[url('./coder.png')] bg-cover w-[80px] h-[80px]
        hover:bg-[url('./coderAnim.gif')] hover:scale-[1.5] absolute top-[128px] left-[150px]`}
          variants={textVariants}
          onMouseEnter={() => {
            setIsHovered1(true);
          }}
          onMouseOut={() => {
            setIsHovered1(false);
          }}
          onClick={() => {
            setIsOpen1(!isOpen1);
            setIsClicked1(true);
          }}
        ></motion.button>

        <motion.h1 //second button text
          className={`text-white text-3xl font-bold absolute top-[102px] left-[330px]`}
          style={{ opacity: isHovered2 ? 1 : 0 }}
        >
          About
        </motion.h1>
        <motion.button //second button
          className={`bg-[url('./laptop.png')] bg-cover w-[80px] h-[80px]
          hover:bg-[url('./laptopAnim.gif')] hover:scale-[1.5] absolute top-[128px] left-[370px]`}
          variants={textVariants}
          onMouseEnter={() => {
            setIsHovered2(true);
          }}
          onMouseOut={() => {
            setIsHovered2(false);
          }}
          onClick={() => {
            setIsOpen2(!isOpen2);
            setIsClicked2(true);
          }}
        ></motion.button>

        <motion.h1 //third button text
          className={`text-white text-3xl font-bold absolute top-[90px] left-[569px]`}
          style={{ opacity: isHovered3 ? 1 : 0 }}
        >
          Certificates
        </motion.h1>
        <motion.button //third button
          className={`bg-[url('./skills.png')] bg-cover w-[80px] h-[80px]
          hover:bg-[url('./skillsAnim.gif')] hover:scale-[1.5] absolute top-[140px] left-[610px]`}
          variants={textVariants}
          onMouseEnter={() => {
            setIsHovered3(true);
          }}
          onMouseOut={() => {
            setIsHovered3(false);
          }}
          onClick={() => {
            setIsOpen3(!isOpen3);
            setIsClicked3(true);
          }}
        ></motion.button>
      </div>
      <div className="flex space-x-4">
        {isOpen1 && isClicked1 && (
          <AnimatePresence>
            <motion.div
              key="first-snippet"
              className="invisible" //first code snippet
            >
              <motion.div
                className={`relative px-2 py-1 bg-[url('./sampleSnip.png')] max-w-[560px] max-h-[400px] m-16 rounded-md`}
                variants={textVariants}
                initial="initial"
                animate="animate"
                style={{ visibility: isClicked1 ? "visible" : "" }}
              >
                <motion.p
                  className="text-white font-semibold ml-2 text-center text-4xl mt-3"
                  variants={textVariants}
                >
                  Skills
                </motion.p>
                <div className="text-justify break-all flex mt-5">
                  <p className="text-white font-bold p-1 text-left text-2xl leading-relaxed break-words overflow-wrap-break-word">
                    I am a passionate developer with expertise in React,
                    JavaScript, Tailwind, HTML, and CSS, focused on crafting
                    modern, responsive web applications. Skilled in transforming
                    designs into dynamic, user-friendly interfaces through
                    clean, efficient code.
                  </p>
                </div>
                <motion.div className="text-center">
                  <ReactTyped
                    className="text-white font-bold mt-12 text-2xl"
                    strings={[
                      "I am reliable",
                      "I am organized",
                      "I am flexible",
                      "I am fast-paced",
                    ]}
                    typeSpeed={200}
                    backSpeed={100}
                    loop
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
        {isOpen2 && (
          <div
            className="invisible" //second code snippet
          >
            <motion.div
              className={`relative px-2 py-1 bg-[url('./sampleSnip.png')] max-w-[560px] max-h-[400px] m-16 rounded-md 
                ${isOpen2 ? "" : "hidden"}`}
              variants={textVariants}
              initial="initial"
              animate="animate"
              style={{ visibility: isClicked2 ? "visible" : "" }}
            >
              <motion.p
                className="text-white font-semibold ml-2 text-center text-4xl mt-3"
                variants={textVariants}
              >
                Who I am
              </motion.p>

              <div className="text-justify break-all flex mt-5">
                <p className="text-white font-bold p-2 text-left text-2xl leading-relaxed break-words overflow-wrap-break-word">
                  I'm a 21 year-old optimistic individual with a passion for
                  programming. I'm a bit of a tech enthusiast, always online
                  checking the latest coding news. But at the end of the day,
                  I'm just a person who loves learning, growing, and connecting
                  with others.
                </p>
              </div>
            </motion.div>
          </div>
        )}
        {isOpen3 && (
          <div
            className="invisible" //third code snippet
          >
            <motion.div
              className={`relative px-2 py-1 bg-[url('./sampleSnip.png')] max-w-[560px] max-h-[400px] m-16 rounded-md 
              ${isOpen3 ? "" : "hidden"}`}
              variants={textVariants}
              initial="initial"
              animate="animate"
              style={{ visibility: isClicked3 ? "visible" : "" }}
            >
              <motion.p
                className="text-white font-semibold ml-2 text-center text-4xl mt-3"
                variants={textVariants}
              >
                Certificates
              </motion.p>

              <div className="text-justify break-all flex mt-5">
                <p className="text-white font-bold p-3 text-left text-2xl leading-relaxed break-words overflow-wrap-break-word">
                  I'm proud to showcase my certifications in various fields.
                  With certifications in web development, data science, and
                  cyber security, I possess a unique combination of skills that
                  enable me to approach problems from multiple angles.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
