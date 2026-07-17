import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect, Suspense, lazy } from "react";
const monogram = "/assets/ar-monogram-transparent-x9-flqyx.png";
const FlipBook = lazy(() => import("./FlipBook-C6LHz0NX.js").then((m) => ({
  default: m.FlipBook
})));
function Particles({
  count = 18
}) {
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    setParticles(Array.from({
      length: count
    }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 10 + Math.random() * 14,
      dx: (Math.random() - 0.5) * 80,
      size: 2 + Math.random() * 4
    })));
  }, [count]);
  return /* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed inset-0 overflow-hidden z-0", children: particles.map((p) => /* @__PURE__ */ jsx("span", { className: "particle", style: {
    left: `${p.left}%`,
    bottom: "-10px",
    width: `${p.size}px`,
    height: `${p.size}px`,
    animationDelay: `${p.delay}s`,
    animationDuration: `${p.duration}s`,
    ["--dx"]: `${p.dx}px`
  } }, p.id)) });
}
function Leaves({
  count = 6
}) {
  const [leaves, setLeaves] = useState([]);
  useEffect(() => {
    setLeaves(Array.from({
      length: count
    }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 18 + Math.random() * 18,
      dx: (Math.random() - 0.5) * 120,
      size: 14 + Math.random() * 14
    })));
  }, [count]);
  return /* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed inset-0 overflow-hidden z-0", children: leaves.map((l) => /* @__PURE__ */ jsxs("svg", { className: "leaf", viewBox: "0 0 24 24", style: {
    left: `${l.left}%`,
    width: `${l.size}px`,
    height: `${l.size}px`,
    animationDelay: `${l.delay}s`,
    animationDuration: `${l.duration}s`,
    ["--dx"]: `${l.dx}px`
  }, children: [
    /* @__PURE__ */ jsx("path", { d: "M12 2 C 18 6, 20 14, 12 22 C 4 14, 6 6, 12 2 Z", fill: "#1a7a4e", opacity: "0.8" }),
    /* @__PURE__ */ jsx("path", { d: "M12 4 L12 21", stroke: "#0F5D3A", strokeWidth: "0.5" })
  ] }, l.id)) });
}
function Index() {
  const [stage, setStage] = useState("intro");
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
  return /* @__PURE__ */ jsxs("main", { className: "fixed inset-0 w-screen h-screen overflow-hidden", children: [
    /* @__PURE__ */ jsx(Particles, {}),
    /* @__PURE__ */ jsx(Leaves, {}),
    /* @__PURE__ */ jsxs("section", { className: `absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center transition-opacity duration-1000 ${stage === "intro" ? "opacity-100" : "opacity-0 pointer-events-none"}`, style: {
      background: "radial-gradient(ellipse at center, #0a1f12 0%, #050505 70%)"
    }, children: [
      /* @__PURE__ */ jsxs("div", { className: "fade-up flex flex-col items-center gap-5 w-full max-w-sm px-6", children: [
        /* @__PURE__ */ jsx("div", { className: "relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center", children: /* @__PURE__ */ jsx("img", { src: monogram, alt: "Alleane & Rafael", className: "w-full h-full object-contain drop-shadow-[0_0_18px_rgba(212,175,55,0.5)] shimmer", width: 224, height: 224 }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2 text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "font-serif tracking-[0.45em] text-[12px] uppercase text-[var(--gold-soft)]", children: "Save the Date" }),
          /* @__PURE__ */ jsx("div", { className: "gold-line w-24" }),
          /* @__PURE__ */ jsx("h1", { className: "font-display text-[30px] sm:text-[40px] tracking-[0.08em] uppercase leading-tight text-[var(--pearl)] drop-shadow-[0_2px_12px_rgba(212,175,55,0.25)]", children: "Alleane & Rafael" }),
          /* @__PURE__ */ jsx("p", { className: "font-serif italic text-[var(--pearl)]/80 text-base sm:text-lg max-w-xs leading-relaxed", children: "Uma nova história está prestes a começar." }),
          /* @__PURE__ */ jsx("p", { className: "font-numeric tracking-[0.3em] text-[13px] text-[var(--gold-soft)] mt-1", children: "21 · 11 · 2026" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `mt-10 transition-all duration-1000 ${showBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`, children: /* @__PURE__ */ jsx("button", { className: "btn-luxury", onClick: openBook, children: "Abrir Livro" }) })
    ] }),
    stage === "opening" && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-30 pointer-events-none", style: {
      background: "radial-gradient(circle at center, rgba(212,175,55,0.35), transparent 60%)",
      animation: "fadeUp 1.2s ease-out both"
    } }),
    /* @__PURE__ */ jsx("section", { className: `absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-1000 ${stage === "book" ? "opacity-100" : "opacity-0 pointer-events-none"}`, children: mounted && stage === "book" && /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(FlipBook, {}) }) })
  ] });
}
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  component: Index
}, Symbol.toStringTag, { value: "Module" }));
export {
  index as i,
  monogram as m
};
