// Card.jsx
import React from 'react';

function Card({ title, topics = [], bgColor = 'bg-blue-400' }) {
  return (
    <div className={`w-64 min-h-[10rem] p-4 rounded-lg shadow-md text-white ${bgColor}`}>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      {topics.length > 0 ? (
        <ul className="list-disc list-inside text-sm space-y-1">
          {topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm italic">Sin temas</p>
      )}
    </div>
  );
}

export default Card;
