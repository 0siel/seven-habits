import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToolData } from "../../../context/ToolDataContext";  // Import global state hook

const CATWDA = () => {
  const navigate = useNavigate();
  const { updateToolData, toolData } = useToolData();  // Access global data

  // Local state for form
  const [form, setForm] = useState({
    customers: "",
    actors: "",
    transformation: "",
    worldview: "",
    owner: "",
    environment: "",
  });

  // Load saved data if available
  useEffect(() => {
    setForm(toolData.catwda);
  }, [toolData.catwda]);

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Save and navigate
  const handleSave = () => {
    updateToolData("catwda", form);  // Save to context
    navigate("/pareto/solver");      // Go to solver or next step
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Metodología CATWDA
      </h2>
      <p className="text-center text-gray-600 mb-6">
        La metodología <strong>CATWDA</strong> permite formular una 
        <strong> definición raíz </strong> al identificar los elementos clave dentro de 
        la <strong>Metodología de Sistemas Blandos (SSM)</strong> de <strong>Peter Checkland</strong>.
      </p>

      {/* Explanation Sections (same as you provided) */}
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-blue-700">¿Qué es el SSM?</h3>
        <p className="text-gray-700">
          Técnica cualitativa para abordar problemas situacionales con alto componente social, 
          político y humano. Enfocada en **sistemas no estructurados**.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Los 6 Elementos de CATWDA
      </h3>

      {/* Grid of CATWDA Elements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Clientes", color: "green", description: "Beneficiarios del sistema." },
          { name: "Actores", color: "blue", description: "Quienes ejecutan el sistema." },
          { name: "Transformación", color: "yellow", description: "Proceso de cambio de entrada a salida." },
          { name: "Weltanschauung", color: "purple", description: "Visión del mundo que da contexto." },
          { name: "Dueños", color: "red", description: "Quienes controlan el sistema." },
          { name: "Ambiente", color: "gray", description: "Factores externos que influyen." }
        ].map(({ name, color, description }) => (
          <div key={name} className={`p-4 border-2 border-${color}-500 rounded-lg shadow-md bg-${color}-50`}>
            <h3 className={`text-xl font-semibold text-${color}-700`}>{name}</h3>
            <p className="text-gray-700 mt-2">{description}</p>
          </div>
        ))}
      </div>

      {/* User Input Form */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow">
        <h3 className="text-lg font-semibold">Tu Análisis CATWDA Personal</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {["customers", "actors", "transformation", "worldview", "owner", "environment"].map((field) => (
            <div key={field}>
              <label className="block capitalize">{field}</label>
              <textarea
                name={field}
                value={form[field]}
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
          className="bg-white text-black px-4 py-2 rounded-lg mr-4"
          onClick={() => navigate("/pareto/sixhats")}
        >
          Seis Sombreros 🎩
        </button>
        <button
          onClick={handleSave}
          className="bg-white text-black px-4 py-2 rounded-lg"
        >
          Resolve-inator
        </button>
      </div>
    </div>
  );
};

export default CATWDA;
