// src/components/Pipe.js
import React from "react";

const Pipe = ({ left, height, isTop }) => {
  return (
    <div
      className={`bg-green-500 w-16 absolute ${isTop ? "top-0" : "bottom-0"}`}
      style={{ left: `${left}%`, height: `${height}%` }}
    ></div>
  );
};

export default Pipe;
