import react from 'react';
import { useNavigate } from 'react-router-dom';

export default function ParetoExplanation() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-4 w-full max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold">Pareto Principle</h2>
      <p className="text-lg font-bold">80% of the effects come from 20% of the causes</p>
      <p className="italic text-gray-600">Identify the most important causes</p>
      <button
        onClick={() => navigate("/pareto/solver")}
        className="w-full p-2 bg-green-500 font-bold rounded-md"
      >
        Start
      </button>
    </div>
  );
}