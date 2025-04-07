import React from 'react';
import '../../index.css'

const BOOK1 = 'Utopía para realistas';
const BOOK2 = '23 cosas que no te cuentan sobre el capitalismo';
const BOOK3 = 'Por qué fracasan los países';

function useClassifiedTopics(data) {
  const topics = {
    book1Only: [],
    book2Only: [],
    book3Only: [],
    book1Book2: [],
    book1Book3: [],
    book2Book3: [],
    allThree: [],
  };

  if (!data || !data.temas) return topics;
  
  // Clasificamos cada tema según los libros a los que pertenece
  Object.keys(data.temas).forEach((tema) => {
    const listaLibros = data.temas[tema];
    const count = listaLibros.length;

    if (count === 1) {
      if (listaLibros.includes(BOOK1)) topics.book1Only.push(tema);
      if (listaLibros.includes(BOOK2)) topics.book2Only.push(tema);
      if (listaLibros.includes(BOOK3)) topics.book3Only.push(tema);
    } else if (count === 2) {
      if (listaLibros.includes(BOOK1) && listaLibros.includes(BOOK2)) {
        topics.book1Book2.push(tema);
      } else if (listaLibros.includes(BOOK1) && listaLibros.includes(BOOK3)) {
        topics.book1Book3.push(tema);
      } else if (listaLibros.includes(BOOK2) && listaLibros.includes(BOOK3)) {
        topics.book2Book3.push(tema);
      }
    } else if (count === 3) {
      topics.allThree.push(tema);
    }
  });

  return topics;
}

export default useClassifiedTopics;
