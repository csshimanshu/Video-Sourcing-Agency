'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContactForm } from '../providers/ContactFormProvider';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'About', href: '#about' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { openContactForm } = useContactForm();

  return (
    <header className="fixed w-full z-[100] px-4" style={{ top: '1rem' }}>
      <div className={`container mx-auto px-6 py-2 rounded-3xl border border-white/10 backdrop-blur-md shadow-[0_8px_32px_rgb(0,0,0,0.2)] ${
        isScrolled ? 'bg-gray-900/75' : 'bg-gray-800/50'
      }`}>
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl">🎬</span>
            <span className="text-2xl font-bold font-outfit text-white">
              Vidsource
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button 
                key={item.name}
                onClick={() => {
                  const element = document.getElementById(item.href.slice(1));
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`font-medium relative transition-all text-gray-200 hover:text-white group text-[16px] font-['-apple-system',system-ui,sans-serif] ${
                  activeSection === item.href.slice(1) ? 'text-white' : ''
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                <span className="absolute inset-0 -z-10 rounded-lg transition-all duration-300 ease-out opacity-0 group-hover:opacity-20 group-hover:bg-white blur-sm"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={openContactForm}
              className="px-4 py-1.5 bg-white text-gray-900 text-sm font-bold rounded-full transition-all hover:scale-105 hover:bg-gray-100"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden mt-4 rounded-2xl border border-white/10 backdrop-blur-md shadow-[0_4px_24px_rgb(0,0,0,0.15)] ${
          isScrolled ? 'bg-gray-900/75' : 'bg-gray-800/50'
        } ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}>
          <nav className="py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const element = document.getElementById(item.href.slice(1));
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`font-medium px-4 py-2 rounded-lg relative group transition-colors text-gray-200 hover:text-white text-[16px] font-['-apple-system',system-ui,sans-serif] ${
                  activeSection === item.href.slice(1) ? 'text-white' : ''
                }`}
              >
                {item.name}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-white transition-all duration-300 ease-out scale-x-0 group-hover:scale-x-100 opacity-0 group-hover:opacity-100"></span>
                <span className="absolute inset-0 -z-10 rounded-lg transition-all duration-300 ease-out opacity-0 group-hover:opacity-20 group-hover:bg-white blur-sm"></span>
              </button>
            ))}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                openContactForm();
              }}
              className="mx-4 px-4 py-1.5 bg-white text-gray-900 text-sm font-bold rounded-full transition-all hover:scale-105 hover:bg-gray-100"
            >
              Contact Us
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
