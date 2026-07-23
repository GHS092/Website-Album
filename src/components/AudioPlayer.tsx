import React, { useState, useRef } from 'react';
import { EqualizerWave } from './VectorAssets';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const YOUTUBE_VIDEO_ID = '_X3PPuF_yOE'; // Río Roma - Tú Me Cambiaste La Vida

  const togglePlay = () => {
    if (!iframeRef.current?.contentWindow) return;

    if (isPlaying) {
      // Pause YouTube Video
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }),
        '*'
      );
      setIsPlaying(false);
    } else {
      // Play YouTube Video
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
        '*'
      );
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Hidden YouTube Iframe for Background Audio Playback */}
      <div className="sr-only pointer-events-none opacity-0 w-0 h-0 overflow-hidden absolute">
        <iframe
          ref={iframeRef}
          width="1"
          height="1"
          src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?enablejsapi=1&autoplay=0&loop=1&playlist=${YOUTUBE_VIDEO_ID}&origin=${encodeURIComponent(
            window.location.origin
          )}`}
          title="Río Roma - Tú Me Cambiaste La Vida"
          allow="autoplay; encrypted-media"
        />
      </div>

      {/* Main Music Control Button */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={togglePlay}
          className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/90 border border-[#E07A5F]/30 hover:border-[#E07A5F]/60 shadow-sm backdrop-blur-md text-[#2B2D42] text-xs font-sans transition-all hover:scale-105 active:scale-95 group cursor-pointer"
          title={isPlaying ? 'Pausar Río Roma' : 'Reproducir "Tú Me Cambiaste La Vida" - Río Roma'}
        >
          <EqualizerWave isPlaying={isPlaying} />
          <div className="flex flex-col items-start text-left leading-tight">
            <span className="font-semibold text-[11px] text-[#2B2D42] truncate max-w-[120px] sm:max-w-[160px]">
              Tú Me Cambiaste La Vida
            </span>
            <span className="text-[9px] text-[#E07A5F] font-bold tracking-wider uppercase">
              {isPlaying ? '♪ Sonando — Río Roma' : 'Río Roma • Reproducir'}
            </span>
          </div>
        </button>
      </div>
    </>
  );
};

