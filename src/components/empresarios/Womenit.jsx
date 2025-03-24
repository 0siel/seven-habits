import React from "react";

const topics = [
  { title: "Panel de profesionistas", description: "Conversaciones con mujeres exitosas en TI compartiendo su experiencia." },
  { title: "Liderazgo femenino", description: "La importancia de las mujeres liderando equipos en tecnología." },
  { title: "Cómo ser un líder", description: "Consejos sobre cómo desarrollar habilidades de liderazgo." },
  { title: "Conocimientos técnicos", description: "Competencias clave para destacar en el mundo de la tecnología." },
  { title: "Prepararse", description: "Cómo planear tu camino profesional y académico." },
  { title: "Empezar: iniciativa", description: "El valor de tomar la iniciativa para crecer profesionalmente." },
  { title: "Ser un mentor", description: "La importancia de guiar a otras personas en su camino profesional." },
  { title: "Inspirar", description: "Cómo ser una fuente de inspiración para otras mujeres." },
  { title: "Retos de las mujeres líderes", description: "Obstáculos comunes y cómo superarlos." },
  { title: "Demostrar los conocimientos", description: "Cómo destacar tus habilidades técnicas de manera efectiva." },
  { title: "Desconfianza: inteligencia emocional", description: "Cómo manejar la desconfianza y desarrollar inteligencia emocional." },
  { title: "Saber vender: softskills", description: "La importancia de las habilidades blandas en el desarrollo profesional." },
];

const WomenITTopics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-purple-200 p-6">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-10">
        Notas del Women IT 💻🩷🚺
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 transition transform hover:scale-105 hover:shadow-pink-400 hover:bg-pink-50 border border-pink-200"
          >
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              {topic.title}
            </h2>
            <p className="text-gray-700">{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenITTopics;
