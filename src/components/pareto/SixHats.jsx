import React from "react";
import { useNavigate } from "react-router-dom";

const SixHats = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Los Seis Sombreros para Pensar
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Método de Edward de Bono para mejorar el pensamiento y la toma de decisiones. Cada sombrero representa un estilo de pensamiento.
      </p>

      {/* Image */}
      <div className="flex justify-center mb-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Six_Thinking_Hats.png/600px-Six_Thinking_Hats.png"
          alt="Los Seis Sombreros para Pensar"
          className="rounded-lg shadow-lg w-full max-w-md"
        />
      </div>

      {/* Hat Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* White Hat */}
        <div className="p-4 border-2 border-gray-400 rounded-lg shadow-md bg-gray-50">
          <h3 className="text-xl font-semibold text-gray-700">Sombrero Blanco</h3>
          <p className="text-gray-700 mt-2">
            Representa la **objetividad y datos**. Se enfoca en hechos, números y cifras sin opiniones personales.
          </p>
        </div>

        {/* Red Hat */}
        <div className="p-4 border-2 border-red-500 rounded-lg shadow-md bg-red-50">
          <h3 className="text-xl font-semibold text-red-700">Sombrero Rojo</h3>
          <p className="text-gray-700 mt-2">
            Representa las **emociones e intuición**. Permite expresar sentimientos y corazonadas sin necesidad de explicaciones racionales.
          </p>
        </div>

        {/* Black Hat */}
        <div className="p-4 border-2 border-black rounded-lg shadow-md bg-gray-900 text-white">
          <h3 className="text-xl font-semibold">Sombrero Negro</h3>
          <p className="mt-2">
            Representa el **pensamiento crítico y cauteloso**. Se centra en los riesgos, dificultades y puntos débiles.
          </p>
        </div>

        {/* Yellow Hat */}
        <div className="p-4 border-2 border-yellow-400 rounded-lg shadow-md bg-yellow-50">
          <h3 className="text-xl font-semibold text-yellow-700">Sombrero Amarillo</h3>
          <p className="text-gray-700 mt-2">
            Representa el **pensamiento positivo y optimismo**. Se enfoca en beneficios, ventajas y oportunidades.
          </p>
        </div>

        {/* Green Hat */}
        <div className="p-4 border-2 border-green-500 rounded-lg shadow-md bg-green-50">
          <h3 className="text-xl font-semibold text-green-700">Sombrero Verde</h3>
          <p className="text-gray-700 mt-2">
            Representa la **creatividad e innovación**. Permite explorar nuevas ideas, soluciones y alternativas.
          </p>
        </div>

        {/* Blue Hat */}
        <div className="p-4 border-2 border-blue-500 rounded-lg shadow-md bg-blue-50">
          <h3 className="text-xl font-semibold text-blue-700">Sombrero Azul</h3>
          <p className="text-gray-700 mt-2">
            Representa el **control y organización** del proceso de pensamiento. Coordina y dirige la discusión.
          </p>
        </div>
      </div>
      {/* Preview/Next <-- / -->  buttons*/}
      < div className="flex justify-center mt-6 space-x-4 ">
        <button
          className="bg-white text-black px-4 py-2 rounded-lg mr-4"
          onClick={() => navigate("/pareto/foda")}
        >
          Foda
        </button>
        <button
          onClick={() => navigate("/pareto/catwda")}
          className="bg-white text-black px-4 py-2 rounded-lg"
        >
          CATWDA
        </button>
      </div>
    </div>
  );
};

export default SixHats;
