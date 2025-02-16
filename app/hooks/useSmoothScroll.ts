'use client';

import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollTo = useCallback((target: HTMLElement) => {
    // Immediately scroll to the element without smooth animation
    target.scrollIntoView({ behavior: 'auto', block: 'start' });
  }, []);

  return { scrollTo };
};
