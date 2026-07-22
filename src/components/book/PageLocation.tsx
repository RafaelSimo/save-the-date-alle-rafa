import { PageFrame } from "./PageFrame";
import manausLocation from "@/assets/manaus-location.png";

export function PageLocation() {
  return (
    <PageFrame pageNumber="VII">
      <div className="flex flex-col items-center justify-center h-full gap-3 sm:gap-5 fade-up">
        <p className="font-serif tracking-[0.4em] text-[10px] sm:text-[12px] uppercase text-[var(--gold-deep)]">
          Capítulo Cinco
        </p>
        <h2 className="font-display text-[22px] sm:text-[30px] tracking-[0.06em] uppercase leading-tight text-[var(--emerald)]">
          O altar nos espera
          <div className="gold-line w-20 sm:w-24" />
        </h2>
        <div className="relative w-full max-w-[320px] aspect-[16/10] p-1.5 bg-[var(--pearl)] border border-[rgba(212,175,55,0.4)] shadow-[0_12px_24px_-10px_rgba(0,0,0,0.25)]">
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
        <p className="font-serif text-[15px] sm:text-[18px] leading-relaxed text-[var(--ink)] max-w-[300px] italic">
          Para nós, o casamento é muito mais do que uma celebração. É um
          compromisso de amor, fé e família. Por isso, escolhemos viver esse
          momento seguindo a tradição da cerimônia religiosa, onde uniremos
          nossas vidas diante de Deus.
          <br />
          <br />
          Em seguida, receberemos vocês, nossos familiares e amigos para brindar
          conosco e compartilhar a alegria do início da nossa vida a dois, em
          uma recepção preparada com muito carinho.
        </p>
        <div className="flex flex-col items-center gap-1.5 sm:gap-2 mt-2 sm:mt-3">
          <div className="ornament text-sm sm:text-base">— ❦ —</div>
          <p className="font-numeric text-2xl sm:text-3xl text-[var(--emerald)]">
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
