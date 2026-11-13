import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSlider({ slides = [], autoPlayInterval = 4500 }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const total = slides.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (idx) => {
    setCurrent(idx);
  };

  useEffect(() => {
    if (isPaused || total <= 1) return;
    timerRef.current = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(timerRef.current);
  }, [current, isPaused, total, autoPlayInterval]);

  if (!slides.length) return null;

  return (
    <div 
      className="relative w-full max-w-xl mx-auto group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative Gold Frame Border */}
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-gold-antique/30 via-emerald/20 to-gold-antique/30 blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Main Container - Aspect Ratio 4/3 prevents stretching */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-white/20 shadow-2xl bg-emerald-dark">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.src}
                alt={slide.title || 'WAMY Center Bangladesh'}
                className="w-full h-full object-cover transition-transform duration-[6000ms] ease-out transform"
                style={{
                  transform: isActive ? 'scale(1.05)' : 'scale(1.0)'
                }}
              />
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/80 via-transparent to-black/20"></div>

              {/* Slide Caption */}
              {(slide.title || slide.caption) && (
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-emerald-deep/80 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/15 text-white">
                  {slide.title && (
                    <h4 className="font-serif text-sm sm:text-base font-semibold text-gold-light">
                      {slide.title}
                    </h4>
                  )}
                  {slide.caption && (
                    <p className="text-xs sm:text-sm text-white/85 line-clamp-1 mt-0.5">
                      {slide.caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-gold-antique text-white hover:text-emerald-deep flex items-center justify-center border border-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-gold-antique text-white hover:text-emerald-deep flex items-center justify-center border border-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === current 
                  ? 'w-7 bg-gold-light shadow-gold-glow' 
                  : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
