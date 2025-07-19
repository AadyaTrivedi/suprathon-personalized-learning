export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-white text-center">
      <h1 className="text-4xl font-bold mb-4 text-indigo-700">🎓 NeuroLearn</h1>
      <p className="text-lg mb-6 text-gray-700">
        Discover your personalized learning style and study smarter.
      </p>
      <a
        href="/results"
        className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
      >
        Start Quiz →
      </a>
    </main>
  );
}
