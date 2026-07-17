import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { PageFlip } from "page-flip";
import { m as monogram } from "./index-Zz5vCj9R.js";
import emailjs from "@emailjs/browser";
function Cover() {
  return /* @__PURE__ */ jsxs("div", { className: "cover relative w-full h-full flex items-center justify-center px-3 sm:px-6 py-4 sm:py-8 text-center overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex w-full max-w-[92%] flex-col items-center justify-center gap-4 sm:gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2 sm:gap-3 fade-up", children: [
        /* @__PURE__ */ jsx("div", { className: "ornament text-lg sm:text-2xl", children: "— ❦ —" }),
        /* @__PURE__ */ jsx("p", { className: "font-serif tracking-[0.6em] text-[8px] sm:text-[10px] text-[var(--gold-soft)] uppercase", children: "Save the Date" })
      ] }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex flex-col items-center gap-1 sm:gap-2 fade-up",
          style: { animationDelay: "0.4s" },
          children: [
            /* @__PURE__ */ jsx(
              "h1",
              {
                className: "font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-[0.12em] uppercase leading-[1]",
                style: {
                  color: "#E6C76A",
                  textShadow: "0 2px 6px rgba(0,0,0,0.7), 0 0 1px rgba(168,134,42,1)"
                },
                children: "Alleane"
              }
            ),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: "font-script text-[var(--gold-soft)] text-3xl sm:text-4xl md:text-5xl -my-1",
                style: { textShadow: "0 2px 4px rgba(0,0,0,0.6)" },
                children: "&"
              }
            ),
            /* @__PURE__ */ jsx(
              "h1",
              {
                className: "font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-[0.12em] uppercase leading-[1]",
                style: {
                  color: "#E6C76A",
                  textShadow: "0 2px 6px rgba(0,0,0,0.7), 0 0 1px rgba(168,134,42,1)"
                },
                children: "Rafael"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex flex-col items-center gap-2 sm:gap-3 fade-up",
          style: { animationDelay: "0.9s" },
          children: [
            /* @__PURE__ */ jsx("div", { className: "gold-line w-24 sm:w-40" }),
            /* @__PURE__ */ jsx("p", { className: "font-serif tracking-[0.45em] text-[8px] sm:text-[11px] text-[var(--pearl)]/85 uppercase", children: "21 · 11 · 2026" }),
            /* @__PURE__ */ jsx("div", { className: "gold-line w-24 sm:w-40" }),
            /* @__PURE__ */ jsx("p", { className: "font-serif italic text-[10px] sm:text-xs text-[var(--pearl)]/70 mt-1 sm:mt-2", children: "Manaus · Amazonas" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hidden sm:block absolute top-4 sm:top-6 left-4 sm:left-6 w-8 sm:w-10 h-8 sm:h-10 border-t border-l border-[var(--gold)]/70" }),
    /* @__PURE__ */ jsx("div", { className: "hidden sm:block absolute top-4 sm:top-6 right-4 sm:right-6 w-8 sm:w-10 h-8 sm:h-10 border-t border-r border-[var(--gold)]/70" }),
    /* @__PURE__ */ jsx("div", { className: "hidden sm:block absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-8 sm:w-10 h-8 sm:h-10 border-b border-l border-[var(--gold)]/70" }),
    /* @__PURE__ */ jsx("div", { className: "hidden sm:block absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-8 sm:w-10 h-8 sm:h-10 border-b border-r border-[var(--gold)]/70" })
  ] });
}
function PageFrame({
  children,
  pageNumber
}) {
  return /* @__PURE__ */ jsxs("div", { className: "paper w-full h-full flex flex-col items-stretch text-center relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute top-2 sm:top-3 left-2 sm:left-3 right-2 sm:right-3 bottom-2 sm:bottom-3 border border-[var(--gold)]/30" }),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute top-3 sm:top-5 left-3 sm:left-5 right-3 sm:right-5 bottom-3 sm:bottom-5 border border-[var(--gold)]/15" }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 flex flex-col items-center w-full flex-1 min-h-0 overflow-y-auto px-3 sm:px-6 pt-4 sm:pt-6 pb-1 sm:pb-2 gap-1", children }),
    pageNumber && /* @__PURE__ */ jsxs("div", { className: "relative z-10 pb-2 sm:pb-3 font-numeric italic text-[var(--gold-deep)] text-[10px] sm:text-xs tracking-widest", children: [
      "— ",
      pageNumber,
      " —"
    ] })
  ] });
}
function PageReserve() {
  return /* @__PURE__ */ jsx(PageFrame, { pageNumber: "I", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center h-full gap-4 sm:gap-6 fade-up", children: [
    /* @__PURE__ */ jsx("p", { className: "font-serif tracking-[0.4em] text-[8px] sm:text-[10px] uppercase text-[var(--gold-deep)]", children: "Capítulo Um" }),
    /* @__PURE__ */ jsx("h2", { className: "font-display text-[20px] sm:text-[28px] tracking-[0.06em] uppercase leading-tight text-[var(--emerald)]", children: "Reserve Esta Data" }),
    /* @__PURE__ */ jsx("div", { className: "gold-line w-20 sm:w-24" }),
    /* @__PURE__ */ jsxs("p", { className: "font-serif text-[13px] sm:text-[15px] leading-relaxed text-[var(--ink)] max-w-[280px]", children: [
      "Estamos preparando um dos dias mais importantes de nossas vidas.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      "Em breve você receberá nosso convite oficial.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      "Até lá, queremos compartilhar com você a alegria de saber que este momento está chegando."
    ] })
  ] }) });
}
const couplePhoto = "/assets/couple-placeholder-CVvAoKLv.jpg";
function PagePhoto() {
  return /* @__PURE__ */ jsx(PageFrame, { pageNumber: "II", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center h-full w-full gap-3 sm:gap-4 fade-up", children: [
    /* @__PURE__ */ jsx("p", { className: "font-serif italic text-[var(--gold-deep)] tracking-widest text-[8px] sm:text-[10px] uppercase", children: "Um Retrato" }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative w-full max-w-[260px] aspect-[3/4] overflow-hidden",
        style: {
          boxShadow: "0 0 0 1px var(--gold), 0 0 0 6px var(--pearl), 0 0 0 7px rgba(212,175,55,0.5), 0 20px 40px -10px rgba(0,0,0,0.35)"
        },
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: couplePhoto,
              alt: "Alleane e Rafael",
              loading: "lazy",
              width: 768,
              height: 1024,
              className: "absolute inset-0 w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                background: "linear-gradient(180deg, rgba(15,93,58,0.05) 0%, rgba(15,93,58,0.25) 100%)"
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "font-serif italic text-[var(--ink)] text-[12px] sm:text-sm mt-2 sm:mt-3", children: '"Onde duas almas se encontram, começa para sempre."' })
  ] }) });
}
const TARGET = (/* @__PURE__ */ new Date("2026-11-21T16:00:00-04:00")).getTime();
function diff() {
  const ms = Math.max(0, TARGET - Date.now());
  const d = Math.floor(ms / 864e5);
  const h = Math.floor(ms / 36e5 % 24);
  const m = Math.floor(ms / 6e4 % 60);
  const s = Math.floor(ms / 1e3 % 60);
  return { d, h, m, s };
}
function PageCountdown() {
  const [t, setT] = useState(diff());
  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1e3);
    return () => clearInterval(id);
  }, []);
  const Cell = ({ v, label }) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative flex items-center justify-center w-[50px] sm:w-[58px] h-[60px] sm:h-[68px] bg-gradient-to-b from-[var(--pearl-warm)] to-[var(--pearl)] border border-[var(--gold)]/60",
        style: {
          boxShadow: "0 0 18px rgba(212,175,55,0.25), inset 0 0 12px rgba(168,134,42,0.08)"
        },
        children: [
          /* @__PURE__ */ jsx("span", { className: "absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[var(--gold)]" }),
          /* @__PURE__ */ jsx("span", { className: "absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[var(--gold)]" }),
          /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[var(--gold)]" }),
          /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[var(--gold)]" }),
          /* @__PURE__ */ jsx("div", { className: "font-numeric text-[24px] sm:text-[34px] leading-none text-[var(--emerald)] tabular-nums", children: String(v).padStart(2, "0") })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "font-serif tracking-[0.3em] text-[7px] sm:text-[9px] uppercase text-[var(--gold-deep)] mt-1.5 sm:mt-2", children: label })
  ] });
  return /* @__PURE__ */ jsx(PageFrame, { pageNumber: "III", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center h-full gap-3 sm:gap-5 fade-up", children: [
    /* @__PURE__ */ jsx("p", { className: "font-serif tracking-[0.4em] text-[8px] sm:text-[10px] uppercase text-[var(--gold-deep)]", children: "Contagem Regressiva" }),
    /* @__PURE__ */ jsx("h2", { className: "font-display text-[20px] sm:text-[26px] tracking-[0.06em] uppercase leading-tight text-[var(--emerald)] shimmer", children: "Até o Grande Dia" }),
    /* @__PURE__ */ jsx("div", { className: "gold-line w-20 sm:w-24" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 gap-1.5 sm:gap-2 mt-1 sm:mt-2", children: [
      /* @__PURE__ */ jsx(Cell, { v: t.d, label: "Dias" }),
      /* @__PURE__ */ jsx(Cell, { v: t.h, label: "Horas" }),
      /* @__PURE__ */ jsx(Cell, { v: t.m, label: "Min" }),
      /* @__PURE__ */ jsx(Cell, { v: t.s, label: "Seg" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "gold-line w-20 sm:w-24 mt-2 sm:mt-4" }),
    /* @__PURE__ */ jsx("p", { className: "font-serif italic text-[var(--ink)] text-[13px] sm:text-[15px] tracking-wide", children: "21 de Novembro de 2026" })
  ] }) });
}
function PageStory() {
  return /* @__PURE__ */ jsx(PageFrame, { pageNumber: "IV", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center h-full gap-3 sm:gap-5 fade-up", children: [
    /* @__PURE__ */ jsx("p", { className: "font-serif tracking-[0.4em] text-[8px] sm:text-[10px] uppercase text-[var(--gold-deep)]", children: "Capítulo Dois" }),
    /* @__PURE__ */ jsx("h2", { className: "font-display text-[18px] sm:text-[24px] tracking-[0.06em] uppercase leading-tight text-[var(--emerald)] max-w-[280px]", children: "Nossa História Está Apenas Começando" }),
    /* @__PURE__ */ jsx("div", { className: "gold-line w-20 sm:w-24" }),
    /* @__PURE__ */ jsxs(
      "svg",
      {
        width: "60",
        height: "40",
        viewBox: "0 0 80 50",
        className: "text-[var(--gold)] sm:w-20 sm:h-12",
        children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M40 45 C 20 35, 10 20, 25 10 C 35 4, 40 14, 40 20 C 40 14, 45 4, 55 10 C 70 20, 60 35, 40 45 Z",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1"
            }
          ),
          /* @__PURE__ */ jsx("circle", { cx: "40", cy: "22", r: "2", fill: "currentColor" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("p", { className: "font-serif text-[13px] sm:text-[15px] leading-relaxed text-[var(--ink)] max-w-[280px] italic", children: [
      "Desde 2020 construímos memórias, sonhos e momentos que nos trouxeram até aqui.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      "Agora nos preparamos para viver o capítulo mais especial de todos."
    ] })
  ] }) });
}
const landscape = "/assets/landscape-placeholder-HBm1Iubm.jpg";
function PageProposal() {
  return /* @__PURE__ */ jsx(PageFrame, { pageNumber: "V", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center h-full gap-3 sm:gap-5 fade-up", children: [
    /* @__PURE__ */ jsx("p", { className: "font-serif tracking-[0.4em] text-[8px] sm:text-[10px] uppercase text-[var(--gold-deep)]", children: "O Pedido" }),
    /* @__PURE__ */ jsx("h2", { className: "font-display text-[20px] sm:text-[26px] tracking-[0.06em] uppercase leading-tight text-[var(--emerald)]", children: "Um Momento Inesquecível" }),
    /* @__PURE__ */ jsx("div", { className: "gold-line w-20 sm:w-24" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "relative w-full max-w-[280px] aspect-[16/10] overflow-hidden",
        style: {
          boxShadow: "0 0 0 1px var(--gold), 0 0 0 5px var(--pearl), 0 0 0 6px rgba(212,175,55,0.5), 0 14px 30px -10px rgba(0,0,0,0.3)"
        },
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: landscape,
            alt: "Serra de Tepequém",
            loading: "lazy",
            width: 1024,
            height: 768,
            className: "absolute inset-0 w-full h-full object-cover"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs("p", { className: "font-serif text-[13px] sm:text-[15px] leading-relaxed text-[var(--ink)] max-w-[280px] italic", children: [
      "No cenário deslumbrante da Serra de Tepequém,",
      /* @__PURE__ */ jsx("br", {}),
      "um novo capítulo começou."
    ] })
  ] }) });
}
function PageLocation() {
  return /* @__PURE__ */ jsx(PageFrame, { pageNumber: "VI", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center h-full gap-3 sm:gap-5 fade-up", children: [
    /* @__PURE__ */ jsx("p", { className: "font-serif tracking-[0.4em] text-[8px] sm:text-[10px] uppercase text-[var(--gold-deep)]", children: "O Lugar" }),
    /* @__PURE__ */ jsx("h2", { className: "font-display text-[22px] sm:text-[28px] tracking-[0.06em] uppercase leading-tight text-[var(--emerald)]", children: "Manaus" }),
    /* @__PURE__ */ jsx("p", { className: "font-serif italic text-[var(--ink)] -mt-1 sm:-mt-3 tracking-[0.4em] text-[9px] sm:text-[11px] uppercase", children: "Amazonas" }),
    /* @__PURE__ */ jsx("div", { className: "gold-line w-20 sm:w-24" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "relative w-full max-w-[260px] aspect-[16/10] overflow-hidden",
        style: {
          boxShadow: "0 0 0 1px var(--gold), 0 0 0 5px var(--pearl), 0 0 0 6px rgba(212,175,55,0.5), 0 14px 30px -10px rgba(0,0,0,0.3)"
        },
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: landscape,
            alt: "Manaus paisagem",
            loading: "lazy",
            width: 1024,
            height: 768,
            className: "absolute inset-0 w-full h-full object-cover"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "font-serif text-[13px] sm:text-[15px] leading-relaxed text-[var(--ink)] max-w-[280px] italic", children: "Em um lugar cuidadosamente escolhido para celebrar este momento." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1.5 sm:gap-2 mt-2 sm:mt-3", children: [
      /* @__PURE__ */ jsx("div", { className: "ornament text-sm sm:text-base", children: "— ❦ —" }),
      /* @__PURE__ */ jsx("p", { className: "font-numeric text-xl sm:text-2xl text-[var(--emerald)]", children: "21 · 11 · 2026" }),
      /* @__PURE__ */ jsx("p", { className: "font-serif tracking-[0.3em] text-[8px] sm:text-[10px] uppercase text-[var(--gold-deep)]", children: "Manaus — AM" })
    ] })
  ] }) });
}
function PageFinal() {
  return /* @__PURE__ */ jsx(PageFrame, { pageNumber: "VII", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center h-full gap-3 sm:gap-5 fade-up text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "ornament text-lg sm:text-2xl", children: "— ❦ —" }),
    /* @__PURE__ */ jsx("h2", { className: "font-display text-[20px] sm:text-[26px] tracking-[0.06em] uppercase leading-tight text-[var(--emerald)] max-w-[280px]", children: "O melhor ainda está por vir." }),
    /* @__PURE__ */ jsx("div", { className: "gold-line w-20 sm:w-24" }),
    /* @__PURE__ */ jsx("p", { className: "font-serif italic text-[var(--ink)] text-[12px] sm:text-sm max-w-[260px]", children: "Em breve você receberá nosso convite oficial." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1 mt-4 sm:mt-6", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: monogram,
          alt: "Alleane & Rafael",
          className: "w-14 sm:w-16 h-14 sm:h-16 object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.5)] shimmer"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "gold-line w-24 sm:w-32 mt-1.5 sm:mt-2" }),
      /* @__PURE__ */ jsx("p", { className: "font-serif tracking-[0.45em] text-[9px] sm:text-[11px] uppercase text-[var(--gold-deep)] mt-1.5 sm:mt-2", children: "21 · 11 · 2026" })
    ] })
  ] }) });
}
const EMAILJS_CONFIG = {
  SERVICE_ID: "YOUR_SERVICE_ID",
  TEMPLATE_ID: "YOUR_TEMPLATE_ID",
  PUBLIC_KEY: "YOUR_PUBLIC_KEY"
};
function PageRSVP() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const isConfigured = !EMAILJS_CONFIG.SERVICE_ID.includes("YOUR_") && !EMAILJS_CONFIG.TEMPLATE_ID.includes("YOUR_") && !EMAILJS_CONFIG.PUBLIC_KEY.includes("YOUR_");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!name.trim()) {
      setError("Por favor, informe seu nome.");
      return;
    }
    if (!answer) {
      setError("Por favor, selecione uma resposta.");
      return;
    }
    if (!isConfigured) {
      const body = `Nome: ${encodeURIComponent(name.trim())}%0D%0AResposta: ${encodeURIComponent(answer === "sim" ? "SIM" : "NÃO")}%0D%0AMensagem: ${encodeURIComponent(message.trim() || "—")}`;
      window.location.href = `mailto:alleaneerafael@gmail.com?subject=${encodeURIComponent("Save The Date - Resposta de Convidado")}&body=${body}`;
      setSent(true);
      return;
    }
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: name.trim(),
          response: answer === "sim" ? "SIM" : "NÃO",
          message: message.trim() || "—",
          to_email: "alleaneerafael@gmail.com",
          subject: "Save The Date - Resposta de Convidado"
        },
        { publicKey: EMAILJS_CONFIG.PUBLIC_KEY }
      );
      setSent(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Não foi possível enviar. Tente novamente em instantes.");
    } finally {
      setSending(false);
    }
  };
  return /* @__PURE__ */ jsx(PageFrame, { pageNumber: "VIII", children: sent ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center h-full gap-3 sm:gap-5 fade-up text-center px-2 sm:px-4", children: [
    /* @__PURE__ */ jsx("div", { className: "ornament text-lg sm:text-2xl", children: "— ❦ —" }),
    /* @__PURE__ */ jsx("h2", { className: "font-script text-4xl sm:text-5xl md:text-6xl leading-tight text-[var(--emerald)] max-w-[300px] shimmer", children: "Obrigado" }),
    /* @__PURE__ */ jsx("div", { className: "gold-line w-20 sm:w-24" }),
    /* @__PURE__ */ jsxs("p", { className: "font-serif italic text-[var(--ink)] text-[14px] sm:text-[16px] max-w-[300px] leading-relaxed", children: [
      "Obrigado por sua resposta.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      "Em breve você receberá mais informações sobre este momento tão especial."
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 sm:mt-4 shimmer", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: monogram,
        alt: "Alleane & Rafael",
        className: "w-14 sm:w-16 h-14 sm:h-16 object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"
      }
    ) })
  ] }) : /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex flex-col items-center w-full gap-1 sm:gap-2 fade-up",
      onPointerDown: (e) => e.stopPropagation(),
      onTouchStart: (e) => e.stopPropagation(),
      onMouseDown: (e) => e.stopPropagation(),
      onTouchMove: (e) => e.stopPropagation(),
      children: [
        /* @__PURE__ */ jsx("p", { className: "font-serif tracking-[0.35em] text-[8px] sm:text-[9px] uppercase text-[var(--gold-deep)]", children: "Confirme" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-[14px] sm:text-[16px] tracking-[0.06em] leading-snug text-[var(--emerald)] max-w-[280px] text-center uppercase", children: "Receba o Convite Oficial" }),
        /* @__PURE__ */ jsx("div", { className: "gold-line w-12 sm:w-16" }),
        /* @__PURE__ */ jsx("p", { className: "font-serif italic text-center text-[var(--ink)] text-[11px] sm:text-[12px] leading-snug max-w-[280px]", children: "Gostaríamos de saber se você deseja receber nosso convite oficial." }),
        /* @__PURE__ */ jsxs(
          "form",
          {
            onSubmit: handleSubmit,
            className: "w-full flex flex-col gap-2 sm:gap-2.5 mt-1 sm:mt-2",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-0.5 sm:gap-1", children: [
                /* @__PURE__ */ jsx("label", { className: "font-serif text-[8px] sm:text-[10px] tracking-[0.25em] uppercase text-[var(--gold-deep)] text-left", children: "Nome completo *" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    value: name,
                    onChange: (e) => setName(e.target.value),
                    onPointerDown: (e) => e.stopPropagation(),
                    onTouchStart: (e) => e.stopPropagation(),
                    onMouseDown: (e) => e.stopPropagation(),
                    className: "bg-transparent border-b border-[var(--gold)]/50 focus:border-[var(--gold)] outline-none font-serif text-[var(--ink)] text-[13px] sm:text-[15px] py-1 sm:py-1.5 transition-colors text-left placeholder:text-[var(--ink)]/50",
                    placeholder: "Seu nome completo",
                    autoComplete: "name"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-0.5 sm:gap-1", children: [
                /* @__PURE__ */ jsx("label", { className: "font-serif text-[8px] sm:text-[10px] tracking-[0.25em] uppercase text-[var(--gold-deep)] text-left", children: "Mensagem aos noivos" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    value: message,
                    onChange: (e) => setMessage(e.target.value),
                    onPointerDown: (e) => e.stopPropagation(),
                    onTouchStart: (e) => e.stopPropagation(),
                    onMouseDown: (e) => e.stopPropagation(),
                    rows: 2,
                    className: "bg-transparent border border-[var(--gold)]/30 focus:border-[var(--gold)] outline-none font-serif italic text-[var(--ink)] text-[12px] sm:text-[14px] p-1.5 sm:p-2 resize-none transition-colors text-left placeholder:text-[var(--ink)]/50",
                    placeholder: "Opcional"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("p", { className: "font-serif italic text-center text-[var(--ink)] text-[12px] sm:text-[13px]", children: "Deseja receber nosso convite oficial?" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-1.5 sm:gap-2", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setAnswer("sim"),
                    className: `font-serif text-[10px] sm:text-[12px] tracking-[0.05em] py-2 sm:py-2.5 px-1.5 sm:px-2 border transition-all rounded-sm min-h-[40px] sm:min-h-[44px] ${answer === "sim" ? "border-[var(--gold)] bg-[var(--emerald)]/10 text-[var(--emerald)] shadow-[0_0_14px_rgba(212,175,55,0.45)]" : "border-[var(--gold)]/30 text-[var(--ink)] hover:border-[var(--gold)]/60"}`,
                    children: "Sim"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setAnswer("nao"),
                    className: `font-serif text-[10px] sm:text-[12px] tracking-[0.05em] py-2 sm:py-2.5 px-1.5 sm:px-2 border transition-all rounded-sm min-h-[40px] sm:min-h-[44px] ${answer === "nao" ? "border-[var(--gold)] bg-[var(--emerald)]/10 text-[var(--emerald)] shadow-[0_0_14px_rgba(212,175,55,0.45)]" : "border-[var(--gold)]/30 text-[var(--ink)] hover:border-[var(--gold)]/60"}`,
                    children: "Não"
                  }
                )
              ] }),
              error && /* @__PURE__ */ jsx("p", { className: "text-[10px] sm:text-[12px] text-red-700 font-serif italic text-center leading-snug", children: error }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  disabled: sending,
                  className: "font-serif tracking-[0.3em] uppercase text-[11px] sm:text-[12px] py-2.5 sm:py-3 px-3 sm:px-4 bg-[var(--emerald)] text-[var(--pearl)] border border-[var(--gold)] hover:bg-[var(--emerald-deep)] hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all disabled:opacity-60 min-h-[44px] sm:min-h-[48px]",
                  children: sending ? "Enviando..." : "Enviar resposta"
                }
              ),
              !isConfigured && !sent && /* @__PURE__ */ jsx("p", { className: "text-[9px] sm:text-[10px] text-[var(--gold-deep)] font-serif italic text-center leading-snug", children: "O envio abrirá seu app de e-mail com a resposta preenchida." })
            ]
          }
        )
      ]
    }
  ) });
}
function BackCover() {
  return /* @__PURE__ */ jsxs("div", { className: "cover w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 gap-3 sm:gap-4", children: [
    /* @__PURE__ */ jsx("div", { className: "ornament text-lg sm:text-2xl", children: "— ❦ —" }),
    /* @__PURE__ */ jsx("p", { className: "font-display text-2xl sm:text-3xl tracking-[0.1em] text-gold shimmer", children: "A & R" }),
    /* @__PURE__ */ jsx("div", { className: "gold-line w-20 sm:w-24" }),
    /* @__PURE__ */ jsx("p", { className: "font-serif italic text-[var(--pearl)]/70 text-[10px] sm:text-xs tracking-[0.3em] uppercase", children: "Com amor" })
  ] });
}
function getBookSize() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const isMobile = vw < 640;
  const safeWidth = Math.max(240, vw - (isMobile ? 12 : 24));
  const safeHeight = Math.max(320, vh - (isMobile ? 96 : 72));
  const ratio = 1.55;
  let width = Math.min(safeWidth, 700);
  let height = Math.round(width * ratio);
  if (height > safeHeight) {
    height = safeHeight;
    width = Math.round(height / ratio);
  }
  if (width > safeWidth) {
    width = safeWidth;
    height = Math.round(width * ratio);
  }
  const minWidth = isMobile ? 220 : 250;
  const minHeight = isMobile ? 320 : 390;
  if (width < minWidth) {
    width = minWidth;
    height = Math.round(width * ratio);
  }
  if (height < minHeight) {
    height = minHeight;
    width = Math.round(height / ratio);
  }
  return { width, height };
}
const pages = [
  { key: "cover", el: /* @__PURE__ */ jsx(Cover, {}), kind: "hard" },
  { key: "p1", el: /* @__PURE__ */ jsx(PageReserve, {}), kind: "soft" },
  { key: "p2", el: /* @__PURE__ */ jsx(PagePhoto, {}), kind: "soft" },
  { key: "p3", el: /* @__PURE__ */ jsx(PageCountdown, {}), kind: "soft" },
  { key: "p4", el: /* @__PURE__ */ jsx(PageStory, {}), kind: "soft" },
  { key: "p5", el: /* @__PURE__ */ jsx(PageProposal, {}), kind: "soft" },
  { key: "p6", el: /* @__PURE__ */ jsx(PageLocation, {}), kind: "soft" },
  { key: "p7", el: /* @__PURE__ */ jsx(PageFinal, {}), kind: "soft" },
  { key: "p8", el: /* @__PURE__ */ jsx(PageRSVP, {}), kind: "soft" },
  { key: "back", el: /* @__PURE__ */ jsx(BackCover, {}), kind: "hard" }
];
function FlipBook() {
  const containerRef = useRef(null);
  const flipRef = useRef(null);
  const [pageIndex, setPageIndex] = useState(0);
  useEffect(() => {
    if (!containerRef.current) return;
    let rafId;
    let destroyed = false;
    const destroyBook = () => {
      if (flipRef.current) {
        try {
          flipRef.current.destroy();
        } catch {
        }
        flipRef.current = null;
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = void 0;
      }
    };
    const initializeBook = () => {
      if (!containerRef.current || destroyed) return;
      destroyBook();
      const { width, height } = getBookSize();
      const pf = new PageFlip(containerRef.current, {
        width,
        height,
        size: "stretch",
        minWidth: 220,
        maxWidth: 700,
        minHeight: 320,
        maxHeight: 1100,
        maxShadowOpacity: 0.6,
        showCover: true,
        mobileScrollSupport: false,
        usePortrait: true,
        drawShadow: true,
        flippingTime: 800,
        swipeDistance: 15,
        clickEventForward: true,
        useMouseEvents: true,
        autoSize: false,
        showPageCorners: true
      });
      flipRef.current = pf;
      pf.on("flip", (e) => setPageIndex(Number(e.data)));
      rafId = requestAnimationFrame(() => {
        if (!containerRef.current || destroyed) return;
        try {
          const pages2 = containerRef.current?.querySelectorAll(".book-page");
          if (pages2 && pages2.length) {
            pf.loadFromHTML(pages2);
          }
        } catch (err) {
          console.error("PageFlip load error:", err);
        }
      });
    };
    initializeBook();
    const handleResize = () => initializeBook();
    window.addEventListener("resize", handleResize);
    window.visualViewport?.addEventListener("resize", handleResize);
    return () => {
      destroyed = true;
      window.removeEventListener("resize", handleResize);
      window.visualViewport?.removeEventListener("resize", handleResize);
      destroyBook();
    };
  }, []);
  const total = pages.length;
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full flex flex-col items-center justify-between py-1", children: [
    /* @__PURE__ */ jsx("div", { className: "book-stage w-full flex-1 flex items-center justify-center px-1 sm:px-2", children: /* @__PURE__ */ jsx("div", { ref: containerRef, className: "w-full h-full max-w-full max-h-full", children: pages.map((p) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "book-page",
        "data-density": p.kind,
        style: { overflow: "hidden" },
        children: p.el
      },
      p.key
    )) }) }),
    /* @__PURE__ */ jsxs("div", { className: "pt-2 pb-2 flex items-center gap-3 select-none", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          "aria-label": "Página anterior",
          onClick: () => flipRef.current?.flipPrev(),
          className: "text-[var(--gold)] text-xl px-3 opacity-80 hover:opacity-100",
          children: "‹"
        }
      ),
      /* @__PURE__ */ jsxs("span", { className: "font-serif text-xs tracking-[0.3em] text-[var(--gold)]/80", children: [
        String(pageIndex + 1).padStart(2, "0"),
        " /",
        " ",
        String(total).padStart(2, "0")
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          "aria-label": "Próxima página",
          onClick: () => flipRef.current?.flipNext(),
          className: "text-[var(--gold)] text-xl px-3 opacity-80 hover:opacity-100",
          children: "›"
        }
      )
    ] })
  ] });
}
export {
  FlipBook
};
