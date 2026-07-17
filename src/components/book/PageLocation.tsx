import { PageFrame } from "./PageFrame";
import landscape from "@/assets/landscape-placeholder.jpg";

export function PageLocation() {
  return (
    <PageFrame pageNumber="VI">
      <div className="flex flex-col items-center justify-center h-full gap-3 sm:gap-5 fade-up">
        <p className="font-serif tracking-[0.4em] text-[8px] sm:text-[10px] uppercase text-[var(--gold-deep)]">
          O Lugar
        </p>
        <h2 className="font-display text-[22px] sm:text-[28px] tracking-[0.06em] uppercase leading-tight text-[var(--emerald)]">
          Manaus
        </h2>
        <p className="font-serif italic text-[var(--ink)] -mt-1 sm:-mt-3 tracking-[0.4em] text-[9px] sm:text-[11px] uppercase">
          Amazonas
        </p>
        <div className="gold-line w-20 sm:w-24" />
        <div
          className="relative w-full max-w-[260px] aspect-[16/10] overflow-hidden"
          style={{
            boxShadow:
              "0 0 0 1px var(--gold), 0 0 0 5px var(--pearl), 0 0 0 6px rgba(212,175,55,0.5), 0 14px 30px -10px rgba(0,0,0,0.3)",
          }}
        >
          <img
            src={landscape}
            alt="Manaus paisagem"
            loading="lazy"
            width={1024}
            height={768}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <p className="font-serif text-[13px] sm:text-[15px] leading-relaxed text-[var(--ink)] max-w-[280px] italic">
          Em um lugar cuidadosamente escolhido para celebrar este momento.
        </p>
        <div className="flex flex-col items-center gap-1.5 sm:gap-2 mt-2 sm:mt-3">
          <div className="ornament text-sm sm:text-base">— ❦ —</div>
          <p className="font-numeric text-xl sm:text-2xl text-[var(--emerald)]">
            21 · 11 · 2026
          </p>
          <p className="font-serif tracking-[0.3em] text-[8px] sm:text-[10px] uppercase text-[var(--gold-deep)]">
            Manaus — AM
          </p>
        </div>
      </div>
    </PageFrame>
  );
}
