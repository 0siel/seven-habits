import React, { useState, useEffect } from "react";
import MultiplierSelection from "./MultiplierSelection";
import QuestionScreen from "./QuestionScreen";
import { useNavigate } from "react-router-dom";

const GameScreen = () => {
  const navigate = useNavigate();
  const [wealth, setWealth] = useState(10000);
  const [multiplier, setMultiplier] = useState(1);
  const [gameStage, setGameStage] = useState("multiplier");
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  // Fetch and shuffle questions
  useEffect(() => {
    fetch("/questions.json")
      .then((response) => response.json())
      .then((data) => {
        const shuffledQuestions = shuffleArray(data);
        setQuestions(shuffledQuestions);
      })
      .catch((error) => console.error("Error loading questions:", error));
  }, []);

  // Fisher-Yates Shuffle Algorithm to create a random order
  const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Handle multiplier selection
  const handleMultiplierSelection = (multiplierValue, cost) => {
    if (wealth >= cost) {
      setWealth(wealth - cost);
      setMultiplier(multiplierValue);
    }
    setGameStage("question");
  };

  // Handle answering the question
  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return;

    let newWealth = wealth;
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const questionValue = currentQuestion.price * multiplier;

    if (currentQuestion.type === "double") {
      newWealth = isCorrect ? wealth * 2 : 0;
    } else {
      newWealth = isCorrect ? wealth + questionValue : wealth - questionValue;
    }

    setWealth(newWealth);
    setMultiplier(1);

    // Move to next question or end game
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setGameStage("multiplier");
    } else {
      setIsGameOver(true);
    }
  };

  if (isGameOver) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <h1 className="text-3xl font-bold mb-4">🎉 Game Over!</h1>
        <p className="text-lg mb-6"> Your Money: ${wealth.toLocaleString()}</p>
        <button
          className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded font-bold"
          onClick={() => window.location.reload()}
        >
          Restart Game
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      {/* Preview/Next <-- / -->  buttons*/}
      <div>
        <button
          className="bg-white text-black px-4 py-2 rounded-lg mr-4"
          onClick={() => navigate("/wealthy/explanation")}
        >
          
        </button>
        <button
          onClick={() => navigate("/author")}
          className="bg-white text-black px-4 py-2 rounded-lg"
        >
          
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-4">Quiz Game</h1>
      <p className="text-lg mb-6">Money: ${wealth.toLocaleString()}</p>

      {gameStage === "multiplier" && (
        <MultiplierSelection
          wealth={wealth}
          multipliers={[
            { value: 2, cost: 5000 },
            { value: 5, cost: 10000 },
            { value: 10, cost: 20000 }
          ]}
          onMultiplierSelect={handleMultiplierSelection}
        />
      )}

      {gameStage === "question" && questions.length > 0 && (
        <QuestionScreen
          question={questions[currentQuestionIndex]}
          type={questions[currentQuestionIndex].type}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default GameScreen;
