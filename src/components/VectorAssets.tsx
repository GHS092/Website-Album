import React from 'react';
import { motion } from 'motion/react';

// 1. Logo / Brand Icon: Minimal single-stroke geometric heart intertwined with infinity symbol
export const InfinityHeartLogo: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="infinityHeartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E07A5F" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#C0392B" />
      </linearGradient>
      <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="1.5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <path
      d="M 30,30 C 15,10 5,30 20,45 C 35,60 50,35 50,30 C 50,25 65,0 80,15 C 95,30 85,50 70,45 C 55,40 50,30 50,30 C 50,30 35,0 20,15 C 5,30 15,50 30,45 Z"
      stroke="url(#infinityHeartGrad)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#subtleGlow)"
    />
  </svg>
);

// 2. Vintage Album Corner Photo Mounts (#D4AF37 gold foil triangle)
export const GoldCornerMount: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({ position }) => {
  const rotationMap = {
    'top-left': 'rotate-0 top-0 left-0',
    'top-right': 'rotate-90 top-0 right-0',
    'bottom-right': 'rotate-180 bottom-0 right-0',
    'bottom-left': '-rotate-90 bottom-0 left-0',
  };

  return (
    <div className={`absolute z-20 pointer-events-none w-7 h-7 ${rotationMap[position]}`}>
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
        <defs>
          <linearGradient id={`goldFoil-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="40%" stopColor="#FFF3A8" />
            <stop offset="70%" stopColor="#AA771C" />
            <stop offset="100%" stopColor="#8A5A00" />
          </linearGradient>
        </defs>
        <path d="M 0,0 L 32,0 L 0,32 Z" fill={`url(#goldFoil-${position})`} />
        <path d="M 3,3 L 26,3 L 3,26 Z" fill="none" stroke="#FAF7F5" strokeWidth="1" strokeOpacity="0.7" />
        <circle cx="6" cy="6" r="1" fill="#8A5A00" />
      </svg>
    </div>
  );
};

// 3. Washi Tape Overlay (Semi-transparent soft-beige SVG with jagged paper edges)
export const WashiTape: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = '', style }) => (
  <div className={`absolute z-20 pointer-events-none ${className}`} style={style}>
    <svg viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-8 drop-shadow-sm opacity-85">
      <defs>
        <linearGradient id="washiGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E6DDD4" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#F5EFE8" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#E0D3C5" stopOpacity="0.85" />
        </linearGradient>
      </defs>
      <path
        d="M 2,4 L 118,2 L 116,30 L 4,28 Z"
        fill="url(#washiGrad)"
      />
      {/* Torn Paper Jagged Edges */}
      <path d="M 2,4 Q 0,10 3,16 Q 0,22 4,28" stroke="#D0C2B2" strokeWidth="1" />
      <path d="M 118,2 Q 120,9 117,16 Q 120,23 116,30" stroke="#D0C2B2" strokeWidth="1" />
      {/* Subtle translucent lines */}
      <line x1="10" y1="10" x2="110" y2="8" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
      <line x1="10" y1="20" x2="110" y2="18" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 2" />
    </svg>
  </div>
);

