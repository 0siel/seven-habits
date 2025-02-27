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

{
  /* Wealthy */
}
import WealthyMenuScreen from "./components/wealthy/Menu";
import WealthyGame from "./components/wealthy/wealthy_game/WealthyGame";
import WealthyExplanation from "./components/wealthy/Explanation";

{/* Pareto imports */ }
import ParetoMenuScreen from "./components/pareto/Menu";
import ParetoExplanation from "./components/pareto/Explanation";
import ProblemSolver from "./components/pareto/solver/ProblemSolver";
import Foda from "./components/pareto/Foda";
import SixHats from "./components/pareto/SixHats";
import CATWDA from "./components/pareto/CATWDA";
import Pigmalion from "./components/pareto/Pigmalion"


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
          {/*Wealthy routes */}
          <Route path="wealthy/explanation" element={<WealthyExplanation />} />
          <Route path="wealthy/game" element={<WealthyGame />} />
          <Route path="wealthy/menu" element={<WealthyMenuScreen />} />

          {/* Pareto routes */}
          <Route path="pareto/menu" element={<ParetoMenuScreen />} />
          <Route path="pareto/solver" element={<ProblemSolver />} />
          <Route path="pareto/foda" element={<Foda />} />
          <Route path="pareto/sixhats" element={<SixHats />} />
          <Route path="pareto/catwda" element={<CATWDA />} />
          <Route path="pareto/foda" element={<Foda />} />
          <Route path="pareto/pigmalion" element={<Pigmalion />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
