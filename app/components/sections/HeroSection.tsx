'use client';

import { useState, useEffect } from 'react';
import { useContactForm } from '../providers/ContactFormProvider';
import RotatingText from './RotatingText';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { openContactForm } = useContactForm();

  useEffect(() => {
    setIsVisible(true);
    // Scroll to hero section on initial load
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 w-full h-full"></div>
      
      {/* Content */}
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="space-y-8 md:space-y-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[100%] mb-6 leading-tight relative">
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
          <div className="text-xl md:text-2xl leading-normal lg:text-[24px] text-gray-200 mb-8 max-w-3xl mx-auto leading-normal font-asap-condensed">
            <div className="inline">Professional </div>
            <RotatingText />
            <div className="inline"> that helps you stand out.</div>
            <div className="mt-4">Unleash your creativity while we handle the rest.</div>
          </div>
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
        </div>
      </div>
    </section>
  );
}
