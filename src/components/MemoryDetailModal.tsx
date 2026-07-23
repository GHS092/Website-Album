import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PhotoMemory } from '../types';
import { GoldCornerMount, WashiTape, WaxSealBadge } from './VectorAssets';

interface MemoryDetailModalProps {
  photo: PhotoMemory | null;
  onClose: () => void;
}

export const MemoryDetailModal: React.FC<MemoryDetailModalProps> = ({ photo, onClose }) => {
  const [likes, setLikes] = useState<number>(1);
  const [hasLiked, setHasLiked] = useState<boolean>(false);

  if (!photo) return null;

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 p-3 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto no-scrollbar flex items-center justify-center min-h-screen">
        {/* Backdrop click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ scale: 0.88, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.88, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 26, stiffness: 220 }}
          className="relative z-10 bg-[#FAF7F5] max-w-2xl w-full rounded-xl shadow-2xl overflow-y-auto max-h-[88vh] no-scrollbar border border-[#D4AF37]/40 p-5 sm:p-8 my-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#2B2D42]/60 hover:text-[#2B2D42] w-9 h-9 rounded-full bg-stone-200/70 hover:bg-stone-300 flex items-center justify-center font-bold text-lg transition-colors z-20 cursor-pointer shadow-xs"
          >
            ✕
          </button>

          {/* Washi Tape Header */}
          <WashiTape className="-top-3 left-1/2 -translate-x-1/2 rotate-1" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-2">
            {/* Left: Photo Frame */}
            <div className="relative bg-white p-3 rounded-sm shadow-md border border-stone-200 max-w-sm mx-auto w-full">
              <div className="relative aspect-[4/5] max-h-[300px] sm:max-h-[380px] rounded-[1px] overflow-hidden bg-stone-100">
                <GoldCornerMount position="top-left" />
                <GoldCornerMount position="top-right" />
                <GoldCornerMount position="bottom-left" />
                <GoldCornerMount position="bottom-right" />
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-handwriting text-xl text-center mt-2 text-[#2B2D42] font-bold">
                {photo.caption}
              </p>
            </div>

            {/* Right: Romantic Memory Story Details */}
            <div className="flex flex-col justify-between space-y-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E07A5F]/10 text-[#E07A5F] text-xs font-sans font-medium mb-3">
                  📍 {photo.location} • 📅 {photo.date}
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#2B2D42] leading-tight mb-2">
                  {photo.caption}
                </h3>

                <p className="text-sm text-[#2B2D42]/80 leading-relaxed font-sans mb-4">
                  {photo.description}
                </p>

                {photo.annotationText && (
                  <div className="bg-white/80 p-3.5 rounded-md border-l-4 border-[#E07A5F] italic font-handwriting text-xl text-[#2B2D42]/90 shadow-sm">
                    "{photo.annotationText}"
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-sans text-xs font-semibold transition-all cursor-pointer ${
                    hasLiked
                      ? 'bg-[#C0392B] text-white shadow-md'
                      : 'bg-white text-[#C0392B] border border-[#C0392B]/30 hover:bg-[#C0392B]/10'
                  }`}
                >
                  <span>♥</span>
                  <span>{hasLiked ? 'Guardado en el corazón' : 'Guardar recuerdo'}</span>
                  <span className="bg-white/20 px-1.5 py-0.5 rounded-full text-[10px]">
                    {likes}
                  </span>
                </button>

                <WaxSealBadge size={44} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
