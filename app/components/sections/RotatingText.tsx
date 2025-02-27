'use client';

import { useState, useEffect } from 'react';

const words = [
  { text: 'Video Editing', color: 'text-blue-400' },
  { text: 'Thumbnail Design', color: 'text-green-400' },
  { text: 'Channel Management', color: 'text-purple-400' },
  { text: 'SEO Optimization', color: 'text-pink-400' }
];

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 500); // Half of the transition time for smooth animation
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex flex-col items-center min-w-[160px]">
      <span className="relative block text-center">
        <span
          className={`inline-block transition-all duration-500 font-['Helvetica'] tracking-tight ${
            isAnimating 
              ? 'opacity-0 -translate-y-2' 
              : 'opacity-100 translate-y-0'
          } ${words[currentIndex].color} font-bold`}
        >
          {words[currentIndex].text}
        </span>
      </span>
      <span 
        className={`block h-[2px] mt-1 w-full transition-all duration-500 ${
          isAnimating ? 'scale-x-0' : 'scale-x-100'
        } ${words[currentIndex].color}`}
        style={{
          background: 'currentColor'
        }}
      />
    </span>
  );
}
