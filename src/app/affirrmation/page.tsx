"use client";
import React, { useState } from "react";
import Icon from '@mdi/react';
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';

export default function Affirmation() {
  // Array of custom affirmations
  const affirmations = [
    "I am capable of achieving my goals.",
    "Every day is a new opportunity to grow.",
    "I am confident in my abilities.",
    "I am worthy of happiness and success.",
    "Challenges help me grow stronger.",
    "I embrace change and welcome new beginnings."
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === affirmations.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? affirmations.length - 1 : prevSlide - 1
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center   p-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="relative w-full max-w-xl text-center">
        <div className="flex items-center justify-center">
          {affirmations.map((affirmation, index) => (
            <div
              key={index}
              className={`${index === currentSlide ? "flex" : "hidden"
                } flex justify-center items-center h-40 text-lg font-semibold text-black`}
            >
              <h3>{affirmation}</h3>
            </div>
          ))}
        </div>
        {/* Previous Button */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-lg hover:bg-opacity-70"
          onClick={prevSlide}
        >
          <Icon path={mdiChevronLeft} size={1.5} />
        </button>
        {/* Next Button */}
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-lg hover:bg-opacity-70"
          onClick={nextSlide}
        >
          <Icon path={mdiChevronRight} size={1.5} />
        </button>
      </div>
    </main>
  );
}

