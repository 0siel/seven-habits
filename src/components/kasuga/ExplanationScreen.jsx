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
        {/* Title */}
        <h2 className="text-3xl font-semibold mb-4">
          Educación con valores y virtudes
        </h2>

        {/* Image */}
        <img
          src="/ck.png"
          alt="Kasuga"
          className="w-full h-97 object-contain rounded-lg mb-6"
        />

        {/* Horizontal Scrollable Cards */}
        <div className="w-full overflow-x-auto">
          <div className="flex space-x-4 p-4">
            {[
              {
                title: "Respeto",
                description:
                  "La base de toda relación saludable y del desarrollo personal.",
              },
              {
                title: "Responsabilidad",
                description:
                  "Asumir las consecuencias de nuestras acciones y decisiones.",
              },
              {
                title: "Honestidad",
                description:
                  "Ser sincero y transparente en nuestras acciones y palabras.",
              },
              {
                title: "Empatía",
                description:
                  "Comprender y respetar los sentimientos de los demás.",
              },
              {
                title: "Disciplina",
                description:
                  "El hábito clave para lograr el éxito en cualquier área de la vida.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="min-w-[80%] md:min-w-[40%] lg:min-w-[30%] bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-700">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-20 h-1 bg-gray-300 rounded-full mb-12"></div>

      <div className="flex flex-col items-center bg-white text-black rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 p-8">
        <h2 className="text-3xl font-semibold mb-4">Decálogo del desarrollo</h2>
        <img
          src="/jk.png"
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
