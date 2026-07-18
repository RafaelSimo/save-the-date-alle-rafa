export function Cover() {
  return (
    <div className="cover relative w-full h-full flex items-center justify-center px-3 sm:px-6 py-4 sm:py-8 text-center overflow-hidden">
      <div className="flex w-full max-w-[92%] flex-col items-center justify-center gap-3.5 sm:gap-6">
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
        </div>
      </div>

      {/* corner ornaments - hidden on mobile */}
      <div className="hidden sm:block absolute top-4 sm:top-6 left-4 sm:left-6 w-8 sm:w-10 h-8 sm:h-10 border-t border-l border-(--gold)/70" />
      <div className="hidden sm:block absolute top-4 sm:top-6 right-4 sm:right-6 w-8 sm:w-10 h-8 sm:h-10 border-t border-r border-(--gold)/70" />
      <div className="hidden sm:block absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-8 sm:w-10 h-8 sm:h-10 border-b border-l border-(--gold)/70" />
      <div className="hidden sm:block absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-8 sm:w-10 h-8 sm:h-10 border-b border-r border-(--gold)/70" />
    </div>
  );
}
