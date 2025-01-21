import React from "react";

function IntroScreen() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-b from-purple-500 via-blue-600 to-blue-800 text-white px-6 py-12">
      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-12 text-center">
        Introduction to Success Principles
      </h1>

      {/* 7 Habits Section */}
      <div className="flex flex-col items-center bg-white text-black rounded-lg shadow-lg mb-12 w-full md:w-3/4 lg:w-2/3 p-8">
        <h2 className="text-3xl font-semibold mb-4">
          The 7 Habits of Highly Effective People
        </h2>
        <img
          src="/placeholder-7-habits.jpg"
          alt="7 Habits"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <p className="text-lg">
          Learn how the 7 habits can transform your personal and professional
          life. These time-tested principles are designed to help you achieve
          success and fulfillment.
        </p>
      </div>

      {/* Divider */}
      <div className="w-20 h-1 bg-gray-300 rounded-full mb-12"></div>

      {/* 10 Principles Section */}
      <div className="flex flex-col items-center bg-white text-black rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 p-8">
        <h2 className="text-3xl font-semibold mb-4">
          The 10 Principles for Success
        </h2>
        <img
          src="/placeholder-10-principles.jpg"
          alt="10 Principles"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <p className="text-lg">
          Discover 10 actionable principles that will guide you toward achieving
          your greatest potential. Apply these strategies to unlock a new level
          of success.
        </p>
      </div>
    </div>
  );
}

export default IntroScreen;
