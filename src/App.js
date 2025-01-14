import { useRef } from "react";
import Clock from "./Clock.jsx";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Team from "./Team.jsx";
import Footer from "./Footer.jsx";

function Projects() {
  return (
    <div className="min-h-screen bg-gray-200">
      <h1 className="text-center text-5xl py-20">Projects</h1>
      <p className="text-center">Here are some of my works.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="min-h-screen bg-gray-300">
      <h1 className="text-center text-5xl py-20">Contact Me</h1>
      <p className="text-center">Feel free to reach out!</p>
    </div>
  );
}

function App() {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToComponent = (refName) => {
    if (refName === "projectsRef") {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (refName === "contactRef") {
      window.scrollTo({ top: 2400, behavior: "smooth" });
    }
  };
  return (
    <>
      <Header scrollToComponent={scrollToComponent} />
      <Main />
      <Clock />{" "}
      <div ref={projectsRef}>
        {" "}
        <Team />
      </div>
      <div ref={contactRef}>
        <Footer />
      </div>
    </>
  );
}

export default App;
