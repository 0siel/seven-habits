import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
{
  /* General imports */
}
import WelcomeScreen from "./components/WelcomeScreen";
import AuthorScreen from "./components/AuthorScreen";
{
  /* Seven imports */
}
import SevenMenuScreen from "./components/seven/MenuScreen";
import IntroScreen from "./components/seven/IntroScreen";
import GameScreen from "./components/seven/GameScreen";
import MemoryGame from "./components/seven/MemoryGame";

{
  /* Kasuga imports */
}

import KasugaExplanationScreen from "./components/kasuga/ExplanationScreen";

import KasugaGameScreen from "./components/kasuga/GameScreen";

import KasugaMenuScreen from "./components/kasuga/MenuScreen";

import Flappy from "./components/flappy/Flappy";
import DeepSeek from "./components/kasuga/DeepSeek";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/author" element={<AuthorScreen />} />
          {/* Seven routes */}
          <Route path="seven/menu" element={<SevenMenuScreen />} />
          <Route path="seven/intro" element={<IntroScreen />} />
          <Route path="seven/game" element={<GameScreen />} />
          <Route path="seven/memory" element={<MemoryGame />} />
          {/* Kasuga routes */}

          <Route path="kasuga/menu" element={<KasugaMenuScreen />} />

          <Route
            path="kasuga/explanation"
            element={<KasugaExplanationScreen />}
          />

          <Route path="kasuga/game" element={<Flappy />} />
          <Route path="kasuga/deepseek" element={<DeepSeek />} />

          <Route path="flappy" element={<Flappy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
