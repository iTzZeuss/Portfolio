import React from "react";
import { motion } from "framer-motion";
import timelineElements from "./timelineElements.js";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

let reactIcon = <i className="devicon-react-original colored text-5xl"></i>;
let pythonIcon = <i className="devicon-python-plain text-5xl"></i>;
let htmlIcon = <i className="devicon-html5-plain"></i>;

function Projects() {
  return (
    <div className="bg-gray-900 w-full h-full overflow-hidden relative p-8">
      <h1 className="text-4xl text-white font-bold text-center mb-8">
        Timeline
      </h1>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        key={"div1"}
      >
        <VerticalTimeline>
          {timelineElements.map((element, index) => (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="text-gray-100"
              iconStyle={{
                background: "#282c34",
                color: "#61dafb",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              icon={element.icon === "reactIcon" ? reactIcon : pythonIcon}
              buttonText="text12"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1 },
                  },
                }}
              >
                <h3 className="text-black font-bold text-2xl">
                  {element.title}
                </h3>
                <p className="text-gray-700">{element.description}</p>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </div>
  );
}

export default Projects;
