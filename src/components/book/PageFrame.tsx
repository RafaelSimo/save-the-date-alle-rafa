import type { ReactNode } from "react";

export function PageFrame({
  children,
  pageNumber,
}: {
  children: ReactNode;
  pageNumber?: string;
}) {
  return (
    <div className="paper w-full h-full flex flex-col items-stretch text-center relative overflow-hidden">
      <div className="pointer-events-none absolute top-2 sm:top-3 left-2 sm:left-3 right-2 sm:right-3 bottom-2 sm:bottom-3 border border-[var(--gold)]/30" />
      <div className="pointer-events-none absolute top-3 sm:top-5 left-3 sm:left-5 right-3 sm:right-5 bottom-3 sm:bottom-5 border border-[var(--gold)]/15" />
      <div className="relative z-10 flex flex-col items-center w-full flex-1 min-h-0 overflow-y-auto no-scrollbar px-3 sm:px-6 pt-3 sm:pt-6 pb-1 sm:pb-2 gap-1">
        {children}
      </div>
      {pageNumber && (
        <div className="relative z-10 pb-2 sm:pb-3 font-numeric italic text-[var(--gold-deep)] text-[10px] sm:text-xs tracking-widest">
          — {pageNumber} —
        </div>
      )}
    </div>
  );
}
