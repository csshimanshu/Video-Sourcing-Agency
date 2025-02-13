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
    <header className="fixed w-full z-50 px-4" style={{ top: '1rem' }}>
      <div className={`container mx-auto px-6 py-4 rounded-2xl border border-white/10 backdrop-blur-sm ${
        isScrolled ? 'bg-white/20' : 'bg-white/5'
      }`}>
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
                  isScrolled ? 'text-gray-700' : 'text-white'
                } ${
                  activeSection === item.href.slice(1) ? 'text-blue-500' : ''
                }`}
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
            <svg
              className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
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
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary bg-white text-blue-500"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden mt-4 rounded-xl border border-white/10 backdrop-blur-sm ${
          isScrolled ? 'bg-white/20' : 'bg-white/5'
        } ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}>
          <nav className="py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-medium px-4 py-2 rounded-lg transition-colors ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                } ${
                  activeSection === item.href.slice(1) ? 'text-blue-500' : ''
                }`}
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
              Contact Us
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
