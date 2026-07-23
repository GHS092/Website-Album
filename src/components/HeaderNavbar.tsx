import React, { useState, useEffect } from 'react';
import { InfinityHeartLogo } from './VectorAssets';
import { AudioPlayer } from './AudioPlayer';

export const HeaderNavbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('portada');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple intersection check for nav active state
      const sections = ['portada', 'capitulos', 'dedicatoria', 'promesa'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F5]/85 backdrop-blur-md shadow-sm border-b border-[#E07A5F]/15 py-3'
          : 'bg-[#FAF7F5]/60 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Infinity Heart Logo + Title */}
        <button
          onClick={() => scrollToSection('portada')}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
        >
          <InfinityHeartLogo className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
          <span className="font-serif italic font-bold text-lg sm:text-xl text-[#2B2D42] tracking-tight group-hover:text-[#E07A5F] transition-colors">
            Nuestra Historia
          </span>
        </button>

        {/* Center: Spanish Nav Menu */}
        <nav className="hidden md:flex items-center gap-1 bg-white/50 p-1 rounded-full border border-[#E07A5F]/10 backdrop-blur-sm">
          {[
            { id: 'portada', label: 'Portada' },
            { id: 'capitulos', label: 'Nuestros Capítulos' },
            { id: 'dedicatoria', label: 'Dedicatoria' },
            { id: 'promesa', label: 'La Promesa' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all duration-200 cursor-pointer ${
                activeSection === item.id
                  ? 'bg-[#E07A5F] text-white shadow-sm'
                  : 'text-[#2B2D42]/70 hover:text-[#2B2D42] hover:bg-white/60'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right: Sound Wave Toggle */}
        <div className="flex items-center gap-2">
          <AudioPlayer />
        </div>
      </div>
    </header>
  );
};
