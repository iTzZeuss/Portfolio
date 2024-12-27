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

function Main() {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);

  function closeSnip() {}

  return (
    <div>
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
        className={`text-3xl font-semibold absolute top-[90px] left-[640px]`}
        style={{ opacity: isHovered3 ? 1 : 0 }}
      >
        Certificates
      </motion.h1>
      <motion.button //third button
        className={`bg-[url('./skills.png')] bg-cover w-[80px] h-[80px]
          hover:bg-[url('./employeeAnim.gif')] hover:scale-[1.5] absolute top-[128px] left-[650px]`}
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
      {isOpen1 && (
        <AnimatePresence>
          <motion.div
            key="first-snippet"
            className="invisible absolute top-[340px] left-[-30px]" //first code snippet
          >
            <motion.div
              className={`relative px-2 py-1 bg-[url('./sampleSnip.png')] max-w-[700px] h-[400px] m-16 rounded-md 
${isOpen1 ? "" : "hidden"}`}
              variants={textVariants}
              initial="initial"
              animate="animate"
              style={{ visibility: isClicked1 ? "visible" : "" }}
            >
              <motion.p
                className="text-white font-semibold ml-2 text-center text-4xl mt-2"
                variants={textVariants}
              >
                Skills
              </motion.p>
              <div className="text-justify break-all flex mt-5">
                <p className="text-white font-bold p-1 text-left text-xl">
                  I am a passionate developer with expertise in React,
                  JavaScript,
                  <br></br>Tailwind, HTML, and CSS, focused on crafting modern,
                  responsive web applications. Skilled in transforming designs
                  into dynamic, <br></br> user-friendly interfaces through
                  clean, efficient code. Also, i have <br></br> deleloped a
                  strong grasp of component-based development and <br></br>
                  streamlined styling techniques. Continuously learning and
                  adapting to emerging trends, bringing innovative solutions to
                  both team <br></br>
                  collaborations and individual challenges.
                </p>
                <div className="text-center">
                  <ReactTyped
                    className="text-white font-bold justify-center absolute top-[330px] right-[310px] text-2xl"
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
          </motion.div>
        </AnimatePresence>
      )}
      {isOpen2 && (
        <div
          className="invisible absolute top-[340px] left-[800px]" //second code snippet
        >
          <motion.div
            className={`relative px-2 py-1 bg-[url('./sampleSnip.png')] max-w-[700px] h-[400px] m-16 rounded-md 
                ${isOpen2 ? "" : "hidden"}`}
            variants={textVariants}
            initial="initial"
            animate="animate"
            style={{ visibility: isClicked2 ? "visible" : "" }}
          >
            <motion.p
              className="text-white font-semibold ml-2 text-center text-4xl mt-2"
              variants={textVariants}
            >
              Who I am
            </motion.p>

            <div className="text-justify break-all flex mt-5">
              <p className="text-white font-bold p-1 text-left text-xl">
                Hi there! I'm a curious and creative individual with a passion
                for innovation and problem-solving. When I'm not working on my
                latest project, you can find me exploring new hiking trails,
                trying out new recipes in the kitchen, or curled up with a good
                book. I'm a bit of a tech enthusiast, always on the lookout for
                the latest gadgets and trends. But at the end of the day, I'm
                just a person who loves learning, growing, and connecting with
                others. I'm excited to share my journey with you and see where
                it takes us
              </p>
              <div className="text-center">
                <ReactTyped
                  className="text-white font-bold justify-center absolute top-[330px] right-[310px] text-2xl"
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
      )}
      {isOpen3 && (
        <div
          className="invisible absolute top-[205px] left-[1040px]" //third code snippet
        >
          <motion.div
            className={`relative px-2 py-1 bg-slate-500 w-[533px] !important h-80 m-16 rounded-md 
${isOpen3 ? "" : "hidden"}`}
            variants={textVariants}
            initial="initial"
            animate="animate"
            style={{ visibility: isClicked3 ? "visible" : "" }}
          >
            <motion.div
              className={`bg-slate-700 w-[520px] h-6 border-b-2 border-slate-800 ${
                isOpen3 ? "" : "!hidden"
              }`}
              variants={textVariants}
            >
              <motion.p
                className="text-white font-semibold ml-2 text-center"
                variants={textVariants}
              >
                Certificates
              </motion.p>
            </motion.div>
            <div className="text-justify break-all">
              <p className="text-white font-bold p-1 text-left">
                I'm proud to showcase my certifications in various fields,
                demonstrating my expertise and commitment to staying up-to-date
                with the latest industry trends. With certifications in digital
                marketing, web development, data science, and cyber security, I
                possess a unique combination of skills that enable me to
                approach problems from multiple angles. Whether it's analyzing
                data to inform marketing strategies, building scalable web
                applications, or protecting sensitive information from cyber
                threats, I'm confident in my ability to deliver high-quality
                results.
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
      )}
    </div>
  );
}

export default Main;
