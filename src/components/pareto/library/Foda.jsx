import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToolData } from "../../../context/ToolDataContext";  // Import the context

const Foda = () => {
  const navigate = useNavigate();
  const { updateToolData, toolData } = useToolData();

  const [form, setForm] = useState({
    strengths: '',
    opportunities: '',
    weaknesses: '',
    threats: ''
  })

  // Prefill if data exists
  useEffect(() => {
    setForm(toolData.foda)
  }, [toolData.foda])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    updateToolData('foda', form)  // Save to global context
    navigate("/pareto/sixhats")  // Continue to next
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Existing FODA content */}
      <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Análisis FODA
      </h2>
      <p className="text-center text-gray-600 mb-6">
        El Análisis FODA (SWOT en inglés) es una herramienta estratégica para evaluar las 
        **Fortalezas**, **Oportunidades**, **Debilidades** y **Amenazas** de un negocio o proyecto.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fortalezas */}
        <div className="p-4 border-2 border-green-500 rounded-lg shadow-md bg-green-50">
          <h3 className="text-xl font-semibold text-green-700">Fortalezas</h3>
          <p className="text-gray-700 mt-2">
            Son los aspectos internos positivos que diferencian a la empresa de la competencia.
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Reputación de marca</li>
            <li>Clientes leales</li>
            <li>Recursos financieros sólidos</li>
          </ul>
        </div>

        {/* Oportunidades */}
        <div className="p-4 border-2 border-blue-500 rounded-lg shadow-md bg-blue-50">
          <h3 className="text-xl font-semibold text-blue-700">Oportunidades</h3>
          <p className="text-gray-700 mt-2">
            Factores externos que pueden beneficiar el crecimiento del negocio.
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Nuevas tendencias de mercado</li>
            <li>Crecimiento de la demanda</li>
            <li>Avances tecnológicos</li>
          </ul>
        </div>

        {/* Debilidades */}
        <div className="p-4 border-2 border-yellow-500 rounded-lg shadow-md bg-yellow-50">
          <h3 className="text-xl font-semibold text-yellow-700">Debilidades</h3>
          <p className="text-gray-700 mt-2">
            Factores internos que pueden representar obstáculos o desventajas.
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Falta de recursos</li>
            <li>Baja presencia digital</li>
            <li>Falta de innovación</li>
          </ul>
        </div>

        {/* Amenazas */}
        <div className="p-4 border-2 border-red-500 rounded-lg shadow-md bg-red-50">
          <h3 className="text-xl font-semibold text-red-700">Amenazas</h3>
          <p className="text-gray-700 mt-2">
            Factores externos que pueden afectar negativamente el negocio.
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Competencia agresiva</li>
            <li>Inestabilidad económica</li>
            <li>Cambios en regulaciones</li>
          </ul>
        </div>
      </div>

      {/* Preview/Next <-- / -->  buttons*/}

    </div>

      {/* New Form Section */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold">Tu Análisis FODA Personal</h3>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {['strengths', 'opportunities', 'weaknesses', 'threats'].map((field) => (
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
          <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
            Guardar y Continuar
          </button>
        </div>
      </div>

      {/* Existing Navigation Buttons */}
      <div className="flex justify-center mt-6 space-x-4">
        <button className="bg-white text-black px-4 py-2 rounded-lg mr-4" onClick={() => navigate("/pareto/menu")}>
          Menu
        </button>
        <button onClick={handleSave} className="bg-white text-black px-4 py-2 rounded-lg">
          Seis sombreros 🎩
        </button>
      </div>
    </div>
  );
};

export default Foda;
