import React, { useRef, useEffect, useState, useCallback } from "react";

const questions = [
  {
    question: "What is the first habit of highly effective people?",
    options: ["Be Proactive", "Think Win-Win", "Sharpen the Saw", "Synergize"],
    answer: "Be Proactive",
  },
  {
    question: "Who wrote 'The 7 Habits of Highly Effective People'?",
    options: ["Stephen Covey", "Dale Carnegie", "Tony Robbins", "Simon Sinek"],
    answer: "Stephen Covey",
  },
  {
    question: "What does 'Begin with the End in Mind' mean?",
    options: [
      "Think about consequences",
      "Plan your goals ahead",
      "Start working immediately",
      "Follow others' paths",
    ],
    answer: "Plan your goals ahead",
  },
];

const Game = () => {
  const canvasRef = useRef(null);
  const [gameRunning, setGameRunning] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const playerY = useRef(150);
  const velocity = useRef(0);
  const obstacles = useRef([]);
  const animationFrameId = useRef(null);
  const lastFrameTime = useRef(performance.now());
  const startBuffer = useRef(200);

  // Game constants
  const GRAVITY = 0.3;
  const JUMP_POWER = -7;
  const OBSTACLE_SPEED = 2;
  const CANVAS_WIDTH = 320;
  const CANVAS_HEIGHT = 480;

  const drawScene = useCallback((ctx) => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    ctx.fillStyle = "blue";
    ctx.fillRect(50, playerY.current, 30, 30);

    ctx.fillStyle = "red";
    obstacles.current.forEach((obstacle) => {
      ctx.fillRect(obstacle.x, obstacle.y, 40, 100);
    });
  }, []);

  const updateGameState = useCallback(
    (deltaTime) => {
      if (startBuffer.current > 0 || showQuestion) {
        startBuffer.current--;
        return;
      }

      velocity.current += GRAVITY * (deltaTime / 16.67);
      playerY.current = Math.min(
        playerY.current + velocity.current,
        CANVAS_HEIGHT - 30
      );

      obstacles.current.forEach((obstacle) => {
        obstacle.x -= OBSTACLE_SPEED * (deltaTime / 16.67);

        if (
          50 < obstacle.x + 40 &&
          50 + 30 > obstacle.x &&
          playerY.current + 30 > obstacle.y
        ) {
          setGameRunning(false);
        }
      });

      obstacles.current = obstacles.current.filter(
        (obstacle) => obstacle.x > -40
      );

      if (obstacles.current.length < 2) {
        const isImpossibleWall = Math.random() < 0.1;
        if (isImpossibleWall) {
          setShowQuestion(true);
          setCurrentQuestion(
            questions[Math.floor(Math.random() * questions.length)]
          );
        } else {
          obstacles.current.push({
            x: CANVAS_WIDTH,
            y: Math.random() * (CANVAS_HEIGHT - 100),
          });
          setScore((prevScore) => prevScore + 1);
        }
      }
    },
    [showQuestion]
  );

  const gameLoop = useCallback(
    (timestamp) => {
      const deltaTime = timestamp - lastFrameTime.current;
      lastFrameTime.current = timestamp;

      if (!gameRunning) return;

      const ctx = canvasRef.current.getContext("2d");

      updateGameState(deltaTime);
      drawScene(ctx);

      animationFrameId.current = requestAnimationFrame(gameLoop);
    },
    [gameRunning, drawScene, updateGameState]
  );

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    obstacles.current = [{ x: 400, y: 200 }];

    animationFrameId.current = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animationFrameId.current);
  }, [gameLoop]);

  const handleJump = useCallback(() => {
    if (gameRunning && !showQuestion) velocity.current = JUMP_POWER;
  }, [gameRunning, showQuestion]);

  const handleAnswer = (answer) => {
    if (answer === currentQuestion.answer) {
      setShowQuestion(false);
      setScore((prevScore) => prevScore + 5);
    } else {
      setGameRunning(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Flappy Quiz Game</h1>
      <p className="text-lg font-semibold">Score: {score}</p>
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        className="border border-white mt-2"
      />
      {!showQuestion && (
        <button
          onClick={handleJump}
          className="mt-8 px-20 py-10 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 text-center font-semibold"
        >
          Jump
        </button>
      )}
      {!gameRunning && (
        <p className="text-red-500 mt-4 text-center">
          Game Over! Refresh to Restart.
        </p>
      )}
      {showQuestion && (
        <div className="mt-4 bg-white text-black p-4 rounded-lg shadow-lg w-full max-w-xs">
          <p className="text-lg font-semibold text-center">
            {currentQuestion.question}
          </p>
          <div className="mt-2 space-y-2">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="block w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 text-center"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
