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
              <p className="text-2xl text-white -mt-24">
                Click anywhere to dismiss
              </p>
              <div
                className="rounded-2xl md:w-[800px] md:h-[470px] w-[650px] h-[500px] bg-blue-950 shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-[url(./pics/weather.png)] bg-contain bg-no-repeat w-[380px] h-[185px] absolute m-2 rounded-xl shadow-2xl"></div>
                <p className="text-white font-semibold text-2xl md:text-3xl left-56 ml-[400px] text-center">
                  <br></br>Weather App Project <br></br> Created in 2022{" "}
                  <br></br> Built with React
                </p>
                <p className="text-white font-semibold text-xl leading-relaxed mt-24 m-3">
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
              <p className="text-2xl text-white -mt-24">
                Click anywhere to dismiss
              </p>
              <div
                className="rounded-2xl md:w-[800px] md:h-[470px] w-[650px] h-[530px] bg-blue-950 shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-[url(./pics/todoApp.jpg)] bg-contain bg-no-repeat w-[380px] h-[216px] m-2 absolute rounded-3xl shadow-2xl"></div>
                <p className="text-white font-semibold text-2xl md:text-3xl left-56 ml-[400px] text-center">
                  <br></br>To-Do List App Project <br></br> Developed in 2023{" "}
                  <br></br>
                  Finished in 2024 <br></br> Built with React
                </p>
                <p className="text-white font-semibold text-xl leading-relaxed mt-[74px] m-3">
                  The Todo List App is a powerful and intuitive tool designed to
                  help users efficiently manage their tasks and boost
                  productivity. With its clean interface, users can easily add,
                  edit, and delete tasks, organize them into categories, and
                  mark them as completed. The app includes real-time updates and
                  state persistence, ensuring tasks are never lost between
                  sessions. Last but not least, he app’s responsive design
                  ensures seamless use across desktops, tablets, and mobile
                  devices.
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
              <p className="text-2xl text-white -mt-24">
                Click anywhere to dismiss
              </p>
              <div
                className="rounded-2xl md:w-[800px] md:h-[470px] w-[650px] h-[530px] bg-blue-950 shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-[url(./gif/tictac.gif)] bg-contain bg-no-repeat w-[380px] h-[183px] m-2 absolute mt-5 shadow-2xl rounded-md"></div>
                <p className="text-white font-semibold text-2xl md:text-3xl left-56 ml-[400px] text-center">
                  <br></br>TicTacToe App Project <br></br> Developed and
                  finished in 2024 <br></br> Built with React <br></br> (again)
                </p>
                <p className="text-white font-semibold text-xl leading-relaxed mt-[30px] m-3">
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
      <div className="bg-gray-900 w-full h-[700px] flex justify-center items-center gap-6 overflow-hidden relative">
        {/* Previous Button */}
        <div className="relative flex flex-col items-center">
          <p
            className={`text-white font-semibold text-md mb-2 ${
              hoveredElement === "previous" ? "opacity-100" : "opacity-0"
            } transition-opacity`}
          >
            Previous
          </p>
          <button
            className="bg-[url('./pics/left.png')] w-12 h-12 bg-cover cursor-pointer hover:scale-110 transition-transform"
            aria-label="Previous Project"
            onMouseEnter={() => setHoveredElement("previous")}
            onMouseLeave={() => setHoveredElement(null)}
            onClick={handlePrevious}
          ></button>
        </div>

        {/* Project Image */}
        <div className="relative">
          <p
            className={`text-white font-semibold text-lg absolute -top-8 left-1/2 -translate-x-1/2 ${
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
            className="w-[520px] h-[260px] bg-cover cursor-pointer hover:brightness-75 rounded-md transition-transform"
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
            className={`text-white font-semibold text-md mb-2 ${
              hoveredElement === "next" ? "opacity-100" : "opacity-0"
            } transition-opacity`}
          >
            Next
          </p>
          <button
            className="bg-[url('./pics/right.png')] w-12 h-12 bg-cover cursor-pointer hover:scale-110 transition-transform"
            aria-label="Next Project"
            onMouseEnter={() => setHoveredElement("next")}
            onMouseLeave={() => setHoveredElement(null)}
            onClick={handleNext}
          ></button>
        </div>
      </div>

      {/* Pause Animation */}
      <div className="flex flex-col items-center absolute top-[68%] right-[5%] transform -translate-y-1/2 md:right-[8%] sm:right-[10%]">
        <p
          className={`text-white font-semibold mb-2 transition-opacity ${
            isHovered4 ? "opacity-100" : "opacity-0"
          } text-lg sm:text-sm`}
        >
          Pause Animation
        </p>
        <div
          className="bg-[url('./pics/pause.png')] w-16 h-16 bg-cover cursor-pointer hover:scale-110 transition-transform sm:w-12 sm:h-12"
          onMouseEnter={() => setIsHovered4(true)}
          onMouseLeave={() => setIsHovered4(false)}
          onClick={() => setAnim(!anim)}
        ></div>
      </div>

      {/* Text Animations */}
      <motion.p
        className="w-full font-bold text-5xl md:text-8xl absolute bottom-12 left-[70px] whitespace-nowrap text-gray-500 opacity-75"
        variants={{
          initial: { x: -1100 },
          animate: {
            x: "10vw",
            transition: {
              repeat: Infinity,
              repeatType: "mirror",
              duration: 7,
            },
          },
        }}
        initial="initial"
        animate={anim ? "animate" : ""}
      >
        John Doe Programmer Experienced Professional Animator Designer
      </motion.p>
    </div>
  );
}

export default Projects;
