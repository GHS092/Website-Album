import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'motion/react';
import { ScrollHeartIndicator, InfinityHeartLogo, WashiTape, GoldCornerMount } from './VectorAssets';
import { PHOTO_MEMORIES } from '../data';
import { PhotoMemory } from '../types';

interface HeroSectionProps {
  onSelectPhoto?: (photo: PhotoMemory) => void;
}

// Exact 7 Horizontal Fan Slots specified
const FAN_SLOTS = [
  { targetX: -500, targetY: 10, rotate: -16, scale: 0.95, zIndex: 1 },
  { targetX: -330, targetY: 4,  rotate: -10, scale: 1.00, zIndex: 2 },
  { targetX: -165, targetY: -2, rotate: -4,  scale: 1.05, zIndex: 3 },
  { targetX: 0,    targetY: -6, rotate: 0,   scale: 1.15, zIndex: 4 },
  { targetX: 165,  targetY: -2, rotate: 4,   scale: 1.05, zIndex: 3 },
  { targetX: 330,  targetY: 4,  rotate: 10,  scale: 1.00, zIndex: 2 },
  { targetX: 500,  targetY: 10, rotate: 16,  scale: 0.95, zIndex: 1 },
];

interface FanCardItemProps {
  photo: PhotoMemory;
  slot: typeof FAN_SLOTS[0];
  index: number;
  smoothProgress: MotionValue<number>;
  onSelectPhoto?: (photo: PhotoMemory) => void;
}

interface SullyAlexisHeartProps {
  smoothProgress: MotionValue<number>;
}

