import React from "react";

function AuthorScreen() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-b from-blue-600 to-purple-600 text-white px-6 py-12">
      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-8 text-center">Sobre mí</h1>

      {/* Introduction */}
      <p className="text-lg md:text-xl font-light mb-12 text-center max-w-3xl">
        Hola, mi nombre es Osiel y soy un desarrollador de software apasionado
        por la tecnología y la programación. Me encanta aprender cosas nuevas y
        compartir mi conocimiento con los demás. ¡Gracias por visitar mi sitio
        web!
      </p>
      {/* mail */}
      <a
        href="mailto:osiel.rubio.suarez@gmail.com"
        className="text-lg font-bold"
      >
        📧 osiel.rubio.suarez@gmail.com
      </a>
      <br />
      {/* GitHub */}
      <a
        href="https://github.com/0siel"
        target="_blank"
        rel="noreferrer"
        className="text-lg font-bold"
      >
        {" "}
        0siel
        <span role="img" aria-label="GitHub">
          🐙
        </span>
      </a>

      {/* Image Collage */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/SpaceX_Demo-2_Launch_%28NHQ202005300044%29_%28cropped%29.jpg/220px-SpaceX_Demo-2_Launch_%28NHQ202005300044%29_%28cropped%29.jpg"
          alt="Osiel 1"
          className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
        <img
          src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"
          alt="Osiel 2"
          className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
        <img
          src="https://static.wikia.nocookie.net/interstellarfilm/images/1/1c/Ranger_1.jpg"
          alt="Osiel 3"
          className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEA8NDw0NDw0NDw0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhMSk3Li4uFx8zRzM4Nyg2OisBCgoKDQ0NFQ0NDisZFRkrNy03Ky03KysrLS0rNysrNysuLTctKy0rKy03KysrKzcrKysrKy0tNzcrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAAAAQIDBAb/xAAjEAEBAQEAAgICAQUAAAAAAAAAARECEkEhMQNRoRMUYXGR/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECBAP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APCYnFWFHS8SqKrr7CjOhXUTAIqqlYBDFQAWBQBMhw8KgQwzAhpyDECoweJ2AnxVIIcApFSHpyAqctJymRpEUrCsVSoM+4xsb9sqqVnSqtHUEZGq8lICMLFgEyHhmDr6iMaJqqmxNVU0CqVDATYWrwXkE4fJ4ARTh+IsAQYrCoFgUALRPk5CoGmxQoFaUisOfAFF8lIucoHzGnKeY2kRWcgas+gY9s607iLFSswvEdURIOlgFYMUVgEByYOtOKpVVTYnFVNAqSqICTPCoDojEAtMyAACwDJUFgJsOqkKgkU6ASqQywDjTlEjXiIpxoJyqIJxNaWM6DLpnWmJ6xWay6TjQlEwqq8iRBFOHeTwREGqpYK65yStTqqlOLKggBRBAOmBSH4iKXBOJxoLDBEFisFiYJw8w9AFKBIeAkWKPATIqQsOQDjSM2vH0iq8v0uFIvRUVH5Fs+hGdRWqOoM1GaViixQsLD9/4UDLoLsLBE2E0hWCujslaVoqamHRFE0KwgFhYcOgXiMM5ALCxRUCoMSAmQ8OcqsBMAVAQdMwKkeKxAcRryjltxyKOYOo05gsRWbPptWXQjLEWNO4lWU4NUVBFEMUC2foVWFgJ5FpHQb4LFoqqjxNRYCOoWrqMA5DCsBIp4eKINXXJ4CBFeJ3kCKVVgwCISKsQSLDnJ9cglpOUSK5gpyN+Yzkb8xB0cT8X9HqWfl/uPPnwsvH9Gfj97PvWI4gsFZdRGNeozojLqI8WlR0MjEdKhYCcLrlpYn2AgViQTSyro0Gyel0qqopRfUTgJ6E5XRFCwxgAYYlAAlYMBFgxXMFgFpYuQ7ARIIqQYBHzPsGCcVKVg55RWvMaxnzGs5+kDkFiuuU2AjuM7F9xMgM+sRi++RmCJsTi6mQRPUE5VYn2A8faWkFgMuuf+J8a11Gg6KmxphVpUYKqkBYMPBgFYVi8KQCnB2HSwBgVhTn5AQy0wLBi8LATiau8lICcUd5GAWKwRXMFX+Pn6bSJn6XGVgqOo1s+GdoMuojGnSbBlHVTV3+SkBOJq7UUCGH1E4Ahz5/2chyAi8xOL6RojosLFUmlRdPlRgnBD0WgQPDsBMEi8LFEkvB4gg1CQCpz+AcgFU40xNQLBnopfnFUCbcT6RzGkgrTmrkTzy1xlUWJsaVHQjGp6V1CwRFieouxPUBNhdRVhcwCwodgnwAwUeQgFYjGlLAbYlVTWhOmMPAT1BIdhwCUYsBNpgcqFTGL5gIsJZWAJPgpDh0AjpRAnT5PACpfTTmI5jbmIq+FyDk9QTZ8s+11n0CKmq6TiVCwvL0dogFSyC0dAlPtUOQEXmCxeFICAZXQbxNhhoBdAAnmVUABVKwBRPiucgAcKmAZrkAA8AADE2GALC8DAK5lbfj9fBhFbSJvICCWfcABldFAEGFQEE3n2MAAUwALAABYnqgA//Z"
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
