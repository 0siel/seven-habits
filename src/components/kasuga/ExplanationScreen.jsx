import React from "react";
import { useNavigate } from "react-router-dom";

function ExplanationScreen() {
  const navigate = useNavigate();
  {
    /* Explanation Screen */
  }
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
      {/* Preview/Next <-- / -->  buttons*/}
      <div>
        <button
          className="bg-white text-black px-4 py-2 rounded-lg mr-4"
          onClick={() => navigate("/kasuga/deepseek")}
        >
          Anterior
        </button>
        <button
          onClick={() => navigate("/kasuga/menu")}
          className="bg-white text-black px-4 py-2 rounded-lg"
        >
          Siguiente
        </button>
      </div>
      <h1 className="text-5xl font-extrabold mb-12 animate-fade-in">
        Introduccion
      </h1>

      <div className="flex flex-col items-center bg-white text-black rounded-lg shadow-lg mb-12 w-full md:w-3/4 lg:w-2/3 p-8">
        {/* Title */}
        <h2 className="text-3xl font-semibold mb-4">
          Educación con valores y virtudes
        </h2>

        {/* Image */}
        <img
          src="/ck.png"
          alt="Kasuga"
          className="w-full h-97 object-contain rounded-lg mb-6"
        />

        {/* Horizontal Scrollable Cards */}
        <div className="w-full overflow-x-auto">
          <div className="flex space-x-4 p-4">
            {[
              {
                title: "Introducción",
                description:
                  "En la charla Educación con valores y virtudes de Carlos Kasuga, se presentan varios conceptos clave que son fundamentales para el desarrollo personal y profesional. Aquí te los explico:",
              },
              {
                title: "Ideas y conceptos presentados:",
                description: "",
              },
              {
                title: "Compromiso personal:",
                description:
                  "Kasuga enfatiza la importancia de comprometerse primero con uno mismo antes de comprometerse con los demás. Este compromiso es la base para construir una vida y una sociedad de alta calidad.",
              },
              {
                title: "Valores y virtudes:",
                description:
                  "La charla destaca la necesidad de inculcar valores como la honestidad, la responsabilidad, el respeto y la integridad en la educación y en la vida diaria.",
              },
              {
                title:
                  "Principios del Bien Ser, Bien Hacer, Bien Estar y Bien Tener: ",
                description:
                  "Estos principios son fundamentales para lograr una vida equilibrada y exitosa.",
              },
              {
                title: "Importancia",
                description: "",
              },
              {
                title: "Compromiso personal: ",
                description:
                  "Es crucial porque establece una base sólida para todas las acciones y decisiones que tomamos. Sin un compromiso personal, es difícil mantener la consistencia y la integridad en nuestras vidas.",
              },
              {
                title: "Valores y virtudes: ",
                description:
                  "Son esenciales para construir relaciones saludables y una sociedad justa. Los valores y virtudes guían nuestro comportamiento y nos ayudan a tomar decisiones éticas.",
              },
              {
                title:
                  "Principios del Bien Ser, Bien Hacer, Bien Estar y Bien Tener:",
                description:
                  "Estos principios proporcionan una guía integral para vivir una vida plena y significativa.",
              },
              {
                title: "Implementación:",
                description: "",
              },
              {
                title: "Cuándo:",
                description:
                  "Estos conceptos deben ser implementados de manera continua en nuestra vida diaria. No hay un momento específico; es un proceso constante de autoevaluación y mejora.",
              },
              {
                title: "Dónde:",
                description:
                  "En todos los aspectos de nuestra vida: en el hogar, en el trabajo, en la comunidad y en nuestras relaciones personales.",
              },
              {
                title: "Compromiso personal:",
                description:
                  "Reflexiona sobre tus valores y establece metas personales que estén alineadas con ellos. Mantén la integridad y la consistencia en tus acciones.",
              },
              {
                title: "Valores y virtudes:",
                description:
                  "Practica la honestidad, la responsabilidad y el respeto en todas tus interacciones. Educa a los demás, especialmente a los jóvenes, sobre la importancia de estos valores.",
              },
              {
                title: "Bien Ser, Bien Hacer, Bien Estar y Bien Tener:",
                description:
                  "Bien Ser, Bien Hacer, Bien Estar y Bien Tener: Trabaja en tu desarrollo personal, realiza tus tareas con excelencia, cuida tu bienestar físico y mental, y gestiona tus recursos de manera ética y responsable.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="min-w-[80%] md:min-w-[40%] lg:min-w-[30%] bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-700">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-20 h-1 bg-gray-300 rounded-full mb-12"></div>

      <div className="flex flex-col items-center bg-white text-black rounded-lg shadow-lg mb-12 w-full md:w-3/4 lg:w-2/3 p-8">
        {/* Title */}
        <h2 className="text-3xl font-semibold mb-4">
          Educación con valores y virtudes
        </h2>

        {/* Image */}
        <img
          src="/jk.png"
          alt="Kenji"
          className="w-full h-97 object-contain rounded-lg mb-6"
        />

        {/* Horizontal Scrollable Cards */}
        <div className="w-full overflow-x-auto">
          <div className="flex space-x-4 p-4">
            {[
              {
                title: "Introduccion",
                description:
                  "En el video de Yokoi Kenji titulado MOTIVACIÓN, se presentan varias ideas y conceptos clave sobre la motivación y la mentalidad. Aquí te explico cada uno de ellos, su importancia, y cómo podemos implementarlos en nuestra vida diaria:",
              },
              {
                title: "Ideas y conceptos presentados:",
                description: "",
              },
              {
                title: "Realidad vs. Ilusión:",
                description:
                  "Kenji destaca la diferencia entre la realidad y las ilusiones que se presentan en las redes sociales. Advierte contra idealizar vidas que parecen perfectas en línea y nos anima a aceptar la realidad de que la mayoría de las personas deben trabajar arduamente para lograr el éxito",
              },
              {
                title: "Sentido de Vida (Ikigai):",
                description:
                  "Menciona el concepto japonés de ikigai, que se traduce como ''sentido de vida''. Este concepto se centra en trabajar hasta encontrar pasión en lo que hacemos, en lugar de buscar constantemente motivación externa.",
              },
              {
                title: "Esfuerzo y Perseverancia:",
                description:
                  "Kenji resalta la importancia del esfuerzo y la perseverancia en el trabajo. Ejemplifica con la anécdota de masajear un pulpo durante una hora, explicando que el esfuerzo y la dedicación son fundamentales para obtener buenos resultados.",
              },
              {
                title: "Adaptación y Resiliencia:",
                description:
                  "Subraya la necesidad de adaptarse y ser resilientes ante las adversidades y los cambios inesperados. Menciona cómo los latinos tienen la capacidad de encontrar humor y soluciones en medio del caos.",
              },
              {
                title: "Importancia de estos conceptos:",
                description: "",
              },
              {
                title: "Realidad vs. Ilusión:",
                description:
                  "Es fundamental para mantener una perspectiva realista y evitar decepciones causadas por expectativas poco realistas.",
              },
              {
                title: "Sentido de Vida (Ikigai):",
                description:
                  "Nos ayuda a encontrar motivación intrínseca y propósito en nuestras actividades diarias.",
              },
              {
                title: "Esfuerzo y Perseverancia: ",
                description:
                  "Son esenciales para alcanzar el éxito a largo plazo y superar los desafíos.",
              },
              {
                title: "Adaptación y Resiliencia:",
                description:
                  "Nos permiten enfrentar situaciones adversas de manera efectiva y encontrar oportunidades en medio de las dificultades.",
              },
              {
                title: "Implementación",
                description: "",
              },
              {
                title: "Cuándo: ",
                description:
                  "Estos conceptos deben ser implementados de manera continua en nuestra vida diaria.",
              },

              {
                title: "Dónde:",
                description:
                  "En todos los aspectos de nuestra vida: en el hogar, en el trabajo, en la comunidad y en nuestras relaciones personales.",
              },
              {
                title: "Cómo:",
                description: "",
              },
              {
                title: "Realidad vs. Ilusión: ",
                description:
                  "Mantén una perspectiva realista y enfócate en tus propios esfuerzos en lugar de compararte con los demás.",
              },
              {
                title: "Sentido de Vida (Ikigai):",
                description:
                  "Encuentra actividades que te apasionen y que te den un sentido de propósito. Trabaja en ellas consistentemente hasta que sientas motivación intrínseca.",
              },
              {
                title: "Esfuerzo y Perseverancia:",
                description:
                  "Dedica tiempo y esfuerzo a tus proyectos y tareas. No te desanimes ante los obstáculos; sigue adelante con determinación.",
              },
              {
                title: "Adaptación y Resiliencia:",
                description:
                  "Aprende a adaptarte a los cambios y a ver los desafíos como oportunidades para crecer. Mantén una actitud positiva y busca soluciones creativas en situaciones difíciles.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="min-w-[80%] md:min-w-[40%] lg:min-w-[30%] bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-700">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExplanationScreen;
