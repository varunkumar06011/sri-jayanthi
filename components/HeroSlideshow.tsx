'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/camps/ayurveda 1.jpg',
  '/camps/ayurveda 2.jpg',
  '/camps/ayurveda 3.jpg',
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setCurrent((index + images.length) % images.length);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(next, 3000);
    return () => window.clearInterval(id);
  }, [paused, next]);

  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden bg-forest"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: 'opacity 0.9s ease-in-out',
            zIndex: i === current ? 1 : 0,
            pointerEvents: i === current ? 'auto' : 'none',
          }}
          aria-hidden={i !== current}
        >
          <img
            src={src}
            alt={`Slide ${i + 1}`}
            className="absolute inset-0 w-full h-full object-contain sm:object-cover object-center bg-white"
            draggable={false}
          />
        </div>
      ))}

      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(26,74,46,0.82) 0%, rgba(26,74,46,0.55) 40%, rgba(26,74,46,0.25) 70%, rgba(26,74,46,0.15) 100%)',
        }}
      />

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          prev();
        }}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-[5] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-gold text-white flex items-center justify-center backdrop-blur-sm border border-white/30 transition-colors"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          next();
        }}
        aria-label="Next slide"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-[5] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-gold text-white flex items-center justify-center backdrop-blur-sm border border-white/30 transition-colors"
      >
        <ChevronRight size={22} />
      </button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[5] flex items-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-7 bg-gold' : 'w-2 bg-white/55 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
