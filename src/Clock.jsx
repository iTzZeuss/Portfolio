import React, { useState } from "react";
import { motion } from "framer-motion";

function Clock() {
  const [anim, setAnim] = useState(true);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false); // Overlay state

  const images = [
    require("./weather.png"),
    require("./todoApp.jpg"),
    require("./tictac.gif"),
  ];

  const handleProjectClick = () => {
    setIsOverlayVisible(true);
  };

  const handleOverlayClick = () => {
    setIsOverlayVisible(false); // Hide overlay when clicked
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
    <div className="relative top-[950px] overflow-hidden">
      {/* Overlay */}
      {isOverlayVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
          onClick={handleOverlayClick}
        >
          <p className="text-white text-2xl">
            Project Clicked! Click anywhere to dismiss.
          </p>
        </div>
      )}

      {/* Main Content */}
      <div className="bg-gray-900 w-full h-[900px] grid justify-items-center content-center gap-3 overflow-hidden">
        {/* Previous Button */}
        <p
          className="text-white font-semibold text-md absolute top-[247px] left-[615px]"
          style={{ opacity: isHovered1 ? 1 : 0 }}
        >
          Previous
        </p>
        <div
          className="bg-[url('./left.png')] w-16 h-16 bg-cover cursor-pointer absolute top-[270px] left-[615px]"
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
          onClick={handlePrevious}
        ></div>

        {/* Project Image */}
        <p
          className="text-white font-semibold text-lg absolute top-[140px]"
          style={{ opacity: isHovered2 ? 1 : 0 }}
        >
          {images[currentImage].includes("weather") && "Weather App"}
          {images[currentImage].includes("todoApp") && "Todo App"}
          {images[currentImage].includes("tictac") && "Tic Tac Toe"}
        </p>
        <div
          style={{ backgroundImage: `url(${images[currentImage]})` }}
          className="w-[520px] h-[260px] bg-cover cursor-pointer top-[170px] absolute hover:brightness-75 rounded-md"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          onClick={handleProjectClick} // Show overlay on click
        ></div>

        {/* Next Button */}
        <p
          className="text-white font-semibold text-md absolute top-[247px] left-[1240px]"
          style={{ opacity: isHovered3 ? 1 : 0 }}
        >
          Next
        </p>
        <div
          className="bg-[url('./right.png')] w-16 h-16 bg-cover cursor-pointer absolute top-[270px] left-[1225px]"
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
          onClick={handleNext}
        ></div>

        {/* Pause Animation */}
        <p
          className="absolute left-[1718px] top-[565px] text-white font-semibold"
          style={{ opacity: isHovered4 ? 1 : 0 }}
        >
          Pause Animation
        </p>
        <div
          className="bg-[url('./pause.png')] w-16 h-16 bg-cover cursor-pointer absolute left-[1740px] top-[590px] hover:w-20 hover:h-20"
          onMouseEnter={() => setIsHovered4(true)}
          onMouseLeave={() => setIsHovered4(false)}
          onClick={() => setAnim(!anim)}
        ></div>

        {/* Text Animations */}
        <motion.p className="font-calli text-6xl text-white absolute top-[590px] left-[405px]">
          Self-discipline will get you farther than motivation ever will.
        </motion.p>
        <motion.p
          className="w-full font-bold text-8xl absolute bottom-12 left-[70px] whitespace-nowrap text-gray-500 opacity-75"
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
    </div>
  );
}

export default Clock;
