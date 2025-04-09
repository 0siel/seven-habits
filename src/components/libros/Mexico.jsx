import React from 'react';

export default function Intro() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-12 animate-fade-in">
        🌟 Un mejor México 🌟 
      </h1>
      <p className="text-2xl mb-8 animate-fade-in">
        Qué tiene que hacer el Estado mexicano, Lel sistema educativo, la sociedad y el individuo para mejorar México
      </p>
      {/* Description */}
    <div className="max-w-2xl text-left px-4 mb-12 bg-white text-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">
          El estado mexicano
        </h2>
        <ul className="list-disc list-inside text-lg bg-"  >
          <li>Mejorar la educación y la salud</li>
          <li>Crear un sistema de justicia eficiente</li>
          <li>Proteger los derechos humanos</li>
          <li>Combatir la corrupción</li>
          <li>Fomentar la participación ciudadana</li>
          <li>Promover la igualdad de oportunidades</li>
          <li>Desarrollar infraestructura</li>
          <li>Proteger el medio ambiente</li>
          <li>Fortalecer la economía</li>
          <li>Fomentar la cultura y la identidad nacional</li>
        </ul>
        <h2 className="text-3xl font-bold mb-4 mt-8">
          El sistema educativo
        </h2>
        <ul className="list-disc list-inside text-lg">
          <li>Mejorar la calidad de la educación</li>
          <li>Fomentar la creatividad y el pensamiento crítico</li>
          <li>Promover la educación cívica y ética</li>
          <li>Incentivar el aprendizaje de idiomas</li>
          <li>Fomentar la educación técnica y profesional</li>
          <li>Promover la educación inclusiva</li>
          <li>Desarrollar programas de educación ambiental</li>
          <li>Fomentar la educación en valores</li>
          <li>Incentivar la investigación y la innovación</li>
          <li>Promover la educación a lo largo de la vida</li>
        </ul>
        <h2 className="text-3xl font-bold mb-4 mt-8">
          La sociedad
        </h2>
        <ul className="list-disc list-inside text-lg">
          <li>Fomentar la solidaridad y la empatía</li>
          <li>Promover el respeto a la diversidad</li>
          <li>Incentivar la participación ciudadana</li>
          <li>Fomentar el voluntariado</li>
          <li>Promover la cultura de la paz</li>
          <li>Desarrollar una conciencia ambiental</li>
          <li>Fomentar la educación financiera</li>
          <li>Promover el consumo responsable</li>
          <li>Incentivar el desarrollo comunitario</li>
          <li>Fomentar la cultura del emprendimiento</li>
        </ul> 
        <h2 className="text-3xl font-bold mb-4 mt-8">
          El individuo  
        </h2>
        <ul className="list-disc list-inside text-lg">
          <li>Fomentar la autoeducación</li>
          <li>Desarrollar habilidades sociales</li>
          <li>Fomentar la creatividad y la innovación</li>
          <li>Promover el autocuidado</li>
          <li>Incentivar el desarrollo personal</li>
          <li>Fomentar la resiliencia</li>
          <li>Promover la salud mental</li>
          <li>Incentivar el ejercicio físico</li>
          <li>Fomentar la lectura y el aprendizaje continuo</li>
          <li>Promover la responsabilidad social</li>
        </ul>
      </div>
    </div>
  );
}
//