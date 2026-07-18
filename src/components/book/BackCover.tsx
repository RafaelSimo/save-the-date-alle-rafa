export function BackCover() {
  return (
    <div className="cover w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 gap-3 sm:gap-4">
      <div className="ornament text-lg sm:text-2xl">— ❦ —</div>
      <p className="font-display text-3xl sm:text-4xl tracking-[0.1em] text-gold shimmer">
        A &amp; R
      </p>
      <div className="gold-line w-20 sm:w-24" />
      <p className="font-serif italic text-[var(--pearl)]/70 text-[12px] sm:text-[14px] tracking-[0.3em] uppercase">
        Com amor
      </p>
    </div>
  );
}
