'use client';

import { useState, useEffect, useRef } from 'react';

function Counter({ end, duration = 2000, label }: { end: number, duration?: number, label: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    countRef.current = count;
    const startTime = Date.now();
    const startValue = countRef.current;

    const updateCount = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      if (progress < 1) {
        const nextCount = Math.floor(startValue + (end - startValue) * progress);
        setCount(nextCount);
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, isVisible]);

  return (
    <div ref={elementRef} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-blue-400">
        {count}{label.includes('Support') ? '/7' : label.includes('Satisfaction') ? '%' : '+'}
      </div>
      <div className="text-sm md:text-base text-gray-300">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { value: 500, label: 'Videos Edited' },
    { value: 100, label: 'Happy Creators' },
    { value: 24, label: 'Support' },
    { value: 100, label: 'Satisfaction' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-800 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')]"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className={`container mx-auto px-4 z-10 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Elevate Your <span className="text-blue-400">YouTube</span><br />
            with Vidsource
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Professional video editing that helps you stand out.<br />
            Unleash your creativity while we handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-600 transition-all hover:scale-105 transform"
            >
              Contact Us
            </button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-white max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Counter 
                key={index} 
                end={stat.value} 
                duration={2000} 
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
