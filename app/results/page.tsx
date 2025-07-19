// app/results/page.tsx

import React from "react";

const ResultsPage = () => {
  // Placeholder data
  const results = [
    { subject: "Math", score: 92, attempts: 3 },
    { subject: "Physics", score: 85, attempts: 2 },
    { subject: "History", score: 76, attempts: 1 },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Your Results</h1>
      <div className="space-y-4">
        {results.map((result, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">{result.subject}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Attempts: {result.attempts}
              </p>
            </div>
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              {result.score}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;

