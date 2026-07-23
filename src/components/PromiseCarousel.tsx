import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BANNER_STORIES } from '../data';
import { HandDrawnChevronLeft, HandDrawnChevronRight, GoldCornerMount } from './VectorAssets';

export const PromiseCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BANNER_STORIES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + BANNER_STORIES.length) % BANNER_STORIES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % BANNER_STORIES.length);
  };

  const current = BANNER_STORIES[currentIndex];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative max-w-5xl w-full mx-auto"
    >
      {/* Main Slide Container */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#1A0508] border border-[#D4AF37]/30 min-h-[420px] sm:min-h-[460px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full grid grid-cols-1 md:grid-cols-12 items-center will-change-transform transform-gpu"
          >
            {/* Left: Wide Banner Image */}
            <div className="md:col-span-7 relative h-64 md:h-[460px] overflow-hidden">
              <GoldCornerMount position="top-left" />
              <GoldCornerMount position="bottom-left" />
              <img
                src={current.imageUrl}
                alt={current.title}
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1A0508] hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0508] via-transparent to-transparent md:hidden" />
            </div>

            {/* Right: Text & Quote */}
            <div className="md:col-span-5 p-6 sm:p-10 space-y-4 text-[#FAF7F5]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E07A5F]/20 border border-[#E07A5F]/30 text-[#E07A5F] text-xs font-sans font-semibold tracking-wider uppercase">
                <span>📍 {current.location}</span>
                <span>•</span>
                <span>{current.date}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
                {current.title}
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#FAF7F5]/80 leading-relaxed font-normal">
                {current.subtitle}
              </p>

              <blockquote className="font-serif italic text-base sm:text-lg text-[#D4AF37] border-l-2 border-[#D4AF37] pl-4 py-1">
                "{current.quote}"
              </blockquote>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Hand-Drawn Navigation Chevron Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#FAF7F5]/20 hover:bg-[#FAF7F5]/40 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer z-20 border border-white/20"
          title="Anterior"
        >
          <HandDrawnChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#FAF7F5]/20 hover:bg-[#FAF7F5]/40 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer z-20 border border-white/20"
          title="Siguiente"
        >
          <HandDrawnChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Carousel Dot Indicators */}
      <div className="flex items-center justify-center gap-2.5 mt-6">
        {BANNER_STORIES.map((story, idx) => (
          <button
            key={story.id}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentIndex === idx
                ? 'w-8 h-2.5 bg-[#D4AF37] shadow-sm'
                : 'w-2.5 h-2.5 bg-[#FAF7F5]/30 hover:bg-[#FAF7F5]/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
