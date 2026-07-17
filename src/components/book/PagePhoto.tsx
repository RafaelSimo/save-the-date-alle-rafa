import { PageFrame } from "./PageFrame";
import couplePhoto from "@/assets/couple-placeholder.jpg";

export function PagePhoto() {
  return (
    <PageFrame pageNumber="II">
      <div className="flex flex-col items-center justify-center h-full w-full gap-3 sm:gap-4 fade-up">
        <p className="font-serif italic text-[var(--gold-deep)] tracking-widest text-[8px] sm:text-[10px] uppercase">
          Um Retrato
        </p>
        <div
          className="relative w-full max-w-[260px] aspect-[3/4] overflow-hidden"
          style={{
            boxShadow:
              "0 0 0 1px var(--gold), 0 0 0 6px var(--pearl), 0 0 0 7px rgba(212,175,55,0.5), 0 20px 40px -10px rgba(0,0,0,0.35)",
          }}
        >
          <img
            src={couplePhoto}
            alt="Alleane e Rafael"
            loading="lazy"
            width={768}
            height={1024}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(15,93,58,0.05) 0%, rgba(15,93,58,0.25) 100%)",
            }}
          />
        </div>
        <p className="font-serif italic text-[var(--ink)] text-[12px] sm:text-sm mt-2 sm:mt-3">
          "Onde duas almas se encontram, começa para sempre."
        </p>
      </div>
    </PageFrame>
  );
}
