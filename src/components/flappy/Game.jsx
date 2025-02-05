import React, { useState, useEffect, useCallback } from "react";

// Fixed game dimensions for mobile devices
const GAME_WIDTH = 400;
const GAME_HEIGHT = 600;

// Constants for physics and obstacles
const GRAVITY = 0.6;
const JUMP = -10;
const OBSTACLE_WIDTH = 50;

const quizQuestions = [
  {
    question:
      "¿Qué concepto enfatiza la importancia de comprometerse primero con uno mismo antes de comprometerse con los demás?",
    options: [
      "Compromiso personal",
      "Valores y virtudes",
      "Bien Hacer",
      "Bien Tener",
    ],
    answer: "Compromiso personal",
  },
  {
    question: "¿Cuál de los siguientes valores NO se menciona en la charla?",
    options: ["Humildad", "Honestidad", "Responsabilidad", "Respeto"],
    answer: "Humildad",
  },
  {
    question: "¿Por qué es crucial el compromiso personal?",
    options: [
      "Porque establece una base sólida para nuestras acciones y decisiones",
      "Porque ayuda a conseguir más dinero",
      "Porque mejora nuestra apariencia",
      "Porque evita problemas en la sociedad",
    ],
    answer:
      "Porque establece una base sólida para nuestras acciones y decisiones",
  },
  {
    question:
      "¿Qué concepto guía nuestro comportamiento y ayuda a tomar decisiones éticas?",
    options: [
      "Valores y virtudes",
      "Bien Tener",
      "Compromiso personal",
      "Bien Estar",
    ],
    answer: "Valores y virtudes",
  },
  {
    question:
      "¿Cuál de los siguientes NO es un principio mencionado en la charla?",
    options: ["Bien Actuar", "Bien Ser", "Bien Hacer", "Bien Tener"],
    answer: "Bien Actuar",
  },
  {
    question: "¿Cómo se puede implementar el compromiso personal?",
    options: [
      "Reflexionando sobre los valores y estableciendo metas alineadas con ellos",
      "Esperando a que otros nos guíen",
      "Siguiendo siempre lo que hacen los demás",
      "Tomando decisiones sin pensar en las consecuencias",
    ],
    answer:
      "Reflexionando sobre los valores y estableciendo metas alineadas con ellos",
  },
  {
    question:
      "¿Qué principio enfatiza la excelencia en la realización de tareas?",
    options: ["Bien Hacer", "Bien Ser", "Bien Estar", "Bien Tener"],
    answer: "Bien Hacer",
  },
  {
    question:
      "¿En qué aspectos de la vida se deben implementar estos principios?",
    options: [
      "En el hogar, el trabajo, la comunidad y relaciones personales",
      "Solo en el trabajo",
      "Solo en la comunidad",
      "Solo en la vida personal",
    ],
    answer: "En el hogar, el trabajo, la comunidad y relaciones personales",
  },
  {
    question: "¿Cómo se pueden inculcar valores y virtudes en los demás?",
    options: [
      "Practicándolos en nuestras interacciones y educando a los jóvenes",
      "Diciéndole a los demás qué hacer sin dar ejemplo",
      "Evadiendo la responsabilidad de enseñar valores",
      "Solo promoviendo reglas estrictas sin explicaciones",
    ],
    answer: "Practicándolos en nuestras interacciones y educando a los jóvenes",
  },
  {
    question:
      "¿Qué principio está relacionado con el bienestar físico y mental?",
    options: ["Bien Estar", "Bien Tener", "Bien Hacer", "Bien Ser"],
    answer: "Bien Estar",
  },
];

