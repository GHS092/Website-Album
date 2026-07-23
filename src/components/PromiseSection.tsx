import React from 'react';
import { motion } from 'motion/react';
import { PromiseCarousel } from './PromiseCarousel';
import { GoldAuraPulse, WaxSealBadge, InfinityHeartLogo } from './VectorAssets';

interface PromiseSectionProps {
  onOpenLoveLetter: () => void;
}

export const PromiseSection: React.FC<PromiseSectionProps> = ({ onOpenLoveLetter }) => {
  return (
    <section
      id="promesa"
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-4 py-24 bg-[#2A080C] text-[#FAF7F5] overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,122,95,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Top Header Block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto text-center space-y-4 z-10 will-change-transform transform-gpu"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#D4AF37]/30 text-xs font-sans tracking-[0.2em] uppercase font-semibold text-[#D4AF37] backdrop-blur-sm">
          <InfinityHeartLogo className="w-4 h-4" />
          <span>CAPÍTULO III — LA PROMESA</span>
        </span>

        <h2 className="font-serif font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
          Y lo mejor aún está por venir.
        </h2>

        <p className="font-sans text-base sm:text-lg text-[#FAF7F5]/80 max-w-xl mx-auto font-normal leading-relaxed">
          Cada día a tu lado es un regalo, pero el futuro que construimos juntos es nuestro mayor tesoro.
        </p>
      </motion.div>

      {/* Center Carousel */}
      <div className="w-full my-10 z-10">
        <PromiseCarousel />
      </div>

      {/* Bottom CTA Button: Ver Carta Completa */}
      <div className="z-10 text-center space-y-6">
        <GoldAuraPulse onClick={onOpenLoveLetter}>
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E07A5F] to-[#C0392B] text-white font-sans font-bold text-base tracking-wide shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3 cursor-pointer border border-white/20">
            <WaxSealBadge size={32} />
            <span>Ver carta completa</span>
            <span className="text-xl">➔</span>
          </button>
        </GoldAuraPulse>

        <p className="text-xs font-sans text-[#FAF7F5]/60 italic">
          Haz clic para abrir la carta manuscrita dedicada a ti ♡
        </p>
      </div>

      {/* Footer copyright stamp */}
      <footer className="mt-16 text-center text-xs text-[#FAF7F5]/40 font-sans z-10 pt-8 border-t border-white/10 w-full max-w-4xl">
        <p>Nuestra Historia © Para Siempre — Hecho con amor infalible</p>
      </footer>
    </section>
  );
};
