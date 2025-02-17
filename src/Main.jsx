import React from "react";
import { MapPin } from "lucide-react";
import { ReactTyped } from "react-typed";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, easeIn } from "motion/react";
import { delay, easeInOut } from "motion";
import { type } from "@testing-library/user-event/dist/type";
function Main({ scrollToComponent }) {
  const scrollToPosition = (position) => {
    window.scrollTo({
      top: position, // Scroll to this vertical position
      behavior: "smooth", // Smooth scroll
    });
  };
  const [cursorClass, setCursorClass] = useState("cursor-default");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCursorClass("cursor-default");
    }, 10000);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, []);
  return (
    <div className="relative w-full bg-bg2 bg-cover bg-center">
      {/* Navigation Links */}
      <motion.div
        className="flex justify-center p-12 mt-2"
        initial={{ y: "-100vh", opacity: 0, scale: 0.8, y: 50 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.5,
          ease: "easeOut",
        }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false }}
      >
        <motion.button
          className="text-3xl md:text-4xl font-varela text-gray-400 cursor-pointer hover:text-gray-300 transition-colors group mr-10"
          onClick={() => scrollToPosition(1600)} // Scroll to Projects
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
      <motion.div
        className={`justify-center text-center flex -mt-6 ${cursorClass}`}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <motion.p
          className="text-white text-5xl md:text-8xl font-anton p-24 -mt-1 font-semibold tracking-wider "
          animate={{ opacity: ["0%", "100%"] }}
          transition={{ duration: 2.5, delay: 0.3 }}
        >
          Hello!{" "}
          <motion.p
            className="text-white text-4xl md:text-7xl font-anton inline-block font-medium tracking-wide"
            animate={{ x: ["200vw", "0%"] }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
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
              x: { type: "string", delay: 1.5, stiffness: 100, damping: 10 },
              opacity: { delay: 2, duration: 2 },
            }}
          >
            Giannis Theo
          </motion.p>
          <motion.p
            className="text-white text-3xl md:text-6xl mt-3 font-medium tracking-wider inline-flex"
            animate={{ opacity: ["0%", "100%"] }}
            transition={{ duration: 2, delay: 2.2 }}
          >
            and I'm a
          </motion.p>
          <motion.p
            className="text-white text-3xl md:text-6xl mt-3 font-medium tracking-wider inline-flex ml-2"
            variants={{
              initial: { opacity: 0, x: 0, y: 0 },
              end: { opacity: 1, y: 40 },
              md: { opacity: 1, x: 260 },
            }}
            initial="initial"
            animate={window.innerWidth >= 768 ? "md" : "end"}
            transition={{
              y: { duration: 2, ease: easeInOut, delay: 3 },
              x: { duration: 2, ease: easeInOut, delay: 3 },
              opacity: { duration: 1.5, delay: 2.2 },
            }}
          >
            developer.
          </motion.p>
          <motion.p
            className="text-white text-3xl md:text-6xl mt-3 font-medium tracking-wider inline-flex ml-2"
            variants={{
              initial: { opacity: 0, y: 0, x: 0 },
              end: { opacity: 1, y: -50, x: 53 },
              md: { opacity: 1, y: 0, x: -292 },
            }}
            initial="initial"
            animate={window.innerWidth >= 768 ? "md" : "end"}
            transition={{
              x: { duration: 2, ease: easeInOut },
              y: { duration: 2, ease: easeInOut },
              opacity: { duration: 1.5, delay: 4 },
            }}
          >
            front-end
          </motion.p>
          <motion.div
            className="text-base text-gray-300 flex justify-center gap-2 md:text-3xl tracking-normal mt-6 md:mt-36 font-sans"
            animate={{ opacity: ["0%", "100%"] }}
            transition={{ duration: 2, delay: 6 }}
          >
            <MapPin className="w-5 h-5 mt-2.5" />
            <span>Based in Greece</span>
          </motion.div>
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Main;
