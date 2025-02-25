import { useState, useEffect } from "react";

export default function Assignment({ causes, setCauses, nextStep, prevStep, problemName }) {
  const [totalScore, setTotalScore] = useState(0);

  // Function to update cause score
  const updateScore = (index, newScore) => {
    const updatedCauses = [...causes];
    updatedCauses[index].score = newScore ? parseInt(newScore) : 0;

    // Sort causes from highest to lowest score
    updatedCauses.sort((a, b) => b.score - a.score);

    setCauses(updatedCauses);
  };

  // Recalculate total score whenever causes change
  useEffect(() => {
    setTotalScore(causes.reduce((sum, cause) => sum + cause.score, 0));
  }, [causes]);

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold">{causes.length > 0 ? "" : "No Causes Defined"}</h2>

      <button onClick={nextStep} className="bg-green-500 text-white p-2 w-full">
        Continue
      </button>

      <h3 className="text-lg font-semibold">Total score</h3>
      <p className="text-3xl font-bold">{totalScore}</p>

      <p className="italic text-gray-500">Assign a score for each cause</p>

      <div className="w-full">
        {causes.map((cause, index) => (
          <div key={index} className="flex items-center justify-between bg-blue-600 text-white p-2 my-1 w-full">
            <span>{cause.name}</span>
            <input
              type="number"
              value={cause.score}
              onChange={(e) => updateScore(index, e.target.value)}
              className="w-16 p-1 text-black text-center"
              min="0"
            />
          </div>
        ))}
      </div>

      <button onClick={prevStep} className="bg-gray-500 text-white p-2 w-full">
        Back
      </button>
    </div>
  );
}
