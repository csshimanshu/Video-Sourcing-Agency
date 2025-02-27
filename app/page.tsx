'use client';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import PortfolioSection from './components/sections/PortfolioSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import HeroSection from './components/sections/HeroSection';
import Footer from './components/layout/Footer';
import Section from './components/layout/Section';

export default function HomePage() {
  return (
    <>
      <Section id="hero">
        <HeroSection />
      </Section>
      
      <Section id="services">
        <ServicesSection />
      </Section>
      
      <Section id="portfolio">
        <PortfolioSection />
      </Section>
      
      <Section id="testimonials">
        <TestimonialsSection />
      </Section>
      
      <Section id="about">
        <AboutSection />
      </Section>
      
      <footer className="relative z-10">
        <Footer />
      </footer>
    </>
  );
}
