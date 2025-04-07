// Diagram.jsx
import React from 'react';
import useClassifiedTopics from './useClassifiedTopics';
import Card from './Card';

// Colores para cada celda
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

function Diagram({ data }) {
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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Diagrama de libros y temas</h1>
      
      <div className="grid grid-cols-3 grid-rows-3 gap-4 items-center justify-center">
        {/* Fila 1 */}
        <div className="flex justify-center">
          <Card 
            title="Utopía para realistas" 
            topics={book1Only} 
            bgColor={COLORS.book1} 
          />
        </div>
        
        <div className="flex justify-center">
          {/* Intersección Book1+Book2 */}
          <Card 
            title="Utopía para realistas + 23 cosas que no te cuentan sobre el capitalismo" 
            topics={book1Book2} 
            bgColor={COLORS.book1book2} 
          />
        </div>
        
        <div className="flex justify-center">
          <Card 
            title="23 cosas que no te cuentan sobre el capitalismo" 
            topics={book2Only} 
            bgColor={COLORS.book2} 
          />
        </div>

        {/* Fila 2 */}
        <div className="flex justify-center">
          {/* Intersección Book1+Book3 */}
          <Card 
            title="Utopía para realistas + Por qué fracasan los países" 
            topics={book1Book3} 
            bgColor={COLORS.book1book3} 
          />
        </div>

        <div className="flex justify-center">
          {/* Intersección de los tres */}
          <Card 
            title="Todos" 
            topics={allThree} 
            bgColor={COLORS.all} 
          />
        </div>

        <div className="flex justify-center">
          {/* Intersección Book2+Book3 */}
          <Card 
            title="23 cosas que no te cuentan sobre el capitalismo + Por qué fracasan los países" 
            topics={book2Book3} 
            bgColor={COLORS.book2book3} 
          />
        </div>

        {/* Fila 3 */}
        <div className="flex justify-center" />
        <div className="flex justify-center">
          <Card 
            title="Por qué fracasan los países" 
            topics={book3Only} 
            bgColor={COLORS.book3} 
          />
        </div>
        <div className="flex justify-center" />
      </div>
    </div>
  );
}

export default Diagram;