const Game = () => {
  // Fixed game dimensions for reference
  const GAME_AREA = { width: GAME_WIDTH, height: GAME_HEIGHT };

  // Calculate the obstacle gap as 30% of the game height
  const OBSTACLE_GAP = GAME_AREA.height * 0.3;

  // Game state
  const [birdY, setBirdY] = useState(200);
  const [velocity, setVelocity] = useState(0);
  const [obstacles, setObstacles] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Quiz state
  const [quizActive, setQuizActive] = useState(false);
  const [quiz, setQuiz] = useState(null);

  // Initialize obstacles on mount
  useEffect(() => {
    // Create one obstacle off to the right
    setObstacles([
      {
        x: GAME_AREA.width,
        height: Math.random() * (GAME_AREA.height - OBSTACLE_GAP),
      },
    ]);
  }, [GAME_AREA.height, GAME_AREA.width, OBSTACLE_GAP]);

  // Handle jump button press
  const handleJump = useCallback(() => {
    if (!gameOver && !quizActive) {
      setVelocity(JUMP);
    }
  }, [gameOver, quizActive]);

  // Function to check collision between two rectangles
  const isColliding = (rect1, rect2) => {
    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y
    );
  };

  // Handle quiz answer selection
  const handleQuizAnswer = (option) => {
    if (option === quiz.answer) {
      // Correct answer: dismiss quiz and resume game
      setQuizActive(false);
      setQuiz(null);
    } else {
      // Incorrect answer: game over
      setQuizActive(false);
      setQuiz(null);
      setGameOver(true);
    }
  };

  // Restart the game
  const restartGame = () => {
    setBirdY(200);
    setVelocity(0);
    setObstacles([
      {
        x: GAME_AREA.width,
        height: Math.random() * (GAME_AREA.height - OBSTACLE_GAP),
      },
    ]);
    setGameOver(false);
    setScore(0);
    setQuizActive(false);
    setQuiz(null);
  };

  // Main game loop
  useEffect(() => {
    if (gameOver || quizActive) return; // Pause loop if game is over or quiz is active

    const gameLoop = setInterval(() => {
      // Update bird position and velocity
      setBirdY((prevBirdY) =>
        Math.min(Math.max(prevBirdY + velocity, 0), GAME_AREA.height - 30)
      );
      setVelocity((prevVelocity) => prevVelocity + GRAVITY);

      // Move obstacles to the left
      setObstacles((prevObstacles) =>
        prevObstacles.map((obstacle) => ({ ...obstacle, x: obstacle.x - 5 }))
      );

      // Recycle obstacles that have moved off screen
      setObstacles((prevObstacles) => {
        const firstObstacle = prevObstacles[0];
        if (firstObstacle && firstObstacle.x < -OBSTACLE_WIDTH) {
          setScore((prevScore) => {
            const newScore = prevScore + 1;
            // Trigger a quiz every 3 points
            if (newScore % 3 === 0) {
              const randomQuiz =
                quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
              setQuiz(randomQuiz);
              setQuizActive(true);
            }
            return newScore;
          });
          return [
            ...prevObstacles.slice(1),
            {
              x: GAME_AREA.width,
              height: Math.random() * (GAME_AREA.height - OBSTACLE_GAP),
            },
          ];
        }
        return prevObstacles;
      });

      // Collision detection for the bird
      const birdRect = { x: 100, y: birdY, width: 30, height: 30 };
      const collision = obstacles.some((obstacle) => {
        const obstacleRectTop = {
          x: obstacle.x,
          y: 0,
          width: OBSTACLE_WIDTH,
          height: obstacle.height,
        };
        const obstacleRectBottom = {
          x: obstacle.x,
          y: obstacle.height + OBSTACLE_GAP,
          width: OBSTACLE_WIDTH,
          height: GAME_AREA.height - obstacle.height - OBSTACLE_GAP,
        };
        return (
          isColliding(birdRect, obstacleRectTop) ||
          isColliding(birdRect, obstacleRectBottom)
        );
      });

      if (collision || birdY >= GAME_AREA.height - 30) {
        setGameOver(true);
      }
    }, 20);

    return () => clearInterval(gameLoop);
  }, [
    birdY,
    velocity,
    obstacles,
    gameOver,
    quizActive,
    GAME_AREA.height,
    GAME_AREA.width,
    OBSTACLE_GAP,
  ]);

  return (
    <div
      className="relative bg-blue-400 overflow-hidden mx-auto"
      style={{ width: GAME_AREA.width, height: GAME_AREA.height }}
    >
      {/* The Bird */}
      <div
        className="absolute bg-yellow-400 rounded-full"
        style={{
          width: "30px",
          height: "30px",
          top: birdY,
          left: "100px",
        }}
      ></div>

      {/* Obstacles */}
      {obstacles.map((obstacle, index) => (
        <React.Fragment key={index}>
          {/* Top obstacle */}
          <div
            className="absolute bg-green-600"
            style={{
              top: 0,
              left: obstacle.x,
              width: OBSTACLE_WIDTH,
              height: obstacle.height,
            }}
          ></div>
          {/* Bottom obstacle */}
          <div
            className="absolute bg-green-600"
            style={{
              top: obstacle.height + OBSTACLE_GAP,
              left: obstacle.x,
              width: OBSTACLE_WIDTH,
              height: GAME_AREA.height - obstacle.height - OBSTACLE_GAP,
            }}
          ></div>
        </React.Fragment>
      ))}

      {/* Score display */}
      {!gameOver && !quizActive && (
        <div className="absolute top-4 left-4 text-white text-2xl">
          Score: {score}
        </div>
      )}

      {/* Jump button */}
      <button
        className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded ${
          gameOver || quizActive
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-yellow-500"
        }`}
        onClick={handleJump}
        disabled={gameOver || quizActive}
      >
        Jump
      </button>

      {/* Quiz Modal */}
      {quizActive && quiz && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 text-white p-4">
          <h2 className="text-2xl mb-4 text-center">{quiz.question}</h2>
          <div className="flex flex-col gap-2">
            {quiz.options.map((option, idx) => (
              <button
                key={idx}
                className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => handleQuizAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm">
            Answer correctly to continue, or the game will end.
          </p>
        </div>
      )}

      {/* Game Over Modal */}
      {gameOver && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 text-white">
          <h1 className="text-4xl mb-4">Game Over</h1>
          <p className="text-2xl mb-4">Score: {score}</p>
          <button
            className="bg-red-500 px-4 py-2 rounded"
            onClick={restartGame}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
