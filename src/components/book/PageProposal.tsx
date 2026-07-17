import { PageFrame } from "./PageFrame";
import landscape from "@/assets/landscape-placeholder.jpg";

export function PageProposal() {
  return (
    <PageFrame pageNumber="V">
      <div className="flex flex-col items-center justify-center h-full gap-3 sm:gap-5 fade-up">
        <p className="font-serif tracking-[0.4em] text-[8px] sm:text-[10px] uppercase text-[var(--gold-deep)]">
          O Pedido
        </p>
        <h2 className="font-display text-[20px] sm:text-[26px] tracking-[0.06em] uppercase leading-tight text-[var(--emerald)]">
          Um Momento Inesquecível
        </h2>
        <div className="gold-line w-20 sm:w-24" />
        <div
          className="relative w-full max-w-[280px] aspect-[16/10] p-1.5 bg-[var(--pearl)] border border-[rgba(212,175,55,0.4)] shadow-[0_12px_24px_-10px_rgba(0,0,0,0.25)]"
        >
          <div className="w-full h-full border border-[var(--gold)] overflow-hidden relative">
            <img
              src={landscape}
              alt="Serra de Tepequém"
              loading="lazy"
              width={1024}
              height={768}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
        <p className="font-serif text-[13px] sm:text-[15px] leading-relaxed text-[var(--ink)] max-w-[280px] italic">
          No cenário deslumbrante da Serra de Tepequém,
          <br />
          um novo capítulo começou.
        </p>
      </div>
    </PageFrame>
  );
}
