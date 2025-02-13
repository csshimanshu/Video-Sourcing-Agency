'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
            Elevate Your <span className="text-blue-400">YouTube Channel</span><br />
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
            {[
              { value: '500+', label: 'Videos Edited' },
              { value: '100+', label: 'Happy Creators' },
              { value: '24/7', label: 'Support' },
              { value: '100%', label: 'Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
