import React, { useState } from 'react';

/**
 * Aventura gráfica interactiva con imágenes y estilo de narrativa novelístico.
 * El jugador toma decisiones que guían el destino de una sociedad emergente.
 */

// Libros principales referenciados
const BOOK_UTOPIA = "Utopía para realistas";
const BOOK_CAPITALISM = "23 cosas que no te cuentan sobre el capitalismo";
const BOOK_FAIL = "Por qué fracasan los países";

// Mapeo de imágenes para cada escena (cambia aquí fácilmente tus imágenes)
const sceneImages = {
  inicio: "/inicio.png",
  fundacion: "/fundacion.png",
  ingresoBasico: "/ingresobasico.png",
  industrializacion: "/industrializacion.png",
  institucionesInclusivas: "/institucionesinclusivas.png",
  jornadaLaboral: "https://picsum.photos/id/1025/800/400",
  educacionTecnica: "https://picsum.photos/id/1031/800/400",
  regulacionMercados: "https://picsum.photos/id/1035/800/400",
  aperturaFronteras: "https://picsum.photos/id/1041/800/400",
  constitucion: "https://picsum.photos/id/1045/800/400",
  participacionCiudadana: "https://picsum.photos/id/1050/800/400",
  subsidiosInnovacion: "https://picsum.photos/id/1055/800/400",
  investigacion: "https://picsum.photos/id/1060/800/400",
  tratadosComercio: "https://picsum.photos/id/1065/800/400",
  final_positivo: "https://picsum.photos/id/1070/800/400",
  final_mixto: "https://picsum.photos/id/1080/800/400"
};

