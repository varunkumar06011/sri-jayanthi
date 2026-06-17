'use client';

import { useState, useEffect } from 'react';

const images = [
  '/panchakarma.png',
  '/skin-healing.png',
  '/spine-care.png',
  '/camps/image2.png',
  '/gas-empt.png',
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
          }}
        >
          <div className={`absolute inset-0 ${i === current ? 'animate-ken-burns' : ''}`}>
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
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
