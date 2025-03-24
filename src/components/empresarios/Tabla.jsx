import React from 'react';
import CarruselEmpresarios from './Carrusel';

const empresarios = [
  {
    nombre: "Carlos Slim",
    puntajes: [5, 4, 5, 4, 5, 5, 4, 5, 5, 5],
  },
  {
    nombre: "Lorenzo Servitje",
    puntajes: [5, 4, 5, 5, 5, 3, 5, 5, 4, 5],
  },
  {
    nombre: "Ricardo Salinas Pliego",
    puntajes: [4, 4, 4, 3, 4, 5, 3, 4, 4, 4],
  },
  {
    nombre: "Alberto Baillères",
    puntajes: [4, 3, 4, 5, 4, 4, 3, 4, 4, 4],
  },
  {
    nombre: "Eva Gonda de Rivera",
    puntajes: [4, 3, 4, 4, 5, 4, 4, 4, 4, 4],
  },
  {
    nombre: "Emilio Azcárraga Jean",
    puntajes: [4, 3, 4, 3, 4, 3, 3, 3, 4, 3],
  },
  {
    nombre: "María Asunción Aramburuzabala",
    puntajes: [5, 4, 4, 4, 5, 4, 5, 4, 4, 4],
  },
  {
    nombre: "Germán Larrea",
    puntajes: [4, 3, 3, 3, 5, 4, 3, 4, 4, 4],
  },
];

const caracteristicas = [
  "Visión Estratégica",
  "Innovación",
  "Liderazgo",
  "Impacto Social",
  "Crecimiento Empresarial",
  "Diversificación",
  "Internacionalización",
  "Resiliencia",
  "Influencia en el Mercado",
  "Legado Empresarial",
];

export default function TablaEmpresarios() {
  return (
    <div className="overflow-x-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Comparativa de Empresarios Mexicanos Exitosos</h1>
      <CarruselEmpresarios />
      <h2 className="text-xl font-bold mt-6">Puntajes de Empresarios</h2>
      <p className="text-sm text-gray-600 mb-6">Puntajes del 1 al 5 en diferentes características empresariales</p>
      <table className="table-auto border-collapse w-full text-sm shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="p-2 text-left">Empresario</th>
            {caracteristicas.map((caracteristica, idx) => (
              <th key={idx} className="p-2 text-left whitespace-nowrap">{caracteristica}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {empresarios.map((empresario, idx) => (
            <tr key={idx} className="even:bg-gray-100 odd:bg-white">
              <td className="p-2 font-semibold">{empresario.nombre}</td>
              {empresario.puntajes.map((p, i) => (
                <td key={i} className="p-2 text-center">{p}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
