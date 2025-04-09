import React from 'react';

export default function Intro() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-12 animate-fade-in">
        🌟 Introducción a los libros 🌟
      </h1>

      {/* Description */}
      <div className="max-w-2xl text-center px-4 mb-12">
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">
          Utopia para realistas
        </h2>
        <p className="text-lg">
          Este libro es una exploración de ideas radicales y provocativas sobre cómo podría ser un mundo mejor. El autor, Rutger Bregman, argumenta a favor de conceptos como la renta básica universal y la reducción de la jornada laboral, presentando evidencia histórica y estudios de caso que respaldan sus afirmaciones.
          A lo largo del libro, Bregman desafía las nociones convencionales sobre la economía, la política y la sociedad, invitando a los lectores a imaginar un futuro donde la utopía no solo es posible, sino alcanzable. Con un estilo accesible y persuasivo, el autor nos anima a cuestionar el statu quo y a considerar nuevas formas de organización social que podrían beneficiar a todos.
          </p>
        </div>
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg mt-8">
        <h2 className="text-3xl font-bold mb-4 mt-8">
          23 cosas que no te han contado sobre el capitalismo
        </h2>
        <p className="text-lg">
          Este libro es una crítica incisiva al capitalismo moderno, escrita por Ha-Joon Chang. A través de 23 capítulos, el autor desmantela mitos comunes sobre la economía global y ofrece una perspectiva alternativa sobre cómo funciona realmente el capitalismo. Chang utiliza ejemplos históricos y contemporáneos para ilustrar sus puntos, abogando por un enfoque más equilibrado y justo en la economía mundial.
          Con un estilo claro y directo, el autor desafía las creencias arraigadas sobre el libre mercado y propone soluciones prácticas para abordar las desigualdades económicas y sociales que persisten en la actualidad.
          </p>
        </div>
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg mt-8">
        <h2 className="text-3xl font-bold mb-4 mt-8">
          Por qué fracasan los países
        </h2>
        <p className="text-lg">
          Este libro, escrito por Daron Acemoglu y James A. Robinson, explora las razones detrás del éxito o fracaso de las naciones a lo largo de la historia. Los autores argumentan que las instituciones políticas y económicas son fundamentales para el desarrollo de un país, y que las naciones que han logrado establecer instituciones inclusivas tienden a prosperar, mientras que aquellas con instituciones extractivas enfrentan dificultades.
          A través de una serie de estudios de caso y análisis históricos, Acemoglu y Robinson ofrecen una visión profunda sobre cómo las decisiones políticas y económicas afectan el bienestar de las sociedades, desafiando la idea de que la geografía o la cultura son los factores determinantes del éxito nacional.
          </p>
          </div>

        </div>
    </div>
  );
}