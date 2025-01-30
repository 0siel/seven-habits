import React from "react";
import { useNavigate } from "react-router-dom";

function MenuScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-4">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center animate-fade-in">
        Motivación - Educación con valores y virtudes
      </h1>

      {/* Buttons */}
      <div className="space-y-4 w-full max-w-md">
        <button
          onClick={() => navigate("/kasuga/explanation")}
          className="w-full md:w-auto px-10 py-4 bg-green-500 text-white text-lg md:text-xl font-bold rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
        >
          Introducción
        </button>
        <button
          onClick={() => navigate("/kasuga/game")}
          className="w-full md:w-auto px-10 py-4 bg-purple-500 text-white text-lg md:text-xl font-bold rounded-lg shadow-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105"
        >
          Comenzar
        </button>
        <button
          onClick={() => navigate("/author")}
          className="w-full md:w-auto px-10 py-4 bg-gray-800 text-white text-lg md:text-xl font-bold rounded-lg shadow-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
        >
          Autor
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center -z-10">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full opacity-10 blur-3xl"></div>
        <div className="w-48 h-48 md:w-60 md:h-60 bg-purple-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="w-24 h-24 md:w-32 md:h-32 bg-blue-300 rounded-full opacity-30 blur-2xl"></div>
      </div>
    </div>
  );
}

export default MenuScreen;
