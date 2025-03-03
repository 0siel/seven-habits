import React from "react";
import { useNavigate } from "react-router-dom";

function MenuScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-4">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center animate-fade-in">
        EL Efecto Pigmalión y cómo resolver problemas
      </h1>

      {/* Buttons */}
      <div className="space-y-6">
        <button
          onClick={() => navigate("/pareto/foda")}
          className="w-full md:w-auto px-10 py-4 bg-green-500 text-white text-lg md:text-xl font-bold rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 mr-3"
        >
          FODA
        </button>
        <button
          onClick={() => navigate("pareto/sixhats")}
          className="w-full md:w-auto px-10 py-4 bg-green-500 text-white text-lg md:text-xl font-bold rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 mr-3"
        >
          Seis Sombreros 🎩
        </button>
        <button
          onClick={() => navigate("/pareto/catwda")}
          className="w-full md:w-auto px-10 py-4 bg-purple-500 text-white text-lg md:text-xl font-bold rounded-lg shadow-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105 mr-3"
        >
          CATWDA
        </button>
        <button
          onClick={() => navigate("/pareto/solver")}
          className="w-full md:w-auto px-10 py-4 bg-purple-500 text-white text-lg md:text-xl font-bold rounded-lg shadow-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105 mr-3"
        >
          Resolve-inator 🔫
        </button>
        
        <button
          onClick={() => navigate("/pareto/pigmalion")}
          className="w-full md:w-auto px-10 py-4 bg-purple-500 text-white text-lg md:text-xl font-bold rounded-lg shadow-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105 mr-3"
        >
          Efecto Pigmalión
        </button>
        <button
          onClick={() => navigate("/author")}
          className="w-full md:w-auto px-10 py-4 bg-gray-800 text-white text-lg md:text-xl font-bold rounded-lg shadow-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 mr-20"
        >
          Autor
        </button>
      </div>
    </div>
  );
}

export default MenuScreen;
               