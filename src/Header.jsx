import React from "react";

function Header({ scrollToComponent }) {
  return (
    <div
      className={`rounded-b-xl bg-gray-600 min-w-full h-16 border-gray-600 text-center p-3`}
    >
      <p className="text-4xl font-bold text-black">Portfolio</p>
      <p className="text-4xl font-extrabold absolute top-2">John Doe</p>
      <div>
        <a className="text-3xl font-bold absolute top-[17px] right-[470px] cursor-pointer">
          Introduction
        </a>
        <a
          className="text-3xl font-bold absolute top-[17px] right-[300px] cursor-pointer"
          onClick={() => scrollToComponent("projectsRef")}
        >
          Projects
        </a>
        <a
          className="text-3xl font-bold absolute top-[17px] right-[100px] cursor-pointer"
          onClick={() => scrollToComponent("contactRef")}
        >
          Contact me
        </a>
      </div>
    </div>
  );
}

export default Header;
