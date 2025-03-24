import React from 'react';
import CarruselEmpresarios from './Carrusel';

export default function EmpresarioPerfecto() {
  const cuerpo = [
    { parte: "Cabeza", caracteristica: "Visión Estratégica", empresario: "Carlos Slim" },
    { parte: "Pecho", caracteristica: "Liderazgo", empresario: "Lorenzo Servitje" },
    { parte: "Espalda", caracteristica: "Resiliencia", empresario: "Germán Larrea" },
    { parte: "Brazo Izquierdo", caracteristica: "Impacto Social", empresario: "Alberto Baillères" },
    { parte: "Brazo Derecho", caracteristica: "Diversificación", empresario: "Ricardo Salinas Pliego" },
    { parte: "Maletín", caracteristica: "Internacionalización", empresario: "María A. Aramburuzabala" },
    { parte: "Pie Izquierdo", caracteristica: "Innovación", empresario: "Eva Gonda de Rivera" },
    { parte: "Pie Derecho", caracteristica: "Legado Empresarial", empresario: "Lorenzo Servitje" },
  ];

  return (
    <div className="p-6">
      <CarruselEmpresarios />
      
      <h2 className="text-3xl font-bold text-center mb-6">🧍 Empresario Perfecto</h2>
      
      {/* Cuerpo del Empresario */}
      <div className="grid grid-cols-3 gap-6 items-center">
        <div className="flex flex-col gap-3 text-right">
          {cuerpo.slice(0, 4).map((item, index) => (
            <div key={index} className="text-sm">
              <strong>{item.parte}</strong><br />
              {item.caracteristica} — <em>{item.empresario}</em>
            </div>
          ))}
        </div>

        {/* Imagen central */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/vector-premium/hombre-negocios-pie-brifcase-silueta-vectorial-ilustracion-color-negro-fondo-blanco-solido-18_666870-8509.jpg?semt=ais_hybrid"
            alt="Cuerpo Empresario"
            className="max-w-xs rounded shadow"
          />
        </div>

        <div className="flex flex-col gap-3 text-left">
          {cuerpo.slice(4).map((item, index) => (
            <div key={index} className="text-sm">
              <strong>{item.parte}</strong><br />
              {item.caracteristica} — <em>{item.empresario}</em>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
