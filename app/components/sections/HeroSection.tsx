'use client';

import { useState, useEffect } from 'react';
import { useContactForm } from '../providers/ContactFormProvider';
import StatCounter from './StatCounter';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { openContactForm } = useContactForm();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50"></div>
        
        {/* Animated pattern */}
        <div className="absolute inset-0 opacity-10 animate-float">
          <div 
            className="absolute inset-0 bg-repeat bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')]"
          ></div>
        </div>
      </div>
      
      {/* Content */}
      {/* Decorative shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="space-y-8 md:space-y-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight relative">
            Elevate Your{' '}
            <span className="text-blue-400 inline-flex items-center mb-[1rem]">
              <img 
                src="/Images/Logo_of_YouTube_(2015-2017).svg.png"
                alt="YouTube"
                className="h-[1.2em] object-contain bg-white rounded-lg p-1.5 translate-y-[0.3em]"
              />
            </span><br />
            with Vidsource
          </h1>
          <p className="font-handwriting text-2xl md:text-3xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional video editing that helps you stand out.<br />
            Unleash your creativity while we handle the rest.
          </p>
          <div className="relative">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={openContactForm}
                className="group relative bg-gradient-to-r from-white to-gray-100 text-gray-900 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-[1.02] hover:translate-y-[-2px] active:translate-y-0"
              >
                <span className="relative z-10 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                  Let's get started
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/80 to-white/40 blur-sm transition-all duration-300 group-hover:blur-md"></div>
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur transition-all duration-300 group-hover:blur-md opacity-0 group-hover:opacity-100"></div>
              </button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-white max-w-4xl mx-auto">
            <StatCounter value={500} suffix="+" label="Videos Edited" />
            <StatCounter value={100} suffix="+" label="Happy Creators" />
            <StatCounter value={24} suffix="/7" label="Support" />
            <StatCounter value={100} suffix="%" label="Satisfaction" />
          </div>
        </div>
      </div>
    </section>
  );
}
