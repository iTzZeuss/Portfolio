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
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
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
  const motionProps = {
    whileInView: { opacity: 1, scale: 1, y: 0 },
    initial: { opacity: 0, scale: 0.8, y: 50 },
    transition: { duration: 0.5, ease: "easeOut" },
    viewport: { once: false },
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "portfolio-pnrjd29sf-itzzeuss-projects.vercel.app",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-[rgba(7,5,8,255)] min-h-screen w-full">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-5">
          <motion.div
            className="w-full md:w-1/2 md:m-56 m-24 flex flex-col gap-7 md:gap-0 md:text-left md:items-start items-center"
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <motion.div>
              <p className="text-3xl md:text-7xl text-white font-semibold leading-none whitespace-nowrap text-center">
                Contact me
              </p>
            </motion.div>
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
                className="text-xl md:text-5xl text-white font-semibold"
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
                className="text-xl md:text-5xl text-white font-semibold cursor-pointer"
                onClick={copyDiscord}
              >
                Discord
              </a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="w-full md:w-1/2 md:m-48 m-20 flex flex-col md:gap-10 gap-4 items-start md:items-start text-center whitespace-nowrap"
          {...motionProps}
        >
          <p className="text-xl md:text-5xl font-varela text-white font-semibold">
            For UI designs
          </p>
          <p className="text-xl md:text-5xl font-varela text-white font-semibold">
            For smooth animations
          </p>
          <p className="text-[21px] md:text-5xl font-varela text-white font-semibold">
            For e-commerce web apps
          </p>
          <p className="md:text-5xl text-[20px] font-varela text-white font-semibold">
            For any kind of responsive site
          </p>
          <br></br>
          <form onSubmit={handleSubmit}>
            <p className="md:text-5xl text-[20px] font-varela text-white md:p-6 p-1">
              Email or any method:
            </p>
            <input
              type="text"
              name="email"
              className="w-full h-12 p-4 text-white bg-neutral-900 border border-gray-700 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
            <br></br>
            <br></br>
            <p className="md:text-5xl text-[20px] font-varela text-white md:p-6 p-1">
              Message:
            </p>
            <input
              type="text"
              name="message"
              className="w-full h-40 p-4 text-white bg-neutral-900 border border-gray-700 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            ></input>
            <div className="flex justify-center mt-8">
              <motion.button
                className="text-2xl md:text-3xl text-white font-anton rounded-full h-16 w-40 md:w-80 md:h-20 flex items-center justify-center transition-all duration-300 relative overflow-hidden"
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
        </motion.div>{" "}
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
