import React from "react";

const MultiplierSelection = ({ wealth, multipliers, onMultiplierSelect }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-semibold mb-4">Selecciona un Multiplicador</h2>
      <div className="grid grid-cols-3 gap-4">
        {multipliers.map((multiplier) => (
          <button
            key={multiplier.value}
            className={`px-4 py-2 rounded font-bold transition ${
              wealth >= multiplier.cost
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-500 cursor-not-allowed"
            }`}
            onClick={() => onMultiplierSelect(multiplier.value, multiplier.cost)}
            disabled={wealth < multiplier.cost}
          >
            x{multiplier.value} <br /> (${multiplier.cost.toLocaleString()})
          </button>
        ))}
      </div>
      <button
        className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded font-bold"
        onClick={() => onMultiplierSelect(1, 0)}
      >
        Continuar
      </button>
    </div>
  );
};

export default MultiplierSelection;