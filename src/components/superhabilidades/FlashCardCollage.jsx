// FlashCardCollage.jsx
import React from "react";

/* ----------- Single card ---------- */
const FlashCard = ({ title, description, image, video }) => (
  <a
    href={video}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <div className="group relative w-60 h-80 [perspective:1000px] cursor-pointer">
      <div
        className={`relative w-full h-full transition-transform duration-700 
                    [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]`}
      >
        {/* front */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg
                     [backface-visibility:hidden]"
        />

        {/* back */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-xl shadow-lg
                     bg-white p-4 text-center
                     [transform:rotateY(180deg)] [backface-visibility:hidden]"
        >
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
          <p className="mt-4 text-xs text-purple-600">Click to watch ▶</p>
        </div>
      </div>
    </div>
  </a>
);

/* ----------- Collage wrapper ---------- */
const FlashCardCollage = () => (
  <div className="flex flex-wrap justify-center gap-6">
    {flashCardsData.map((card) => (
      <FlashCard key={card.id} {...card} />
    ))}
  </div>
);

export default FlashCardCollage;

/* ----------- Card data (edit freely!) ---------- */
export const flashCardsData = [
  {
    id: 1,
    title: "Interdependencia",
    description: "Capacidad de colaborar y apoyarse en otros para alcanzar objetivos comunes sin perder la autonomía personal.",
    image: "/collageimages/interdependencia.png",
    video: "https://youtu.be/vSQjk9jKarg?si=N-9HLbYIQQAeyKIE",
  },
  {
    id: 2,
    title: "Emprendimiento",
    description: "Iniciativa para identificar oportunidades y convertir ideas en proyectos con impacto.",
    image: "/collageimages/emprendimiento.png",
    video: "https://www.youtube.com/@AlexHormozi",
  },
  {
    id: 3,
    title: "Liderazgo",
    description: "Habilidad de influir positivamente en otros, inspirando dirección, acción y propósito.",
    image: "/collageimages/liderazgo.png",
    video: "https://www.youtube.com/watch?v=lmyZMtPVodo",
  },
  {
    id: 4,
    title: "Responsabilidad",
    description: "Compromiso con las propias acciones, decisiones y sus consecuencias.",
    image: "/collageimages/responsabilidad.png",
    video: "https://youtu.be/zsLa0tHz7n0?si=LIUHZbB_cVjtFL8l",
  },
  {
    id: 5,
    title: "Comunicación Efectiva",
    description: "Transmisión clara y empática de ideas, emociones y necesidades.",
    image: "/collageimages/comunicacion.png",
    video: "https://www.youtube.com/watch?v=HAnw168huqA",
  },
  {
    id: 6,
    title: "Los Otros",
    description: "Reconocer, respetar y valorar a los demás como individuos con dignidad y derechos.",
    image: "/collageimages/otros.png",
    video: "https://www.youtube.com/watch?v=25LUF8GmbFU",
  },
  {
    id: 7,
    title: "El Lenguaje",
    description: "Uso consciente y preciso del lenguaje para crear realidades, influir y construir relaciones.",
    image: "/collageimages/lenguaje.png",
    video: "https://youtu.be/Unzc731iCUY?si=sA1xBJJk9ElU3lIQ",
  },
  {
    id: 8,
    title: "Finanzas",
    description: "Gestión inteligente de los recursos económicos para lograr estabilidad y libertad financiera.",
    image: "/collageimages/finanzas.png",
    video: "https://www.youtube.com/@andresgarzam",
  },
  {
    id: 9,
    title: "Excelencia",
    description: "Compromiso continuo con la mejora personal y profesional, superando estándares.",
    image: "/collageimages/excelencia.png",
    video: "https://www.youtube.com/watch?v=FfsaOFziAB0",
  },
  {
    id: 10,
    title: "Persistencia",
    description: "Determinación para continuar ante los obstáculos y aprender del fracaso.",
    image: "/collageimages/persistencia.png",
    video: "https://www.youtube.com/watch?v=WONRS7BLh4g",
  },
];


{/*
      Interdependencia – Estilo Art Nouveau:
    "A group of diverse people intertwined with flowing vines and organic shapes, symbolizing mutual support and unity, in the style of Art Nouveau, with soft pastel tones and decorative borders."

    Emprendimiento – Estilo Ciberpunk:
    "A futuristic cityscape at night with a young entrepreneur presenting a high-tech innovation in a neon-lit garage, surrounded by glowing holograms, in a gritty cyberpunk style."

    Liderazgo – Estilo Realismo Clásico (Renacentista):
    "A noble figure standing atop a hill, guiding others through a storm, with determined eyes and dramatic lighting, painted in the detailed, rich style of Renaissance realism."

    Responsabilidad – Estilo Minimalista Japonés (Wabi-Sabi):
    "A single figure holding a lantern in a quiet forest, emphasizing care and duty in a tranquil, imperfect natural setting, depicted with minimalist brush strokes and muted tones, in the Wabi-Sabi aesthetic."

    Comunicación efectiva – Estilo Pop Art:
    "Two people exchanging vibrant speech bubbles filled with symbols and emojis, in bold colors and comic-style panels, inspired by Roy Lichtenstein and pop art conventions."

    Los Otros – Estilo Surrealista (Dalí):
    "A dreamlike desert with melting mirrors reflecting different human faces, symbolizing diversity and alterity, in the surreal style of Salvador Dalí with exaggerated shadows and warped forms."

    El lenguaje – Estilo Tipográfico Moderno:
    "An abstract composition of letters morphing into human figures and flowing into waves of color, expressing spoken and written language, in a sleek, modern typographic design."

    Finanzas, excelencia, persistencia – Estilo Art Deco:
    "A strong, determined figure climbing a stylized golden staircase made of coins and gears, toward a radiant city skyline, illustrated in geometric shapes and metallic colors of the Art Deco era."

¿Quieres que genere alguno de estos como imagen ahora?
You said:
Separa Finanzas, Excelencia y Persistencia en 3 promts
ChatGPT said:

Perfecto, aquí tienes tres prompts separados para Finanzas, Excelencia y Persistencia, cada uno con un estilo artístico único:
Finanzas – Estilo Futurista Isométrico

"A dynamic isometric city filled with financial data, stock graphs floating in the air, robotic bankers, and digital coins flowing like rivers, all rendered in a clean, futuristic isometric art style with cool metallic tones."
Excelencia – Estilo Neoclásico

"A majestic figure standing at the peak of a marble staircase, bathed in golden light, holding a laurel wreath, symbolizing mastery and achievement, depicted in the detailed, elegant style of Neoclassical painting."
Persistencia – Estilo Expresionismo Alemán

"A lone figure walking through a stormy, distorted landscape, pushing forward against strong winds, surrounded by jagged, emotional brushstrokes and high contrast shadows, in the intense, dramatic style of German Expressionism."
  
  */}

