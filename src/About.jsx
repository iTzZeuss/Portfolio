import React from "react";
import { ReactTyped, Typed } from "react-typed";
import { useEffect, useState, useRef } from "react";
import { motion, useTransform, useScroll } from "motion/react";
import { div } from "framer-motion/client";

const About = () => {
  const [hoveredElement, setHoveredElement] = useState(null);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <div className="bg-neutral-800 w-full">
      <HorizontalScrollCarousel />
    </div>
  );
};
const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 0.5], ["50%", "28vw"]);
  const xx = useTransform(scrollYProgress, [0, 0.5], ["140%", "7%"]);

  return (
    <section ref={targetRef} className="relative min-h-screen bg-neutral-950">
      <div className="sticky top-0 flex h-screen overflow-x-scroll items-center justify-center overflow-hidden">
        <motion.div
          style={{ x: window.innerWidth >= 768 ? x : xx }}
          className="grid grid-cols-2 md:flex md:flex-row gap-x-72 gap-y-10 "
        >
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
      <div className="absolute text-4xl left-1/2 bottom-24 transform -translate-x-1/2 font-bold text-white hidden md:block">
        <ReactTyped
          strings={[
            "Welcome to my Portfolio!",
            "Turning Coffee into Code... and Bugs!",
            "Frontend Developer by Day... Bug Fixer by Night!",
            "Let's Build Something Awesome (Hopefully First Try)",
            "Tailwind Dev - Styling Faster Than My WiFi!",
          ]}
          typeSpeed={60}
          backSpeed={20}
          loop
        ></ReactTyped>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div>
      <motion.div
        key={card.id}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false }}
        className="group rounded-md text-white text-xl md:text-4xl font-semibold p-4 
             relative w-[300px] min-h-[300px] md:min-h-[480px] md:min-w-[480px] overflow-hidden 
             text-center flex items-center justify-center md:font-bold tracking-wide md:-mt-28"
      >
        <p>{card.string}</p>
      </motion.div>
    </div>
  );
};

export default About;

const cards = [
  {
    string: `Welcome to my portfolio,  a digital masterpiece crafted after countless cups of coffee and several
     "Why isn't this working?!" moments. I made this site to showcase my skills (and prove to my friends that staring
      at a screen all day actually leads to something).`,

    id: 1,
  },
  {
    string: `I am a passionate developer with expertise in React, JavaScript,
              Tailwind, HTML, and CSS, focused on crafting modern, responsive
              web applications. Skilled in transforming designs into dynamic,
              user-friendly interfaces through clean, efficient code.`,
    id: 2,
  },
  {
    string: `I'm a 21 year-old optimistic individual with a passion for
            programming. I'm a bit of a tech enthusiast, always online checking
            the latest coding news. But at the end of the day, I'm just a person
            who loves learning, growing, and connecting with others.`,
    id: 3,
  },
  {
    string: `I'm proud to showcase my certifications in various fields. With
            certifications in web development, data science, and cyber security,
            I possess a unique combination of skills that enable me to approach
            problems from multiple angles.`,
    id: 4,
  },
];
