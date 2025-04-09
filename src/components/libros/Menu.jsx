import React from "react";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-12 animate-fade-in">
        🌟 MENÚ PRINCIPAL 🌟
      </h1>

      {/* Buttons */}
      <div className="space-y-6">
        <button
          onClick={() => navigate("/books/intro")}
          className="px-10 py-4 bg-green-500 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
        >
          Introducción
        </button>
        <button
          onClick={() => navigate("/books/mexico")}
          className="px-10 py-4 bg-purple-500 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105"
        >
          Mexico
        </button>

        <button
          onClick={() => navigate("/books/adventure")}
          className="px-10 py-4 bg-purple-500 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105"
        >
          Aventura
        </button>

        <button
          onClick={() => (window.location.href =
            "https://forms-platform.vercel.app/form/cm96l2j65000xua0otuvy5y3k")
            }
          className="px-10 py-4 bg-gray-800 text-white text-xl font-bold rounded-lg shadow-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
        >
          SAC 2025
        </button>

        
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="w-40 h-40 bg-white rounded-full opacity-10 blur-3xl"></div>
        <div className="w-60 h-60 bg-purple-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="w-32 h-32 bg-blue-300 rounded-full opacity-30 blur-2xl"></div>
      </div>
    </div>
  );
}

export default Menu;
