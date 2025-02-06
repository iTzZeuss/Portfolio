import { useRef, useState, useEffect } from "react";
import Projects from "./Projects.jsx";
import Main from "./Main.jsx";
import Team from "./Team.jsx";
import About from "./About.jsx";

function App() {
  const [isTooSmall, setIsTooSmall] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsTooSmall(window.innerWidth < 500);
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize(); // Check on initial load

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <>
      {isTooSmall && (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-900 text-white text-2xl">
          📢 Please make your screen wider for a better experience!
        </div>
      )}
      <div className="flex flex-col items-center w-full overflow-hidden">
        <div className="flex w-full">
          <Main />
        </div>
        <div className="flex w-full">
          <About />
        </div>
        <div className="flex w-full">
          <Projects />
        </div>
        <div className="flex w-full">
          <Team />
        </div>
      </div>
    </>
  );
}

export default App;
