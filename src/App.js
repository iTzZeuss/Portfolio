import { useRef, useState, useEffect } from "react";
import Projects from "./Projects.jsx";
import Main from "./Main.jsx";
import Team from "./Team.jsx";
import About from "./About.jsx";

function App() {
  return (
    <>
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
        <div className="flex flex-col justify-between w-full min-h-screen">
          <Team />
        </div>
      </div>
    </>
  );
}

export default App;
