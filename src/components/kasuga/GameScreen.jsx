import React, { useRef, useEffect, useState, useCallback } from "react";

const Game = () => {
  const canvasRef = useRef(null);
  const [gameRunning, setGameRunning] = useState(true);
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
    // Clear canvas efficiently
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw player
    ctx.fillStyle = "blue";
    ctx.fillRect(50, playerY.current, 30, 30);

    // Draw obstacles
    ctx.fillStyle = "red";
    obstacles.current.forEach((obstacle) => {
      ctx.fillRect(obstacle.x, obstacle.y, 40, 200);
    });
  }, []);

  const updateGameState = useCallback((deltaTime) => {
    if (startBuffer.current > 0) {
      startBuffer.current--;
      return;
    }

    // Update physics
    velocity.current += GRAVITY * (deltaTime / 16.67); // Normalize for frame rate
    playerY.current = Math.min(
      playerY.current + velocity.current,
      CANVAS_HEIGHT - 30
    );

    // Update obstacles
    obstacles.current.forEach((obstacle) => {
      obstacle.x -= OBSTACLE_SPEED * (deltaTime / 16.67);

      // Collision detection
      if (
        50 < obstacle.x + 40 &&
        50 + 30 > obstacle.x &&
        playerY.current + 30 > obstacle.y
      ) {
        setGameRunning(false);
      }
    });

    // Remove off-screen obstacles
    obstacles.current = obstacles.current.filter(
      (obstacle) => obstacle.x > -40
    );

    // Generate new obstacles
    if (obstacles.current.length < 2) {
      obstacles.current.push({
        x: CANVAS_WIDTH,
        y: Math.random() * (CANVAS_HEIGHT - 100),
      });
    }
  }, []);

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
    ctx.imageSmoothingEnabled = false; // Disable anti-aliasing for better performance

    // Initial obstacle
    obstacles.current = [{ x: 400, y: 200 }];

    animationFrameId.current = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animationFrameId.current);
  }, [gameLoop]);

  const handleJump = useCallback(() => {
    if (gameRunning) velocity.current = JUMP_POWER;
  }, [gameRunning]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Flappy Quiz Game</h1>
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        className="border border-white"
      />
      <button
        onClick={handleJump}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700"
      >
        Jump
      </button>
      {!gameRunning && (
        <p className="text-red-500 mt-4">Game Over! Refresh to Restart.</p>
      )}
    </div>
  );
};

export default Game;
