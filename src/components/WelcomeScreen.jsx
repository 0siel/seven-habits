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

      {/* Start Button */}
      <button
        onClick={() => navigate("/seven/menu")}
        className="mt-10 px-8 py-4 bg-black text-blue-600 text-lg font-bold rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
      >
        7 Hábitos de la Gente Altamente Efectiva - Decálogo de Mavila
      </button>

      <button
        onClick={() => navigate("kasuga/menu")}
        className="mt-4 px-8 py-4 bg-black text-blue-600 text-lg font-bold rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
      >
        Motivación - Educación con valores y Virtudes
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
