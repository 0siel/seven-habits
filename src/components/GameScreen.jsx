import React, { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

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

const decalogoQuestions = [
  {
    question:
      "¿Qué principio del Decálogo implica poner cada cosa en su lugar?",
    options: ["Orden", "Limpieza", "Puntualidad", "Responsabilidad"],
    answer: "Orden",
  },
  {
    question:
      "¿Qué principio destaca que la limpieza exterior refleja la limpieza interior?",
    options: [
      "Limpieza",
      "Honradez",
      "Deseo de superación",
      "Gusto por el trabajo",
    ],
    answer: "Limpieza",
  },
  {
    question:
      "¿Qué principio relaciona la puntualidad con el respeto hacia los demás?",
    options: [
      "Puntualidad",
      "Orden",
      "Respeto al derecho de los demás",
      "Responsabilidad",
    ],
    answer: "Puntualidad",
  },
  {
    question: "¿Cómo definen los anglosajones el principio de responsabilidad?",
    options: [
      "Habilidad de responder",
      "Hacer la tarea",
      "Cumplir promesas",
      "Ser puntual",
    ],
    answer: "Habilidad de responder",
  },
  {
    question:
      "¿Qué principio promueve competir contra uno mismo para superarse?",
    options: [
      "Deseo de superación",
      "Honradez",
      "Gusto por el trabajo",
      "Ahorro e inversión",
    ],
    answer: "Deseo de superación",
  },
  {
    question: "¿Qué principio se define como no tener dos agendas?",
    options: [
      "Honradez",
      "Limpieza",
      "Respeto a la ley y los reglamentos",
      "Orden",
    ],
    answer: "Honradez",
  },
  {
    question: "¿Qué frase famosa dijo Benito Juárez sobre el respeto?",
    options: [
      "El respeto al derecho ajeno es la paz",
      "Haz lo que más te gusta",
      "A la hora exacta",
      "Habilidad de responder",
    ],
    answer: "El respeto al derecho ajeno es la paz",
  },
  {
    question:
      "¿Qué principio destaca la importancia de cumplir con reglas claras?",
    options: [
      "Respeto a la ley y los reglamentos",
      "Orden",
      "Limpieza",
      "Honradez",
    ],
    answer: "Respeto a la ley y los reglamentos",
  },
  {
    question:
      "¿Qué principio menciona que nadie alcanza el éxito sin disfrutar lo que hace?",
    options: [
      "Gusto por el trabajo",
      "Deseo de superación",
      "Puntualidad",
      "Ahorro e inversión",
    ],
    answer: "Gusto por el trabajo",
  },
  {
    question: "¿Qué principio fomenta hábitos de ahorro e inversión?",
    options: [
      "Ahorro e inversión",
      "Deseo de superación",
      "Responsabilidad",
      "Limpieza",
    ],
    answer: "Ahorro e inversión",
  },
];

function GameScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isDecalogo, setIsDecalogo] = useState(false);
  const { width, height } = useWindowSize();

  const questions = isDecalogo ? decalogoQuestions : triviaQuestions;

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestionIndex + 1 < questions.length) {
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

  const toggleQuiz = () => {
    setIsDecalogo(!isDecalogo);
    handleRestart();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      {showScore && score === questions.length && (
        <Confetti width={width} height={height} numberOfPieces={300} />
      )}
      <h1 className="text-3xl font-bold mb-6">
        {isDecalogo ? "Decálogo Trivia Game" : "7 Hábitos Trivia Game"}
      </h1>
      <button
        onClick={toggleQuiz}
        className="px-4 py-2 mb-4 bg-purple-500 text-white rounded hover:bg-purple-600"
      >
        {isDecalogo ? "Cambiar a 7 Hábitos" : "Cambiar a Decálogo"}
      </button>
      {showScore ? (
        <div>
          <p className="text-lg font-medium mb-4">
            ¡Obtuviste {score} de {questions.length} puntos!
          </p>
          {score === questions.length && (
            <p className="text-xl font-bold text-green-600">
              ¡Perfecto! 🎉 ¡Felicidades, eres un experto!
            </p>
          )}
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
            {questions[currentQuestionIndex].question}
          </p>
          <div className="flex flex-col gap-2 mb-4">
            {questions[currentQuestionIndex].options.map((option, index) => (
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
            ))}
          </div>
          <button
            onClick={handleNextQuestion}
            disabled={!selectedOption}
            className={`px-4 py-2 rounded ${
              selectedOption
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {currentQuestionIndex + 1 === questions.length
              ? "Ver Resultados"
              : "Siguiente Pregunta"}
          </button>
        </div>
      )}
    </div>
  );
}

export default GameScreen;
