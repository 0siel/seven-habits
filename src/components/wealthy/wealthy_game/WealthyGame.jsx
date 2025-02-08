import React, { useState } from "react";
import MultiplierSelection from "./MultiplierSelection";
import QuestionScreen from "./QuestionScreen";
import WealthyGame from "../WealthyGame";

const WealthyGame = () => {
  // Initial wealth
  const [wealth, setWealth] = useState(10000);
  const [multiplier, setMultiplier] = useState(1); // Default: No multiplier
  const [gameStage, setGameStage] = useState("multiplier"); // 'multiplier' -> 'question' -> 'result'
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [questionType, setQuestionType] = useState("regular");

  // Available questions (this could be fetched from an API)
  const questions = [
    { id: 1, type: "regular", question: "What is 2 + 2?", options: ["3", "4", "5"], correctAnswer: "4", price: 5000 },
    { id: 2, type: "blind", question: "What is the capital of France?", options: ["London", "Paris", "Rome"], correctAnswer: "Paris", price: 7000 },
    { id: 3, type: "double", question: "Who discovered gravity?", options: ["Newton", "Einstein", "Tesla"], correctAnswer: "Newton", price: 0 }
  ];

  // Multiplier options
  const multipliers = [
    { value: 2, cost: 10000 },
    { value: 5, cost: 5000 },
    { value: 10, cost: 10000 }
  ];

  // Select a random question
  const getRandomQuestion = () => {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    setCurrentQuestion(randomQuestion);
    setQuestionType(randomQuestion.type);
  };

  // Handle multiplier selection
  const handleMultiplierSelection = (multiplierValue, cost) => {
    if (wealth >= cost) {
      setWealth(wealth - cost);
      setMultiplier(multiplierValue);
    }
    setGameStage("question");
    getRandomQuestion();
  };

  // Handle answering the question
  const handleAnswer = (selectedAnswer) => {
    if (!currentQuestion) return;

    let newWealth = wealth;
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const questionValue = currentQuestion.price * multiplier;

    if (questionType === "double") {
      newWealth = isCorrect ? wealth * 2 : 0;
    } else {
      newWealth = isCorrect ? wealth + questionValue : wealth - questionValue;
    }

    setWealth(newWealth);
    setGameStage("multiplier"); // Restart after answering
    setMultiplier(1); // Reset multiplier
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Quiz Game</h1>
      <p className="text-lg mb-6">Current Wealth: ${wealth.toLocaleString()}</p>

      {gameStage === "multiplier" && (
        <MultiplierSelection
          wealth={wealth}
          multipliers={multipliers}
          onMultiplierSelect={handleMultiplierSelection}
        />
      )}

      {gameStage === "question" && currentQuestion && (
        <QuestionScreen question={currentQuestion} type={questionType} onAnswer={handleAnswer} />
      )}
    </div>
  );
};

export default WealthyGame;