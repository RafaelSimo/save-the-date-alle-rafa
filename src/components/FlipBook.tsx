import { useEffect, useRef, useState } from "react";
// page-flip has no types in our setup
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { PageFlip } from "page-flip";

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

import { Cover } from "./book/Cover";
import { PageReserve } from "./book/PageReserve";
import { PagePhoto } from "./book/PagePhoto";
import { PageCountdown } from "./book/PageCountdown";
import { PageStory } from "./book/PageStory";
import { PageProposal } from "./book/PageProposal";
import { PageLocation } from "./book/PageLocation";
import { PageFinal } from "./book/PageFinal";
import { PageRSVP } from "./book/PageRSVP";
import { BackCover } from "./book/BackCover";

const RSVP_KEY = "p8";

const pages = [
  { key: "cover", el: <Cover />, kind: "hard" as const },
  { key: "p1", el: <PageReserve />, kind: "soft" as const },
  { key: "p2", el: <PagePhoto />, kind: "soft" as const },
  { key: "p3", el: <PageCountdown />, kind: "soft" as const },
  { key: "p4", el: <PageStory />, kind: "soft" as const },
  { key: "p5", el: <PageProposal />, kind: "soft" as const },
  { key: "p6", el: <PageLocation />, kind: "soft" as const },
  { key: "p7", el: <PageFinal />, kind: "soft" as const },
  { key: RSVP_KEY, el: <PageRSVP />, kind: "soft" as const },
  { key: "back", el: <BackCover />, kind: "hard" as const },
];

const RSVP_INDEX = pages.findIndex((p) => p.key === RSVP_KEY);

export function FlipBook() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const flipRef = useRef<any>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const pageIndexRef = useRef(0);
  const [bookSize, setBookSize] = useState(() => getBookSize());
  const [overlayRect, setOverlayRect] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);

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
      
      const { width, height } = getBookSize();
      if (width === lastBookWidth && height === lastBookHeight && flipRef.current) {
        return;
      }
      
      lastBookWidth = width;
      lastBookHeight = height;
      
      destroyBook();
      setBookSize({ width, height });

      const pf = new PageFlip(containerRef.current, {
        width,
        height,
        size: "stretch" as never,
        minWidth: width,
        maxWidth: 700,
        minHeight: height,
        maxHeight: 1100,
        maxShadowOpacity: 0.6,
        showCover: true,
        mobileScrollSupport: true,
        usePortrait: true,
        drawShadow: true,
        flippingTime: 800,
        swipeDistance: 15,
        clickEventForward: true,
        useMouseEvents: true,
        autoSize: false,
        showPageCorners: true,
      });

      flipRef.current = pf;
      pf.on("flip", (e: { data: number }) => {
        const index = Number(e.data);
        setPageIndex(index);
        pageIndexRef.current = index;
        requestAnimationFrame(measureOverlay);
      });

      rafId = requestAnimationFrame(() => {
        if (!containerRef.current || destroyed) return;
        try {
          const pageEls = containerRef.current?.querySelectorAll(".book-page");
          if (pageEls && pageEls.length) {
            pf.loadFromHTML(pageEls);
            if (pageIndexRef.current > 0) {
              pf.turnToPage(pageIndexRef.current);
            }
          }
          requestAnimationFrame(measureOverlay);
        } catch (err) {
          console.error("PageFlip load error:", err);
        }
      });
    };

    initializeBook();

    let lastWidth = window.innerWidth;
    let lastHeight = window.innerHeight;
    let resizeTimeout: number | undefined;
    
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;
      
      const widthChanged = currentWidth !== lastWidth;
      const heightChanged = Math.abs(currentHeight - lastHeight) > 80;

      if (widthChanged || heightChanged) {
        lastWidth = currentWidth;
        lastHeight = currentHeight;
        
        if (resizeTimeout) window.clearTimeout(resizeTimeout);
        resizeTimeout = window.setTimeout(() => {
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

  const total = pages.length;
  const showOverlay = pageIndex === RSVP_INDEX;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between py-1">
      <div
        ref={stageRef}
        className="book-stage relative w-full flex-1 flex items-center justify-center px-1 sm:px-2"
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
          >
            <PageRSVP />
          </div>
        )}
      </div>
      <div className="pt-2 pb-2 flex items-center gap-3 select-none">
        <button
          aria-label="Página anterior"
          onClick={() => flipRef.current?.flipPrev()}
          className="text-[var(--gold)] text-xl px-3 opacity-80 hover:opacity-100"
        >
          ‹
        </button>
        <span className="font-serif text-xs tracking-[0.3em] text-[var(--gold)]/80">
          {String(pageIndex + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
        <button
          aria-label="Próxima página"
          onClick={() => flipRef.current?.flipNext()}
          className="text-[var(--gold)] text-xl px-3 opacity-80 hover:opacity-100"
        >
          ›
        </button>
      </div>
    </div>
  );
}