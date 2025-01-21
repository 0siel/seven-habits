import React from "react";

function IntroScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-3xl font-semibold mb-6">
        The 7 Habits of Highly Effective People
      </h1>
      <img
        src="/path-to-image.jpg"
        alt="7 Habits"
        className="w-1/2 mb-6 rounded-lg shadow-lg"
      />
      <p className="text-lg px-6">
        Discover how these principles can help you achieve your personal and
        professional goals.
      </p>
    </div>
  );
}

export default IntroScreen;
