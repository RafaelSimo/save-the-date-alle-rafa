import monogram from "@/assets/ar-monogram-transparent.png";

export function Cover() {
  return (
    <div className="cover relative w-full h-full flex items-center justify-center px-3 sm:px-6 py-4 sm:py-8 text-center overflow-hidden">
      {/* Moldura dupla dourada */}
      <div className="absolute inset-2.5 sm:inset-4.5 border border-(--gold)/20 pointer-events-none" />
      <div className="absolute inset-3.5 sm:inset-6 border border-(--gold)/10 pointer-events-none" />

      <div className="flex w-full max-w-[92%] flex-col items-center justify-center gap-5 sm:gap-8 z-10">
        <div className="flex flex-col items-center gap-1.5 sm:gap-3 fade-up">
          <div className="ornament text-lg sm:text-2xl">— ❦ —</div>
          <p className="font-serif tracking-[0.6em] text-[12px] sm:text-[14px] text-(--gold-soft) uppercase">
            Save the Date
          </p>
        </div>

        <div
          className="flex flex-col items-center gap-1 sm:gap-2 fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <h1
            className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-[0.12em] uppercase leading-none"
            style={{
              color: "#E6C76A",
              textShadow: "0 2px 6px rgba(0,0,0,0.7), 0 0 1px rgba(168,134,42,1)",
            }}
          >
            Alleane
          </h1>
          <span
            className="font-script text-(--gold-soft) text-3xl sm:text-4xl md:text-5xl -my-1"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.6)" }}
          >
            &
          </span>
          <h1
            className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-[0.12em] uppercase leading-none"
            style={{
              color: "#E6C76A",
              textShadow: "0 2px 6px rgba(0,0,0,0.7), 0 0 1px rgba(168,134,42,1)",
            }}
          >
            Rafael
          </h1>
        </div>

        <div
          className="flex flex-col items-center gap-1.5 sm:gap-3 fade-up"
          style={{ animationDelay: "0.9s" }}
        >
          <div className="gold-line w-24 sm:w-40" />
          <p className="font-serif tracking-[0.45em] text-[16px] sm:text-[20px] text-(--pearl)/85 uppercase">
            21 · 11 · 2026
          </p>
          <div className="gold-line w-24 sm:w-40" />
          <p className="font-serif italic text-[12px] sm:text-[14px] text-(--pearl)/70 mt-1 sm:mt-2">
            Manaus · Amazonas
          </p>

          {/* Monograma de ouro no rodapé */}
          <img
            src={monogram}
            alt="Alleane & Rafael"
            className="w-12 sm:w-16 h-12 sm:h-16 object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] mt-4 sm:mt-6 opacity-80"
          />
        </div>
      </div>

      {/* cantoneiras douradas - exibidas no celular e desktop */}
      <div className="absolute top-2.5 sm:top-4.5 left-2.5 sm:left-4.5 w-6 sm:w-10 h-6 sm:h-10 border-t border-l border-(--gold)/60 pointer-events-none" />
      <div className="absolute top-2.5 sm:top-4.5 right-2.5 sm:right-4.5 w-6 sm:w-10 h-6 sm:h-10 border-t border-r border-(--gold)/60 pointer-events-none" />
      <div className="absolute bottom-2.5 sm:bottom-4.5 left-2.5 sm:left-4.5 w-6 sm:w-10 h-6 sm:h-10 border-b border-l border-(--gold)/60 pointer-events-none" />
      <div className="absolute bottom-2.5 sm:bottom-4.5 right-2.5 sm:right-4.5 w-6 sm:w-10 h-6 sm:h-10 border-b border-r border-(--gold)/60 pointer-events-none" />
    </div>
  );
}
