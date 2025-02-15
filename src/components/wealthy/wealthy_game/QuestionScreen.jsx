import React, { useState } from "react";

const QuestionScreen = ({ question, type, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Handles the answer selection and triggers animation
  const handleAnswer = (option) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);

    // Delay before proceeding
    setTimeout(() => {
      onAnswer(option);
      setSelectedAnswer(null);
      setIsAnswered(false);
    }, 2000);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center w-full max-w-md">
      {/* Show question price */}
      <h3 className="text-lg font-semibold mb-2">💰 Price: ${question.price.toLocaleString()}</h3>

      <h2 className="text-xl font-semibold mb-4">Question</h2>
      <p className="mb-6">{question.question}</p>

      {/* Regular Questions */}
      {type === "regular" && (
        <div className="grid grid-cols-1 gap-4">
          <h3 className="text-lg font-semibold">Choice an option😎</h3>
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-white rounded font-bold transition ${
                isAnswered
                  ? option === question.correctAnswer
                    ? "bg-green-500"
                    : selectedAnswer === option
                    ? "bg-red-500"
                    : "bg-gray-600"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
              onClick={() => handleAnswer(option)}
              disabled={isAnswered}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {/* Blind Questions: Show option buttons initially hidden, reveal after answering */}
      {type === "blind" && (
        <div className="grid grid-cols-1 gap-4">
          <h3 className="text-lg font-semibold mb-4">Blind🎲</h3>
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-white rounded font-bold transition ${
                isAnswered
                  ? option === question.correctAnswer
                    ? "bg-green-500"
                    : selectedAnswer === option
                    ? "bg-red-500"
                    : "bg-gray-600"
                  : "bg-purple-500 hover:bg-purple-600"
              }`}
              onClick={() => handleAnswer(option)}
              disabled={isAnswered}
            >
              {isAnswered ? option : `Option ${index + 1}`}
            </button>
          ))}
        </div>
      )}

      {/* Double or Nothing Questions */}
      {type === "double" && (
        <div className="grid grid-cols-1 gap-4">
          <h3 className="text-lg font-semibold mb-4">Double or nothing 🤑</h3>
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-white rounded font-bold transition ${
                isAnswered
                  ? option === question.correctAnswer
                    ? "bg-green-500"
                    : selectedAnswer === option
                    ? "bg-red-500"
                    : "bg-gray-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}
              onClick={() => handleAnswer(option)}
              disabled={isAnswered}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {/* Show correct answer after user selects */}
      {isAnswered && (
        <p className="mt-4 text-lg font-semibold text-yellow-300">
          ✅ Correct Answer: {question.correctAnswer}
        </p>
      )}
    </div>
  );
};

export default QuestionScreen;
