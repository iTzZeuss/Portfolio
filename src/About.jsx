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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen bg-neutral-950 text-center">
      <motion.p
        className="text-white font-semibold text-7xl p-16"
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Specializing in
      </motion.p>
      <div className="sticky top-0 flex h-screen overflow-x-scroll items-center justify-center overflow-hidden">
        <motion.div className="grid grid-cols-3">
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
  const [hovered, setHovered] = useState(false);
  return (
    <div className="flex justify-center items-center">
      <motion.div
        key={card.id}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false }}
        className="rounded-md md:text-4xl font-semibold p-4 text-white
             relative w-[300px] min-h-[300px] md:min-h-[480px] md:min-w-[480px] overflow-hidden 
             text-center md:font-bold tracking-wide -mt-44 flex justify-center items-center"
      >
        <div
          className={`w-[220px] min-h-[220px] rounded-2xl hover:scale-110 transform cursor-default flex justify-center items-center transition-all duration-300`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="text-center px-10">
            {card.id} <br />
            {card.string}
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

    id: <i className="devicon-tailwindcss-original colored text-[130px]"></i>,
  },
  {
    string: `React `,
    id: <i class="devicon-react-original colored text-[130px]"></i>,
  },
  {
    string: `Javascript `,
    id: <i class="devicon-javascript-plain text-[130px]"></i>,
  },

  {
    string: `Git `,
    id: <i class="devicon-git-plain colored text-[130px]"></i>,
  },

  {
    string: `Figma `,
    id: <i class="devicon-figma-plain colored text-[130px]"></i>,
  },
  {
    string: `Wordpress `,
    id: <i class="devicon-wordpress-plain text-[130px]"></i>,
  },
];
