import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Logo Section */}
      <div className="text-center mb-8">
        <h1 className="text-6xl font-extrabold mb-4 animate-bounce">
          🎮 7 Habits Game
        </h1>
        <p className="text-xl font-light">
          Aprende los 7 hábitos de las personas altamente efectivas a través de
          un juego interactivo.
        </p>
      </div>

      {/* Start Button */}
      <button
        onClick={() => navigate("/menu")}
        className="mt-10 px-8 py-4 bg-black text-blue-600 text-lg font-bold rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
      >
        Comenzar 🚀
      </button>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="w-32 h-32 bg-white rounded-full opacity-10 blur-3xl"></div>
        <div className="w-48 h-48 bg-purple-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="w-24 h-24 bg-blue-300 rounded-full opacity-30 blur-2xl"></div>
      </div>
    </div>
  );
}

export default WelcomeScreen;
