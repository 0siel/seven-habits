import React from "react";

function IntroScreen() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-b from-purple-500 via-blue-600 to-blue-800 text-white px-6 py-12">
      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-12 text-center">
        Introducción
      </h1>

      {/* 7 Habits Section */}
      <div className="flex flex-col items-center bg-white text-black rounded-lg shadow-lg mb-12 w-full md:w-3/4 lg:w-2/3 p-8">
        <h2 className="text-3xl font-semibold mb-4">
          Los 7 hábitos de las personas altamente efectivas
        </h2>
        <img
          // Import image from public folder
          src="/7habitos.png"
          alt="7 Habits"
          //Show entire height of image
          className="w-full h-97 object-contain rounded-lg mb-6"
        />
        <p className="text-lg">
          Aprende como los 7 hábitos de las personas altamente efectivas pueden
          ayudarte a alcanzar tus metas y ser más exitoso.
        </p>
      </div>

      {/* Divider */}
      <div className="w-20 h-1 bg-gray-300 rounded-full mb-12"></div>

      {/* 10 Principles Section */}
      <div className="flex flex-col items-center bg-white text-black rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 p-8">
        <h2 className="text-3xl font-semibold mb-4">Decálogo del dasarrollo</h2>
        <img
          src="1.png"
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

export default IntroScreen;
