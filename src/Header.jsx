import React from "react";

function Header({ scrollToComponent }) {
  return (
    <div className="rounded-b-xl bg-gray-600 w-full h-16 border-gray-600 text-center p-3 flex justify-between items-center">
      {/* Portfolio Title */}
      <p className="text-4xl font-bold text-black">Portfolio</p>

      {/* Name */}
      <p className="text-4xl font-extrabold">John Doe</p>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        <button
          className="text-3xl font-bold text-white cursor-pointer hover:text-gray-300 transition-colors"
          onClick={() => scrollToComponent(0)} // Scroll to top
        >
          Introduction
        </button>
        <button
          className="text-3xl font-bold text-white cursor-pointer hover:text-gray-300 transition-colors"
          onClick={() => scrollToComponent(1000)} // Scroll to Projects
        >
          Projects
        </button>
        <button
          className="text-3xl font-bold text-white cursor-pointer hover:text-gray-300 transition-colors"
          onClick={() => scrollToComponent(2400)} // Scroll to Contact
        >
          Contact me
        </button>
      </div>
    </div>
  );
}

export default Header;
