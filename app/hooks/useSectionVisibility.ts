'use client';

import { useState, useEffect, useRef, RefObject } from 'react';

export default function useSectionVisibility<T extends HTMLElement>(threshold = 0.2, rootMargin = '0px'): {
  sectionRef: RefObject<T>;
  isVisible: boolean;
} {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<T>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          setIsVisible(true);
          hasTriggered.current = true;
          
          // Once triggered, we can unobserve
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold, rootMargin]);

  return { sectionRef, isVisible };
}
