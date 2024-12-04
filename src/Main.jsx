import React from 'react'
import { ReactTyped } from 'react-typed'
import { useEffect, useState } from 'react';
import { motion } from "motion/react"

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },  
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration:1,
      staggerChildren: 0.1,
    },
  },
};

function Main() {
  const [isOpen, setIsOpen] = useState(true)

  const handleClose = () => {
    setIsOpen(false);
  }

  function closeSnip() {

  }

  return (
<motion.div className={`relative px-2 py-1 bg-slate-500 w-[533px] !important h-80 m-16 rounded-md ${isOpen ? '' : 'hidden'}`} variants={textVariants} initial="initial" animate="animate">
      <motion.div className={`bg-slate-700 w-[521px] h-6 border-b-2 border-slate-800 ${isOpen ? '' : '!hidden'}`} variants={textVariants}>
        <motion.p className='text-white font-semibold ml-2 text-center'variants={textVariants}>Who I am</motion.p>
        <motion.button onClick={handleClose} className='absolute top-0 right-2 text-white animate-pulse' variants={textVariants}>x</motion.button>
      </motion.div>
      <div className="text-justify break-all">
      <p className='text-white font-bold p-1 text-left'>I am a passionate developer with expertise in React, JavaScript, 
      <br></br>Tailwind, HTML, and CSS, focused on crafting modern, responsive web applications.
       Skilled in transforming designs into dynamic, <br></br> user-friendly interfaces through clean, 
       efficient code. Also, i have <br></br> deleloped a strong grasp of component-based development
      and <br></br>streamlined styling techniques. 
      Continuously learning and adapting to emerging trends, bringing innovative solutions to 
      both team <br></br>collaborations and individual challenges.</p>
      <div className='text-center'>
        <ReactTyped className='text-white font-bold justify-center'
          strings={[
            "I am reliable",
            "I am organized",
            "I am flexible",
            "I am fast-paced"
          ]}
          typeSpeed={200}
          backSpeed={100}
          loop
        />
        </div>
      </div>
    </motion.div>
  );
}

export default Main