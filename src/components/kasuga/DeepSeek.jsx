import React from "react";

const AIResponse = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white px-6 py-10">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center animate-fade-in">
        Conversación con la IA
      </h1>

      {/* User Question */}
      <div className="w-full md:w-3/4 lg:w-1/2 p-6 mb-6 bg-gray-700 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-green-400">Usuario:</h2>
        <p className="mt-2 text-lg italic">¿Cuál es el sentido de la vida?</p>
      </div>

      {/* AI Reasoning Process */}
      <div className="w-full md:w-3/4 lg:w-1/2 p-6 mb-6 bg-gray-700 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-blue-400">
          Razonamiento de la IA:
        </h2>
        <ul className="mt-2 text-lg list-disc pl-5 space-y-2">
          <li>
            Okay, the user is asking about the meaning of life. That's a big
            question. I need to approach this carefully. Let me start by
            considering different perspectives.
          </li>
          <li>
            First, philosophical angles. Existentialism says we create our own
            meaning. Then there's religious views, where life's purpose is often
            tied to a higher power. Maybe mention both.
          </li>
          <li>
            Also, scientific viewpoints. Evolution doesn't assign purpose, but
            humans seek meaning. Maybe talk about how biology and psychology
            play roles.
          </li>
          <li>
            I should make sure not to impose any single answer. The user might
            be looking for a summary of various thoughts rather than a
            definitive answer. Need to present options without bias.
          </li>
          <li>
            Perhaps mention personal meaning—like relationships, goals,
            happiness. Also, cultural differences in how life's purpose is
            perceived.
          </li>
          <li>
            Check if there are any common themes across different answers. The
            pursuit of happiness, contribution to society, knowledge, etc.
          </li>
          <li>
            Make sure the response is respectful and acknowledges the
            complexity. Avoid sounding dismissive. Maybe end with an invitation
            for the user to reflect on their own beliefs.
          </li>
        </ul>
      </div>

      {/* AI Response */}
      <div className="w-full md:w-3/4 lg:w-1/2 p-6 bg-gray-700 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-purple-400">
          Respuesta de la IA:
        </h2>
        <p className="mt-2 text-lg">
          La pregunta sobre el sentido de la vida es una de las más profundas de
          la humanidad y no tiene una única respuesta universal. Algunas
          perspectivas incluyen:
        </p>
        <ul className="mt-2 text-lg list-disc pl-5 space-y-2">
          <li>
            <strong>Filosófico:</strong> El existencialismo dice que creamos
            nuestro propio significado, mientras que Aristóteles hablaba de
            alcanzar la plenitud a través de la virtud.
          </li>
          <li>
            <strong>Religioso:</strong> Muchas tradiciones ven el propósito en
            la conexión con lo divino o principios éticos.
          </li>
          <li>
            <strong>Científico:</strong> Desde la biología, la vida se entiende
            como un fenómeno evolutivo sin un propósito inherente.
          </li>
          <li>
            <strong>Humanista:</strong> El sentido puede estar en el amor, la
            creatividad y las relaciones humanas.
          </li>
          <li>
            <strong>Personal:</strong> Cada persona encuentra significado en
            experiencias únicas, metas personales y la búsqueda del
            conocimiento.
          </li>
        </ul>
        <p className="mt-4 text-lg font-semibold text-gray-300">
          ¿Cuál de estas perspectivas resuena más contigo?
        </p>
      </div>
      {/*Image of AI Response*/}

      <img
        src="/answer1.webp"
        alt="AI Response"
        className="w-full md:w-3/4 lg:w-1/2 p-6 bg-gray-700 rounded-lg shadow-lg"
      />
      {/* User Question */}
      <div className="w-full md:w-3/4 lg:w-1/2 p-6 mb-6 bg-gray-700 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-green-400">Usuario:</h2>
        <p className="mt-2 text-lg italic">
          ¿Qué había antes de que todo iniciara?
        </p>
      </div>
      {/* AI Reasoning Process */}
      <div className="w-full md:w-3/4 lg:w-1/2 p-6 mb-6 bg-gray-700 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-blue-400">
          Razonamiento de la IA:
        </h2>
        <ul className="mt-2 text-lg list-disc pl-5 space-y-2">
          <li>
            Okay, the user is asking, "Qué había antes de que todo iniciara?"
            which translates to "What was there before everything began?" I need
            to address this question comprehensively, considering different
            perspectives like scientific, philosophical, and religious.
          </li>
          <li>
            First, I should start with the scientific viewpoint. The Big Bang
            theory is the most accepted model for the beginning of the universe.
            But the user is asking about "before" the Big Bang. According to
            classical cosmology, time itself began with the Big Bang, so the
            concept of "before" might not apply. However, there are theories
            like quantum gravity or multiverse that speculate on a pre-Big Bang
            state. Mentioning Hawking's no-boundary proposal or cyclic models
            could be useful here.
          </li>
          <li>
            Next, the philosophical angle. Philosophers have debated this for
            ages. Some might argue that the question is meaningless if time
            starts at the Big Bang. Others, like Leibniz, questioned why there
            is something rather than nothing. Existentialist views might focus
            on the absurdity or the lack of inherent meaning, while Eastern
            philosophies like Hinduism or Buddhism have concepts of cyclical
            time or eternal Brahman.
          </li>
          <li>
            Then, religious and mythological perspectives. Different religions
            have creation myths. Abrahamic religions often have a creator God
            existing outside time. Eastern traditions might speak of an eternal
            cycle. Indigenous myths vary but often involve primordial elements
            or beings.
          </li>
          <li>
            Metaphysical and speculative ideas could include nothingness,
            abstract entities, or the idea that the universe is self-contained.
            Also, the limits of human understanding play a role here—our brains
            evolved to understand a universe with time and cause-effect, so
            grasping a timeless state is challenging.
          </li>
          <li>
            I should structure the answer with clear sections: scientific,
            philosophical, religious, metaphysical, and a reflection. Highlight
            that the answer depends on the framework used. Also, note that some
            theories suggest the question itself might be invalid if time didn't
            exist before the Big Bang.
          </li>
          <li>
            Check if the user is looking for comfort, intellectual insight, or
            something else. Given the previous questions about the meaning of
            life and what happens after everything ends, they might be exploring
            existential themes deeply. Ensure the response is respectful of
            different viewpoints and acknowledges the mystery.
          </li>
          <li>
            Make sure to include quotes or references where appropriate, like
            Hawking, Leibniz, or Camus. Conclude by tying it back to the user's
            possible intent—finding meaning, understanding the universe, or
            coping with existential uncertainty. Offer to delve deeper into any
            specific area if they want.
          </li>
        </ul>
      </div>
      {/* AI Response */}
      <div className="w-full md:w-3/4 lg:w-1/2 p-6 bg-gray-700 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-purple-400">
          Respuesta de la IA:
        </h2>
        <p className="mt-2 text-lg">
          La pregunta sobre "qué había antes de que todo comenzara" es una de
          las más complejas y fascinantes, ya que desafía nuestra comprensión
          del tiempo, la causalidad y la existencia misma. Al igual que con el
          sentido de la vida o el destino final del universo, las respuestas
          varían según el enfoque:
        </p>
        <ul className="mt-2 text-lg list-disc pl-5 space-y-2">
          <li>
            <strong>Perspectiva científica:</strong> El Big Bang marca el inicio
            del espacio y el tiempo. Según Hawking, no tiene sentido preguntar
            qué había "antes".
          </li>
          <li>
            <strong>Filosofía:</strong> Leibniz se preguntó "¿Por qué hay algo
            en lugar de nada?". Otras corrientes argumentan que la pregunta en
            sí puede ser inválida.
          </li>
          <li>
            <strong>Religión:</strong> Algunas religiones hablan de un Dios
            eterno que creó el universo, mientras que otras tradiciones proponen
            ciclos infinitos de existencia.
          </li>
          <li>
            <strong>Metafísica:</strong> Se han propuesto ideas como la
            existencia de estados cuánticos previos o realidades atemporales.
          </li>
          <li>
            <strong>Límites humanos:</strong> Nuestra mente está limitada por el
            concepto del tiempo, por lo que podría ser imposible comprender una
            realidad sin él.
          </li>
        </ul>
        <p className="mt-4 text-lg font-semibold text-gray-300">
          ¿Qué perspectiva resuena más contigo?
        </p>
      </div>
      {/* Image of AI Response */}
      <img
        src="/answer2.webp"
        alt="AI Response"
        className="w-full md:w-3/4 lg:w-1/2 p-6 bg-gray-700 rounded-lg shadow-lg"
      />
      {/* User Question */}
      <div className="w-full md:w-3/4 lg:w-1/2 p-6 mb-6 bg-gray-700 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-green-400">Usuario:</h2>
        <p className="mt-2 text-lg italic">
          ¿Qué habrá cuando todo se termine?
        </p>
      </div>
      {/* AI Reasoning Process */}
      <div className="w-full md:w-3/4 lg:w-1/2 p-6 mb-6 bg-gray-700 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-blue-400">
          Razonamiento de la IA:
        </h2>
        <ul className="mt-2 text-lg list-disc pl-5 space-y-2">
          <li>
            Okay, the user is asking "Qué habrá cuando todo se termine?" which
            translates to "What will there be when everything ends?" They
            previously asked about the meaning of life, so this is a follow-up
            on existential themes. I need to address different perspectives
            again, but this time focusing on the end of everything.
          </li>
          <li>
            First, I should consider scientific viewpoints. The heat death of
            the universe is a common theory. Then, religious beliefs like the
            afterlife or apocalypse. Philosophical ideas, maybe nihilism or
            existentialism. Also, cultural myths and personal interpretations.
            Make sure to mention that there's no definitive answer and it's
            speculative.
          </li>
          <li>
            I should structure the response similarly to the previous one, with
            clear sections. Need to check if the user is looking for comfort,
            curiosity, or something else. Since they asked about the end, maybe
            they're dealing with existential anxiety. But I should stay neutral
            and informative, offering various perspectives without imposing any.
          </li>
          <li>
            Also, remember to mention that science deals with the physical end,
            while philosophy and religion address meaning. Highlight that the
            uncertainty allows for personal reflection. Use examples like
            Buddhism's cycles, scientific theories, and maybe literary
            references. Keep the tone respectful and open-ended.
          </li>
        </ul>
      </div>
      {/* AI Response */}
      <div className="w-full md:w-3/4 lg:w-1/2 p-6 bg-gray-700 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-purple-400">
          Respuesta de la IA:
        </h2>
        <p className="mt-2 text-lg">
          La pregunta sobre "qué habrá después del fin de todo" es un tema que
          ha inspirado reflexiones filosóficas, científicas, religiosas y
          artísticas. La respuesta depende del marco desde el que se aborde:
        </p>
        <ul className="mt-2 text-lg list-disc pl-5 space-y-2">
          <li>
            <strong>Perspectiva científica:</strong> Según teorías cosmológicas,
            el destino del universo podría ser el "Big Freeze" o "Muerte
            Térmica", donde toda la energía se disiparía en un vacío frío y
            oscuro. Otras hipótesis incluyen el "Big Crunch" o la posibilidad de
            nuevos universos.
          </li>
          <li>
            <strong>Filosofía:</strong> Desde el nihilismo, donde el fin es
            simplemente la nada, hasta el existencialismo, que enfatiza la
            importancia de cómo vivimos antes del fin. En el budismo e
            hinduismo, el fin puede significar liberación o reinicio cósmico.
          </li>
          <li>
            <strong>Religión:</strong> Muchas tradiciones sugieren un juicio
            final, resurrección o vida después de la muerte. Otras creen en
            ciclos de creación y destrucción cósmica.
          </li>
          <li>
            <strong>Cultura y legado:</strong> Aunque la humanidad desaparezca,
            quedarán rastros de nuestra existencia, aunque se perderán con el
            tiempo. La literatura y el arte han imaginado diversos finales para
            el universo y la humanidad.
          </li>
          <li>
            <strong>La incógnita última:</strong> La física actual no puede
            predecir con certeza qué habrá después del fin absoluto. Puede que
            la pregunta misma sea imposible de responder.
          </li>
        </ul>
        <p className="mt-4 text-lg font-semibold text-gray-300">
          La incertidumbre sobre el "fin de todo" invita a enfocarse en el
          presente, nuestras relaciones y la búsqueda de significado. Como dijo
          Carl Sagan:
        </p>
        <blockquote className="mt-4 text-lg italic text-yellow-400">
          "Somos el medio para que el cosmos se conozca a sí mismo".
        </blockquote>
        <p className="mt-4 text-lg font-semibold text-gray-300">
          ¿Qué perspectiva te resulta más interesante o reconfortante?
        </p>
      </div>
      {/* Image of AI Response */}
      <img
        src="/answer3.webp"
        alt="AI Response"
        className="w-full md:w-3/4 lg:w-1/2 p-6 bg-gray-700 rounded-lg shadow-lg"
      />
    </div>
  );
};

export default AIResponse;
