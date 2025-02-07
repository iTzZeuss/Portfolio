import React from "react";
import { useState } from "react";

function Team({ scrollToComponent }) {
  const [isClicked, setIsClicked] = useState(false);

  const scrollToPosition = (position) => {
    window.scrollTo({
      top: position, // Scroll to this vertical position
      behavior: "smooth", // Smooth scroll
    });
  };

  return (
    <div>
      <div className="bg-[rgba(7,5,8,255)] min-w-full min-h-screen text-center relative w-full overflow-hidden leading-relaxed">
        <p className="text-gray-400 font-bold text-4xl m-16 mt-10">
          A few words about our team
        </p>
        <p className="text-gray-400 font-bold text-xl md:text-3xl m-12 md:m-24">
          Our team is a dynamic group of passionate individuals united by our
          love for innovation and technology. Comprising developers, designers,
          and strategists, we bring a diverse range of skills and perspectives
          to every project we undertake. Collaboration is at the heart of our
          process, as we believe the best solutions come from pooling ideas and
          expertise. Whether it's brainstorming creative concepts, tackling
          complex coding challenges, or fine-tuning user experiences, we thrive
          on pushing boundaries and exceeding expectations. Each member of the
          team is committed to continuous learning, embracing new technologies,
          and staying ahead of industry trends to deliver cutting-edge
          solutions.
        </p>
        <p className="text-gray-400 font-bold text-3xl md:text-4xl m-24">
          A few words about this portfolio
        </p>
        <p className="text-gray-400 font-bold text-xl md:text-3xl m-10 md:m-20">
          {" "}
          This portfolio is a project i made to test my skills and give further
          information about what i can do in terms of programming. Feel free to
          contact me for any job or need using the details provided below.
        </p>
        <section className="py-12 bg-[rgba(7,5,8,255)] text-center">
          <p className="text-gray-400 font-bold text-3xl md:text-4xl -mt-8 m-10">
            Contact Me
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mx-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/_theodosiadiss_/"
              className="text-cyan-600 font-bold text-2xl hover:text-cyan-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my Instagram profile"
            >
              Instagram
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/Giannis763881"
              className="text-cyan-600 font-bold text-2xl hover:text-cyan-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my X profile"
            >
              X (Twitter)
            </a>

            {/* Fiverr */}
            <a
              href="https://www.fiverr.com/sellers/giannis_theodo/"
              className="text-cyan-600 font-bold text-2xl hover:text-cyan-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my Fiverr profile"
            >
              Fiverr
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/iTzZeuss"
              className="text-cyan-600 font-bold text-2xl hover:text-cyan-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
            >
              GitHub
            </a>

            {/* Email */}
            <a
              href="mailto:johntheojohn@gmail.com"
              className="text-cyan-600 font-bold text-2xl hover:text-cyan-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email me"
            >
              Email
            </a>

            {/* Discord */}
            <p
              className="text-cyan-600 font-bold text-2xl hover:text-cyan-400 transition-colors cursor-pointer"
              onClick={() => setIsClicked(!isClicked)}
            >
              Discord
            </p>
          </div>

          {/* Discord Tooltip */}
          <div
            className={`bg-blue-600 rounded-3xl h-11 w-52 mx-auto mt-6 mr-52 transition-opacity duration-300 ease-in-out shadow-lg ${
              isClicked ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <p className="text-white font-medium text-base py-2 px-4">
              username: cns_master
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className="w-full bg-gray-800 h-20 py-6 text-center relative">
          <p className="text-gray-400 font-semibold text-base md:text-2xl">
            &copy;{new Date().getFullYear()} John Theo | All Rights Reserved.
            Icons by Flaticon.
          </p>

          <div
            onClick={() => scrollToPosition(0)}
            className="md:justify-end justify-center ml-12 mt-5 transform -translate-y-1/2 cursor-pointer text-cyan-400 hover:text-cyan-200 flex items-center"
          >
            <span className="mr-2 font-semibold text-base md:text-2xl">
              BACK TO TOP
            </span>
            <div className="bg-[url('./pics/arrowUp.png')] bg-cover bg-no-repeat md:w-12 md:h-6 w-6 h-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
