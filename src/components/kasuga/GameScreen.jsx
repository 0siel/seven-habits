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
  const playerY = useRef(150);
  const velocity = useRef(0);
  const obstacles = useRef([]);
  const animationFrameId = useRef(null);
  const lastFrameTime = useRef(performance.now());
  const startBuffer = useRef(200);

  // Game constants
  const GRAVITY = 0.4;
  const JUMP_POWER = -8;
  const OBSTACLE_SPEED = 3;
  const CANVAS_WIDTH = 500;
  const CANVAS_HEIGHT = 400;

  const drawScene = useCallback((ctx) => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    ctx.fillStyle = "blue";
    ctx.fillRect(50, playerY.current, 30, 30);

    ctx.fillStyle = "red";
    obstacles.current.forEach((obstacle) => {
      ctx.fillRect(obstacle.x, obstacle.y, 40, 200);
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
        const isImpossibleWall = Math.random() < 0.3; // 30% chance to trigger a question
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
    } else {
      setGameRunning(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Flappy Quiz Game</h1>
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        className="border border-white"
      />
      {!showQuestion && (
        <button
          onClick={handleJump}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700"
        >
          Jump
        </button>
      )}
      {!gameRunning && (
        <p className="text-red-500 mt-4">Game Over! Refresh to Restart.</p>
      )}
      {showQuestion && (
        <div className="mt-4 bg-white text-black p-4 rounded-lg shadow-lg">
          <p className="text-lg font-semibold">{currentQuestion.question}</p>
          <div className="mt-2 space-y-2">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="block w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700"
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
