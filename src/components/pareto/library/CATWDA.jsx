import React from "react";
import {useNavigate} from "react-router-dom";

const CATWDA = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Metodología CATWDA
      </h2>
      <p className="text-center text-gray-600 mb-6">
        La metodología <strong>CATWDA</strong> es una herramienta que permite formular una 
        <strong>definición raíz</strong> a partir de la identificación de elementos esenciales 
        del sistema, dentro del enfoque de la <strong>Metodología de Sistemas Blandos (SSM)</strong> de 
        <strong>Peter Checkland</strong>.
      </p>

      {/* Sección de Explicación */}
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-blue-700">¿Qué es el SSM?</h3>
        <p className="text-gray-700">
          La <strong>Metodología de Sistemas Blandos (SSM)</strong> es una técnica cualitativa que ayuda a 
          abordar problemas situacionales en los cuales existe un alto componente social, 
          político y humano. Se centra en **sistemas no estructurados** y su impacto en el 
          mundo real de las organizaciones.
        </p>
      </div>

      {/* Sección CATWDA */}
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Los 6 Elementos de CATWDA
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Clientes */}
        <div className="p-4 border-2 border-green-500 rounded-lg shadow-md bg-green-50">
          <h3 className="text-xl font-semibold text-green-700">Clientes</h3>
          <p className="text-gray-700 mt-2">
            Considera a los beneficiarios del sistema, aquellos que obtienen ventajas o resultados de sus procesos.
          </p>
        </div>

        {/* Actores */}
        <div className="p-4 border-2 border-blue-500 rounded-lg shadow-md bg-blue-50">
          <h3 className="text-xl font-semibold text-blue-700">Actores</h3>
          <p className="text-gray-700 mt-2">
            Son quienes transforman las entradas en salidas y ejecutan las actividades del sistema.
          </p>
        </div>

        {/* Transformación */}
        <div className="p-4 border-2 border-yellow-500 rounded-lg shadow-md bg-yellow-50">
          <h3 className="text-xl font-semibold text-yellow-700">Transformación</h3>
          <p className="text-gray-700 mt-2">
            Representa el **proceso de conversión** de la entrada en salida, generando un cambio.
          </p>
        </div>

        {/* Weltanschauung */}
        <div className="p-4 border-2 border-purple-500 rounded-lg shadow-md bg-purple-50">
          <h3 className="text-xl font-semibold text-purple-700">Weltanschauung</h3>
          <p className="text-gray-700 mt-2">
            Expresión alemana que significa **visión del mundo**. Aporta el contexto y significado a la transformación.
          </p>
        </div>

        {/* Dueños */}
        <div className="p-4 border-2 border-red-500 rounded-lg shadow-md bg-red-50">
          <h3 className="text-xl font-semibold text-red-700">Dueños</h3>
          <p className="text-gray-700 mt-2">
            Personas con el poder de iniciar o cerrar el sistema. Son los tomadores de decisiones clave.
          </p>
        </div>

        {/* Ambiente */}
        <div className="p-4 border-2 border-gray-500 rounded-lg shadow-md bg-gray-50">
          <h3 className="text-xl font-semibold text-gray-700">Ambiente</h3>
          <p className="text-gray-700 mt-2">
            Elementos externos como políticas organizacionales, aspectos legales o éticos que influyen en el sistema.
          </p>
        </div>
      </div>

      {/* Sección Definición Raíz */}
      <div className="bg-blue-100 p-4 rounded-lg mt-6">
        <h3 className="text-lg font-semibold text-blue-700">Definición Raíz</h3>
        <p className="text-gray-700">
          Una vez identificados los elementos de **CATWDA**, se formula una 
          <strong>definición raíz</strong>, que expresa el propósito central del sistema a través de un proceso 
          de transformación, donde una entidad de entrada se convierte en una entidad de salida mejorada.
        </p>
      </div>
      {/* Preview/Next <-- / -->  buttons*/}
      <div div className="flex justify-center mt-6 space-x-4 ">
        <button
          className="bg-white text-black px-4 py-2 rounded-lg mr-4"
          onClick={() => navigate("/pareto/sixhats")}
        >
          Seis Sombreros 🎩
        </button>
        <button
          onClick={() => navigate("/pareto/solver")}
          className="bg-white text-black px-4 py-2 rounded-lg"
        >
          Resolve-inator
        </button>
      </div>
    </div>
  );
};

export default CATWDA;
