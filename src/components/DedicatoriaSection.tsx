import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HandDrawnArrow, WaxSealBadge, WashiTape } from './VectorAssets';

export const DedicatoriaSection: React.FC = () => {
  const [customNotes, setCustomNotes] = useState<string[]>([
    "Cada risa contigo es mi recuerdo favorito.",
    "Prometo amarte hoy más que ayer.",
  ]);
  const [newNoteText, setNewNoteText] = useState<string>('');
  const [showNoteForm, setShowNoteForm] = useState<boolean>(false);

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (newNoteText.trim()) {
      setCustomNotes([...customNotes, newNoteText.trim()]);
      setNewNoteText('');
      setShowNoteForm(false);
    }
  };

  return (
    <section
      id="dedicatoria"
      data-section="dedicatoria"
      className="relative min-h-[120vh] w-full flex flex-col justify-center items-center px-4 py-24 bg-[#FAF7F5] bg-paper-noise overflow-hidden border-t border-b border-[#E07A5F]/15"
    >
      {/* Center Crease Shadow (Open Coffee-Table Album Book Spine) */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-16 album-spine-crease pointer-events-none z-10 hidden md:block" />

      {/* Book Spread Container */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/60 p-6 sm:p-12 rounded-xl shadow-xl border border-stone-200/80 backdrop-blur-xs z-10 will-change-transform transform-gpu"
      >
        {/* Left Book Page Annotation Marker */}
        <div className="hidden md:flex md:col-span-3 flex-col items-center justify-center space-y-6 text-center">
          <div className="relative p-4 bg-[#FAF7F5] rounded-lg border border-stone-200 shadow-sm max-w-[200px]">
            <WashiTape className="-top-3 left-1/2 -translate-x-1/2" />
            <p className="font-handwriting text-xl text-[#2B2D42] font-semibold leading-snug">
              "El amor no se mira con los ojos, sino con el alma."
            </p>
          </div>
          <HandDrawnArrow className="text-[#E07A5F]" />
        </div>

        {/* Central Dedication Column */}
        <div className="md:col-span-6 text-center space-y-6 px-2 sm:px-6">
          <WaxSealBadge className="mx-auto" size={64} />

          {/* Eyebrow */}
          <span className="inline-block text-[11px] uppercase tracking-[3px] font-sans font-bold text-[#E07A5F]">
            CAPÍTULO II — DEDICATORIA
          </span>

          {/* Headline */}
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#2B2D42] leading-tight text-balance">
            Caminar a tu lado es mi lugar favorito en el mundo.
          </h2>

          {/* Body Text */}
          <p className="font-sans text-base sm:text-lg text-[#2B2D42]/80 leading-relaxed max-w-xl mx-auto font-normal text-balance">
            No hay imagen que logre guardar todo lo que siento por ti, pero aquí están los pedacitos de tiempo donde fui más feliz. Gracias por ser mi refugio, mi risa y mi hogar.
          </p>

          {/* Interactive User Notes in Book */}
          <div className="pt-4 border-t border-stone-200/80 space-y-3">
            <div className="flex flex-wrap justify-center gap-2">
              {customNotes.map((note, i) => (
                <span
                  key={i}
                  className="inline-block font-handwriting text-lg sm:text-xl text-[#C0392B] bg-[#FAF7F5] px-3.5 py-1 rounded-md border border-[#E07A5F]/20 shadow-xs"
                >
                  "{note}"
                </span>
              ))}
            </div>

            {!showNoteForm ? (
              <button
                onClick={() => setShowNoteForm(true)}
                className="mt-2 text-xs font-sans text-[#E07A5F] hover:text-[#C0392B] font-semibold tracking-wide underline underline-offset-4 cursor-pointer"
              >
                + Escribir una dedicatoria personal
              </button>
            ) : (
              <form onSubmit={handleAddNote} className="flex gap-2 max-w-md mx-auto mt-3">
                <input
                  type="text"
                  value={newNoteText}
                  onChange={(e) => setNewNoteText(e.target.value)}
                  placeholder="Escribe tu dedicatoria..."
                  className="flex-1 px-3 py-1.5 text-xs font-sans bg-white border border-stone-300 rounded-full focus:outline-none focus:border-[#E07A5F]"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-3.5 py-1.5 bg-[#E07A5F] text-white text-xs font-sans font-semibold rounded-full hover:bg-[#C0392B] transition-colors cursor-pointer"
                >
                  Guardar
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Book Page Annotation Marker */}
        <div className="hidden md:flex md:col-span-3 flex-col items-center justify-center space-y-6 text-center">
          <HandDrawnArrow className="text-[#E07A5F]" flipped />
          <div className="relative p-4 bg-[#FAF7F5] rounded-lg border border-stone-200 shadow-sm max-w-[200px]">
            <WashiTape className="-top-3 left-1/2 -translate-x-1/2" />
            <p className="font-handwriting text-xl text-[#2B2D42] font-semibold leading-snug">
              "Para siempre no es suficiente tiempo contigo."
            </p>
          </div>
        </div>
      </motion.div>

      {/* Album Page Numbers Footer Overlay */}
      <div className="max-w-5xl w-full flex justify-between items-center text-[10px] font-bold tracking-[0.2em] uppercase text-[#6C757D]/60 mt-8 px-4 font-sans pointer-events-none">
        <span>VOL. 2024 / RECUERDOS</span>
        <span className="text-[#D4AF37]">PÁG. 014 — 015</span>
      </div>
    </section>
  );
};
