import { PageFrame } from "./PageFrame";

export function PageStory() {
  return (
    <PageFrame pageNumber="IV">
      <div className="flex flex-col items-center justify-center h-full gap-3 sm:gap-5 fade-up">
        <p className="font-serif tracking-[0.4em] text-[8px] sm:text-[10px] uppercase text-[var(--gold-deep)]">
          Capítulo Dois
        </p>
        <h2 className="font-display text-[18px] sm:text-[24px] tracking-[0.06em] uppercase leading-tight text-[var(--emerald)] max-w-[280px]">
          Nossa História Está Apenas Começando
        </h2>
        <div className="gold-line w-20 sm:w-24" />
        <svg
          width="60"
          height="40"
          viewBox="0 0 80 50"
          className="text-[var(--gold)] sm:w-20 sm:h-12"
        >
          <path
            d="M40 45 C 20 35, 10 20, 25 10 C 35 4, 40 14, 40 20 C 40 14, 45 4, 55 10 C 70 20, 60 35, 40 45 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="40" cy="22" r="2" fill="currentColor" />
        </svg>
        <p className="font-serif text-[13px] sm:text-[15px] leading-relaxed text-[var(--ink)] max-w-[280px] italic">
          Desde 2020 construímos memórias, sonhos e momentos que nos trouxeram
          até aqui.
          <br />
          <br />
          Agora nos preparamos para viver o capítulo mais especial de todos.
        </p>
      </div>
    </PageFrame>
  );
}