// 4. Wax Seal Badge (#A32828 burgundy with embossed double-heart emblem)
export const WaxSealBadge: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 56 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-lg ${className}`}
  >
    <defs>
      <radialGradient id="waxGrad" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#C0392B" />
        <stop offset="60%" stopColor="#A32828" />
        <stop offset="100%" stopColor="#5E1111" />
      </radialGradient>
      <filter id="embossFilter">
        <feGaussianBlur stdDeviation="0.8" result="blur" />
        <feSpecularLighting in="blur" surfaceScale="2" specularConstant="1" specularExponent="20" lightingColor="#FFCCCC" result="spec">
          <feDistantLight azimuth="45" elevation="60" />
        </feSpecularLighting>
        <feComposite in="spec" in2="SourceGraphic" operator="in" result="specOut" />
        <feComposite in="SourceGraphic" in2="specOut" operator="over" />
      </filter>
    </defs>

    {/* Irregular Organic Wax Seal Outer Edge */}
    <path
      d="M 50,4 C 62,2 73,8 80,15 C 88,23 96,32 94,48 C 93,62 88,75 79,84 C 68,95 52,98 38,94 C 23,90 10,80 5,65 C 0,50 4,35 12,23 C 20,10 35,5 50,4 Z"
      fill="url(#waxGrad)"
    />

    {/* Inner Wax Rim */}
    <circle cx="50" cy="50" r="36" stroke="#7A1C1C" strokeWidth="2.5" fill="none" opacity="0.6" />
    <circle cx="50" cy="50" r="34" stroke="#E67E22" strokeWidth="1" fill="none" opacity="0.3" />

    {/* Embossed Double Heart Glyph */}
    <g filter="url(#embossFilter)" opacity="0.95">
      <path
        d="M 42,42 C 37,34 26,38 29,48 C 32,58 42,65 42,65 C 42,65 52,58 55,48 C 58,38 47,34 42,42 Z"
        fill="#FFEAEA"
        stroke="#8B0000"
        strokeWidth="1.2"
      />
      <path
        d="M 58,40 C 53,32 42,36 45,46 C 48,56 58,63 58,63 C 58,63 68,56 71,46 C 74,36 63,32 58,40 Z"
        fill="#FFD2D2"
        stroke="#8B0000"
        strokeWidth="1.2"
      />
    </g>
  </svg>
);

// 5. Floating Petal/Glow Particles Canvas (Organic SVG rose petals silhouette hovering)
export const RosePetalsCanvas: React.FC = () => {
  const petals = [
    { id: 1, top: '10%', left: '8%', size: 22, duration: 9, delay: 0, rotate: 15 },
    { id: 2, top: '25%', left: '88%', size: 28, duration: 11, delay: 2, rotate: -35 },
    { id: 3, top: '50%', left: '4%', size: 18, duration: 8, delay: 4, rotate: 45 },
    { id: 4, top: '75%', left: '92%', size: 24, duration: 10, delay: 1, rotate: -20 },
    { id: 5, top: '85%', left: '15%', size: 20, duration: 12, delay: 3, rotate: 60 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute opacity-40 hover:opacity-75 transition-opacity will-change-transform transform-gpu"
          style={{ top: p.top, left: p.left, willChange: 'transform' }}
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            rotate: [p.rotate, p.rotate + 20, p.rotate - 10, p.rotate],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        >
          <svg width={p.size} height={p.size * 1.3} viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`petalGrad-${p.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E07A5F" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#C0392B" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d="M 20,2 C 35,5 42,20 38,36 C 34,48 20,52 20,52 C 20,52 6,48 2,36 C -2,20 5,5 20,2 Z"
              fill={`url(#petalGrad-${p.id})`}
            />
            <path d="M 20,10 C 20,25 20,42 20,45" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.3" strokeLinecap="round" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

// 6. Sound Wave Equalizer Icon for Header Toggle
export const EqualizerWave: React.FC<{ isPlaying: boolean }> = ({ isPlaying }) => (
  <div className="flex items-center gap-[3px] h-4">
    {[0.6, 1, 0.4, 0.8, 0.5].map((scale, i) => (
      <motion.span
        key={i}
        className="w-[3px] bg-gradient-to-t from-[#E07A5F] to-[#C0392B] rounded-full"
        animate={
          isPlaying
            ? {
                height: ['4px', `${scale * 16}px`, '4px'],
              }
            : { height: '4px' }
        }
        transition={{
          duration: 0.8 + i * 0.15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

// 7. Scroll Down Heart Indicator
export const ScrollHeartIndicator: React.FC = () => (
  <div className="flex flex-col items-center gap-2">
    <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#2B2D42]/60 font-medium">
      Desliza para hojear
    </span>
    <motion.svg
      width="28"
      height="38"
      viewBox="0 0 32 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path
        d="M 16,8 C 12,2 4,5 6,13 C 8,20 16,26 16,26 C 16,26 24,20 26,13 C 28,5 20,2 16,8 Z"
        stroke="#E07A5F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <motion.path
        d="M 16,28 L 16,38 M 11,33 L 16,38 L 21,33"
        stroke="#C0392B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  </div>
);

// 8. Hand-Drawn Sketchy Arrow
export const HandDrawnArrow: React.FC<{ className?: string; flipped?: boolean }> = ({ className = '', flipped = false }) => (
  <svg
    viewBox="0 0 100 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-20 h-8 opacity-75 ${flipped ? 'scale-x-[-1]' : ''} ${className}`}
  >
    <path
      d="M 5,20 Q 40,5 85,22 M 72,12 C 78,16 85,22 85,22 C 85,22 79,28 75,34"
      stroke="#E07A5F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 9. Custom Hand-Drawn Carousel Chevrons
export const HandDrawnChevronLeft: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M 15,5 Q 8,12 15,19 M 14,6 L 8,12 L 14,18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const HandDrawnChevronRight: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M 9,5 Q 16,12 9,19 M 10,6 L 16,12 L 10,18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 10. Gold Pulse Aura for CTA Button
export const GoldAuraPulse: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => (
  <div className="relative inline-block group cursor-pointer" onClick={onClick}>
    <motion.div
      className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E07A5F] to-[#C0392B] opacity-60 blur-md group-hover:opacity-100 transition-opacity"
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
    />
    <div className="relative">{children}</div>
  </div>
);
