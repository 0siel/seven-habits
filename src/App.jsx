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

{
  /*
  import { ExplanationScreen as KasugaExplanationScreen } from "./components/kasuga/ExplanationScreen";




import { GameScreen as KasugaGameScreen } from "./components/kasuga/GameScreen";

import { MenuScreen as KasugaMenuScreen } from "./components/seven/MenuScreen";

*/
}

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

          {/*

          <Route path="kasuga/menu" element={<KasugaMenuScreen />} />

          <Route
            path="kasuga/explanation"
            element={<KasugaExplanationScreen />}
          />
          
          <Route path="kasuga/game" element={<KasugaGameScreen />} />

          */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
