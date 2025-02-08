import React, { useState } from "react";
import { animate, motion } from "framer-motion";

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
              <p className="text-2xl text-white -mt-24 m-5">
                Click anywhere to dismiss
              </p>
              <div
                className="rounded-2xl md:w-[800px] md:h-[470px] w-[560px] h-[410px] bg-blue-950 shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-[url(./pics/weather.png)] bg-contain bg-no-repeat md:w-[380px] md:h-[185px] w-[280px] h-[140px] absolute m-2 rounded-xl shadow-2xl"></div>
                <p className="text-white font-semibold text-xl md:text-3xl left-56 ml-[290px] text-center">
                  <br></br>Weather App Project <br></br> Created in 2022{" "}
                  <br></br> Built with React
                </p>
                <p className="text-white font-semibold md:text-xl text-[19px] leading-relaxed mt-16 md:mt-24 m-3">
                  Weather App The Weather App is a sleek, user-friendly web
                  application designed to deliver real-time weather updates for
                  any location. Built using React, the application leverages
                  responsive design to ensure seamless usability across devices.
                  This project demonstrates proficiency in API integration,
                  state management, and crafting dynamic, interactive user
                  experiences tailored to a global audience.
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
              <p className="text-2xl text-white -mt-24 m-5">
                Click anywhere to dismiss
              </p>
              <div
                className="rounded-2xl md:w-[800px] md:h-[470px] w-[560px] h-[410px] bg-blue-950 shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-[url(./pics/todoApp.jpg)] bg-contain bg-no-repeat md:w-[380px] md:h-[185px] w-[320px] h-[180px] absolute m-2 rounded-xl shadow-2xl"></div>
                <p className="text-white font-semibold text-[22px] md:text-3xl left-56 ml-[327px] text-center">
                  <br></br>To-Do List App<br></br> Developed in 2023 <br></br>
                  Finished in 2024 <br></br> Built with React
                </p>
                <p className="text-white font-semibold md:text-xl text-[18px] leading-relaxed mt-12 md:mt-24 m-3">
                  The Todo List App is a powerful and intuitive tool designed to
                  help users efficiently manage their tasks and boost
                  productivity. With its clean interface, users can easily add,
                  edit, and delete tasks, organize them into categories, and
                  mark them as completed. The app includes real-time updates and
                  state persistence, ensuring tasks are never lost between
                  sessions.
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
              <p className="text-2xl text-white -mt-24 m-5">
                Click anywhere to dismiss
              </p>
              <div
                className="rounded-2xl md:w-[800px] md:h-[470px] w-[560px] h-[410px] bg-blue-950 shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-[url(./gif/tictac.gif)] bg-contain bg-no-repeat md:w-[380px] md:h-[185px] w-[320px] h-[180px] absolute m-2 rounded-xl shadow-2xl"></div>
                <p className="text-white font-semibold text-[18px] md:text-3xl left-56 ml-[327px] text-center">
                  <br></br>TicTacToe App Project <br></br> Developed and
                  finished in 2024 <br></br> Built with React
                </p>
                <p className="text-white font-semibold md:text-xl text-[17px] leading-relaxed mt-12 md:mt-24 m-3">
                  The Tic Tac Toe Game is a classic strategy game, offering an
                  engaging experience for players of all ages. Designed with a
                  minimalist interface, the game allows two players to compete
                  head-to-head or challenge themselves against an AI opponent.
                  Built using React, it demonstrates skills in game logic
                  development, user interaction design, and delivering an
                  enjoyable, polished user experience. The responsive design
                  ensures smooth performance across all devices.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
      <div className="bg-gray-900 w-full md:h-[650px] h-[500px] flex justify-center items-center gap-3 overflow-hidden relative">
        {/* Previous Button */}
        <div className="relative flex flex-col items-center">
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
        </div>

        {/* Project Image */}
        <div className="relative">
          <p
            className={`text-white font-semibold text-base md:text-lg absolute -top-7 left-1/2 -translate-x-1/2 ${
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
            className="w-[250px] h-[110px] md:w-[520px] md:h-[260px] bg-cover cursor-pointer hover:brightness-75 rounded-md transition-transform"
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
        </div>

        {/* Next Button */}
        <div className="relative flex flex-col items-center">
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
        </div>
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
