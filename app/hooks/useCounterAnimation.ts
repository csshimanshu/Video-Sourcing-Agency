'use client';

import { useState, useEffect, useRef } from 'react';

export default function useCounterAnimation(end: number, duration: number = 1500): number {
  const [count, setCount] = useState<number>(0);
  const frameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    // Reset count when end changes to 0
    if (end === 0) {
      setCount(0);
      return;
    }

    const animate = (currentTime: number): void => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      const elapsedTime = currentTime - startTimeRef.current;
      const progress = Math.min(elapsedTime / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);
      const easedProgress = easeOutQuart(progress);

      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure we hit the exact end number
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      startTimeRef.current = 0;
    };
  }, [end, duration]);

  return count;
}
