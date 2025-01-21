function AuthorScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-3xl font-semibold mb-6">About the Author</h1>
      <p className="text-lg mb-6">
        Hi, I'm Osiel! I'm passionate about creating engaging learning
        experiences.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <img
          src="/path-to-image1.jpg"
          alt="Author 1"
          className="rounded-lg shadow-lg"
        />
        <img
          src="/path-to-image2.jpg"
          alt="Author 2"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default AuthorScreen;
