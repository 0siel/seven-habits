// src/components/Bird.js
import React from "react";

const Bird = ({ top }) => {
  return (
    <div
      className="bg-yellow-400 w-12 h-12 rounded-full absolute left-1/4"
      style={{ top: `${top}%` }}
    ></div>
  );
};

export default Bird;
