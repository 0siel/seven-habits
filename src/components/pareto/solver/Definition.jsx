import { useState } from "react";

export default function Definition({ problemName, setProblemName, causes, setCauses, nextStep }) {
  const [causeInput, setCauseInput] = useState("");

  const addCause = () => {
    if (causeInput.trim() !== "") {
      setCauses([...causes, { name: causeInput, score: 1 }]);
      setCauseInput(""); 
    }
  };

  const removeCause = (index) => {
    setCauses(causes.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <input
        type="text"
        value={problemName}
        onChange={(e) => setProblemName(e.target.value)}
        placeholder="Problem name"
        className="border p-2 w-full"
      />

      <input
        type="text"
        value={causeInput}
        onChange={(e) => setCauseInput(e.target.value)}
        placeholder="Write to add a cause"
        className="bg-blue-600 text-white italic p-2 w-full"
      />

      <button onClick={addCause} className="bg-yellow-400 text-black p-2 w-full">
        Add cause
      </button>

      <button onClick={nextStep} className="bg-green-500 text-white p-2 w-full">
        Continue
      </button>

      <p className="italic text-gray-500">Tap any cause to delete it</p>

      <div className="w-full">
        {causes.map((cause, index) => (
          <button 
            key={index} 
            onClick={() => removeCause(index)} 
            className="bg-blue-600 text-white p-2 w-full my-1"
          >
            {cause.name}
          </button>
        ))}
      </div>
    </div>
  );
}