// Estructura novelística de las escenas
const SCENES = [
  {
    id: "inicio",
    text: "El alba pintaba el horizonte con trazos dorados y violetas, iluminando lentamente las fértiles llanuras que aguardaban silenciosas. Había llegado el día esperado; tras meses de travesía, te encuentras finalmente frente al terreno prometido. Tu gente espera con ilusión y esperanza tus primeras decisiones para crear una sociedad digna de perdurar en el tiempo.",
    choices: [
      {
        text: "Comenzar a construir tu legado",
        nextId: "fundacion",
        books: []
      }
    ]
  },
  {
    id: "fundacion",
    text: "El valle se extiende ante ti, como una página en blanco aguardando tu firma. Mientras los habitantes improvisan tiendas y refugios, las miradas esperan ansiosas tu primer decreto. ¿Será una sociedad generosa, una nación industriosa, o quizás una tierra inclusiva donde cada voz importe por igual? La decisión marcará el alma misma de tu nueva comunidad.",
    choices: [
      {
        text: "Proclamar un ingreso básico universal, garantizando dignidad a todos",
        nextId: "ingresoBasico",
        books: [BOOK_UTOPIA]
      },
      {
        text: "Impulsar la industrialización, buscando prosperidad inmediata",
        nextId: "industrializacion",
        books: [BOOK_CAPITALISM]
      },
      {
        text: "Establecer instituciones sólidas e inclusivas, basadas en igualdad",
        nextId: "institucionesInclusivas",
        books: [BOOK_FAIL]
      }
    ]
  },
  {
    id: "ingresoBasico",
    text: "La idea del ingreso básico universal ha tomado raíz con sorprendente rapidez. Las familias ya no temen al hambre, la creatividad florece en calles animadas por el arte y la música espontánea. Sin embargo, algunos murmuran preocupados: ¿cómo ocuparán su tiempo aquellos que han quedado liberados del yugo de la necesidad inmediata?",
    choices: [
      {
        text: "Reducir las horas laborales, fomentando la vida creativa y el voluntariado",
        nextId: "jornadaLaboral",
        books: [BOOK_UTOPIA]
      },
      {
        text: "Invertir en educación técnica para fortalecer la productividad",
        nextId: "educacionTecnica",
        books: [BOOK_CAPITALISM]
      }
    ]
  },
  {
    id: "industrializacion",
    text: "Las fábricas se levantan rápidamente; chimeneas se elevan hacia el cielo, prometiendo empleo y crecimiento acelerado. La economía prospera inicialmente, pero no tardan en surgir preocupaciones: la desigualdad crece lentamente, y la competencia internacional amenaza con erosionar tu incipiente éxito.",
    choices: [
      {
        text: "Proteger sectores clave, asegurando empleos locales",
        nextId: "regulacionMercados",
        books: [BOOK_CAPITALISM]
      },
      {
        text: "Abrir fronteras al comercio libre, apostando a la competitividad",
        nextId: "aperturaFronteras",
        books: [BOOK_UTOPIA]
      }
    ]
  },
  {
    id: "institucionesInclusivas",
    text: "Tu decisión de crear instituciones inclusivas despierta gran entusiasmo. La gente participa activamente en foros y asambleas, pero la complejidad de reformar viejas estructuras provoca que los avances sean lentos y debatidos. La pregunta se impone naturalmente: ¿cómo mantener viva esta energía democrática sin estancar la sociedad?",
    choices: [
      {
        text: "Redactar una constitución robusta, con contrapesos y libertades claras",
        nextId: "constitucion",
        books: [BOOK_FAIL]
      },
      {
        text: "Fomentar aún más la participación ciudadana, apoyando cooperativas y economía social",
        nextId: "participacionCiudadana",
        books: [BOOK_UTOPIA, BOOK_FAIL]
      }
    ]
  },
  {
    id: "jornadaLaboral",
    text: "Con jornadas más breves, la ciudad respira un ambiente nuevo, lleno de cultura y entusiasmo por explorar caminos inéditos. Sin embargo, comienzan a oírse preocupaciones sobre la competitividad económica futura. Algunos sectores industriales reclaman medidas para garantizar su desarrollo sostenible.",
    choices: [
      {
        text: "Confiar en el rumbo actual, priorizando la calidad de vida",
        nextId: "final_positivo",
        books: [BOOK_UTOPIA]
      },
      {
        text: "Ofrecer subsidios a empresas que apuestan por la innovación tecnológica",
        nextId: "subsidiosInnovacion",
        books: [BOOK_CAPITALISM]
      }
    ]
  },
  {
    id: "educacionTecnica",
    text: "La apuesta educativa transforma rápidamente la economía local. Las habilidades técnicas hacen prosperar a empresas que crecen veloces y atraen inversiones, pero también generan dependencia en un único modelo productivo. Ante el riesgo futuro de crisis sectoriales, debes decidir cómo diversificar tu economía.",
    choices: [
      {
        text: "Invertir en investigación para diversificar la economía",
        nextId: "investigacion",
        books: [BOOK_CAPITALISM, BOOK_UTOPIA]
      },
      {
        text: "Fortalecer las instituciones inclusivas, para asegurar equidad",
        nextId: "institucionesInclusivas",
        books: [BOOK_FAIL]
      }
    ]
  },
  {
  id: "tratadosComercio",
  text: "Los nuevos tratados promueven un intercambio justo: cláusulas que protegen al trabajador, respeto ambiental y acceso mutuo a tecnología. La economía crece de forma sostenida, y tu sociedad es vista como un modelo de comercio ético.",
  choices: [
    {
      text: "Expandir esta visión con cooperación internacional",
      nextId: "final_positivo",
      books: [BOOK_CAPITALISM, BOOK_UTOPIA]
    }
  ]
},
  {
  id: "investigacion",
  text: "Tu apuesta por la investigación despierta una revolución intelectual. Desde energía limpia hasta nuevos modelos económicos, las ideas se multiplican. Investigadores de todo el mundo acuden a tu ciudad, generando un crisol de innovación sin precedentes.",
  choices: [
    {
      text: "Integrar estos avances en instituciones inclusivas",
      nextId: "final_positivo",
      books: [BOOK_UTOPIA, BOOK_CAPITALISM, BOOK_FAIL]
    }
  ]
},
{
  id: "subsidiosInnovacion",
  text: "Las subvenciones a empresas tecnológicas dan frutos: nacen startups, se multiplican los laboratorios y surgen nuevos empleos en sectores verdes y digitales. Sin embargo, el campo y la manufactura tradicional sienten el abandono.",
  choices: [
    {
      text: "Reconvertir sectores tradicionales con apoyo tecnológico",
      nextId: "final_positivo",
      books: [BOOK_CAPITALISM]
    }
  ]
},
{
  id: "participacionCiudadana",
  text: "Los barrios vibran con asambleas vecinales, las plazas se llenan de debates y propuestas. La democracia directa revitaliza la vida pública, aunque la lentitud en la toma de decisiones comienza a frustrar a algunos sectores económicos.",
  choices: [
    {
      text: "Mantener el modelo participativo, aceptando los ritmos colectivos",
      nextId: "final_positivo",
      books: [BOOK_UTOPIA, BOOK_FAIL]
    },
    {
      text: "Delegar decisiones técnicas a expertos con supervisión ciudadana",
      nextId: "final_mixto",
      books: [BOOK_CAPITALISM, BOOK_FAIL]
    }
  ]
},
{
  id: "constitucion",
  text: "Redactas una constitución con fundamentos sólidos: contrapesos claros, libertades garantizadas y mecanismos de transparencia. Aunque el proceso es lento y arduo, tu gente comienza a confiar profundamente en las instituciones que construyen su futuro.",
  choices: [
    {
      text: "Consolidar el marco legal y abrir espacio a la innovación",
      nextId: "final_positivo",
      books: [BOOK_FAIL, BOOK_CAPITALISM]
    }
  ]
},
{
  id: "aperturaFronteras",
  text: "La apertura trae consigo un auge económico. Capital, talento y diversidad llegan a raudales. Pero el rápido crecimiento también revela grietas sociales: tensiones culturales y quejas por empleos precarios. Tu pueblo mira hacia ti buscando armonía.",
  choices: [
    {
      text: "Fomentar integración cultural y educación cívica",
      nextId: "participacionCiudadana",
      books: [BOOK_UTOPIA]
    },
    {
      text: "Establecer límites y regulaciones a la migración laboral",
      nextId: "final_mixto",
      books: [BOOK_CAPITALISM]
    }
  ]
},
  {
    id: "final_positivo",
    text: "Tu visión ha dado frutos extraordinarios. La sociedad que construiste es referente mundial de equilibrio, justicia social y creatividad floreciente. Sus calles bulliciosas, instituciones fuertes y ciudadanos comprometidos son testimonio vivo de que sí es posible imaginar un mundo mejor y hacerlo realidad. Tu legado es eterno.",
    choices: []
  },
  {
    id: "final_mixto",
    text: "Has creado una comunidad sólida, tranquila, pero no exenta de retos. Aunque falta la chispa de transformación radical, los ciudadanos viven una vida estable y cómoda. Algunos murmuran sobre oportunidades perdidas, pero la mayoría aprecia profundamente la estabilidad conseguida.",
    choices: []
  }
];

// Componente principal
export default function AdventureGame() {
  const [currentSceneId, setCurrentSceneId] = useState("inicio");

  const currentScene = SCENES.find((scene) => scene.id === currentSceneId);

  const handleChoice = (nextId) => {
    setCurrentSceneId(nextId);
  };

  if (!currentScene) {
    return (
      <div className="p-4 text-center text-red-500">
        <h1 className="text-xl font-bold">Error: escena no encontrada.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200 flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={sceneImages[currentScene.id]}
          alt={`Escena ${currentScene.id}`}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">
            Construyendo una Sociedad Mejor
          </h2>
          <p className="text-gray-700 mb-6 whitespace-pre-wrap font-serif">
            {currentScene.text}
          </p>

          <div className="space-y-4">
            {currentScene.choices.map((choice, idx) => (
              <button
                key={idx}
                onClick={() => handleChoice(choice.nextId)}
                className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded shadow transition duration-300 ease-in-out font-semibold"
              >
                {choice.text}
              </button>
            ))}
          </div>

          {currentScene.choices.length === 0 && (
            <div className="mt-4 text-center text-green-700 font-semibold">
              ¡Gracias por jugar! Refleja sobre los caminos que escogiste.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
