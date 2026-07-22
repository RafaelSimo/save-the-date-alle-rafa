import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { PageFrame } from "./PageFrame";

import p1 from "@/assets/gallery/photo-1.jpg";
import p2 from "@/assets/gallery/photo-2.jpg";
import p3 from "@/assets/gallery/photo-3.jpg";
import p4 from "@/assets/gallery/photo-4.jpg";
import p5 from "@/assets/gallery/photo-5.jpg";
import p6 from "@/assets/gallery/photo-6.jpg";
import p7 from "@/assets/gallery/photo-7.jpg";
import p8 from "@/assets/gallery/photo-8.jpg";
import p9 from "@/assets/gallery/photo-9.jpg";
import p10 from "@/assets/gallery/photo-10.jpg";
import p11 from "@/assets/gallery/photo-11.jpg";
import p12 from "@/assets/gallery/photo-12.jpg";
import p13 from "@/assets/gallery/photo-13.jpg";
import p14 from "@/assets/gallery/photo-14.jpg";
import p15 from "@/assets/gallery/photo-15.jpg";
import p16 from "@/assets/gallery/photo-16.jpg";
import p17 from "@/assets/gallery/photo-17.jpg";
import p18 from "@/assets/gallery/photo-18.jpg";
import p19 from "@/assets/gallery/photo-19.jpg";
import p20 from "@/assets/gallery/photo-20.jpg";

const galleryPhotos = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
  p17,
  p18,
  p19,
  p20,
];

export function PageGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Suporte à tecla ESC para fechar o lightbox e setas do teclado para navegar
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev === 0 ? galleryPhotos.length - 1 : prev - 1) : null
        );
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev !== null ? (prev === galleryPhotos.length - 1 ? 0 : prev + 1) : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) =>
      prev !== null ? (prev === galleryPhotos.length - 1 ? 0 : prev + 1) : null
    );
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) =>
      prev !== null ? (prev === 0 ? galleryPhotos.length - 1 : prev - 1) : null
    );
  };

  // Suporte a swipe no mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
  };

  return (
    <PageFrame pageNumber="VI">
      <div className="flex flex-col items-center justify-between h-full gap-2 fade-up py-1">
        <div className="flex flex-col items-center gap-1">
          <p className="font-serif tracking-[0.4em] text-[10px] sm:text-[12px] uppercase text-[var(--gold-deep)]">
            Galeria de Memórias
          </p>
          <h2 className="font-display text-[18px] sm:text-[24px] tracking-[0.06em] uppercase leading-tight text-[var(--emerald)]">
            Nossos Momentos
          </h2>
          <div className="gold-line w-16 sm:w-20" />
        </div>

        {/* Grid de 20 miniaturas (4 colunas x 5 linhas) */}
        <div className="grid grid-cols-4 gap-1.5 sm:gap-2 w-full max-w-[320px] sm:max-w-[360px] p-1.5 bg-[var(--pearl)] border border-[rgba(212,175,55,0.35)] shadow-inner rounded-sm my-auto">
          {galleryPhotos.map((photo, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className="relative aspect-square w-full border border-[var(--gold)]/40 overflow-hidden bg-black/10 group cursor-pointer transition-transform duration-200 hover:scale-105 hover:border-[var(--gold)] hover:shadow-md focus:outline-none"
              title={`Ver foto ${idx + 1}`}
            >
              <img
                src={photo}
                alt={`Foto ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-opacity duration-200 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </button>
          ))}
        </div>

        <p className="font-serif text-[11px] sm:text-[13px] italic text-[var(--ink)] opacity-80">
          Clique nas fotos para ampliá-las
        </p>
      </div>

      {/* Lightbox / Overlay ampliado exibido sobre o livro inteiro */}
      {selectedIndex !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 transition-opacity animate-in fade-in duration-200"
            onClick={() => setSelectedIndex(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Modal Card */}
            <div
              className="relative w-[94vw] sm:w-full max-w-4xl max-h-[92vh] flex flex-col items-center justify-between p-3.5 sm:p-6 bg-[#082216]/95 border border-[var(--gold)]/60 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] text-center animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Bar: Contador à esquerda, botão de fechar X à direita */}
              <div className="w-full flex items-center justify-between pb-2.5 sm:pb-3 border-b border-[var(--gold)]/25 mb-2">
                <div className="flex items-center gap-1.5 sm:gap-2 font-serif text-xs sm:text-sm text-[var(--gold-soft)] tracking-[0.2em] uppercase">
                  <span>Foto</span>
                  <span className="font-bold text-[var(--gold)] text-xs sm:text-base px-2 py-0.5 rounded bg-black/50 border border-[var(--gold)]/40">
                    {selectedIndex + 1}
                  </span>
                  <span>de {galleryPhotos.length}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedIndex(null)}
                  className="bg-black/50 text-[var(--gold)] border border-[var(--gold)]/60 hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--emerald-deep)] rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-xl font-bold transition-all shadow-md cursor-pointer active:scale-95"
                  title="Fechar (Esc)"
                  aria-label="Fechar"
                >
                  ✕
                </button>
              </div>

              {/* Área da Imagem + Botões Laterais */}
              <div className="relative w-full flex-1 min-h-0 flex items-center justify-center my-1 sm:my-2">
                {/* Botão Anterior */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-20 text-[var(--gold)] bg-black/70 hover:bg-black/90 border border-[var(--gold)]/50 rounded-full w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center text-xl sm:text-2xl font-bold transition-all cursor-pointer hover:scale-110 shadow-lg active:scale-95"
                  title="Foto anterior"
                  aria-label="Foto anterior"
                >
                  ‹
                </button>

                {/* Imagem Ampliada */}
                <div className="max-h-[66vh] sm:max-h-[74vh] w-full flex items-center justify-center p-1">
                  <img
                    src={galleryPhotos[selectedIndex]}
                    alt={`Foto ampliada ${selectedIndex + 1}`}
                    className="max-h-[66vh] sm:max-h-[74vh] max-w-full object-contain rounded-lg border border-[var(--gold)]/40 shadow-2xl"
                  />
                </div>

                {/* Botão Próximo */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-20 text-[var(--gold)] bg-black/70 hover:bg-black/90 border border-[var(--gold)]/50 rounded-full w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center text-xl sm:text-2xl font-bold transition-all cursor-pointer hover:scale-110 shadow-lg active:scale-95"
                  title="Próxima foto"
                  aria-label="Próxima foto"
                >
                  ›
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </PageFrame>
  );
}
