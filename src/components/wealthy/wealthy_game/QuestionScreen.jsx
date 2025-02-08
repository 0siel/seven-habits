import React, { useState } from "react";

const QuestionScreen = ({ question, type, onAnswer }) => {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Question</h2>
      <p className="mb-6">{question.question}</p>

      {type === "regular" && (
        <div className="grid grid-cols-1 gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-bold transition"
              onClick={() => onAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {type === "blind" && (
        <div className="mt-4">
          <input
            type="text"
            className="w-full p-2 text-black rounded"
            placeholder="Enter your answer..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-bold"
            onClick={() => onAnswer(userInput)}
          >
            Submit Answer
          </button>
        </div>
      )}

      {type === "double" && (
        <div className="grid grid-cols-1 gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded font-bold transition"
              onClick={() => onAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionScreen;