import React from "react";
import ImageCollage from "./ImageCollage";
import { useNavigate } from "react-router-dom";

function AuthorScreen() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-b from-blue-600 to-purple-600 text-white px-6 py-12">
      {/* Title */}
      {/* Preview/Next <-- / -->  buttons*/}
      <div>
        <button
          className="bg-white text-black px-4 py-2 rounded-lg mr-4"
          onClick={() => navigate("/kasuga/game")}
        >
          Anterior
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-white text-black px-4 py-2 rounded-lg"
        >
          Siguiente
        </button>
      </div>
      <h1 className="text-5xl font-extrabold mb-8 text-center">Sobre mí</h1>

      {/* Introduction */}
      <p className="text-lg md:text-xl font-light mb-12 text-center max-w-3xl">
        Hola, mi nombre es Osiel y soy un desarrollador de software apasionado
        por la tecnología y la programación. Me encanta aprender cosas nuevas y
        compartir mi conocimiento con los demás. ¡Gracias por visitar mi sitio
        web!
      </p>
      {/* mail */}
      <a
        href="mailto:osiel.rubio.suarez@gmail.com"
        className="text-lg font-bold"
      >
        📧 osiel.rubio.suarez@gmail.com
      </a>
      <br />
      {/* GitHub */}
      <a
        href="https://github.com/0siel"
        target="_blank"
        rel="noreferrer"
        className="text-lg font-bold"
      >
        {" "}
        0siel
        <span role="img" aria-label="GitHub">
          🐙
        </span>
      </a>

      {/* Image Collage */}
      <ImageCollage />

      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-200">
        Made with ❤️ by Osiel | © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default AuthorScreen;
