import React, { useState } from 'react';
import { HeaderNavbar } from './components/HeaderNavbar';
import { RosePetalsCanvas } from './components/VectorAssets';
import { HeroSection } from './components/HeroSection';
import { CapitulosSection } from './components/CapitulosSection';
import { DedicatoriaSection } from './components/DedicatoriaSection';
import { PromiseSection } from './components/PromiseSection';
import { MemoryDetailModal } from './components/MemoryDetailModal';
import { LoveLetterModal } from './components/LoveLetterModal';
import { PhotoMemory } from './types';

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoMemory | null>(null);
  const [isLoveLetterOpen, setIsLoveLetterOpen] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen bg-[#FAF7F5] text-[#2B2D42] font-sans antialiased selection:bg-[#E07A5F]/20 selection:text-[#C0392B] overflow-x-hidden">
      {/* Luxury Aura Background Glows */}
      <div className="fixed -bottom-32 -left-32 w-[30rem] h-[30rem] bg-[#E07A5F]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed -top-32 -right-32 w-[30rem] h-[30rem] bg-[#D4AF37]/8 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Background Floating Petals Particles */}
      <RosePetalsCanvas />

      {/* Fixed Navigation Header */}
      <HeaderNavbar />

      {/* Main Scrollytelling Sections */}
      <main className="relative z-10">
        {/* Section 1: Hero Portada */}
        <HeroSection onSelectPhoto={(photo) => setSelectedPhoto(photo)} />

        {/* Section 1.5: Nuestros Capítulos (Wall Grid) */}
        <CapitulosSection onSelectPhoto={(photo) => setSelectedPhoto(photo)} />

        {/* Section 2: La Dedicatoria & Álbum Abierto */}
        <DedicatoriaSection />

        {/* Section 3: La Promesa & Galería Banners */}
        <PromiseSection onOpenLoveLetter={() => setIsLoveLetterOpen(true)} />
      </main>

      {/* Photo Memory Detail Modal */}
      <MemoryDetailModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />

      {/* Love Letter Handwritten Modal */}
      <LoveLetterModal
        isOpen={isLoveLetterOpen}
        onClose={() => setIsLoveLetterOpen(false)}
      />
    </div>
  );
}
