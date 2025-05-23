import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Logo Section */}
      <div className="text-center mb-8">
        <h1 className="text-6xl font-extrabold mb-4 animate-bounce">
          Recursos para el Éxito
        </h1>
        <p className="text-xl font-light">
          Una biblioteca de recursos interctivos para alcanzar tus metas y ser
          más exitoso. 🚀
        </p>
      </div>

      <button
        onClick={() => navigate("/seven/menu")}
        className="mt-10 px-8 py-4 bg-black text-blue-600 text-lg font-bold rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
      >
        7 Hábitos de la Gente Altamente Efectiva - Decálogo de Mavila
      </button>

      <button
        onClick={() => navigate("/kasuga/menu")}
        className="mt-10 px-8 py-4 bg-black text-blue-600 text-lg font-bold rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
      >
        Motivación - Educación con valores y Virtudes
      </button>
      <button
        onClick={() => navigate("/wealthy/menu")}
        className="mt-10 px-8 py-4 bg-black text-blue-600 text-lg font-bold rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
      >
        Los Superricos
      </button>
      <button
        onClick={() => navigate("/pareto/menu")}
        className="mt-10 px-8 py-4 bg-black text-blue-600 text-lg font-bold rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
      >
        Resolve-inator
      </button>
      <button
        onClick={() => navigate("/faang/mindmap")}
        className="mt-10 px-8 py-4 bg-black text-blue-600 text-lg font-bold rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
      >
        Tech Power
      </button>
      <button
        onClick={() => navigate("/empresarios/menu")}
        className="mt-10 px-8 py-4 bg-black text-blue-600 text-lg font-bold rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
      >
        Empresarios Mexicanos + Women IT
      </button>

      <button
        onClick={() => navigate("/books/menu")}
        className="mt-10 px-8 py-4 bg-black text-blue-600 text-lg font-bold rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
      >
        Libros para el Desarrollo
      </button>

      <button
        onClick={() => navigate("/superhabilidades")}
        className="mt-10 px-8 py-4 bg-black text-blue-600 text-lg font-bold rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
      >
        Superhabilidades
      </button>

      <button
        onClick={() => navigate("/disciplina")}
        className="mt-10 px-8 py-4 bg-black text-blue-600 text-lg font-bold rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
      >
        Arquetipos Sistémicos
      </button>
      
    </div>
  );
}

export default WelcomeScreen;
