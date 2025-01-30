import React from "react";

function ExplanationScreen() {
  {
    /* Explanation Screen */
  }
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-extrabold mb-12 animate-fade-in">
        🌟 Explicación 🌟
      </h1>

      <div className="flex flex-col items-center bg-white text-black rounded-lg shadow-lg mb-12 w-full md:w-3/4 lg:w-2/3 p-8">
        <h2 className="text-3xl font-semibold mb-4">
          Motivacion - Educacion con valores y virtudes
        </h2>
        <img
          src="/kasuga.png"
          alt="Kasuga"
          className="w-full h-97 object-contain rounded-lg mb-6"
        />
        <p className="text-lg">
          Aprende como la motivación y la educación con valores y virtudes
          pueden ayudarte a alcanzar tus metas y ser más exitoso.
        </p>
      </div>

      <div className="w-20 h-1 bg-gray-300 rounded-full mb-12"></div>

      <div className="flex flex-col items-center bg-white text-black rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 p-8">
        <h2 className="text-3xl font-semibold mb-4">Decálogo del desarrollo</h2>
        <img
          src="/kasuga2.png"
          alt="10 Principles"
          className="w-full h-95 object-cover rounded-lg mb-6"
        />
        <p className="text-lg">
          Descubre los 10 principios que utilizan los paises desarrollados para
          alcanzar el exito y la prosperidad.
        </p>
      </div>
    </div>
  );
}

export default ExplanationScreen;
