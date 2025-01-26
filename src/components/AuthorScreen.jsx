import React from "react";

function AuthorScreen() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-b from-blue-600 to-purple-600 text-white px-6 py-12">
      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-8 text-center">
        About the Author
      </h1>

      {/* Introduction */}
      <p className="text-lg md:text-xl font-light mb-12 text-center max-w-3xl">
        Hi, I'm Osiel! I’m passionate about creating engaging learning
        experiences through technology. This project is a reflection of my
        dedication to merging education and interactivity. Let’s learn together!
      </p>

      {/* Image Collage */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/SpaceX_Demo-2_Launch_%28NHQ202005300044%29_%28cropped%29.jpg/220px-SpaceX_Demo-2_Launch_%28NHQ202005300044%29_%28cropped%29.jpg"
          alt="Osiel 1"
          className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
        <img
          src="/path-to-image2.jpg"
          alt="Osiel 2"
          className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
        <img
          src="https://static.wikia.nocookie.net/interstellarfilm/images/1/1c/Ranger_1.jpg"
          alt="Osiel 3"
          className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
        <img
          src="/path-to-image4.jpg"
          alt="Osiel 4"
          className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-200">
        Made with ❤️ by Osiel | © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default AuthorScreen;
