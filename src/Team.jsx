import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faGithub,
  faDiscord,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { Scale } from "lucide-react";

function Team({ scrollToComponent }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(null);
  const [isCopied, setIsCopied] = useState(false);
  const scrollToPosition = (position) => {
    window.scrollTo({
      top: position, // Scroll to this vertical position
      behavior: "smooth", // Smooth scroll
    });
  };

  const copyDiscord = () => {
    navigator.clipboard.writeText(discordUser);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const discordUser = "cns_master";

  return (
    <div className="bg-[rgba(7,5,8,255)] min-h-screen w-full">
      <motion.div
        className="m-48 items-end leading-relaxed flex flex-col gap-4"
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <p className="text-5xl font-varela text-white font-semibold">
          For responsive designs
        </p>
        <p className="text-[49px] font-varela text-white font-semibold">
          For general UI designs
        </p>
        <p className="text-5xl font-varela text-white font-semibold">
          For smooth animations
        </p>
        <p className="text-[48.5px] font-varela text-white font-semibold">
          For smart e-commerse
        </p>
        <div
          className="w-fit justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.button
            className="text-3xl text-white font-anton rounded-full w-80 h-20 flex items-center justify-center 
        transition-all duration-300 relative overflow-hidden "
            animate={{
              background: isHovered
                ? "linear-gradient(to bottom right, #3b82f6, #06b6d4)"
                : "linear-gradient(to top, #3b82f6, #06b6d4)",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            whileTap={{ scale: 4 }}
          >
            Hover Me
          </motion.button>
        </div>
      </motion.div>

      <div className="-mt-[600px] m-56 flex flex-col gap-7 text-left">
        {" "}
        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <p className="text-7xl text-white font-semibold leading-none">
            Contact me
          </p>
        </motion.div>
        <motion.div
          className="flex items-center gap-4"
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {" "}
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ fontSize: "48px" }}
            color="white"
            className="h-12 w-12"
          />
          <a
            className="text-5xl text-white font-semibold leading-none"
            href="https://www.instagram.com/_theodosiadiss_/"
          >
            Instagram
          </a>
        </motion.div>
        <motion.div
          className="flex items-center gap-4"
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <FontAwesomeIcon
            icon={faXTwitter}
            style={{ fontSize: "48px" }}
            className="h-12 w-12"
            color="white"
          />
          <a
            className="text-5xl text-white font-semibold leading-none"
            href="https://x.com/Giannis763881"
          >
            Twitter
          </a>
        </motion.div>
        <motion.div
          className="flex items-center gap-4"
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <FontAwesomeIcon
            icon={faDiscord}
            style={{ fontSize: "48px" }}
            className="h-12 w-12"
            color="white"
          />
          <a
            className="text-5xl text-white font-semibold leading-none cursor-pointer"
            onClick={copyDiscord}
          >
            Discord
          </a>
          <motion.div
            style={{ opacity: isCopied ? 1 : 0 }}
            className="flex items-center gap-2 transition-opacity"
          >
            <FontAwesomeIcon
              icon={faCopy}
              color="white"
              style={{ fontSize: "28px" }}
            />
            <p className="text-white text-xl cursor-default">
              Copied to clipboard!
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex items-center gap-4"
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <FontAwesomeIcon
            icon={faGithub}
            style={{ fontSize: "48px" }}
            className="h-12 w-12"
            color="white"
          />
          <a
            className="text-5xl text-white font-semibold leading-none "
            href="https://github.com/iTzZeuss"
          >
            GitHub
          </a>
        </motion.div>
      </div>
      <motion.div
        className="w-full text-center relative border-t-2 mt-96"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <p className="text-gray-400 font-semibold m-6 text-sm md:text-2xl">
          &copy;{new Date().getFullYear()} Giannis Theo | All Rights Reserved.
          Icons by DevIcon and Fontawesome.
        </p>

        <div
          onClick={() => scrollToPosition(0)}
          className="md:justify-end justify-center mt-7 md:-mt-3 cursor-pointer transition-colors text-gray-400 hover:text-gray-200 group flex items-center"
        ></div>
      </motion.div>
    </div>
  );
}

export default Team;
