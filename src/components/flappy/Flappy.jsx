import React from "react";
import Game from "./Game";
import { useNavigate } from "react-router-dom";

const Flappy = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <button
        className="bg-white text-black px-4 py-2 rounded-lg mr-4"
        onClick={() => navigate("/kasuga/deepseek")}
      >
        Anterior
      </button>
      <button
        onClick={() => navigate("/author")}
        className="bg-white text-black px-4 py-2 rounded-lg"
      >
        Siguiente
      </button>

      <h1>Flappy Bird</h1>
      <Game />
    </div>
  );
};

export default Flappy;
