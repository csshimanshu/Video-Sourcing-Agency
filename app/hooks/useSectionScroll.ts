import { useEffect } from 'react';

export function useSectionScroll() {
  useEffect(() => {
    // Add smooth scroll behavior to html element
    document.documentElement.style.scrollBehavior = 'smooth';

    // Enable native smooth scrolling
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.scrollMarginTop = '0px';
    });

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = '';
      sections.forEach(section => {
        section.style.scrollMarginTop = '';
      });
    };
  }, []);
}
