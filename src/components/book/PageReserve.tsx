import { PageFrame } from "./PageFrame";
import reservePhoto from "@/assets/reserve-photo.jpg";

export function PageReserve() {
  return (
    <PageFrame pageNumber="I">
      <div className="flex flex-col items-center justify-center h-full gap-2 sm:gap-3 fade-up py-1">
        <p className="font-serif tracking-[0.4em] text-[10px] sm:text-[12px] uppercase text-[var(--gold-deep)]">
          Capítulo Um
        </p>
        <h2 className="font-display text-[22px] sm:text-[30px] tracking-[0.06em] uppercase leading-tight text-[var(--emerald)]">
          SAVE THE DATE
        </h2>
        <div className="gold-line w-20 sm:w-24" />

        {/* Foto horizontal ampliada com moldura elegante */}
        <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[16/10] my-1.5 p-1.5 bg-[var(--pearl)] border border-[rgba(212,175,55,0.4)] shadow-[0_12px_24px_-10px_rgba(0,0,0,0.25)]">
          <div className="w-full h-full border border-[var(--gold)] overflow-hidden relative">
            <img
              src={reservePhoto}
              alt="Reserve esta data"
              loading="lazy"
              width={1024}
              height={640}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <p className="font-serif text-[13px] sm:text-[15px] leading-relaxed text-[var(--ink)] max-w-[320px]">
          Com imensa felicidade, compartilhamos com você a data em que
          celebraremos nossa união matrimonial.
          <br />
          <br />
          Reserve o dia 21 de novembro de 2026 para celebrar, ao nosso lado,
          este momento único.
          <br />
          <br />
          Nosso casamento será celebrado em uma cerimônia religiosa, seguida de
          recepção. Será uma honra contar com sua presença para testemunhar o
          início deste novo capítulo de nossas vidas
        </p>
      </div>
    </PageFrame>
  );
}
