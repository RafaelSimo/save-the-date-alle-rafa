import React, { useEffect, useState, useRef } from "react";
import { Volume2, Play, Pause, Square, X } from "lucide-react";

export function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speechRate, setSpeechRate] = useState<number>(1);
  const [selectedText, setSelectedText] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Handle Text Selection for Floating TTS button ("Ouvir Seleção")
  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      const text = selection?.toString().trim();

      if (text && text.length > 2) {
        const range = selection?.getRangeAt(0);
        const rect = range?.getBoundingClientRect();

        if (rect) {
          setSelectedText({
            text,
            x: Math.min(
              window.innerWidth - 130,
              Math.max(10, rect.left + rect.width / 2 - 55),
            ),
            y: Math.max(10, rect.top - 45),
          });
          return;
        }
      }
      setSelectedText(null);
    };

    document.addEventListener("selectionchange", handleSelection);
    return () =>
      document.removeEventListener("selectionchange", handleSelection);
  }, []);

  // Helper to dynamically extract visible text ONLY from the current active page
  const getVisiblePageText = (): string => {
    const seenTexts = new Set<string>();
    let extractedText = "";

    // 1. Check if PageFlip active page containers exist in the DOM (.stg-page.--left, .stg-page.--right, .stg-page-active)
    const activePageContainers = Array.from(
      document.querySelectorAll(
        ".stg-page.--left, .stg-page.--right, .stg-page-active",
      ),
    );

    if (activePageContainers.length > 0) {
      activePageContainers.forEach((container) => {
        const textNodes = container.querySelectorAll("h1, h2, h3, p, label");
        textNodes.forEach((node) => {
          const text = node.textContent?.trim();
          if (text && text.length > 1 && !seenTexts.has(text)) {
            seenTexts.add(text);
            extractedText += text + ". ";
          }
        });
      });
    }

    // 2. Fallback for Book Pages: find page elements currently visible on screen
    if (!extractedText.trim()) {
      const bookPages = Array.from(
        document.querySelectorAll(".book-page, .paper, .cover"),
      );
      bookPages.forEach((pageEl) => {
        const rect = pageEl.getBoundingClientRect();
        const style = window.getComputedStyle(pageEl);

        const isVisible =
          rect.width > 0 &&
          rect.height > 0 &&
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          style.opacity !== "0" &&
          rect.left < window.innerWidth &&
          rect.right > 0 &&
          rect.top < window.innerHeight &&
          rect.bottom > 0;

        if (isVisible) {
          const textNodes = pageEl.querySelectorAll("h1, h2, h3, p, label");
          textNodes.forEach((node) => {
            const text = node.textContent?.trim();
            if (text && text.length > 1 && !seenTexts.has(text)) {
              seenTexts.add(text);
              extractedText += text + ". ";
            }
          });
        }
      });
    }

    // 3. Fallback for Intro Screen (before book is opened)
    if (!extractedText.trim()) {
      const introElements = document.querySelectorAll(
        "#main-content h1, #main-content h2, #main-content h3, #main-content p",
      );
      introElements.forEach((node) => {
        const rect = node.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0 && rect.top < window.innerHeight && rect.bottom > 0) {
          const text = node.textContent?.trim();
          if (text && text.length > 1 && !seenTexts.has(text)) {
            seenTexts.add(text);
            extractedText += text + ". ";
          }
        }
      });
    }

    // Clean up dots, hyphens and formatting for natural speech pauses
    const formatted = extractedText
      .replace(/·/g, " ")
      .replace(/—/g, ", ")
      .replace(/\s+/g, " ")
      .trim();

    return (
      formatted ||
      "Save the Date: Alleane e Rafael. Data: 21 de Novembro de 2026 em Manaus, Amazonas."
    );
  };

  // Text To Speech logic
  const speakText = (textToRead?: string) => {
    if (!("speechSynthesis" in window)) {
      alert("Seu navegador não suporta sintetizador de voz.");
      return;
    }

    window.speechSynthesis.cancel();

    // Dynamically get visible page text if none provided
    const text = textToRead || getVisiblePageText();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR";
    utterance.rate = speechRate;

    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const pauseSpeech = () => {
    if (window.speechSynthesis.speaking) {
      if (isPaused) {
        window.speechSynthesis.resume();
        setIsPaused(false);
      } else {
        window.speechSynthesis.pause();
        setIsPaused(true);
      }
    }
  };

  const stopSpeech = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  };

  return (
    <>
      {/* Skip Link for Keyboard Focus */}
      <a href="#main-content" className="a11y-skip-link">
        Ir para o conteúdo principal
      </a>

      {/* Floating Read-Selected-Text Tooltip */}
      {selectedText && (
        <button
          onClick={() => speakText(selectedText.text)}
          className="fixed z-50 flex items-center gap-1.5 rounded-full bg-[#084023] border border-[#d4af37]/70 px-3.5 py-1.5 text-xs font-bold text-[#f4e29a] shadow-xl transition-all hover:scale-105 active:scale-95 animate-bounce"
          style={{ top: `${selectedText.y}px`, left: `${selectedText.x}px` }}
          aria-label="Ouvir texto selecionado"
        >
          <Volume2 className="h-4 w-4 text-[#d4af37]" />
          <span>Ouvir seleção</span>
        </button>
      )}

      {/* Floating Audio Reader Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => {
            if (!isSpeaking) {
              speakText();
            } else {
              setIsOpen(!isOpen);
            }
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          aria-expanded={isOpen}
          aria-label="Leitor de Voz em Áudio"
          className="group relative flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-[#084023]/90 px-4 py-3 text-[#f4e29a] shadow-[0_10px_30px_-5px_rgba(8,64,35,0.8),0_0_15px_rgba(212,175,55,0.2)] backdrop-blur-md transition-all hover:border-[#d4af37] hover:bg-[#0f5d3a] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#d4af37]/40"
        >
          <Volume2
            className={`h-6 w-6 text-[#d4af37] transition-transform ${
              isSpeaking && !isPaused ? "animate-pulse scale-110" : ""
            }`}
          />
          <span className="hidden text-sm font-semibold sm:inline tracking-wide font-serif">
            {isSpeaking
              ? isPaused
                ? "Leitura Pausada"
                : "Lendo..."
              : "Ouvir Página"}
          </span>

          {/* Controls gear badge */}
          <span
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="ml-1 rounded-full p-1 hover:bg-[#d4af37]/20 transition-colors"
            title="Controles de Áudio"
          >
            <span className="text-[10px] uppercase tracking-wider text-[#d4af37] underline">
              {isOpen ? "Fechar" : "Opções"}
            </span>
          </span>
        </button>
      </div>

      {/* Audio Controls Modal / Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6 bg-black/40 backdrop-blur-xs">
          <div
            className="w-full max-w-xs rounded-2xl border border-[#d4af37]/40 bg-[#052615]/95 p-5 text-[#fdfcf8] shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4"
            role="dialog"
            aria-label="Controles do Leitor de Voz"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#0f5d3a] pb-3">
              <div className="flex items-center gap-2">
                <Volume2 className="h-5 w-5 text-[#d4af37]" />
                <h2 className="text-sm font-bold tracking-wide text-[#f4e29a] font-serif">
                  Leitor de Voz
                </h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 text-[#fdfcf8]/70 hover:bg-[#0f5d3a] hover:text-white transition-colors"
                aria-label="Fechar controles"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Audio Actions */}
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-2">
                {!isSpeaking ? (
                  <button
                    onClick={() => speakText()}
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#a8862a] via-[#d4af37] to-[#f4e29a] px-4 py-2.5 font-bold text-[#084023] hover:brightness-110 transition-all shadow-[0_4px_14px_rgba(212,175,55,0.35)] active:scale-95"
                  >
                    <Play className="h-4 w-4 fill-current" />
                    <span className="font-semibold tracking-wide">Iniciar Leitura</span>
                  </button>
                ) : (
                  <>
                    <button
                      onClick={pauseSpeech}
                      className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#084023] border border-[#d4af37]/50 px-3 py-2.5 font-semibold text-[#f4e29a] hover:bg-[#0f5d3a] transition-colors"
                    >
                      {isPaused ? (
                        <Play className="h-4 w-4 fill-current" />
                      ) : (
                        <Pause className="h-4 w-4 fill-current" />
                      )}
                      <span>{isPaused ? "Continuar" : "Pausar"}</span>
                    </button>

                    <button
                      onClick={stopSpeech}
                      className="flex items-center justify-center rounded-xl bg-red-950/80 border border-red-700/50 p-2.5 text-red-200 hover:bg-red-900 transition-colors"
                      aria-label="Parar leitura"
                    >
                      <Square className="h-4 w-4 fill-current" />
                    </button>
                  </>
                )}
              </div>

              {/* Speed selection */}
              <div className="rounded-xl border border-[#0f5d3a] bg-[#031c0e]/80 p-3 text-xs">
                <div className="flex items-center justify-between text-[#fdfcf8]/80 mb-2 font-medium">
                  <span>Velocidade de Leitura:</span>
                  <span className="text-[#d4af37] font-bold">
                    {speechRate}x
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {[0.8, 1, 1.25].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => {
                        setSpeechRate(rate);
                        if (isSpeaking) speakText();
                      }}
                      className={`py-1.5 px-2 rounded-lg text-xs font-semibold border transition-all ${
                        speechRate === rate
                          ? "border-[#d4af37] bg-[#d4af37]/20 text-[#f4e29a] font-bold"
                          : "border-[#0f5d3a] bg-[#084023]/60 text-[#fdfcf8]/80 hover:border-[#d4af37]/40"
                      }`}
                    >
                      {rate === 0.8
                        ? "Lento"
                        : rate === 1
                          ? "Normal"
                          : "Rápido"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-3 text-[11px] text-[#fdfcf8]/60 text-center italic">
              Você também pode selecionar qualquer texto da tela para ouvi-lo.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
