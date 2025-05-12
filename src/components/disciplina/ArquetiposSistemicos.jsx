import React, { useState } from "react";

const arquetipos = [
  {
    id: 1,
    nombre: "Límites del crecimiento",
    imagen: "/netflix/limites.png",
    definicion: "Cuando algo crece mucho y luego se frena porque algo lo detiene.",
    ejemplos: [
      "Una app crece rápido, pero los servidores no se escalan y se cae todo.",
      "El equipo lanza muchas funcionalidades nuevas sin arreglar bugs, y los usuarios se van.",
      "El código se hace más complejo y ralentiza el desarrollo futuro."
    ]
  },
  {
    id: 2,
    nombre: "Fijarse en lo urgente",
    imagen: "/netflix/urgente.png",
    definicion: "Solo vemos los problemas de hoy y no los que vienen después.",
    ejemplos: [
      "El equipo solo corrige errores sin mejorar la arquitectura.",
      "Se da soporte sin automatizar procesos repetitivos.",
      "Solo se trabaja en tareas pedidas por clientes, sin plan a largo plazo."
    ]
  },
  {
    id: 3,
    nombre: "Trasladar la carga",
    imagen: "/netflix/carga.png",
    definicion: "Arreglamos solo los síntomas y no la causa real.",
    ejemplos: [
      "Se usa más personal en soporte en lugar de corregir fallas del sistema.",
      "Se agregan validaciones en frontend en vez de arreglar errores en backend.",
      "Se reinicia un servidor cada vez que falla en vez de buscar la causa."
    ]
  },
  {
    id: 4,
    nombre: "Carga a un intermediario",
    imagen: "/netflix/intermediario.png",
    definicion: "Alguien más hace el trabajo y nos volvemos dependientes.",
    ejemplos: [
      "Tercerizar testing y luego no saber automatizarlo internamente.",
      "Depender de consultores para tareas que el equipo debería dominar.",
      "Usar librerías sin entender cómo funcionan internamente."
    ]
  },
  {
    id: 5,
    nombre: "Erosión de metas",
    imagen: "/netflix/erosion.png",
    definicion: "Cuando no logramos una meta, la bajamos.",
    ejemplos: [
      "Aceptar menos cobertura en tests automáticos con el tiempo.",
      "Cambiar definición de 'listo' para acelerar entregas.",
      "Reducir estándares de calidad para cumplir deadlines."
    ]
  },
  {
    id: 6,
    nombre: "Escalada",
    imagen: "/netflix/escalada.png",
    definicion: "Dos equipos compiten y cada uno sube la apuesta.",
    ejemplos: [
      "Competencia entre frontend y backend por control del diseño.",
      "Equipos que miden rendimiento con métricas diferentes y se enfrentan.",
      "Empresas que lanzan funciones solo porque el competidor lo hizo."
    ]
  },
  {
    id: 7,
    nombre: "Éxito para el exitoso",
    imagen: "/netflix/exitoso.png",
    definicion: "El que gana, recibe más recursos para seguir ganando.",
    ejemplos: [
      "Un módulo recibe más desarrolladores mientras otros se estancan.",
      "Se invierte más en una app popular y se olvida una en crecimiento.",
      "Solo el equipo con más bugs resueltos recibe incentivos."
    ]
  },
  {
    id: 8,
    nombre: "Crecimiento y subinversión",
    imagen: "/netflix/subinversion.png",
    definicion: "Se quiere crecer pero no se invierte lo suficiente.",
    ejemplos: [
      "Una app viral sin mejorar los servidores falla.",
      "Se contratan nuevos clientes sin contratar más soporte.",
      "Se lanza una nueva versión sin actualizar la infraestructura."
    ]
  },
  {
    id: 9,
    nombre: "Solución que falla",
    imagen: "/netflix/solucion.png",
    definicion: "Una solución crea nuevos problemas peores.",
    ejemplos: [
      "Se automatiza un proceso sin validar y genera errores.",
      "Se crea una API para todo y después nadie la mantiene.",
      "Se aplica un parche que después complica el código."
    ]
  },
  {
    id: 10,
    nombre: "Adicción a soluciones rápidas",
    imagen: "/netflix/rapidas.png",
    definicion: "Solo usamos parches rápidos y nunca arreglamos el fondo.",
    ejemplos: [
      "Arreglar bugs con hacks sin documentarlos.",
      "Responder en foros en vez de actualizar la documentación.",
      "Añadir nuevas capas al sistema sin rediseñarlo."
    ]
  },
  {
    id: 11,
    nombre: "Resumen del libro"
  },
  {
    id: 12,
    nombre: "Página del autor"
  }
];

const ArquetipoContent = ({ currentId }) => {
  const item = arquetipos.find((a) => a.id === currentId);

  if (currentId === 11) return <div className="text-white p-6">Resumen del libro (componente separado)</div>;
  if (currentId === 12) return <div className="text-white p-6">Página del autor (componente separado)</div>;

  return (
    <div className="flex flex-col items-center gap-4 p-6 text-white bg-[#141414]">
      <img
        src={item.imagen}
        alt={`Diagrama de ${item.nombre}`}
        width={400}
        height={300}
        className="rounded shadow-lg"
      />
      <div className="bg-[#e50914] text-white w-full text-center py-3 rounded font-semibold">
        {item.definicion}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {item.ejemplos.map((ej, idx) => (
          <div
            key={idx}
            className="bg-[#1f1f1f] text-white text-center p-4 rounded border border-gray-700"
          >
            {ej}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ArquetiposSistemicos() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="flex flex-col h-screen bg-[#141414]">
      {/* Header */}
      <header className="bg-black text-[#e50914] text-center py-4 text-2xl font-bold sticky top-0 z-50 shadow-md">
        ARQUETIPOS SISTÉMICOS
      </header>

      {/* Body */}
      <main className="flex-grow overflow-y-auto">
        <ArquetipoContent currentId={selected} />
      </main>

      {/* Navigation Buttons */}
      <footer className="bg-black border-t border-gray-700 p-2 grid grid-cols-6 md:grid-cols-12 gap-2 sticky bottom-0 z-50">
        {arquetipos.map((a) => (
          <button
            key={a.id}
            className={`text-sm md:text-xs p-2 rounded font-medium border border-gray-600 ${
              selected === a.id
                ? "bg-[#e50914] text-white"
                : "bg-[#333] text-gray-300 hover:bg-[#444]"
            }`}
            onClick={() => setSelected(a.id)}
          >
            {a.nombre}
          </button>
        ))}
      </footer>
    </div>
  );
}