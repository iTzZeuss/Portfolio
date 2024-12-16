import { animate, motion } from "framer-motion";
import React from "react";

function Clock() {
  return (
    <div className="bg-gray-200 absolute top-[900px] w-full h-[500px] justify-items-center content-center grid gap-3">
      <div
        className="size-36 bg-black"
        animate={{ rotate: "180deg" }}
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
        initial={{ rotate: "0deg" }}
      ></div>
    </div>
  );
}

export default Clock;
