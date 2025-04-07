// Diagram.jsx
import React from 'react';
import useClassifiedTopics from './useClassifiedTopics';
import Card from './Card';
import dataTemas from './venn-data.json';

const COLORS = {
  book1: 'bg-blue-500',
  book2: 'bg-green-500',
  book3: 'bg-red-500',
  book1book2: 'bg-purple-400',
  book1book3: 'bg-orange-400',
  book2book3: 'bg-yellow-500',
  all: 'bg-gray-400',
  empty: 'bg-transparent'
};

function Diagram({ data = dataTemas }) {
  const {
    book1Only,
    book2Only,
    book3Only,
    book1Book2,
    book1Book3,
    book2Book3,
    allThree
  } = useClassifiedTopics(data);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Diagrama de libros y temas</h1>
      
      <p className="text-xs italic mb-1">
        Libros: Utopía para realistas, 23 cosas que no te cuentan sobre el capitalismo
        y Por qué fracasan los países.
      </p>
      <p className="text-xs mb-1">
        El siguiente diagrama muestra la intersección de sus temas principales.
      </p>
      <p className="text-xs mb-3">
        Los colores representan los temas según su intersección.
      </p>
      
      <div className="grid grid-cols-3 grid-rows-3 gap-2 items-center justify-center">
        {/* Fila 1 */}
        <div className="flex justify-center">
          <Card
            title="Utopía para realistas"
            topics={book1Only}
            bgColor={COLORS.book1}
          />
        </div>
        
        <div className="flex justify-center">
          <Card
            title="Utopía + 23 cosas"
            topics={book1Book2}
            bgColor={COLORS.book1book2}
          />
        </div>
        
        <div className="flex justify-center">
          <Card
            title="23 cosas..."
            topics={book2Only}
            bgColor={COLORS.book2}
          />
        </div>

        {/* Fila 2 */}
        <div className="flex justify-center">
          <Card
            title="Utopía + Fracasan"
            topics={book1Book3}
            bgColor={COLORS.book1book3}
          />
        </div>

        <div className="flex justify-center">
          <Card
            title="Todos"
            topics={allThree}
            bgColor={COLORS.all}
          />
        </div>

        <div className="flex justify-center">
          <Card
            title="23 cosas + Fracasan"
            topics={book2Book3}
            bgColor={COLORS.book2book3}
          />
        </div>

        {/* Fila 3 */}
        <div />
        <div className="flex justify-center">
          <Card
            title="Por qué fracasan..."
            topics={book3Only}
            bgColor={COLORS.book3}
          />
        </div>
        <div />
      </div>
    </div>
  );
}

export default Diagram;
