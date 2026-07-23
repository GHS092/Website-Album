import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LOVE_LETTER } from '../data';
import { WaxSealBadge, WashiTape, GoldCornerMount } from './VectorAssets';

interface LoveLetterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoveLetterModal: React.FC<LoveLetterModalProps> = ({ isOpen, onClose }) => {
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleCopyLetter = () => {
    const text = `${LOVE_LETTER.title}\n\n${LOVE_LETTER.salutation}\n\n${LOVE_LETTER.body.join(
      '\n\n'
    )}\n\n${LOVE_LETTER.closing}\n${LOVE_LETTER.signature}`;
    navigator.clipboard.writeText(text);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Parchment Love Letter Card Frame */}
        <motion.div
          initial={{ scale: 0.88, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.88, opacity: 0, y: 30 }}
          transition={{ type: 'spring', damping: 26, stiffness: 220 }}
          className="relative z-10 bg-[#FAF7F5] max-w-2xl w-full rounded-md shadow-2xl border-2 border-[#D4AF37]/40 text-[#2B2D42] max-h-[90vh] flex flex-col"
        >
          {/* Fixed Corner Mounts & Washi Tape on Frame */}
          <GoldCornerMount position="top-left" />
          <GoldCornerMount position="top-right" />
          <GoldCornerMount position="bottom-left" />
          <GoldCornerMount position="bottom-right" />
          <WashiTape className="-top-3 left-1/2 -translate-x-1/2 z-30" />

          {/* Close button - Fixed on Frame */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#2B2D42]/60 hover:text-[#2B2D42] w-8 h-8 rounded-full bg-stone-200/80 hover:bg-stone-300 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer z-30 shadow-xs"
          >
            ✕
          </button>

          {/* Scrollable Letter Body Container */}
          <div className="overflow-y-auto w-full flex-1 p-6 sm:p-10 no-scrollbar relative z-10">
            {/* Letter Header */}
            <div className="text-center space-y-2 mb-8 pt-2 border-b border-stone-200/80 pb-6">
              <WaxSealBadge size={52} className="mx-auto mb-2" />
              <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#E07A5F] font-bold">
                {LOVE_LETTER.date}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2D42]">
                {LOVE_LETTER.title}
              </h2>
            </div>

            {/* Letter Body in Handwritten Style */}
            <div className="space-y-6 text-lg sm:text-2xl font-handwriting leading-relaxed text-[#2B2D42]/90">
              <p className="font-bold text-2xl sm:text-3xl text-[#C0392B]">
                {LOVE_LETTER.salutation}
              </p>

              {LOVE_LETTER.body.map((paragraph, index) => (
                <p key={index} className="indent-4">
                  {paragraph}
                </p>
              ))}

              <div className="pt-6 border-t border-stone-200/80 text-right space-y-1">
                <p className="italic text-[#E07A5F]">{LOVE_LETTER.closing}</p>
                <p className="font-bold text-2xl sm:text-3xl text-[#2B2D42]">
                  {LOVE_LETTER.signature}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-200">
              <button
                onClick={handleCopyLetter}
                className="px-4 py-2 bg-white border border-[#E07A5F]/30 hover:border-[#E07A5F] rounded-full text-xs font-sans font-semibold text-[#2B2D42] transition-colors shadow-xs cursor-pointer"
              >
                {hasCopied ? '✓ Copiada al portapapeles' : '📋 Copiar carta'}
              </button>

              <button
                onClick={onClose}
                className="px-6 py-2 bg-[#E07A5F] hover:bg-[#C0392B] text-white rounded-full text-xs font-sans font-semibold transition-colors shadow-sm cursor-pointer"
              >
                Guardar en mi corazón
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