const SullyAlexisHeart: React.FC<SullyAlexisHeartProps> = ({ smoothProgress }) => {
  // Sync heart appearance, heartbeat & exit with scroll
  const opacity = useTransform(smoothProgress, [0.08, 0.18, 0.25, 0.35], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0.08, 0.18, 0.25, 0.35], [0.6, 1.0, 1.0, 0.85]);
  const rotate = useTransform(smoothProgress, [0.08, 0.18], [-5, 0]);
  const y = useTransform(smoothProgress, [0.25, 0.35], [0, -20]);
  const pointerEvents = useTransform(opacity, (o) => (o < 0.1 ? 'none' : 'auto'));

  return (
    <motion.div
      style={{
        position: 'absolute',
        opacity,
        scale,
        rotate,
        y,
        pointerEvents,
        zIndex: 35,
        willChange: 'transform, opacity',
      }}
      className="absolute inset-0 m-auto w-[290px] h-[270px] sm:w-[380px] sm:h-[350px] flex items-center justify-center cursor-default select-none filter drop-shadow-[0_16px_40px_rgba(212,175,55,0.35)] drop-shadow-[0_6px_22px_rgba(224,122,95,0.22)]"
    >
      {/* Infinite Heartbeat Pulse Animation */}
      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Ambient Gold Radial Glow */}
          <div className="absolute inset-2 rounded-full bg-radial from-[#D4AF37]/30 via-[#E07A5F]/12 to-transparent blur-2xl pointer-events-none" />

          {/* Ultra-HD Vector SVG Heart Container */}
          <svg
            viewBox="0 0 400 360"
            className="w-full h-full overflow-visible drop-shadow-[0_6px_16px_rgba(0,0,0,0.08)]"
          >
            <defs>
              {/* Premium Metallic Gold Gradient Stroke */}
              <linearGradient id="goldHeartBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#BF953F" />
                <stop offset="25%" stopColor="#FCF6BA" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="75%" stopColor="#FBF5B7" />
                <stop offset="100%" stopColor="#AA771C" />
              </linearGradient>

              {/* Crisp Cream Glass Background Fill */}
              <linearGradient id="heartFillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.99" />
                <stop offset="60%" stopColor="#FAF7F5" stopOpacity="0.97" />
                <stop offset="100%" stopColor="#F5EFEA" stopOpacity="0.99" />
              </linearGradient>

              {/* Soft Inner Depth Glow */}
              <filter id="innerGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowDiff" />
                <feFlood floodColor="#D4AF37" floodOpacity="0.18" />
                <feComposite in2="shadowDiff" operator="in" />
                <feComposite in2="SourceGraphic" operator="over" />
              </filter>
            </defs>

            {/* Main Smooth Bezier Vector Heart */}
            <path
              d="M 200,340 C 130,270 30,200 30,120 C 30,60 75,25 130,25 C 168,25 188,48 200,68 C 212,48 232,25 270,25 C 325,25 370,60 370,120 C 370,200 270,270 200,340 Z"
              fill="url(#heartFillGradient)"
              stroke="url(#goldHeartBorder)"
              strokeWidth="4"
              strokeLinejoin="round"
              strokeLinecap="round"
              filter="url(#innerGlow)"
            />

            {/* Inner Dashed Delicate Gold Accent Stroke */}
            <path
              d="M 200,326 C 135,260 42,193 42,120 C 42,68 82,37 130,37 C 164,37 183,57 200,78 C 217,57 236,37 270,37 C 318,37 358,68 358,120 C 358,193 265,260 200,326 Z"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1"
              strokeDasharray="5 4"
              opacity="0.65"
            />
          </svg>

          {/* Centered High Definition Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-1 pb-6 z-20 pointer-events-none">
            {/* Top Gold Sparkle Line */}
            <div className="flex items-center gap-1.5 mb-1 sm:mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
              <div className="w-6 sm:w-10 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              <span className="text-[#D4AF37] text-xs">✦</span>
              <div className="w-6 sm:w-10 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            </div>

            {/* High Contrast Engraved Names */}
            <h2 className="font-serif italic font-extrabold text-2xl sm:text-4xl text-[#111111] tracking-wide whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.12)] flex items-center gap-1.5 sm:gap-2.5 my-0.5">
              <span className="text-[#111111] font-serif italic">Sully</span>
              <span className="text-[#D4AF37] not-italic font-serif text-2xl sm:text-4xl font-light drop-shadow-xs">&amp;</span>
              <span className="text-[#111111] font-serif italic">Alexis</span>
            </h2>

            {/* Gold Ornament Divider */}
            <div className="flex items-center gap-2 my-1 sm:my-2 w-28 sm:w-40">
              <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              <span className="text-[#D4AF37] text-[10px] sm:text-xs shrink-0">❖</span>
              <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            </div>

            {/* Sub-label */}
            <span className="font-sans text-[10px] sm:text-[12px] uppercase tracking-[0.32em] text-[#C0392B] font-bold drop-shadow-xs">
              Eterno Amor
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FanCardItem: React.FC<FanCardItemProps> = ({
  photo,
  slot,
  index,
  smoothProgress,
  onSelectPhoto,
}) => {
  // Scroll-linked accordion contraction & fade-out with spring physics (from scroll 0 to 0.22)
  const x = useTransform(smoothProgress, [0, 0.22], [slot.targetX, 0]);
  const y = useTransform(smoothProgress, [0, 0.22], [slot.targetY, 0]);
  const rotate = useTransform(smoothProgress, [0, 0.22], [slot.rotate, 0]);
  const scale = useTransform(smoothProgress, [0, 0.22], [slot.scale, slot.scale * 0.8]);
  const opacity = useTransform(smoothProgress, [0, 0.22], [1, 0]);
  const pointerEvents = useTransform(opacity, (o) => (o < 0.1 ? 'none' : 'auto'));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: slot.scale * 1.08, zIndex: 50 }}
      transition={{
        duration: 0.7,
        delay: 0.12 + index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        position: 'absolute',
        x,
        y,
        rotate,
        scale,
        opacity,
        pointerEvents,
        zIndex: slot.zIndex,
        willChange: 'transform, opacity',
      }}
      className="cursor-pointer origin-center will-change-transform transform-gpu"
      onClick={() => onSelectPhoto?.(photo)}
    >
      {/* Exact 220px x 260px Polaroid Card with 10px border & deep shadow */}
      <div className="w-[220px] h-[260px] bg-white p-2.5 pb-3 rounded-sm shadow-[0_15px_35px_rgba(0,0,0,0.18),0_3px_10px_rgba(0,0,0,0.10)] border border-stone-200/60 relative group flex flex-col justify-between transition-shadow duration-300 hover:shadow-[0_22px_50px_rgba(0,0,0,0.28)]">
        {/* Washi Tape */}
        <WashiTape
          className={
            photo.tapePosition === 'top-left'
              ? '-top-3 -left-2 -rotate-12'
              : photo.tapePosition === 'top-right'
              ? '-top-3 -right-2 rotate-12'
              : '-top-3 left-1/2 -translate-x-1/2 -rotate-2'
          }
        />

        {/* Photo Image Frame - height 170px */}
        <div className="relative w-full h-[170px] overflow-hidden rounded-[1px] border border-stone-200/80 bg-stone-100 shrink-0">
          <GoldCornerMount position="top-left" />
          <GoldCornerMount position="top-right" />
          <GoldCornerMount position="bottom-left" />
          <GoldCornerMount position="bottom-right" />

          <img
            src={photo.url}
            alt={photo.caption}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />
        </div>

        {/* Handwritten Caption & Metadata */}
        <div className="mt-1 text-center px-1 flex-1 flex flex-col justify-between">
          <p className="font-handwriting text-lg text-[#2B2D42] leading-none font-bold tracking-wide line-clamp-1">
            {photo.caption}
          </p>
          <div className="flex items-center justify-between text-[9px] text-[#2B2D42]/60 font-sans uppercase tracking-wider font-semibold border-t border-stone-200/60 pt-0.5">
            <span className="truncate max-w-[100px] text-left">{photo.location}</span>
            <span className="shrink-0">{photo.date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectPhoto }) => {
  const headlineWords = "Para el amor de mi vida, en cada momento.".split(" ");
  const heroRef = useRef<HTMLElement>(null);

  // Scroll-linked animation scoped strictly to Hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Physics spring interpolation for ultra-fluid 60fps scrolling without lag
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section
      ref={heroRef}
      id="portada"
      className="relative min-h-[110vh] w-full flex flex-col justify-center items-center text-center px-4 py-8 bg-paper-noise overflow-hidden"
    >
      {/* Decorative Accent Line */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#E07A5F]/40 to-transparent pointer-events-none" />

      {/* ========================================== */}
      {/* 1. BLOQUE SUPERIOR (Texto Principal - z-20) */}
      {/* ========================================== */}
      <div className="z-20 max-w-[680px] mx-auto space-y-2 mb-3 pt-2">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/80 border border-[#E07A5F]/20 text-[11px] font-sans tracking-[0.2em] uppercase font-semibold text-[#E07A5F] shadow-xs backdrop-blur-sm"
        >
          <InfinityHeartLogo className="w-3.5 h-3.5" />
          <span>NUESTRA HISTORIA • ÁLBUM DE RECUERDOS</span>
        </motion.div>

        {/* Animated Word-by-Word Title */}
        <h1 className="font-serif font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#2B2D42] leading-[1.1] tracking-tight text-balance mb-2">
          {headlineWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.7,
                delay: 0.2 + index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block mr-[0.25em]"
            >
              {word === "amor" || word === "vida," || word === "eterno." ? (
                <span className="italic font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E07A5F] via-[#C0392B] to-[#A32828]">
                  {word}
                </span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>
      </div>

      {/* ========================================== */}
      {/* 2. BLOQUE CENTRAL (Abanico de 7 Fotos + Corazón "Sully & Alexis") */}
      {/* ========================================== */}
      <div className="relative w-full max-w-7xl h-[320px] flex items-center justify-center my-2 z-10">
        {/* Scaled wrapper so the fan row fits smoothly without huge vertical gaps */}
        <div className="relative w-full h-full flex items-center justify-center scale-[0.62] xs:scale-[0.74] sm:scale-[0.88] md:scale-[0.95] lg:scale-100 transition-transform duration-300 origin-center">
          {PHOTO_MEMORIES.slice(0, 7).map((photo, index) => (
            <FanCardItem
              key={photo.id}
              photo={photo}
              slot={FAN_SLOTS[index]}
              index={index}
              smoothProgress={smoothProgress}
              onSelectPhoto={onSelectPhoto}
            />
          ))}
        </div>

        {/* Emergent Ultra-HD Vector Heart ("Sully & Alexis") placed at full 100% scale */}
        <SullyAlexisHeart smoothProgress={smoothProgress} />
      </div>

      {/* ========================================== */}
      {/* 3. BLOQUE INFERIOR (Subtítulo & Scroll)    */}
      {/* ========================================== */}
      <div className="z-20 max-w-xl mx-auto space-y-2 mt-3">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-sans text-base sm:text-lg text-[#2B2D42]/85 font-normal leading-relaxed text-balance"
        >
          Un recorrido por los días que transformaron nuestro universo en algo eterno.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col items-center gap-1 pt-1"
        >
          <ScrollHeartIndicator />
        </motion.div>
      </div>
    </section>
  );
};



