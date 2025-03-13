'use client';

import PortfolioSlider from './PortfolioSlider';

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-[320px] xs:max-w-lg sm:max-w-2xl lg:max-w-6xl mx-auto">
          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-3 sm:mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
              Portfolio
            </span>
          </h2>
          
          <p className="text-center text-xs xs:text-sm sm:text-base text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Take a look at some of our work. We pride ourselves in delivering high-quality video edits that help our clients grow their channels and engage their audience.
          </p>

          <PortfolioSlider />
        </div>
      </div>
    </section>
  );
}
