import { PageFrame } from "./PageFrame";
import couplePhoto from "@/assets/couple-placeholder.jpg";

export function PagePhoto() {
  return (
    <PageFrame pageNumber="II">
      <div className="flex flex-col items-center justify-center h-full gap-1.5 sm:gap-3 fade-up py-1">
        <p className="font-serif tracking-[0.4em] text-[10px] sm:text-[12px] uppercase text-[var(--gold-deep)]">
          Capítulo Dois
        </p>
        <h2 className="font-display text-[20px] sm:text-[30px] tracking-[0.06em] uppercase leading-tight text-[var(--emerald)]">
          PARA QUEM AMAMOS
        </h2>
        <div className="gold-line w-20 sm:w-24" />

        {/* Foto vertical no padrão original (aspect-[3/4]) */}
        <div className="relative w-full max-w-[190px] sm:max-w-[240px] aspect-[3/4] my-1 p-1.5 bg-[var(--pearl)] border border-[rgba(212,175,55,0.4)] shadow-[0_12px_24px_-10px_rgba(0,0,0,0.25)]">
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

        <p className="font-serif italic text-[12.5px] sm:text-[15px] leading-snug sm:leading-relaxed text-[var(--ink)] max-w-[310px] sm:max-w-[320px]">
          Entre tantas pessoas que cruzaram nossos caminhos, você foi lembrado
          com muito carinho. Sua presença em nossa vida tornou nossa história
          ainda mais especial, e não poderíamos imaginar este momento sem
          compartilhá-lo com você.
          <span className="block my-1 sm:my-2" />
          Enquanto o grande dia se aproxima, seguimos contando os dias para
          celebrar esse momento ao lado de quem amamos.
        </p>
      </div>
    </PageFrame>
  );
}




