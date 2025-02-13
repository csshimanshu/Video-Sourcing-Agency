'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' }
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

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl">🎬</span>
            <span className={`text-2xl font-bold font-outfit ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Vidsource
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className={`font-medium transition-all hover:text-blue-500 ${
                  isScrolled ? 'text-gray-600' : 'text-white'
                } ${activeSection === item.href.slice(1) ? 'text-blue-500' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-5 relative transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}>
              <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
                isScrolled ? 'bg-gray-800' : 'bg-white'
              } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : '-translate-y-2'}`}></span>
              <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
                isScrolled ? 'bg-gray-800' : 'bg-white'
              } ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${
                isScrolled ? 'bg-gray-800' : 'bg-white'
              } ${isMobileMenuOpen ? '-rotate-45 translate-y-2' : 'translate-y-2'}`}></span>
            </div>
          </button>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`btn-primary ${
                isScrolled ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
              }`}
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <nav className="py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-medium px-4 py-2 rounded-lg transition-colors ${
                  isScrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                } ${activeSection === item.href.slice(1) ? 'text-blue-500' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary mx-4"
            >
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
