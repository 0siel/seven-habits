import React, { useState } from "react";

const triviaQuestions = [
  {
    question: "¿Cuál es el primer hábito de las personas altamente efectivas?",
    options: [
      "Comenzar con un fin en mente",
      "Ser proactivo",
      "Pensar en ganar/ganar",
      "Afilar la sierra",
    ],
    answer: "Ser proactivo",
  },
  {
    question:
      "¿Qué hábito se enfoca en crear una declaración de misión personal?",
    options: [
      "Poner primero lo primero",
      "Comenzar con un fin en mente",
      "Sinergizar",
      "Ser proactivo",
    ],
    answer: "Comenzar con un fin en mente",
  },
  {
    question:
      "¿Qué hábito fomenta el equilibrio en la renovación física, social, mental y espiritual?",
    options: [
      "Afilar la sierra",
      "Buscar primero entender, luego ser entendido",
      "Sinergizar",
      "Pensar en ganar/ganar",
    ],
    answer: "Afilar la sierra",
  },
  {
    question:
      "¿Cuál hábito implica gestionar el tiempo con base en prioridades?",
    options: [
      "Poner primero lo primero",
      "Ser proactivo",
      "Sinergizar",
      "Buscar primero entender, luego ser entendido",
    ],
    answer: "Poner primero lo primero",
  },
  {
    question: "¿Qué hábito se enfoca en la comunicación empática?",
    options: [
      "Buscar primero entender, luego ser entendido",
      "Afilar la sierra",
      "Pensar en ganar/ganar",
      "Comenzar con un fin en mente",
    ],
    answer: "Buscar primero entender, luego ser entendido",
  },
  {
    question: "¿Qué hábito busca beneficios mutuos en las relaciones?",
    options: [
      "Pensar en ganar/ganar",
      "Sinergizar",
      "Poner primero lo primero",
      "Ser proactivo",
    ],
    answer: "Pensar en ganar/ganar",
  },
  {
    question: "¿Qué hábito promueve la cooperación creativa?",
    options: [
      "Sinergizar",
      "Afilar la sierra",
      "Pensar en ganar/ganar",
      "Buscar primero entender, luego ser entendido",
    ],
    answer: "Sinergizar",
  },
  {
    question:
      "¿Cómo se llama el autor de 'Los 7 hábitos de las personas altamente efectivas'?",
    options: ["Stephen Covey", "Tony Robbins", "Dale Carnegie", "John Maxwell"],
    answer: "Stephen Covey",
  },
  {
    question: "¿Qué hábito se considera clave para la mejora continua?",
    options: [
      "Afilar la sierra",
      "Poner primero lo primero",
      "Pensar en ganar/ganar",
      "Comenzar con un fin en mente",
    ],
    answer: "Afilar la sierra",
  },
  {
    question: "¿Qué hábito está relacionado con la proactividad?",
    options: [
      "Ser proactivo",
      "Pensar en ganar/ganar",
      "Poner primero lo primero",
      "Sinergizar",
    ],
    answer: "Ser proactivo",
  },
];

function GameScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === triviaQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestionIndex + 1 < triviaQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-3xl font-bold mb-6">7 Hábitos Trivia Game</h1>
      {showScore ? (
        <div>
          <p className="text-lg font-medium mb-4">
            ¡Obtuviste {score} de {triviaQuestions.length} puntos!
          </p>
          <button
            onClick={handleRestart}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Reiniciar Juego
          </button>
        </div>
      ) : (
        <div>
          <p className="text-lg font-medium mb-4">
            {triviaQuestions[currentQuestionIndex].question}
          </p>
          <div className="flex flex-col gap-2 mb-4">
            {triviaQuestions[currentQuestionIndex].options.map(
              (option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={`px-4 py-2 rounded border text-left ${
                    selectedOption === option
                      ? "bg-blue-500 text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {option}
                </button>
              )
            )}
          </div>
          <button
            onClick={handleNextQuestion}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
            disabled={!selectedOption}
          >
            {currentQuestionIndex + 1 === triviaQuestions.length
              ? "Finalizar"
              : "Siguiente Pregunta"}
          </button>
        </div>
      )}
    </div>
  );
}

export default GameScreen;
