import { PageFrame } from "./PageFrame";
import monogram from "@/assets/ar-monogram-transparent.png";

export function PageFinal() {
  return (
    <PageFrame pageNumber="VII">
      <div className="flex flex-col items-center justify-center h-full gap-3 sm:gap-5 fade-up text-center">
        <div className="ornament text-lg sm:text-2xl">— ❦ —</div>
        <h2 className="font-display text-[22px] sm:text-[30px] tracking-[0.06em] uppercase leading-tight text-[var(--emerald)] max-w-[300px]">
          O melhor ainda está por vir.
        </h2>
        <div className="gold-line w-20 sm:w-24" />
        <p className="font-serif italic text-[var(--ink)] text-[14px] sm:text-[16px] max-w-[280px]">
          Em breve você receberá nosso convite oficial.
        </p>
        <div className="flex flex-col items-center gap-1 mt-4 sm:mt-6">
          <img
            src={monogram}
            alt="Alleane & Rafael"
            className="w-14 sm:w-16 h-14 sm:h-16 object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.5)] shimmer"
          />
          <div className="gold-line w-24 sm:w-32 mt-1.5 sm:mt-2" />
          <p className="font-serif tracking-[0.45em] text-[14px] sm:text-[16px] uppercase text-[var(--gold-deep)] mt-1.5 sm:mt-2">
            21 · 11 · 2026
          </p>
        </div>
      </div>
    </PageFrame>
  );
}
