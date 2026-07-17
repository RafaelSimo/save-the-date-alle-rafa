import { useEffect, useState } from "react";
import { PageFrame } from "./PageFrame";

const TARGET = new Date("2026-11-21T16:00:00-04:00").getTime();

function diff() {
  const ms = Math.max(0, TARGET - Date.now());
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms / 3600000) % 24);
  const m = Math.floor((ms / 60000) % 60);
  const s = Math.floor((ms / 1000) % 60);
  return { d, h, m, s };
}

export function PageCountdown() {
  const [t, setT] = useState(diff());
  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const Cell = ({ v, label }: { v: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div
        className="relative flex items-center justify-center w-[50px] sm:w-[58px] h-[60px] sm:h-[68px] bg-gradient-to-b from-[var(--pearl-warm)] to-[var(--pearl)] border border-[var(--gold)]/60"
        style={{
          boxShadow:
            "0 0 18px rgba(212,175,55,0.25), inset 0 0 12px rgba(168,134,42,0.08)",
        }}
      >
        <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[var(--gold)]" />
        <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[var(--gold)]" />
        <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[var(--gold)]" />
        <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[var(--gold)]" />
        <div className="font-numeric text-[24px] sm:text-[34px] leading-none text-[var(--emerald)] tabular-nums">
          {String(v).padStart(2, "0")}
        </div>
      </div>
      <div className="font-serif tracking-[0.3em] text-[7px] sm:text-[9px] uppercase text-[var(--gold-deep)] mt-1.5 sm:mt-2">
        {label}
      </div>
    </div>
  );

  return (
    <PageFrame pageNumber="III">
      <div className="flex flex-col items-center justify-center h-full gap-3 sm:gap-5 fade-up">
        <p className="font-serif tracking-[0.4em] text-[8px] sm:text-[10px] uppercase text-[var(--gold-deep)]">
          Contagem Regressiva
        </p>
        <h2 className="font-display text-[20px] sm:text-[26px] tracking-[0.06em] uppercase leading-tight text-[var(--emerald)] shimmer">
          Até o Grande Dia
        </h2>
        <div className="gold-line w-20 sm:w-24" />

        <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mt-1 sm:mt-2">
          <Cell v={t.d} label="Dias" />
          <Cell v={t.h} label="Horas" />
          <Cell v={t.m} label="Min" />
          <Cell v={t.s} label="Seg" />
        </div>

        <div className="gold-line w-20 sm:w-24 mt-2 sm:mt-4" />
        <p className="font-serif italic text-[var(--ink)] text-[13px] sm:text-[15px] tracking-wide">
          21 de Novembro de 2026
        </p>
      </div>
    </PageFrame>
  );
}
