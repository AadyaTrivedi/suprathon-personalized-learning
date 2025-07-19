export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-white text-center">
      <h1 className="text-4xl font-bold mb-4 text-black-700">🎓 NeuroLearn</h1>
      <p className="text-lg mb-6 text-gray-700">
        Discover your personalised learning style and study smarter.
      </p>
      <a
        href="/results"
        className="bg-black-600 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition"
      >
        Start Quiz →
      </a>
    </main>
  );
}
