import React, { useState, useEffect, useCallback } from "react";
// import "./App.css"; // Make sure to import your CSS for Tailwind

const GRAVITY = 0.6;
const JUMP = -10;
const OBSTACLE_WIDTH = 50;
const OBSTACLE_GAP = 200;

const Game = () => {
  const [birdY, setBirdY] = useState(200);
  const [velocity, setVelocity] = useState(0);
  const [obstacles, setObstacles] = useState([{ x: 1000, height: 300 }]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleJump = useCallback(() => {
    if (!gameOver) {
      setVelocity(JUMP);
    }
  }, [gameOver]);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setBirdY((birdY) =>
        Math.min(Math.max(birdY + velocity, 0), window.innerHeight - 30)
      );
      setVelocity((velocity) => velocity + GRAVITY);

      // Move obstacles and generate new ones
      setObstacles((obstacles) =>
        obstacles.map((obstacle) => ({ ...obstacle, x: obstacle.x - 5 }))
      );

      if (obstacles[0].x < -OBSTACLE_WIDTH) {
        setObstacles((obstacles) => [
          ...obstacles.slice(1),
          {
            x: window.innerWidth,
            height: Math.random() * (window.innerHeight - OBSTACLE_GAP),
          },
        ]);
        setScore((score) => score + 1);
      }

      // Collision detection
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
          height: window.innerHeight - obstacle.height - OBSTACLE_GAP,
        };
        return (
          isColliding(birdRect, obstacleRectTop) ||
          isColliding(birdRect, obstacleRectBottom)
        );
      });

      if (collision || birdY >= window.innerHeight - 30) {
        setGameOver(true);
      }
    }, 20);

    return () => clearInterval(gameLoop);
  }, [birdY, velocity, obstacles, gameOver]);

  const isColliding = (rect1, rect2) => {
    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y
    );
  };

  const restartGame = () => {
    setBirdY(200);
    setVelocity(0);
    setObstacles([{ x: 400, height: 150 }]);
    setGameOver(false);
    setScore(0);
  };

  return (
    <div className="relative w-full h-screen bg-blue-400 overflow-hidden">
      <div
        className="absolute bg-yellow-400 h-8 w-8 rounded-full"
        style={{ top: birdY, left: "100px" }}
      ></div>
      {obstacles.map((obstacle, index) => (
        <React.Fragment key={index}>
          <div
            className="absolute bg-green-600"
            style={{
              top: 0,
              left: obstacle.x,
              width: OBSTACLE_WIDTH,
              height: obstacle.height,
            }}
          ></div>
          <div
            className="absolute bg-green-600"
            style={{
              top: obstacle.height + OBSTACLE_GAP,
              left: obstacle.x,
              width: OBSTACLE_WIDTH,
              height: window.innerHeight - obstacle.height - OBSTACLE_GAP,
            }}
          ></div>
        </React.Fragment>
      ))}
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
      <div className="absolute top-4 left-4 text-white text-2xl">
        Score: {score}
      </div>
      <button
        className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded ${
          gameOver ? "bg-gray-500 cursor-not-allowed" : "bg-yellow-500"
        }`}
        onClick={handleJump}
        disabled={gameOver}
      >
        Jump
      </button>
    </div>
  );
};

export default Game;
