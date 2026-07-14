'use client';

import { useState } from 'react';
import { Quote } from 'lucide-react';

export default function About() {
  const [expanded, setExpanded] = useState(false);

  const preview = `Every Monsoon Has a Story. Let This Be Your Child's.

Remember the excitement when dark clouds gathered in the sky? The first drop on your hand, the scent of fresh earth, paper boats racing through tiny streams...`;

  const fullText = `Every Monsoon Has a Story. Let This Be Your Child's.

Remember the excitement when dark clouds gathered in the sky? The first drop on your hand, the scent of fresh earth, paper boats racing through tiny streams, splashing in puddles without a worry, and returning home soaked—with a heart full of joy.

Some of the happiest memories of childhood were never planned. They arrived with the rain.

RAIN brings those timeless moments back for a new generation. Designed as an immersive monsoon experience, the camp blends nature, creativity, exploration, science, arts, games, and meaningful friendships into one unforgettable journey.

Away from screens and routines, children rediscover the simple magic of playing outdoors, creating with their hands, learning through curiosity, and embracing every rainy moment with wonder. Every activity is carefully crafted to nurture confidence, imagination, teamwork, resilience, and happiness—while making memories they'll carry for a lifetime.

Because childhood isn't measured by years.
It's measured by moments that stay forever.`;

  return (
    <section id="about" className="relative overflow-hidden py-10 sm:py-14">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold mb-4">
          OUR STORY
        </span>

        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-8">
          About Knowify
          <br />
          Mazha Camp
        </h2>

        <Quote className="mx-auto mb-6 text-indigo-200" size={40} strokeWidth={1.5} />

        <div
          className={`relative text-left sm:text-center overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            expanded ? 'max-h-[2000px]' : 'max-h-[260px] sm:max-h-[220px]'
          }`}
        >
          <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
            {expanded ? fullText : preview}
          </p>

          {!expanded && (
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
          )}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-indigo-700 hover:text-indigo-900 font-semibold text-sm sm:text-base transition-colors"
        >
          {expanded ? 'Show less ▲' : 'Read more ▼'}
        </button>
      </div>
    </section>
  );
}