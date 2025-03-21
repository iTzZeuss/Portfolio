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
  const [username, setUsername] = useState("");
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

  const motionProps = {
    whileInView: { opacity: 1, scale: 1, y: 0 },
    initial: { opacity: 0, scale: 0.8, y: 50 },
    transition: { duration: 0.5, ease: "easeOut" },
    viewport: { once: false },
  };

  const discordUser = "cns_master";

  return (
    <div className="bg-[rgba(7,5,8,255)] min-h-screen w-full">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:m-56 m-24 flex flex-col gap-7 md:text-left">
          <motion.div
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <p className="text-3xl md:text-7xl text-white font-semibold leading-none whitespace-nowrap text-center">
              Contact me
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5">
            <motion.div className="flex items-center gap-2 md:gap-4 basis-1/2">
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-8 h-8 md:h-12 md:w-12"
                color="white"
              />
              <a
                className="text-xl md:text-5xl text-white font-semibold"
                href="https://www.instagram.com/_theodosiadiss_/"
              >
                Instagram
              </a>
            </motion.div>

            <motion.div className="flex items-center gap-2 md:gap-4 basis-1/2">
              <FontAwesomeIcon
                icon={faGithub}
                className="w-8 h-8 md:h-12 md:w-12"
                color="white"
              />
              <a
                className="text-xl md:text-5xl text-white font-semibold"
                href="https://github.com/iTzZeuss"
              >
                GitHub
              </a>
            </motion.div>

            <motion.div className="flex items-center gap-2 md:gap-4 basis-1/2">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="w-8 h-8 md:h-12 md:w-12"
                color="white"
              />
              <a
                className="text-xl md:text-5xl text-white font-semibold leading-none"
                href="https://x.com/Giannis763881"
              >
                Twitter
              </a>
            </motion.div>

            <motion.div className="flex items-center gap-2 md:gap-4 basis-1/2">
              <FontAwesomeIcon
                icon={faDiscord}
                className="w-8 h-8 md:h-12 md:w-12"
                color="white"
              />
              <a
                className="text-xl md:text-5xl text-white font-semibold leading-none cursor-pointer"
                onClick={copyDiscord}
              >
                Discord
              </a>
            </motion.div>
          </div>

          <motion.div
            className="md:w-1/2 md:m-48 m-20 flex flex-col md:gap-10 gap-4 items-center text-center whitespace-nowrap"
            {...motionProps}
          >
            <p className="md:text-5xl text-2xl font-varela text-white font-semibold">
              For responsive designs
            </p>
            <p className="text-2xl md:text-[49px] font-varela text-white font-semibold">
              For general UI designs
            </p>
            <p className="text-2xl md:text-5xl font-varela text-white font-semibold">
              For smooth animations
            </p>
            <p className="text-2xl md:text-[48.5px] font-varela text-white font-semibold">
              For smart e-commerce
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                console.log(formData.get("username"));
              }}
            >
              <input type="text" name="username" className="p-2 rounded mt-6" />
              <div className="flex justify-center mt-8">
                <motion.button
                  className="text-2xl md:text-3xl text-white font-anton rounded-full h-16 w-40 md:w-80 md:h-20 
          flex items-center justify-center transition-all duration-300 relative overflow-hidden"
                  animate={{
                    background: isHovered
                      ? "linear-gradient(to bottom right, #3b82f6, #06b6d4)"
                      : "linear-gradient(to top, #3b82f6, #06b6d4)",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="w-full text-center relative border-t-2 md:mt-20 mt-10"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <p className="text-gray-400 font-semibold m-6 text-md md:text-2xl">
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
