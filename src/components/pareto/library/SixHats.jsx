import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToolData } from "../../../context/ToolDataContext";  // Import context

const SixHats = () => {
  const navigate = useNavigate();
  const { updateToolData, toolData } = useToolData();  // Access global state

  // Form state for each hat
  const [form, setForm] = useState({
    white: "",
    red: "",
    black: "",
    yellow: "",
    green: "",
    blue: ""
  });

  // Prefill with saved data if it exists (when user navigates back)
  useEffect(() => {
    setForm(toolData.sixHats);
  }, [toolData.sixHats]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateToolData("sixHats", form);  // Save to global state
    navigate("/pareto/catwda");       // Move to the next tool
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Los Seis Sombreros para Pensar
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Método de Edward de Bono para mejorar el pensamiento y la toma de decisiones. Cada sombrero representa un estilo de pensamiento.
      </p>

      {/* Image */}
      <div className="flex justify-center mb-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Six_Thinking_Hats.png/600px-Six_Thinking_Hats.png"
          alt="Los Seis Sombreros para Pensar"
          className="rounded-lg shadow-lg w-full max-w-md"
        />
      </div>

      {/* Hat Descriptions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { color: "gray", name: "white", title: "Sombrero Blanco", description: "Datos y hechos objetivos." },
          { color: "red", name: "red", title: "Sombrero Rojo", description: "Emociones e intuición." },
          { color: "black", name: "black", title: "Sombrero Negro", description: "Pensamiento crítico y cauteloso." },
          { color: "yellow", name: "yellow", title: "Sombrero Amarillo", description: "Pensamiento positivo y optimismo." },
          { color: "green", name: "green", title: "Sombrero Verde", description: "Creatividad e innovación." },
          { color: "blue", name: "blue", title: "Sombrero Azul", description: "Control y organización del proceso." }
        ].map(({ color, name, title, description }) => (
          <div key={name} className={`p-4 border-2 border-${color}-500 rounded-lg shadow-md bg-${color}-50`}>
            <h3 className={`text-xl font-semibold text-${color}-700`}>{title}</h3>
            <p className="text-gray-700 mt-2">{description}</p>
          </div>
        ))}
      </div>

      {/* User Input Form */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow">
        <h3 className="text-lg font-semibold">Tu análisis personal con los Seis Sombreros</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {["white", "red", "black", "yellow", "green", "blue"].map((hat) => (
            <div key={hat}>
              <label className="block capitalize">{`Sombrero ${hat}`}</label>
              <textarea
                name={hat}
                value={form[hat]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Guardar y Continuar
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          className="bg-white text-black px-4 py-2 rounded-lg"
          onClick={() => navigate("/pareto/foda")}
        >
          FODA
        </button>
        <button
          onClick={handleSave}
          className="bg-white text-black px-4 py-2 rounded-lg"
        >
          CATWDA
        </button>
      </div>
    </div>
  );
};

export default SixHats;
