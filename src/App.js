import { useRef } from "react";
import Projects from "./Projects.jsx";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Team from "./Team.jsx";

function App() {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const introRef = useRef(null);

  const scrollToComponent = (scrollTopValue) => {
    window.scrollTo({
      top: scrollTopValue,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Main />
      <Projects />
      <Team scrollToComponent={scrollToComponent} />
    </>
  );
}

export default App;
