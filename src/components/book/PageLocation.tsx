import { PageFrame } from "./PageFrame";
import manausLocation from "@/assets/manaus-location.png";

export function PageLocation() {
  return (
    <PageFrame pageNumber="VII">
      <div className="flex flex-col items-center justify-center h-full gap-2.5 sm:gap-3.5 fade-up py-1">
        <p className="font-serif tracking-[0.4em] text-[10px] sm:text-[12px] uppercase text-[var(--gold-deep)]">
          Capítulo Cinco
        </p>
        <h2 className="font-display text-[20px] sm:text-[28px] tracking-[0.06em] uppercase leading-tight text-[var(--emerald)]">
          O altar nos espera
        </h2>
        <div className="gold-line w-20 sm:w-24" />
        <div className="relative w-full max-w-[290px] sm:max-w-[320px] aspect-[16/10] my-0.5 p-1.5 bg-[var(--pearl)] border border-[rgba(212,175,55,0.4)] shadow-[0_12px_24px_-10px_rgba(0,0,0,0.25)]">
          <div className="w-full h-full border border-[var(--gold)] overflow-hidden relative">
            <img
              src={manausLocation}
              alt="Manaus"
              loading="lazy"
              width={1024}
              height={768}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
        <p className="font-serif text-[13px] sm:text-[15px] leading-relaxed text-[var(--ink)] max-w-[310px] italic">
          Para nós, o casamento é muito mais do que uma celebração. É um
          compromisso de amor, fé e família. Por isso, escolhemos viver esse
          momento seguindo a tradição da cerimônia religiosa, onde uniremos
          nossas vidas diante de Deus.
          <br />
          <br />
          Em seguida, receberemos vocês, nossos familiares e amigos, para
          brindar conosco e compartilhar a alegria do início da nossa vida a
          dois, em uma recepção preparada com muito carinho.
        </p>
        <div className="flex flex-col items-center gap-1 sm:gap-1.5 mt-1 sm:mt-2">
          <div className="ornament text-xs sm:text-sm">— ❦ —</div>
          <p className="font-numeric text-xl sm:text-2xl text-[var(--emerald)]">
            21 · 11 · 2026
          </p>
          <p className="font-serif tracking-[0.3em] text-[10px] sm:text-[12px] uppercase text-[var(--gold-deep)]">
            Manaus — AM
          </p>
        </div>
      </div>
    </PageFrame>
  );
}
