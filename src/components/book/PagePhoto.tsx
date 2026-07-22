import { PageFrame } from "./PageFrame";
import couplePhoto from "@/assets/couple-placeholder.jpg";

export function PagePhoto() {
  return (
    <PageFrame pageNumber="II">
      <div className="flex flex-col items-center justify-center h-full w-full gap-3 sm:gap-4 fade-up">
        <p className="font-serif tracking-[0.4em] text-[10px] sm:text-[12px] uppercase text-[var(--gold-deep)]">
          Capítulo dois
        </p>
        <h2 className="font-display text-[22px] sm:text-[30px] tracking-[0.06em] uppercase leading-tight text-[var(--emerald)]">
          PARA QUEM AMAMOS
        </h2>
        <div className="gold-line w-20 sm:w-24" />
        <div className="relative w-full max-w-[260px] aspect-[3/4] p-1.5 bg-[var(--pearl)] border border-[rgba(212,175,55,0.4)] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)]">
          <div className="w-full h-full border border-[var(--gold)] overflow-hidden relative">
            <img
              src={couplePhoto}
              alt="Alleane e Rafael"
              loading="lazy"
              width={768}
              height={1024}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
        <p className="font-serif italic text-[var(--ink)] text-[14px] sm:text-[16px] mt-2 sm:mt-3">
          Entre tantas pessoas que cruzaram nossos caminhos, você foi lembrado
          com muito carinho. Sua presença em nossa vida tornou nossa história
          ainda mais especial, e não poderíamos imaginar este momento sem
          compartilhá-lo com você.
          <br />
          <br />
          Enquanto o grande dia se aproxima, seguimos contando os dias para
          celebrar esse momento ao lado de quem amamos.
        </p>
      </div>
    </PageFrame>
  );
}
