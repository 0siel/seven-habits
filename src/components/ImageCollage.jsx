import React from "react";

function ImageCollage() {
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/SpaceX_Demo-2_Launch_%28NHQ202005300044%29_%28cropped%29.jpg/220px-SpaceX_Demo-2_Launch_%28NHQ202005300044%29_%28cropped%29.jpg",
    "https://media.es.wired.com/photos/6568c01204b0922210d0b36a/16:9/w_2560%2Cc_limit/Sam-Altman-OpenAI-Microsoft-Board-Business-1778707567.jpg",
    "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg",
    "https://etn.com.mx/blog/wp-content/uploads/2023/08/2.1-Complementaria-que-lugares-visitar-en-queretaro-scaled.jpg",

    "https://lowell.edu/wp-content/uploads/2020/02/unnamed-32.jpg",
    "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/03/16145151/ronaldo-messi.jpg",
    "",
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-white mb-8">
        My Inspirations
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 ${
              index % 2 === 0 ? "md:row-span-2" : ""
            }`}
          >
            <img
              src={src}
              alt={`Collage ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageCollage;
