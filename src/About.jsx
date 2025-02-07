import React from "react";
import { ReactTyped } from "react-typed";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function About() {
  const [hoveredElement, setHoveredElement] = useState(null);

  return (
    <div className="bg-[rgba(7,5,8,255)] h-[430px] md:h-[550px] text-center relative leading-relaxed overflow-x-auto overflow-y-hidden scrollbar-hide w-full p-4">
      <motion.div
        className="flex"
        animate={{ x: ["100%", "0%"] }} // Moves left infinitely
        transition={{ repeat: 0, duration: 20, ease: "linear" }} // Adjust speed
      >
        <motion.div
          className={`relative px-2 py-1 min-w-[400px] w-[400px] md:min-w-[600px] md:w-[600px] max-h-[340px] m-16`}
        >
          <motion.p className="text-white font-semibold ml-2 text-center text-3xl md:text-4xl mt-3">
            Skills
          </motion.p>
          <div className="text-justify break-all flex mt-5">
            <p className="text-white font-bold p-1 text-left text-base md:text-xl leading-relaxed break-words overflow-wrap-break-word">
              I am a passionate developer with expertise in React, JavaScript,
              Tailwind, HTML, and CSS, focused on crafting modern, responsive
              web applications. Skilled in transforming designs into dynamic,
              user-friendly interfaces through clean, efficient code.
            </p>
          </div>
          <motion.div className="text-center">
            <ReactTyped
              className="text-white font-bold mt-12 text-xl md:text-2xl"
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

        <motion.div
          className={`relative px-2 py-1 min-w-[400px] w-[400px] md:min-w-[600px] md:w-[600px] max-h-[340px] m-16`}
        >
          <motion.p className="text-white font-semibold ml-2 text-center text-3xl md:text-4xl mt-3">
            Who I am
          </motion.p>

          <p className="text-white font-bold p-2 text-left text-base md:text-xl leading-relaxed break-words overflow-wrap-break-word">
            I'm a 21 year-old optimistic individual with a passion for
            programming. I'm a bit of a tech enthusiast, always online checking
            the latest coding news. But at the end of the day, I'm just a person
            who loves learning, growing, and connecting with others.
          </p>
        </motion.div>

        <motion.div
          className={`relative px-2 py-1 min-w-[400px] w-[400px] md:min-w-[600px] md:w-[600px] max-h-[340px] m-16`}
        >
          <motion.p className="text-white font-semibold ml-2 text-center text-3xl md:text-4xl mt-3">
            Certificates
          </motion.p>
          <p className="text-white font-bold p-3 text-left text-base md:text-xl leading-relaxed break-words overflow-wrap-break-word">
            I'm proud to showcase my certifications in various fields. With
            certifications in web development, data science, and cyber security,
            I possess a unique combination of skills that enable me to approach
            problems from multiple angles.
          </p>
        </motion.div>
      </motion.div>
      ;
    </div>
  );
}

export default About;
