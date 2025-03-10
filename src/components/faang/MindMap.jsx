// MindMap.jsx

import { motion } from "framer-motion";

const points = [
  {
    title: "Desigualdad extrema",
    text: "En Silicon Valley, la riqueza de las megatecnológicas contrasta con la crisis de personas sin hogar.",
    image: "https://i.insider.com/53273fc76da8115854d9dac5?width=1067&format=jpeg",
  },
  {
    title: "Evasión fiscal",
    text: "Las grandes empresas evaden impuestos con esquemas complejos y reciben beneficios de gobiernos.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Ricardo_Salinas_Pliego_2020-1.jpg/640px-Ricardo_Salinas_Pliego_2020-1.jpg",
  },
  {
    title: "Influencia local",
    text: "En Prineville, Facebook transformó el pueblo, generando dependencia en la comunidad.",
    image: "https://i.guim.co.uk/img/media/ecdd3d6cdd1fb4e1dba43205979546052b64c77b/0_0_4000_3000/master/4000.jpg?width=465&dpr=1&s=none&crop=none",
  },
  {
    title: "Poder de Amazon",
    text: "Amazon controla vendedores, mercados y adquiere competidores para monopolizar.",
    image: "https://assets.cmcmarkets.com/images/FAANG--1200px.jpg",
  },
  {
    title: "Comisiones de Apple",
    text: "Apple impone comisiones elevadas a desarrolladores, limitando la competencia.",
    image: "https://d3jlwjv6gmyigl.cloudfront.net/images/2021/09/apple-vs-epic.jpg",
  },
  {
    title: "Recopilación de datos",
    text: "Apple, Facebook y Amazon recopilan enormes cantidades de datos personales.",
    image: "https://imageio.forbes.com/specials-images/imageserve/64b6f66dddbe0c4d9a5b79a0/0x0.jpg?format=jpg&crop=915,514,x0,y47,safe&height=900&width=1600&fit=bounds",
  },
  {
    title: "Desigualdad política",
    text: "Zuckerberg enfrenta a legisladores con pocos recursos técnicos para regular.",
    image: "https://i.insider.com/616ff293fee39f0018fa6381?width=700",
  },
  {
    title: "BlackRock y el dinero",
    text: "BlackRock fusiona el poder financiero con el tecnológico al gestionar activos clave.",
    image: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2018/09/01/15358194276187.jpg",
  },
  {
    title: "Competencia desleal",
    text: "Las megatecnológicas eliminan startups y reducen la innovación.",
    image: "https://www.adobe.com/express/learn/blog/media_136b45dfd44d3e7072b576e86fff4fc542b5eb871.png?width=1200&format=pjpg&optimize=medium",
  },
  {
    title: "China y la tecnología",
    text: "Alibaba y TikTok, con apoyo estatal chino, desafían el poder occidental.",
    image: "https://www.pendalgroup.com/wp-content/uploads/2018/10/170123182941-trump-china-cnnmoney-exlarge-169.jpeg",
  },
];

export default function MindMap() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Mapa Mental: El poder de las Megatecnológicas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {points.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <div className="relative">
              <motion.img
                src={point.image}
                alt={point.title}
                className="w-full h-48 object-cover"
                initial={{ scale: 1.2 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-xl font-semibold opacity-0 hover:opacity-100 transition-opacity duration-500"
              >
                {point.title}
              </motion.div>
            </div>
            <div className="p-4">
              <motion.h2
                className="text-xl font-bold text-gray-800 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {point.title}
              </motion.h2>
              <motion.p
                className="text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {point.text}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
