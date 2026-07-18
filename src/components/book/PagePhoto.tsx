import { PageFrame } from "./PageFrame";
import couplePhoto from "@/assets/couple-placeholder.jpg";

export function PagePhoto() {
  return (
    <PageFrame pageNumber="II">
      <div className="flex flex-col items-center justify-center h-full w-full gap-3 sm:gap-4 fade-up">
        <p className="font-serif italic text-[var(--gold-deep)] tracking-widest text-[10px] sm:text-[12px] uppercase">
          Um Retrato
        </p>
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
          "Onde duas almas se encontram, começa para sempre."
        </p>
      </div>
    </PageFrame>
  );
}
