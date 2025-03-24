import React from 'react';

const empresarios = [
  {
    nombre: "Carlos Slim",
    imagen: "https://img.lemde.fr/2024/02/12/0/0/4960/3312/664/0/75/0/31ac753_2024-02-12t202957z-1098717041-rc2716a5tn3g-rtrmadp-3-mexico-business-slim.JPG", // Asegúrate de tener esta imagen disponible
    descripcion: "Magnate de telecomunicaciones y uno de los hombres más ricos del mundo.",
  },
  {
    nombre: "Lorenzo Servitje",
    imagen: "https://cdn-3.expansion.mx/dims4/default/691c978/2147483647/strip/true/crop/671x854+0+0/resize/1200x1527!/format/webp/quality/60/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Faa%2F7e%2F03ebcce945da9ce868e7d5acd10c%2Fcaptura-de-pantalla-2017-02-03-a-las-2.07.56%20PM.png",
    descripcion: "Fundador de Grupo Bimbo, líder global en la industria panificadora.",
  },
  {
    nombre: "Ricardo Salinas Pliego",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/3/32/Ricardo_Salinas_Pliego_2020-1.jpg",
    descripcion: "Fundador de Grupo Salinas, impulsor de medios y servicios financieros.",
  },
  {
    nombre: "Alberto Baillères",
    imagen: "https://imagenes.eleconomista.com.mx/files/image_768_768/uploads/2022/02/04/66eae03984f77.png",
    descripcion: "Empresario minero y financiero, fundador del Grupo BAL y promotor del ITAM.",
  },
  {
    nombre: "Eva Gonda de Rivera",
    imagen: "https://www.infobae.com/resizer/v2/ODJQ4BIEA5AY3FKWOKZDFU53WU.jpg?auth=bd7cc9faee31a63a7d55d5144572aa6abda9763cce2f70e08cdada9f0c3973fa&smart=true&width=350&height=197&quality=85",
    descripcion: "Socia clave de FEMSA, con gran influencia en bebidas y retail.",
  },
  {
    nombre: "María A. Aramburuzabala",
    imagen: "https://i.mkt.lu/cont/2813466/350/1024/maria-asuncion-aramburuzabala-larregui.jpg",
    descripcion: "Inversionista de alto impacto, ex-socia de Grupo Modelo y líder de Tresalia.",
  },
];

export default function CarruselEmpresarios() {
  return (
    <div className="p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Empresarios Mexicanos Exitosos</h2>
      <div className="flex gap-6 min-w-max">
        {empresarios.map((empresario, index) => (
          <div
            key={index}
            className="w-48 flex-shrink-0 bg-white rounded-xl shadow-md p-2 text-center border border-gray-200"
          >
            <img
              src={empresario.imagen}
              alt={empresario.nombre}
              className="w-full h-48 object-cover rounded-lg mb-2"
            />
            <h3 className="text-md font-semibold">{empresario.nombre}</h3>
            <p className="text-xs text-gray-600 mt-1">{empresario.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
