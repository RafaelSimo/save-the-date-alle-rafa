import { PageFrame } from "./PageFrame";
import landscape from "@/assets/landscape-placeholder.jpg";

export function PageProposal() {
  return (
    <PageFrame pageNumber="V">
      <div className="flex flex-col items-center justify-center h-full gap-3 sm:gap-5 fade-up">
        <p className="font-serif tracking-[0.4em] text-[10px] sm:text-[12px] uppercase text-[var(--gold-deep)]">
          Capítulo Quatro
        </p>
        <h2 className="font-display text-[22px] sm:text-[30px] tracking-[0.06em] uppercase leading-tight text-[var(--emerald)]">
          Um Momento Inesquecível
        </h2>
        <div className="gold-line w-20 sm:w-24" />
        <div className="relative w-full max-w-[320px] aspect-[16/10] p-1.5 bg-[var(--pearl)] border border-[rgba(212,175,55,0.4)] shadow-[0_12px_24px_-10px_rgba(0,0,0,0.25)]">
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
        <p className="font-serif text-[15px] sm:text-[18px] leading-relaxed text-[var(--ink)] max-w-[300px] italic">
          Em 18 de julho de 2024, às 5h59 da manhã, no alto do Platô do
          Tepequém, diante da grandiosidade do Monte Roraima, vivemos um dos
          momentos mais inesquecíveis de nossas vidas
          <br />
          <br />
          Foi ali, em um cenário de rara beleza, que aconteceu o pedido de
          casamento mais incrível do mundo — o início oficial do nosso "para
          sempre".
          <br />
          <br />
          E, com o "sim" dito, começava um dos capítulos mais leves, felizes e
          inesquecíveis da nossa jornada: o nosso pré-wedding.
        </p>
      </div>
    </PageFrame>
  );
}
