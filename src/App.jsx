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
import ParetoMenuScreen from "./components/pareto/pages/Menu";
import ProblemSolver from "./components/pareto/solver/ProblemSolver";
import Foda from "./components/pareto/library/Foda";
import SixHats from "./components/pareto/library/SixHats";
import CATWDA from "./components/pareto/library/CATWDA";
import Pigmalion from "./components/pareto/library/Pigmalion"
import SolverPage from "./components/pareto/pages/SolverPage";
import LibraryDashboardPage from "./components/pareto/pages/LibraryDashboardPage";
import ToolLibrary from "./components/pareto/library/ToolLibrary";
import LibraryDashboard from "./components/pareto/library/LibraryDashboard";

{/* Empresarios imports */ }
import MenuScreen from "./components/empresarios/Menu";
import TablaScreen from "./components/empresarios/Tabla";
import PerfectoScreen from "./components/empresarios/Perfecto";
import WomenITScreen from "./components/empresarios/Womenit";

{/* Books imports */ }
import Menu from "./components/libros/Menu";
import BooksIntro from "./components/libros/Intro";
import Books from "./components/libros/Libros";
import Adventure from "./components/libros/Adventure";


{/* Tech power imports */ }
import MindMap from "./components/faang/MindMap";


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
          <Route path="pareto/solver" element={<SolverPage />} />
          
          <Route path="pareto/tools" element={<ToolLibrary />} /> 
          <Route path="pareto/library" element={<LibraryDashboardPage />} />

          {/* Tech power routes */}
          <Route path="faang/mindmap" element={<MindMap />}
          />


          {/* Empresarios routes */}
          <Route path="empresarios/menu" element={<MenuScreen />} />
          <Route path="empresarios/tabla" element={<TablaScreen />} />
          <Route path="empresarios/perfecto" element={<PerfectoScreen />} />
          <Route path="empresarios/womenit" element={<WomenITScreen />} />

          {/* Books routes */}
          <Route path="books" element={<Menu />} />
          <Route path="books/intro" element={<BooksIntro />} />
          <Route path="books/cards" element={<Books />} />
          <Route path="books/adventure" element={<Adventure />} />
          

        </Routes>

      </div>
    </Router>
  );
}

export default App;
