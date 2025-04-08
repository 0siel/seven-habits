import React from 'react';

export default function Intro() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-12 animate-fade-in">
        🌟 Introducción a los libros 🌟
      </h1>

      {/* Content */}
      <div className="max-w-2xl px-4 py-6 bg-white rounded-lg shadow-lg text-gray-800">
        <p className="text-lg mb-4">
          En esta sección, exploraremos los libros "Utopía para realistas", "23 cosas que no te cuentan sobre el capitalismo" y "Por qué fracasan los países". 
          Cada libro ofrece una perspectiva única sobre la economía, la política y la sociedad.
        </p>
        <p className="text-lg mb-4">
          A medida que avancemos, analizaremos los temas clave de cada libro y cómo se interrelacionan entre sí. 
          ¡Prepárate para un viaje fascinante a través de las ideas de estos autores!
        </p>
      </div>
    </div>
  );
}