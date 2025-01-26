import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuScreen from "./components/MenuScreen";
import IntroScreen from "./components/IntroScreen";
import GameScreen from "./components/GameScreen";
import AuthorScreen from "./components/AuthorScreen";
import MemoryGame from "./components/MemoryGame";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/menu" element={<MenuScreen />} />
          <Route path="/intro" element={<IntroScreen />} />
          <Route path="/game" element={<GameScreen />} />
          <Route path="/author" element={<AuthorScreen />} />
          <Route path="/memory" element={<MemoryGame />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
