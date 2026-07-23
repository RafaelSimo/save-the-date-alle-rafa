import { useEffect, useRef, useState } from "react";
// page-flip has no types in our setup
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { PageFlip } from "page-flip";

function getBookSize() {
  const vw = window.innerWidth;
  const isMobile = vw < 640;
  // On mobile, visualViewport.height shrinks drastically when the virtual keyboard opens.
  // Using window.innerHeight guarantees stable book dimensions when typing in form inputs.
  const vh = isMobile ? window.innerHeight : (window.visualViewport?.height ?? window.innerHeight);
  const safeWidth = Math.max(240, vw - (isMobile ? 16 : 24));
  const safeHeight = Math.max(320, vh - (isMobile ? 24 : 64));
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

import { Cover } from "./book/Cover";
import { PageReserve } from "./book/PageReserve";
import { PagePhoto } from "./book/PagePhoto";
import { PageCountdown } from "./book/PageCountdown";
import { PageStory } from "./book/PageStory";
import { PageGallery } from "./book/PageGallery";
import { PageProposal } from "./book/PageProposal";
import { PageLocation } from "./book/PageLocation";
import { PageFinal } from "./book/PageFinal";
import { PageRSVP } from "./book/PageRSVP";
import { BackCover } from "./book/BackCover";

const RSVP_KEY = "p9";

const pages = [
  { key: "cover", el: <Cover />, kind: "hard" as const },
  { key: "p1", el: <PageReserve />, kind: "soft" as const },
  { key: "p2", el: <PagePhoto />, kind: "soft" as const },
  { key: "p3", el: <PageCountdown />, kind: "soft" as const },
  { key: "p4", el: <PageStory />, kind: "soft" as const },
  { key: "p5", el: <PageProposal />, kind: "soft" as const },
  { key: "p6", el: <PageGallery />, kind: "soft" as const },
  { key: "p7", el: <PageLocation />, kind: "soft" as const },
  { key: "p8", el: <PageFinal />, kind: "soft" as const },
  { key: RSVP_KEY, el: <PageRSVP />, kind: "soft" as const },
  { key: "back", el: <BackCover />, kind: "hard" as const },
];

const RSVP_INDEX = pages.findIndex((p) => p.key === RSVP_KEY);

export function FlipBook() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const flipRef = useRef<any>(null);
  const [overlayActive, setOverlayActive] = useState(false);
  const pageIndexRef = useRef(0);
  const pageNumberRef = useRef<HTMLSpanElement>(null);
  const [bookSize, setBookSize] = useState(() => getBookSize());
  const [overlayRect, setOverlayRect] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);

  // FIX #1: o overlay não pode ficar visível enquanto uma página está
  // fisicamente girando (senão fica "flutuando" sobre a animação real,
  // causando a sensação de conteúdo duplicado/sobreposto/piscando).
  const [isFlipping, setIsFlipping] = useState(false);

  // FIX #9 (travamento): guardamos o estado "está flipando" e "overlay
  // visível" em refs (não causam re-render sozinhos). Só chamamos
  // setState nos dois momentos em que isso REALMENTE precisa mudar a
  // tela — entrando ou saindo da página do RSVP. Qualquer outro flip
  // (ex: capa -> página 2) não deve disparar NENHUM re-render do React,
  // para não competir com a animação 3D controlada pela lib no thread
  // principal, especialmente em celulares mais fracos.
  const overlayVisibleRef = useRef(false);

  const measureOverlay = () => {
    if (!containerRef.current || !stageRef.current) return;
    const bookRect = containerRef.current.getBoundingClientRect();
    const stageRect = stageRef.current.getBoundingClientRect();
    setOverlayRect({
      top: bookRect.top - stageRect.top,
      left: bookRect.left - stageRect.left,
      width: bookRect.width,
      height: bookRect.height,
    });
  };

  useEffect(() => {
    if (!containerRef.current) return;

    let rafId: number | undefined;
    let destroyed = false;
    let lastBookWidth = 0;
    let lastBookHeight = 0;
    // FIX #2: nunca recriar o livro no meio de uma virada de página.
    let flippingNow = false;

    const destroyBook = () => {
      if (flipRef.current) {
        try {
          flipRef.current.destroy();
        } catch {
          // ignore
        }
        flipRef.current = null;
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = undefined;
      }
    };

    const initializeBook = () => {
      if (!containerRef.current || destroyed) return;
      if (flippingNow) return; // FIX #2: aborta se estiver no meio de um flip

      const { width, height } = getBookSize();
      if (width === lastBookWidth && height === lastBookHeight && flipRef.current) {
        return;
      }

      lastBookWidth = width;
      lastBookHeight = height;

      destroyBook();

      // FIX #3: aplica o tamanho no DOM de forma SÍNCRONA antes de criar o
      // PageFlip, em vez de depender do setState assíncrono do React.
      // Isso garante que a lib meça o container já no tamanho correto.
      containerRef.current.style.width = `${width}px`;
      containerRef.current.style.height = `${height}px`;
      setBookSize({ width, height });

      const isMobile = window.innerWidth < 640;

      const pf = new PageFlip(containerRef.current, {
        width,
        height,
        size: "stretch" as never,
        minWidth: width,
        maxWidth: 700,
        minHeight: height,
        maxHeight: 1100,
        maxShadowOpacity: isMobile ? 0 : 0.6,
        showCover: true,
        mobileScrollSupport: true,
        usePortrait: true,
        drawShadow: !isMobile, // Desativa cálculo de sombra 3D no mobile para melhor performance GPU
        flippingTime: isMobile ? 1500 : 1200, // Transição lenta, elegante e graciosa
        swipeDistance: 30,
        clickEventForward: true,
        useMouseEvents: true,
        autoSize: false,
        showPageCorners: false,
      });

      flipRef.current = pf;

      // Atualiza o número da página no DOM de forma síncrona inicial
      if (pageNumberRef.current) {
        pageNumberRef.current.innerText = `${String(pageIndexRef.current + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
      }

      // FIX #1 + FIX #9: esconde o overlay assim que o gesto de virar
      // começa — mas SÓ dispara setState (re-render) quando isso
      // realmente afeta a tela. Flips que não envolvem a página do
      // RSVP não tocam em nenhum state do React.
      pf.on("changeState", (e: { data: string }) => {
        const flippingStates = e.data === "flipping" || e.data === "user_fold";
        flippingNow = flippingStates;

        if (flippingStates && overlayVisibleRef.current) {
          // O overlay estava visível e um flip para longe do RSVP
          // acabou de começar: precisa sumir imediatamente.
          overlayVisibleRef.current = false;
          setIsFlipping(true);
          setOverlayActive(false);
        }

        if (e.data === "read") {
          // Livro parado. Se o flip terminou na página do RSVP,
          // mostramos o overlay agora (medição já com o layout final).
          if (pageIndexRef.current === RSVP_INDEX) {
            overlayVisibleRef.current = true;
            setIsFlipping(false);
            setOverlayActive(true);
            requestAnimationFrame(measureOverlay);
          }
        }
      });

      pf.on("flip", (e: { data: number }) => {
        const index = Number(e.data);
        pageIndexRef.current = index;
        // Evita re-render geral do React e atualiza o número da página diretamente no DOM
        if (pageNumberRef.current) {
          pageNumberRef.current.innerText = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
        }
      });

      setTimeout(() => {
        if (!containerRef.current || destroyed) return;
        try {
          const pageEls = containerRef.current.querySelectorAll(".book-page");
          if (pageEls && pageEls.length) {
            pf.loadFromHTML(pageEls);
            if (pageIndexRef.current > 0) {
              pf.turnToPage(pageIndexRef.current);
              if (pageIndexRef.current === RSVP_INDEX) {
                overlayVisibleRef.current = true;
                setIsFlipping(false);
                setOverlayActive(true);
              }
            }
          }
          measureOverlay();
        } catch (err) {
          console.error("PageFlip load error:", err);
        }
      }, 50);
    };

    initializeBook();

    // FIX #9 (secundário): logo após o carregamento, fontes e imagens
    // ainda podem estar assentando e disparar um "resize" espúrio do
    // navegador (reflow de layout). Se isso coincidir com o primeiro
    // toque do usuário, o livro seria destruído/recriado bem no meio do
    // primeiro gesto de flip, causando o engasgo. Damos uma pequena
    // janela de proteção logo após montar o componente.
    const mountedAt = Date.now();
    const STARTUP_GRACE_MS = 1200;

    const isInputFocused = () => {
      const active = document.activeElement;
      if (!active) return false;
      const tag = active.tagName.toUpperCase();
      return (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "SELECT" ||
        (active as HTMLElement).isContentEditable
      );
    };

    let lastWidth = window.innerWidth;
    let lastHeight = window.innerHeight;
    let resizeTimeout: number | undefined;

    const handleResize = () => {
      // FIX: Never destroy/reinitialize the book while typing in an input/textarea!
      if (isInputFocused()) return;

      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;
      const isMobile = currentWidth < 640;

      const widthChanged = Math.abs(currentWidth - lastWidth) > 5;
      const heightChanged = Math.abs(currentHeight - lastHeight) > 80;

      // On mobile, height changes are caused by virtual keyboard opening/closing.
      // We ONLY reinitialize the book on mobile if screen width changed (e.g. orientation flip).
      if (widthChanged || (!isMobile && heightChanged)) {
        lastWidth = currentWidth;
        lastHeight = currentHeight;

        if (resizeTimeout) window.clearTimeout(resizeTimeout);
        resizeTimeout = window.setTimeout(() => {
          if (isInputFocused()) return;
          const withinGracePeriod = Date.now() - mountedAt < STARTUP_GRACE_MS;
          if (flippingNow) return;
          if (withinGracePeriod && !widthChanged) return;
          initializeBook();
        }, 300);
      }
    };

    window.addEventListener("resize", handleResize);
    window.visualViewport?.addEventListener("resize", handleResize);

    return () => {
      destroyed = true;
      if (resizeTimeout) window.clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      window.visualViewport?.removeEventListener("resize", handleResize);
      destroyBook();
    };
  }, []);

  const [overlayTouchStartX, setOverlayTouchStartX] = useState<number | null>(null);

  const handleFlipPrev = () => {
    overlayVisibleRef.current = false;
    setIsFlipping(false);
    setOverlayActive(false);
    flipRef.current?.flipPrev();
  };

  const handleFlipNext = () => {
    overlayVisibleRef.current = false;
    setIsFlipping(false);
    setOverlayActive(false);
    flipRef.current?.flipNext();
  };

  const handleOverlayTouchStart = (e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.tagName === "BUTTON"
    ) {
      return;
    }
    setOverlayTouchStartX(e.touches[0].clientX);
  };

  const handleOverlayTouchEnd = (e: React.TouchEvent) => {
    if (overlayTouchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = overlayTouchStartX - touchEndX;

    if (Math.abs(diffX) > 35) {
      if (diffX < 0) {
        handleFlipPrev();
      } else {
        handleFlipNext();
      }
    }
    setOverlayTouchStartX(null);
  };

  const total = pages.length;
  const showOverlay = overlayActive;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between py-2 sm:py-3 select-none">
      <div
        ref={stageRef}
        className="book-stage relative w-full flex-1 flex items-center justify-center px-1 sm:px-2 overflow-hidden no-scrollbar"
      >
        <div
          ref={containerRef}
          style={{ width: bookSize.width, height: bookSize.height }}
        >
          {pages.map((p) => (
            <div
              key={p.key}
              className="book-page"
              data-density={p.kind}
              style={{ overflow: "hidden" }}
            >
              {p.el}
            </div>
          ))}
        </div>

        {showOverlay && overlayRect && (
          <div
            className="absolute"
            style={{
              top: overlayRect.top,
              left: overlayRect.left,
              width: overlayRect.width,
              height: overlayRect.height,
              zIndex: 1000,
            }}
            onTouchStart={handleOverlayTouchStart}
            onTouchEnd={handleOverlayTouchEnd}
          >
            <PageRSVP onGoBack={handleFlipPrev} onGoNext={handleFlipNext} />
          </div>
        )}
      </div>

      {/* Navegação de páginas exclusiva para web/desktop (posicionada abaixo do livro) */}
      <div className="hidden sm:flex items-center gap-3 select-none pt-2 pb-1 z-20">
        <button
          aria-label="Página anterior"
          onClick={handleFlipPrev}
          className="text-[var(--gold)] text-2xl px-3 opacity-80 hover:opacity-100 cursor-pointer transition-opacity"
        >
          ‹
        </button>
        <span
          ref={pageNumberRef}
          className="font-serif text-xs tracking-[0.35em] text-[var(--gold-soft)] opacity-90"
        >
          {String(pageIndexRef.current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <button
          aria-label="Próxima página"
          onClick={handleFlipNext}
          className="text-[var(--gold)] text-2xl px-3 opacity-80 hover:opacity-100 cursor-pointer transition-opacity"
        >
          ›
        </button>
      </div>
    </div>
  );
}
