import React, { useState } from "react";
import { animate, easeInOut, motion } from "framer-motion";

function Projects() {
  const [anim, setAnim] = useState(true);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [isHovered4, setIsHovered4] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false); // Overlay state

  const images = [
    require("./pics/weather.png"),
    require("./pics/todoApp.jpg"),
    require("./gif/tictac.gif"),
  ];

  const handleProjectClick = () => {
    setIsOverlayVisible(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
    document.body.style.paddingRight = "10px";
  };

  const handleOverlayClick = () => {
    setIsOverlayVisible(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
    document.body.style.paddingRight = "";
  };

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  return (
    <div className="relative w-full">
      {/* Overlay */}
      {isOverlayVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center overflow-y-auto p-4"
          onClick={handleOverlayClick}
        >
          {currentImage == 0 && (
            <motion.div
              className="justify-center text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="md:text-2xl text-[22px] text-white -mt-24 m-5">
                Click anywhere to dismiss
              </p>
              <div
                className="rounded-2xl md:w-[800px] md:h-[470px] w-[380px] h-[290px] bg-blue-950 shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-[url(./pics/weather.png)] bg-contain bg-no-repeat md:w-[380px] md:h-[185px] w-[200px] h-[100px] absolute m-2 rounded-xl shadow-2xl"></div>
                <p className="text-white font-semibold text-base md:text-4xl md:ml-44 -mr-52 text-center">
                  <br></br>Weather App Project <br></br> Created in 2022{" "}
                  <br></br> Built with React
                </p>
                <p className="text-white font-semibold md:text-3xl text-[15px] leading-relaxed mt-7 md:mt-16 m-3">
                  Weather App The Weather App is a user-friendly web application
                  designed to deliver real-time weather updates for any
                  location. It leverages responsive design to ensure seamless
                  usability across devices. This project demonstrates skills in
                  API integration, state management, and dynamic.
                </p>
              </div>
            </motion.div>
          )}
          {currentImage == 1 && (
            <motion.div
              className="justify-center text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="md:text-2xl text-[22px] text-white -mt-24 m-5">
                Click anywhere to dismiss
              </p>
              <div
                className="rounded-2xl md:w-[800px] md:h-[470px] w-[380px] h-[350px] bg-blue-950 shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-[url(./pics/todoApp.jpg)] bg-contain bg-no-repeat md:w-[332px] md:h-[190px] w-[211px] h-[120px] absolute md:m-5 m-2 rounded-xl shadow-2xl"></div>
                <p className="text-white font-semibold text-base md:text-4xl md:ml-36 -mr-56 text-center">
                  <br></br>To-Do List App<br></br> Developed in 2023 <br></br>
                  Finished in 2024 <br></br> Built with React
                </p>
                <p className="text-white font-semibold md:text-[25px] text-md leading-relaxed mt-8 md:mt-8 m-2">
                  The Todo List App is an intuitive tool designed to help manage
                  tasks efficiently and boost productivity. With its clean
                  interface, users can easily add, edit, and delete tasks,
                  organize them into categories, and mark them as completed. The
                  app includes real-time updates and state persistence, ensuring
                  tasks are never lost.
                </p>
              </div>
            </motion.div>
          )}
          {currentImage == 2 && (
            <motion.div
              className="justify-center text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="md:text-2xl text-[22px] text-white -mt-24 m-5">
                Click anywhere to dismiss
              </p>
              <div
                className="rounded-2xl md:w-[800px] md:h-[470px] w-[380px] h-[337px] bg-blue-950 shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-[url(./gif/tictac.gif)] bg-contain bg-no-repeat md:w-[380px] md:h-[185px] w-[200px] h-[100px] absolute md:m-5 mt-4 ml-3 rounded-xl shadow-2xl"></div>
                <p className="text-white font-semibold text-[18px] md:text-4xl md:ml-48 -mr-52 text-center tracking-wide">
                  <br></br>TicTacToe App <br></br> Created in 2024 <br></br>{" "}
                  Built with React
                </p>
                <p className="text-white font-semibold md:text-2xl text-[15px] leading-relaxed mt-4 md:mt-20 m-3">
                  The Tic Tac Toe Game is a classic strategy game, offering an
                  engaging experience for players of all ages. Designed with a
                  minimalist interface, the game allows two players to compete
                  head-to-head or challenge themselves against an AI opponent.
                  Built using React, it demonstrates skills in game logic
                  development, user interaction design, and delivering an
                  enjoyable, polished user experience.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
      <div className="bg-gray-900 w-full md:h-[650px] h-[500px] flex justify-center items-center gap-3 overflow-hidden relative">
        {/* Previous Button */}
        <motion.div
          className="relative flex flex-col items-center"
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.2, // Smooth movement
            ease: "easeInOut", // Gradual start & stop
          }}
        >
          <p
            className={`text-white font-semibold text-[11px] md:text-base mb-1 ${
              hoveredElement === "previous" ? "opacity-100" : "opacity-0"
            } transition-opacity`}
          >
            Previous
          </p>
          <button
            className="bg-[url('./pics/left.png')] w-8 h-8 md:w-12 md:h-12 bg-cover cursor-pointer hover:scale-110 transition-transform"
            aria-label="Previous Project"
            onMouseEnter={() => setHoveredElement("previous")}
            onMouseLeave={() => setHoveredElement(null)}
            onClick={handlePrevious}
          ></button>
        </motion.div>

        {/* Project Image */}
        <motion.div
          className="relative"
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.2, // Smooth movement
            ease: "easeInOut", // Gradual start & stop
          }}
        >
          <p
            className={`text-white font-semibold text-base md:text-lg absolute -top-9 left-1/2 -translate-x-1/2 ${
              hoveredElement === "project" || window.innerWidth < 768
                ? "opacity-100"
                : "opacity-0"
            } transition-opacity`}
          >
            {images[currentImage].includes("weather") && "Weather App"}
            {images[currentImage].includes("todoApp") && "Todo App"}
            {images[currentImage].includes("tictac") && "Tic Tac Toe"}
          </p>
          <motion.div
            key={currentImage}
            className="w-[250px] h-[110px] md:w-[520px] md:h-[260px] bg-cover cursor-pointer hover:brightness-75 rounded-xl transition-transform"
            style={{ backgroundImage: `url(${images[currentImage]})` }}
            onMouseEnter={() => setHoveredElement("project")}
            onMouseLeave={() => setHoveredElement(null)}
            onClick={handleProjectClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={images[currentImage]}
              alt="Project preview"
              className="sr-only"
            />
          </motion.div>
        </motion.div>

        {/* Next Button */}
        <motion.div
          className="relative flex flex-col items-center"
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.2, // Smooth movement
            ease: "easeInOut", // Gradual start & stop
          }}
        >
          <p
            className={`text-white font-semibold text-[11px] md:text-base mb-1 ${
              hoveredElement === "next" ? "opacity-100" : "opacity-0"
            } transition-opacity`}
          >
            Next
          </p>
          <button
            className="bg-[url('./pics/right.png')] w-8 h-8 md:w-12 md:h-12 bg-cover cursor-pointer hover:scale-110 transition-transform"
            aria-label="Next Project"
            onMouseEnter={() => setHoveredElement("next")}
            onMouseLeave={() => setHoveredElement(null)}
            onClick={handleNext}
          ></button>
        </motion.div>
      </div>

      {/* Text Animations */}
      <motion.p
        className="w-full font-bold text-5xl md:text-8xl absolute bottom-12 left-[70px] whitespace-nowrap text-gray-500 opacity-75"
        variants={{
          initial: { x: -1300 },
          animate: {
            x: "2vw",
            transition: {
              repeat: Infinity,
              repeatType: "mirror",
              duration: 15,
            },
          },
        }}
        initial="initial"
        animate={anim ? "animate" : ""}
      >
        John Theo Programmer Experienced Professional Animator Designer
      </motion.p>
    </div>
  );
}

export default Projects;
