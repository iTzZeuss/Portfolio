import React from "react";

function Header() {
  return (
    <div
      className={`rounded-b-xl bg-gray-600 min-w-full h-16 border-gray-600 text-center p-3`}
    >
      <p className=" text-4xl font-bold text-black">Portfolio</p>
      <p className="text-4xl font-extrabold absolute top-2">John Doe</p>
      <p className="text-3xl font-bold absolute top-[17px] right-[470px] cursor-pointer">
        <a>Introduction</a>
      </p>
      <p className="text-3xl font-bold absolute top-[17px] right-[300px] cursor-pointer">
        <a>Our team</a>
      </p>
      <p className="text-3xl font-bold absolute top-[17px] right-[100px] cursor-pointer">
        <a>Contact me</a>
      </p>
    </div>
  );
}

export default Header;
