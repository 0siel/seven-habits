import React from "react";

const QuintaDisciplinaResumen = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Resumen: La Quinta Disciplina
      </h1>

      <p className="text-gray-700 text-lg mb-4">
        La Quinta Disciplina, escrita por Peter Senge, es una obra clave en el
        ámbito del aprendizaje organizacional. El autor propone que las
        organizaciones deben convertirse en "organizaciones que aprenden" para
        sobrevivir y prosperar en entornos complejos y cambiantes. Esto se logra
        desarrollando cinco disciplinas fundamentales.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <div className="bg-gray-100 p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            1. Dominio personal
          </h2>
          <p className="text-gray-700">
            Implica el crecimiento personal constante, la claridad de objetivos
            y el compromiso con una visión personal significativa.
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            2. Modelos mentales
          </h2>
          <p className="text-gray-700">
            Son supuestos, creencias e imágenes internas que influyen en cómo
            entendemos el mundo y tomamos decisiones. Cuestionarlos mejora el
            aprendizaje.
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            3. Visión compartida
          </h2>
          <p className="text-gray-700">
            Construir una visión común motiva a los miembros de la organización
            a trabajar unidos hacia objetivos compartidos.
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            4. Aprendizaje en equipo
          </h2>
          <p className="text-gray-700">
            Impulsa el pensamiento colectivo, la comunicación efectiva y la
            resolución conjunta de problemas.
          </p>
        </div>

        <div className="bg-yellow-100 p-4 rounded-xl shadow-md sm:col-span-2">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            5. Pensamiento sistémico (La quinta disciplina)
          </h2>
          <p className="text-gray-700">
            Es la disciplina que integra a las demás. Enseña a ver patrones,
            interrelaciones y causas profundas, en lugar de eventos aislados.
            Permite comprender la complejidad y mejorar la toma de decisiones.
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Senge argumenta que solo las organizaciones que aprenden
          sistemáticamente podrán adaptarse a los desafíos del futuro.
        </p>
      </div>
    </div>
  );
};

export default QuintaDisciplinaResumen;
