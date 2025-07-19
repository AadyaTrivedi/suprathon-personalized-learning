// app/flashcards/page.tsx

"use client";

import React, { useState } from "react";

const flashcards = [
  { question: "What is React?", answer: "A JavaScript library for building user interfaces." },
  { question: "What is JSX?", answer: "A syntax extension for JavaScript used in React." },
  { question: "What is a component?", answer: "Reusable piece of UI in React." },
];

const FlashcardsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Flashcards</h1>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 w-full max-w-md text-center">
        <p className="text-lg font-medium">
          {showAnswer ? flashcards[currentIndex].answer : flashcards[currentIndex].question}
        </p>
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          {showAnswer ? "Show Question" : "Show Answer"}
        </button>
      </div>
      <button
        onClick={nextCard}
        className="mt-6 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
      >
        Next Card
      </button>
    </div>
  );
};

export default FlashcardsPage;

