'use client';

import { ReactNode, useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import '../styles/locomotive-scroll.css';

export default function LocomotiveScrollProvider({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    locomotiveScrollRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.1,
      tablet: {
        smooth: true,
        breakpoint: 768,
      },
      smartphone: {
        smooth: true,
      },
    });

    return () => {
      locomotiveScrollRef.current?.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
}
