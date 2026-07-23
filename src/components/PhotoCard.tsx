import React from 'react';
import { PhotoMemory } from '../types';
import { GoldCornerMount, WashiTape } from './VectorAssets';

interface PhotoCardProps {
  photo: PhotoMemory;
  onClick?: () => void;
  className?: string;
  showTape?: boolean;
  showCorners?: boolean;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({
  photo,
  onClick,
  className = '',
  showTape = true,
  showCorners = true,
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white p-3 pb-11 rounded-sm shadow-xl border border-stone-200/60 relative group cursor-pointer transition-transform transition-shadow duration-300 ease-out hover:shadow-2xl hover:scale-[1.02] will-change-transform transform-gpu ${className}`}
      style={{
        transform: `rotate(${photo.rotationOffset}deg)`,
      }}
    >
      {/* Washi Tape Overlay */}
      {showTape && (
        <WashiTape
          className={
            photo.tapePosition === 'top-left'
              ? '-top-3 -left-3 -rotate-12'
              : photo.tapePosition === 'top-right'
              ? '-top-3 -right-3 rotate-12'
              : '-top-4 left-1/2 -translate-x-1/2 -rotate-2'
          }
        />
      )}

      {/* Photo Frame & Inner Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1px] border border-stone-200/80 bg-stone-100">
        {/* Vintage Gold Corner Mounts */}
        {showCorners && (
          <>
            <GoldCornerMount position="top-left" />
            <GoldCornerMount position="top-right" />
            <GoldCornerMount position="bottom-left" />
            <GoldCornerMount position="bottom-right" />
          </>
        )}

        {/* Real Memory Photo */}
        <img
          src={photo.url}
          alt={photo.caption}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Subtle photo gloss sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />
      </div>

      {/* Handwritten Caption & Metadata Frame */}
      <div className="mt-2.5 text-center px-1">
        <p className="font-handwriting text-xl sm:text-2xl text-[#2B2D42] leading-tight font-bold tracking-wide">
          {photo.caption}
        </p>
        <div className="flex items-center justify-between text-[10px] text-[#2B2D42]/60 font-sans mt-1 uppercase tracking-wider font-semibold border-t border-stone-200/60 pt-1">
          <span>{photo.location}</span>
          <span>{photo.date}</span>
        </div>
      </div>
    </div>
  );
};
