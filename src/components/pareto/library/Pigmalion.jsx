import React, { useState } from "react";

const Pigmalion = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen py-10 px-6`}>
      {/* Botón de cambio de tema */}
      <div className="flex justify-end mb-6">
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)} 
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white shadow-md hover:bg-indigo-700 transition duration-300"
        >
          {isDarkMode ? "🌞 Modo Claro" : "🌙 Modo Oscuro"}
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Título con efecto mágico */}
        <h2 className="text-4xl font-bold text-center mb-6">
          ✨ El Efecto Pigmalión ✨
        </h2>
        
        <p className="text-center text-lg mb-8">
          El <strong>Efecto Pigmalión</strong> es un fenómeno psicológico en el cual las expectativas que 
          una persona tiene sobre otra pueden influir en su rendimiento y comportamiento. 
          Si crees que alguien puede lograr algo, es más probable que lo haga. 🏆
        </p>

        {/* Explicación con tarjetas flotantes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border-2 border-blue-500 rounded-lg shadow-lg bg-blue-50">
            <h3 className="text-xl font-semibold text-blue-700">📖 Origen</h3>
            <p className="mt-2 text-gray-700">
              Fue estudiado por los psicólogos <strong>Rosenthal y Jacobson</strong>, quienes demostraron 
              que las expectativas de los maestros influyen en el desempeño de los estudiantes.
            </p>
          </div>

          <div className="p-6 border-2 border-purple-500 rounded-lg shadow-lg bg-purple-50">
            <h3 className="text-xl font-semibold text-purple-700">🧠 Psicología</h3>
            <p className="mt-2 text-gray-700">
              Si un profesor cree que un estudiante es talentoso, le dará más atención y estímulo, 
              lo que hace que el estudiante realmente mejore su desempeño.
            </p>
          </div>

          <div className="p-6 border-2 border-green-500 rounded-lg shadow-lg bg-green-50">
            <h3 className="text-xl font-semibold text-green-700">🎓 Aplicación Educativa</h3>
            <p className="mt-2 text-gray-700">
              Los docentes pueden usar el Efecto Pigmalión para motivar a los estudiantes y 
              mejorar su confianza y habilidades.
            </p>
          </div>

          <div className="p-6 border-2 border-red-500 rounded-lg shadow-lg bg-red-50">
            <h3 className="text-xl font-semibold text-red-700">⚠️ Riesgo de Expectativas Negativas</h3>
            <p className="mt-2 text-gray-700">
              Las bajas expectativas pueden hacer que un estudiante se desmotive y rinda peor. 
              Es crucial que los educadores refuercen creencias positivas. 
            </p>
          </div>
        </div>

        {/* Cómo utilizarlo en educación */}
        <div className="mt-10 p-6 bg-indigo-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-indigo-700">🚀 Cómo usar el Efecto Pigmalión en la Educación</h3>
          <ul className="mt-4 list-disc list-inside text-gray-800">
            <li>🔹 Creer genuinamente en las capacidades de los estudiantes.</li>
            <li>🔹 Expresar expectativas altas pero alcanzables.</li>
            <li>🔹 Proporcionar retroalimentación positiva y constructiva.</li>
            <li>🔹 Tratar a cada estudiante con respeto y confianza.</li>
            <li>🔹 Celebrar los pequeños logros para fomentar la motivación.</li>
          </ul>
        </div>
      </div>
      {/* Preview/Next <-- / -->  buttons*/}
      <div div className="flex justify-center mt-6 space-x-4 ">
        <button
          className="bg-white text-black px-4 py-2 rounded-lg mr-4"
          onClick={() => navigate("/pareto/solver")}
        >
          Resolve-inator 🔫
        </button>
        <button
          onClick={() => navigate("/author")}
          className="bg-white text-black px-4 py-2 rounded-lg"
        >
          Author
        </button>
      </div>
    </div>
  );
};

export default Pigmalion;
