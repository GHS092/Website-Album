import React from 'react';
import { motion } from 'motion/react';
import { PHOTO_MEMORIES } from '../data';
import { PhotoMemory } from '../types';
import { WashiTape, GoldCornerMount, InfinityHeartLogo } from './VectorAssets';

interface CapitulosSectionProps {
  onSelectPhoto: (photo: PhotoMemory) => void;
}

export const CapitulosSection: React.FC<CapitulosSectionProps> = ({ onSelectPhoto }) => {
  return (
    <section
      id="capitulos"
      className="relative w-full py-28 px-4 bg-paper-noise border-t border-[#E07A5F]/15 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#E07A5F]/20 text-xs font-sans tracking-[0.2em] uppercase font-semibold text-[#E07A5F] shadow-xs">
            <InfinityHeartLogo className="w-4 h-4" />
            <span>CAPÍTULO I — NUESTROS CAPÍTULOS</span>
          </span>

          <h2 className="font-serif font-extrabold text-3xl sm:text-5xl text-[#2B2D42] leading-tight">
            Cada capítulo, un instante eterno.
          </h2>

          <p className="font-sans text-base text-[#2B2D42]/75 leading-relaxed">
            Nuestra historia escrita foto a foto. Toca cualquier recuerdo para abrir sus secretos.
          </p>
        </div>

        {/* Interactive Memory Grid Wall */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PHOTO_MEMORIES.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30, rotate: photo.rotationOffset }}
              whileInView={{ opacity: 1, y: 0, rotate: photo.rotationOffset }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -10, scale: 1.02, rotate: photo.rotationOffset }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => onSelectPhoto(photo)}
              className="group cursor-pointer bg-white p-4 pb-12 rounded-sm shadow-md hover:shadow-2xl relative border border-stone-200/80 will-change-transform transform-gpu"
              style={{ willChange: 'transform, opacity' }}
            >
              <WashiTape className="-top-3 left-1/2 -translate-x-1/2" />
              <div className="relative aspect-[4/5] rounded-[1px] overflow-hidden bg-stone-100">
                <GoldCornerMount position="top-left" />
                <GoldCornerMount position="top-right" />
                <GoldCornerMount position="bottom-left" />
                <GoldCornerMount position="bottom-right" />
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>

              <div className="mt-3 text-center space-y-1">
                <p className="font-handwriting text-2xl text-[#2B2D42] font-bold">
                  {photo.caption}
                </p>
                <div className="text-[10px] uppercase font-sans tracking-widest text-[#E07A5F] font-bold">
                  {photo.location} • {photo.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
