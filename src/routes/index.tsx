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

function Particles({ count = 30 }: { count?: number }) {
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
      Array.from({ length: count }).map((_, i) => {
        const duration = 4.5 + Math.random() * 5.5; // 4.5s a 10s (mais rápido)
        // Delays negativos garantem que as partículas já estejam caindo assim que a página carrega
        const delay = -Math.random() * duration;
        return {
          id: i,
          left: Math.random() * 100,
          delay: Math.round(delay * 100) / 100,
          duration: Math.round(duration * 100) / 100,
          dx: (Math.random() - 0.5) * 70,
          size: 2.5 + Math.random() * 3.5,
        };
      }),
    );
  }, [count]);
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-25">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            top: "-10px",
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
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-25">
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
    const t = setTimeout(() => setShowBtn(true), 500);
    return () => clearTimeout(t);
  }, []);

  const openBook = () => {
    setStage("opening");
    setTimeout(() => setStage("book"), 1000);
  };

  return (
    <main id="main-content" className="fixed inset-0 w-full h-full overflow-hidden">
      {stage !== "book" && <Particles />}
      {stage === "opening" && <Leaves />}

      {/* INTRO */}
      <section
        className={`fixed inset-0 z-20 flex flex-col items-center justify-center px-6 text-center transition-opacity duration-1000 ${
          stage === "intro" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          background:
            "radial-gradient(ellipse at center, #0f3d23 0%, #081c10 60%, #040906 100%)",
        }}
      >
        <div className="fade-up flex flex-col items-center w-full max-w-lg px-6">
          {/* Monograma */}
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 flex items-center justify-center">
            <img
              src={monogram}
              alt="Alleane & Rafael"
              className="w-full h-full object-contain drop-shadow-[0_0_18px_rgba(212,175,55,0.5)] shimmer"
              width={288}
              height={288}
            />
          </div>

          {/* Informações */}
          <div className="flex flex-col items-center gap-3.5 text-center mt-5 sm:mt-7">
            <p className="font-serif tracking-[0.45em] text-[16px] sm:text-[18px] uppercase text-[var(--gold-soft)]">
              Save the Date
            </p>
            <div className="gold-line w-32" />
            <h1 className="font-display text-[40px] sm:text-[54px] tracking-[0.08em] uppercase leading-tight text-[var(--pearl)] drop-shadow-[0_2px_12px_rgba(212,175,55,0.25)]">
              Alleane & Rafael
            </h1>
            <p className="font-serif italic text-[var(--pearl)]/80 text-[20px] sm:text-[22px] max-w-md leading-relaxed">
              Uma nova história está prestes a começar.
            </p>
            <p className="font-numeric tracking-[0.3em] text-[22px] sm:text-[26px] text-[var(--gold-soft)] mt-2.5">
              21 · 11 · 2026
            </p>
          </div>

          {/* Botão */}
          <div
            className={`mt-12 sm:mt-14 transition-all duration-500 ${
              showBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <button className="btn-luxury text-[16px] sm:text-[18px] px-10 py-3.5" onClick={openBook}>
              Abrir Livro
            </button>
          </div>
        </div>

        {/* Espaçador na base para empurrar o conteúdo para cima */}
        <div className="h-32 sm:h-44" />
      </section>

      {/* OPENING SHEEN */}
      {stage === "opening" && (
        <div
          className="fixed inset-0 z-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(212,175,55,0.35), transparent 60%)",
            animation: "fadeUp 1.2s ease-out both",
          }}
        />
      )}

      {/* BOOK */}
      <section
        className={`fixed inset-0 z-10 flex items-center justify-center transition-opacity duration-1000 ${
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
