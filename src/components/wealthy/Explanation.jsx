import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { useNavigate } from "react-router-dom";

const documentaries = [
  {
    title: "¿Cuánta influencia tienen los superricos? | DW Documentary",
    points: [
      "Influencia en las ciudades: Cómo los individuos adinerados pueden afectar el desarrollo urbano y la política local en Alemania.",
      "Desigualdades económicas: Creciente brecha entre ricos y el resto de la población y su impacto en la sociedad.",
      "Riqueza y democracia: ¿Influye la riqueza en las decisiones políticas y el bien común?",
      "Responsabilidades de los ricos: ¿Usan sus recursos para el beneficio social o personal?",
      "Percepción pública: ¿Cómo ve la sociedad a los superricos y qué implicaciones éticas tiene su influencia?",
    ],
  },
  {
    title: "Riqueza, privilegio y responsabilidad - El mundo de los superricos | DW Documentary",
    points: [
      "Desigualdad económica: Diferencia marcada entre ricos y la población general en Alemania.",
      "Adquisición de riqueza: Mayoría de millonarios adquiere su fortuna por herencia, no por emprendimiento.",
      "Beneficios fiscales: Impacto de la suspensión del impuesto sobre la riqueza en 1997 y su costo de €380 mil millones.",
      "Educación y responsabilidad: Formación de hijos de familias ricas en instituciones de élite.",
      "Percepción pública y responsabilidad: ¿Están los ricos cumpliendo su papel en la sociedad?",
    ],
  },
  {
    title: "Mentes en acción Ubaldo cap4 Movimientos sociales",
    points: [
      "Papel de los movimientos sociales: Motor de cambio en la sociedad y transformación de comunidades.",
      "Desafíos enfrentados: Obstáculos y resistencia de los sistemas establecidos.",
      "Impacto en la sociedad: Movilización de comunidades, concienciación y cambios en políticas.",
      "Reflexión: Importancia de los movimientos sociales en el progreso y transformación social.",
    ],
  },
];

export default function DocumentariesTabs() {

  const navigate = useNavigate();

  const [selectedDoc, setSelectedDoc] = useState(documentaries[0].title);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Preview/Next <-- / -->  buttons*/}
      <div>
        <button
          className="bg-white text-black px-4 py-2 rounded-lg mr-4"
          onClick={() => navigate("/wealthy/menu")}
        >
          Anterior
        </button>
        <button
          onClick={() => navigate("/wealthy/game")}
          className="bg-white text-black px-4 py-2 rounded-lg"
        >
          Siguiente
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-4 text-center">Resúmenes de Documentales</h1>
      <Tabs.Root
        value={selectedDoc}
        onValueChange={setSelectedDoc}
        className="w-full"
      >
        <Tabs.List className="flex justify-center space-x-4 mb-4 border-b">
          {documentaries.map((doc) => (
            <Tabs.Trigger
              key={doc.title}
              value={doc.title}
              className="px-4 py-2 text-lg font-medium text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {doc.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {documentaries.map((doc) => (
          <Tabs.Content key={doc.title} value={doc.title} className="p-4">
            <div className="bg-white shadow-lg rounded-xl p-4">
              <h2 className="text-2xl font-semibold mb-2">{doc.title}</h2>
              <ul className="list-disc list-inside space-y-2">
                {doc.points.map((point, index) => (
                  <li key={index} className="text-lg">{point}</li>
                ))}
              </ul>
            </div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
}
