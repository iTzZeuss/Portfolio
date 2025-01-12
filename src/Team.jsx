import React from "react";

function Team() {
  return (
    <div>
      <div className="bg-[rgba(7,5,8,255)] min-w-full h-[2000px] text-center absolute top-[1900px] overflow-hidden leading-relaxed">
        <p className="text-gray-400 font-bold text-4xl m-24">
          A few words about our team
        </p>
        <p className="text-gray-400 font-bold text-3xl m-24">
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
          solutions. Together, we take pride in building projects that are not
          only functional but also visually engaging and meaningful. Fueled by
          our shared vision and determination, we are excited to create
          impactful digital experiences that resonate with users and stand the
          test of time.
        </p>
        <p className="text-gray-400 font-bold text-4xl m-24">
          A few words about this portfolio
        </p>
        <p className="text-gray-400 font-bold text-3xl m-24">
          {" "}
          This portfolio is a project i made to test my skills and give further
          information about what i can do in terms of programming. Feel free to
          contact me for any job or need using the details provided below.
        </p>
        <section className="text-center my-16">
          {" "}
          <p className="text-gray-400 font-bold text-4xl m-24">Contact Me</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
            <a
              href="https://www.instagram.com/_theodosiadiss_/"
              className="text-cyan-600 font-bold text-4xl hover:text-cyan-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my Instagram profile"
            >
              Instagram
            </a>{" "}
            <a
              href="https://x.com/Giannis763881 "
              className="text-gray-400 font-bold text-4xl hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my X profile"
            >
              X (Twitter)
            </a>
            <a
              href="https://www.fiverr.com/sellers/giannis_theodo/"
              className="text-green-600 font-bold text-4xl hover:text-green-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my Fiverr profile"
            >
              Fiverr
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Team;
