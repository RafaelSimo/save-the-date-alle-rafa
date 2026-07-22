import { PageFrame } from "./PageFrame";

export function PageStory() {
  return (
    <PageFrame pageNumber="IV">
      <div className="flex flex-col items-center justify-center h-full gap-3 sm:gap-5 fade-up">
        <p className="font-serif tracking-[0.4em] text-[10px] sm:text-[12px] uppercase text-[var(--gold-deep)]">
          Capítulo Três
        </p>
        <h2 className="font-display text-[20px] sm:text-[28px] tracking-[0.06em] uppercase leading-tight text-[var(--emerald)] max-w-[300px]">
          UM NOVO CAPÍTULO NOS ESPERA
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
        <p className="font-serif text-[15px] sm:text-[18px] leading-relaxed text-[var(--ink)] max-w-[300px] italic">
          Em 11 de outubro de 2020, nossa história começou. Mais do que um
          simples encontro, foi o instante em que duas almas se reconheceram e
          decidiram caminhar na mesma direção.
          <br />
          <br />
          Desde então, crescemos juntos, compartilhamos sonhos, vivemos
          aventuras, superamos desafios e descobrimos que o verdadeiro amor se
          constrói nos pequenos gestos do dia a dia.
          <br />
          <br />
          Entre risos, conquistas e aprendizados, encontramos um no outro um
          amigo, um parceiro e a certeza de que fomos feitos para viver esta
          jornada lado a lado.
          <br />
          <br />
          Mas havia um momento especial que transformaria para sempre a nossa
          história...
        </p>
      </div>
    </PageFrame>
  );
}
