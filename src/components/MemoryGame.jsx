import React, { useState, useEffect } from "react";
import {
  FaLightbulb,
  FaClock,
  FaHandsHelping,
  FaBrain,
  FaTree,
  FaHandshake,
  FaUsers,
} from "react-icons/fa";

const habits = [
  { id: 1, name: "Ser Proactivo", icon: <FaLightbulb /> },
  { id: 2, name: "Comenzar con un Fin en Mente", icon: <FaBrain /> },
  { id: 3, name: "Poner Primero lo Primero", icon: <FaClock /> },
  { id: 4, name: "Pensar en Ganar/Ganar", icon: <FaHandshake /> },
  {
    id: 5,
    name: "Buscar Primero Entender, Luego ser Entendido",
    icon: <FaUsers />,
  },
  { id: 6, name: "Sinergizar", icon: <FaHandsHelping /> },
  { id: 7, name: "Afilar la Sierra", icon: <FaTree /> },
];

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  // Shuffle and duplicate the cards
  useEffect(() => {
    const shuffledCards = [...habits, ...habits]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (card) => {
    if (flippedCards.length === 2 || matchedCards.includes(card.name)) return;

    setFlippedCards((prev) => [...prev, card]);

    if (flippedCards.length === 1) {
      if (flippedCards[0].name === card.name) {
        setMatchedCards((prev) => [...prev, card.name]);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  const handleRestart = () => {
    setMatchedCards([]);
    setFlippedCards([]);
    const shuffledCards = [...habits, ...habits]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Memory Game: Los 7 Hábitos</h1>
      <p className="text-lg mb-4">
        Encuentra todas las parejas para ganar. ¡Buena suerte!
      </p>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card)}
            className={`relative w-24 h-32 rounded-lg cursor-pointer flex items-center justify-center text-2xl font-bold shadow-md ${
              flippedCards.includes(card) || matchedCards.includes(card.name)
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
          >
            {(flippedCards.includes(card) ||
              matchedCards.includes(card.name)) && (
              <div className="flex flex-col items-center">
                {card.icon}
                <p className="text-sm mt-2">{card.name}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {matchedCards.length === habits.length && (
        <div className="mt-6">
          <p className="text-xl font-bold text-green-600">
            ¡Felicidades! Completaste el juego. 🎉
          </p>
          <button
            onClick={handleRestart}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Reiniciar Juego
          </button>
        </div>
      )}
    </div>
  );
}

export default MemoryGame;
