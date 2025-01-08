import { animate, motion } from "framer-motion";
import React, { useState } from "react";

const textSlide2 = {
  initial: {
    x: -1100,
  },
  animate: {
    x: "10vw",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 7,
    },
  },
};

function Clock() {
  const [anim, setAnim] = useState(true); //pause animation
  const [isHovered1, setIsHovered1] = useState(false); //previous button
  const [isHovered2, setIsHovered2] = useState(false); //project
  const [isHovered3, setIsHovered3] = useState(false); //next button
  const [isHovered4, setIsHovered4] = useState(false); //pause animation button
  const [isClicked, setIsClicked] = useState(false); //project click
  const [currentImage, setCurrentImage] = useState(false); //next button click

  return (
    <div
      className="bg-gray-900 absolute top-[1000px] w-full h-[900px] 
                 justify-items-center content-center grid gap-3 overflow-hidden"
    >
      <p
        className="text-white font-semibold text-md absolute top-[247px] left-[615px]" //previous button text
        style={{ opacity: isHovered1 ? 1 : 0 }}
      >
        Previous
      </p>
      <div
        className={`bg-[url('./left.png')] w-16 h-16 bg-cover cursor-pointer absolute top-[270px] left-[615px]`} //previous button
        onMouseEnter={() => {
          setIsHovered1(true);
        }}
        onMouseOut={() => {
          setIsHovered1(false);
        }}
        onClick={() => {
          setCurrentImage(currentImage - 1);
          if (currentImage < 1) {
            setCurrentImage(3);
          }
          console.log(currentImage);
        }}
      ></div>
      <p
        className="text-white font-semibold text-lg absolute top-[140px]" //project text
        style={{ opacity: isHovered2 ? 1 : 0 }}
      >
        Weather App
      </p>
      <div
        className={`bg-[url('./weather.png')] w-[520px] h-[260px] bg-cover cursor-pointer top-[170px]
    absolute hover:brightness-75 rounded-md`} //project
        onMouseEnter={() => {
          setIsHovered2(true);
        }}
        onMouseOut={() => {
          setIsHovered2(false);
        }}
        onClick={() => {
          setIsClicked(true);
        }}
      ></div>
      <p
        className="text-white font-semibold text-md absolute top-[247px] left-[1240px]" //next button text
        style={{ opacity: isHovered3 ? 1 : 0 }}
      >
        Next
      </p>
      <div
        className={`bg-[url('./right.png')] w-16 h-16 bg-cover cursor-pointer absolute top-[270px] left-[1225px]`} //next button
        onMouseEnter={() => {
          setIsHovered3(true);
        }}
        onMouseOut={() => {
          setIsHovered3(false);
        }}
        onClick={() => {
          setCurrentImage(currentImage + 1);
          if (currentImage > 2) {
            setCurrentImage(1);
          }
          console.log(currentImage);
        }}
      ></div>
      <p
        className="absolute left-[1718px] top-[565px] text-white font-semibold" //pause animation text
        style={{ opacity: isHovered4 ? 1 : 0 }}
      >
        Pause Animation
      </p>
      <div
        className={`bg-[url('./pause.png')] w-16 h-16 bg-cover cursor-pointer absolute left-[1740px] top-[590px] hover:w-20 hover:h-20`} //pause animation button
        onMouseEnter={() => {
          setIsHovered4(true);
        }}
        onMouseOut={() => {
          setIsHovered4(false);
        }}
        onClick={() => {
          setAnim(!anim);
        }}
      ></div>

      <motion.p className="font-calli text-6xl text-white absolute top-[590px] left-[405px]">
        self-discipline will get you farther than motivation ever will.
      </motion.p>
      <motion.p
        className="w-full font-bold text-8xl absolute bottom-12 left-[70px] whitespace-nowrap text-gray-500 opacity-75"
        variants={textSlide2}
        initial="initial"
        animate={anim ? "animate" : ""}
      >
        John Doe Programmer Experienced Proffesional Animator Designer
      </motion.p>
    </div>
  );
}

export default Clock;
