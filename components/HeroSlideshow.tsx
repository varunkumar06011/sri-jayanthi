'use client';

import { useState, useEffect, useCallback } from 'react';

const images = [
  '/panchakarma.jpg',
  '/skin-healing.jpg',
  '/spine-care.png',
  '/camps/image2.jpg',
  '/gas-empt.png',
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  const nextIndex = useCallback((i: number) => (i + 1) % images.length, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => nextIndex(c));
    }, 5000);
    return () => clearInterval(interval);
  }, [nextIndex]);

  // Preload next image
  const preloadNext = nextIndex(current);

  return (
    <div className="absolute inset-0">
      {images.map((src, i) => {
        const isActive = i === current;
        const isNext = i === preloadNext;
        // Only render current + next to avoid loading all images
        if (!isActive && !isNext) return null;

        return (
          <div
            key={src}
            className="absolute inset-0"
            style={{
              opacity: isActive ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
            }}
          >
            <div className={`absolute inset-0 ${isActive ? 'animate-ken-burns' : ''}`}>
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={isActive ? 'high' : 'low'}
              />
            </div>
          </div>
        );
      })}
      {/* Left-to-right gradient: dark on left for text, clear on right for image */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(26,74,46,0.82) 0%, rgba(26,74,46,0.55) 35%, rgba(26,74,46,0.15) 60%, transparent 100%)',
        }}
      />
    </div>
  );
}
