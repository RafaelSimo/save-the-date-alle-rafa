import { PageFrame } from "./PageFrame";

export function PageReserve() {
  return (
    <PageFrame pageNumber="I">
      <div className="flex flex-col items-center justify-center h-full gap-4 sm:gap-6 fade-up">
        <p className="font-serif tracking-[0.4em] text-[8px] sm:text-[10px] uppercase text-[var(--gold-deep)]">
          Capítulo Um
        </p>
        <h2 className="font-display text-[20px] sm:text-[28px] tracking-[0.06em] uppercase leading-tight text-[var(--emerald)]">
          Reserve Esta Data
        </h2>
        <div className="gold-line w-20 sm:w-24" />
        <p className="font-serif text-[13px] sm:text-[15px] leading-relaxed text-[var(--ink)] max-w-[280px]">
          Estamos preparando um dos dias mais importantes de nossas vidas.
          <br />
          <br />
          Em breve você receberá nosso convite oficial.
          <br />
          <br />
          Até lá, queremos compartilhar com você a alegria de saber que este
          momento está chegando.
        </p>
      </div>
    </PageFrame>
  );
}
