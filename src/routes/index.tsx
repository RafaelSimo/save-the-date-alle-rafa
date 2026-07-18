import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import monogram from "@/assets/ar-monogram-transparent.png";

const FlipBook = lazy(() =>
  import("../components/FlipBook").then((m) => ({ default: m.FlipBook })),
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alleane & Rafael — Save the Date" },
      {
        name: "description",
        content:
          "21 de Novembro de 2026 · Manaus, Amazonas — Uma nova história está prestes a começar.",
      },
      { property: "og:title", content: "Alleane & Rafael — Save the Date" },
      {
        property: "og:description",
        content: "21 de Novembro de 2026 · Manaus, Amazonas",
      },
    ],
  }),
  component: Index,
});

function Particles({ count = 18 }: { count?: number }) {
  const [particles, setParticles] = useState<
    {
      id: number;
      left: number;
      delay: number;
      duration: number;
      dx: number;
      size: number;
    }[]
  >([]);
  useEffect(() => {
    setParticles(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 14,
        dx: (Math.random() - 0.5) * 80,
        size: 2 + Math.random() * 4,
      })),
    );
  }, [count]);
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            bottom: "-10px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            ["--dx" as never]: `${p.dx}px`,
          }}
        />
      ))}
    </div>
  );
}

function Leaves({ count = 6 }: { count?: number }) {
  const [leaves, setLeaves] = useState<
    {
      id: number;
      left: number;
      delay: number;
      duration: number;
      dx: number;
      size: number;
    }[]
  >([]);
  useEffect(() => {
    setLeaves(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 18 + Math.random() * 18,
        dx: (Math.random() - 0.5) * 120,
        size: 14 + Math.random() * 14,
      })),
    );
  }, [count]);
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {leaves.map((l) => (
        <svg
          key={l.id}
          className="leaf"
          viewBox="0 0 24 24"
          style={{
            left: `${l.left}%`,
            width: `${l.size}px`,
            height: `${l.size}px`,
            animationDelay: `${l.delay}s`,
            animationDuration: `${l.duration}s`,
            ["--dx" as never]: `${l.dx}px`,
          }}
        >
          <path
            d="M12 2 C 18 6, 20 14, 12 22 C 4 14, 6 6, 12 2 Z"
            fill="#1a7a4e"
            opacity="0.8"
          />
          <path d="M12 4 L12 21" stroke="#0F5D3A" strokeWidth="0.5" />
        </svg>
      ))}
    </div>
  );
}

function Index() {
  const [stage, setStage] = useState<"intro" | "opening" | "book">("intro");
  const [showBtn, setShowBtn] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setShowBtn(true), 2200);
    return () => clearTimeout(t);
  }, []);

  const openBook = () => {
    setStage("opening");
    setTimeout(() => setStage("book"), 1400);
  };

  return (
    <main className="fixed inset-0 w-screen h-screen overflow-hidden">
      {stage !== "book" && <Particles />}
      {stage !== "book" && <Leaves />}

      {/* INTRO */}
      <section
        className={`absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center transition-opacity duration-1000 ${
          stage === "intro" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          background:
            "radial-gradient(ellipse at center, #0f3d23 0%, #081c10 60%, #040906 100%)",
        }}
      >
        <div className="fade-up flex flex-col items-center gap-5 w-full max-w-sm px-6">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
            <img
              src={monogram}
              alt="Alleane & Rafael"
              className="w-full h-full object-contain drop-shadow-[0_0_18px_rgba(212,175,55,0.5)] shimmer"
              width={224}
              height={224}
            />
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <p className="font-serif tracking-[0.45em] text-[12px] uppercase text-[var(--gold-soft)]">
              Save the Date
            </p>
            <div className="gold-line w-24" />
            <h1 className="font-display text-[30px] sm:text-[40px] tracking-[0.08em] uppercase leading-tight text-[var(--pearl)] drop-shadow-[0_2px_12px_rgba(212,175,55,0.25)]">
              Alleane & Rafael
            </h1>
            <p className="font-serif italic text-[var(--pearl)]/80 text-base sm:text-lg max-w-xs leading-relaxed">
              Uma nova história está prestes a começar.
            </p>
            <p className="font-numeric tracking-[0.3em] text-[18px] sm:text-[22px] text-[var(--gold-soft)] mt-2">
              21 · 11 · 2026
            </p>
          </div>
        </div>

        <div
          className={`mt-10 transition-all duration-1000 ${
            showBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <button className="btn-luxury" onClick={openBook}>
            Abrir Livro
          </button>
        </div>
      </section>

      {/* OPENING SHEEN */}
      {stage === "opening" && (
        <div
          className="absolute inset-0 z-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(212,175,55,0.35), transparent 60%)",
            animation: "fadeUp 1.2s ease-out both",
          }}
        />
      )}

      {/* BOOK */}
      <section
        className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-1000 ${
          stage === "book" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {mounted && stage === "book" && (
          <Suspense fallback={null}>
            <FlipBook />
          </Suspense>
        )}
      </section>
    </main>
  );
}
