'use client';

import useCounterAnimation from '@/app/hooks/useCounterAnimation';

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
}

export default function StatCounter({ value, suffix, label }: StatCounterProps) {
  const { displayValue, elementRef } = useCounterAnimation({
    endValue: value,
    suffix: suffix,
    duration: 2000
  });

  return (
    <div ref={elementRef} className="text-center transition-all">
      <div className="text-3xl md:text-4xl font-bold text-blue-400">{displayValue}</div>
      <div className="text-sm md:text-base text-gray-300">{label}</div>
    </div>
  );
}
