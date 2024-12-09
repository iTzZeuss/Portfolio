import React from "react";
import { ReactTyped } from "react-typed";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Main() {
  const [isOpen, setIsOpen] = useState(true);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isClicked1, setIsClicked1] = useState();
  const [isClicked2, setIsClicked2] = useState();
  const [isClicked3, setIsClicked3] = useState();

  const handleClose = () => {
    setIsOpen(false);
  };

  function closeSnip() {}

  return (
    <div>
      <motion.h1 //first button text
        className={`absolute top-[200px] left-[1054px] text-lg font-semibold`}
        style={{ opacity: isHovered1 ? 1 : 0 }}
      >
        Skills
      </motion.h1>
      <motion.button //first button
        className={`bg-[url('./infoBTN.png')] bg-cover w-10 h-10 rounded-full 
    absolute top-56 left-[1050px] hover:size-12`}
        variants={textVariants}
        onMouseEnter={() => {
          setIsHovered1(true);
        }}
        onMouseOut={() => {
          setIsHovered1(false);
        }}
        onClick={() => {
          setIsOpen(true);
          setIsClicked1(true);
        }}
      ></motion.button>
      <motion.h1 //second button text
        className={`absolute top-[200px] left-[1114px] text-lg font-semibold`}
        style={{ opacity: isHovered2 ? 1 : 0 }}
      >
        Skills
      </motion.h1>
      <motion.button //second button
        className={`bg-[url('./aboutMe.png')] bg-cover w-10 h-10 rounded-full 
    absolute top-56 left-[1110px] hover:size-12`}
        variants={textVariants}
        onMouseEnter={() => {
          setIsHovered2(true);
        }}
        onMouseOut={() => {
          setIsHovered2(false);
        }}
      ></motion.button>
      <motion.h1 //third button text
        className={`absolute top-[200px] left-[1156px] text-lg font-semibold`}
        style={{ opacity: isHovered3 ? 1 : 0 }}
      >
        Certificates
      </motion.h1>
      <motion.button //third button
        className={`bg-[url('./skills.png')] bg-cover w-10 h-10
    absolute top-56 left-[1170px] hover:size-12`}
        variants={textVariants}
        onMouseEnter={() => {
          setIsHovered3(true);
        }}
        onMouseOut={() => {
          setIsHovered3(false);
        }}
      ></motion.button>
      <div className="invisible absolute top-48 left-[1050px]">
        <motion.div
          className={`relative px-2 py-1 bg-slate-500 w-[533px] !important h-80 m-16 rounded-md 
${isOpen ? "" : "hidden"}`}
          variants={textVariants}
          initial="initial"
          animate="animate"
          style={{ visibility: isClicked1 ? "visible" : "" }}
        >
          <motion.div
            className={`bg-slate-700 w-[520px] h-6 border-b-2 border-slate-800 ${
              isOpen ? "" : "!hidden"
            }`}
            variants={textVariants}
          >
            <motion.p
              className="text-white font-semibold ml-2 text-center"
              variants={textVariants}
            >
              Who I am
            </motion.p>
            <motion.button
              onClick={handleClose}
              className="absolute top-0 right-2 text-white animate-pulse"
              variants={textVariants}
            >
              x
            </motion.button>
          </motion.div>
          <div className="text-justify break-all">
            <p className="text-white font-bold p-1 text-left">
              I am a passionate developer with expertise in React, JavaScript,
              <br></br>Tailwind, HTML, and CSS, focused on crafting modern,
              responsive web applications. Skilled in transforming designs into
              dynamic, <br></br> user-friendly interfaces through clean,
              efficient code. Also, i have <br></br> deleloped a strong grasp of
              component-based development and <br></br>streamlined styling
              techniques. Continuously learning and adapting to emerging trends,
              bringing innovative solutions to both team <br></br>collaborations
              and individual challenges.
            </p>
            <div className="text-center">
              <ReactTyped
                className="text-white font-bold justify-center"
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
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Main;
