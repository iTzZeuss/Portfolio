import React from "react";
import { ReactTyped, Typed } from "react-typed";
import { useEffect, useState, useRef } from "react";
import { motion, useTransform, useScroll } from "motion/react";
import { div } from "framer-motion/client";
import "devicon/devicon.min.css";

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

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive transform values
  const x = useTransform(scrollYProgress, [0, 0.5], ["50%", "10vw"]);
  const xx = useTransform(scrollYProgress, [0, 0.5], ["140%", "7%"]);

  return (
    <section ref={targetRef} className="relative min-h-screen bg-neutral-950">
      <div className="sticky top-0 flex h-screen overflow-x-scroll items-center justify-start overflow-hidden">
        <motion.div
          style={{ x: isMobile ? xx : x }}
          className="grid grid-cols-3 gap-4"
        >
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
      <div className="absolute text-4xl left-1/2 bottom-36 transform -translate-x-1/2 font-bold text-white hidden md:block">
        <ReactTyped
          strings={["Frontend Developer", "Turning Ideas into Code"]}
          typeSpeed={70}
          backSpeed={30}
          loop
        ></ReactTyped>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        key={card.id}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false }}
        className="rounded-md text-white text-xl md:text-5xl font-semibold p-4 
             relative w-[300px] min-h-[300px] md:min-h-[480px] md:min-w-[480px] overflow-hidden 
             text-center md:font-bold tracking-wide -mt-56 flex justify-center items-center"
      >
        <div className="min-w-[400px] min-h-32 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-600 shadow-md hover:scale-110 transform cursor-default flex justify-center items-center">
          <div className="text-center px-10">
            {card.string}
            {card.id}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

const cards = [
  {
    string: `Tailwind `,

    id: <i class="devicon-tailwindcss-original"></i>,
  },
  {
    string: `React `,
    id: <i class="devicon-react-original"></i>,
  },
  {
    string: `Javascript `,
    id: <i class="devicon-javascript-plain"></i>,
  },
  {
    string: `Wordpress `,
    id: <i class="devicon-wordpress-plain"></i>,
  },
  {
    string: `Figma `,
    id: <i class="devicon-figma-plain"></i>,
  },
  {
    string: `Git `,
    id: <i class="devicon-git-plain"></i>,
  },
];
