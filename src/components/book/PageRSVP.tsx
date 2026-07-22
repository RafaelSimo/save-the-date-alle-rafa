import { useState } from "react";
import { PageFrame } from "./PageFrame";
import monogram from "@/assets/ar-monogram-transparent.png";
import { submitRSVP } from "@/lib/api/rsvp.functions";

export function PageRSVP({
  onGoBack,
  onGoNext,
}: {
  onGoBack?: () => void;
  onGoNext?: () => void;
}) {
  const [name, setName] = useState("");
  const [companionName, setCompanionName] = useState("");
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState<"sim" | "nao" | "">("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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

    setSending(true);
    try {
      await submitRSVP({
        data: {
          name: name.trim(),
          companionName: companionName.trim() || undefined,
          answer: answer as "sim" | "nao",
          message: message.trim() || undefined,
        },
      });
      setSent(true);
    } catch (err) {
      console.error("Error submitting RSVP:", err);
      setError("Não foi possível enviar. Tente novamente em instantes.");
    } finally {
      setSending(false);
    }
  };

  return (
    <PageFrame pageNumber="IX">
      {sent ? (
        <div className="flex flex-col items-center justify-center h-full gap-3 sm:gap-5 fade-up text-center px-2 sm:px-4">
          <div className="ornament text-lg sm:text-2xl">— ❦ —</div>
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl leading-tight text-(--emerald) max-w-75 shimmer">
            {answer === "sim" ? "Obrigado!" : "Obrigado"}
          </h2>
          <div className="gold-line w-20 sm:w-24" />
          {answer === "sim" ? (
            <p className="font-serif italic text-(--ink) text-[18px] sm:text-[21px] max-w-75 leading-relaxed">
              Ficamos muito felizes com sua confirmação!
              <br />
              <br />
              Em breve você receberá o convite oficial com todos os detalhes
              deste momento tão especial.
            </p>
          ) : (
            <p className="font-serif italic text-(--ink) text-[18px] sm:text-[21px] max-w-75 leading-relaxed">
              Sentiremos sua falta, mas agradecemos muito por nos avisar.
              <br />
              <br />
              Ainda assim, você estará em nossos corações nesse dia tão
              especial.
            </p>
          )}
          <div className="mt-2 sm:mt-4 shimmer">
            <img
              src={monogram}
              alt="Alleane & Rafael"
              className="w-12 sm:w-16 h-12 sm:h-16 object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"
            />
          </div>
          <div className="flex items-center justify-center gap-3 mt-2 sm:hidden w-full">
            {onGoBack && (
              <button
                type="button"
                onClick={onGoBack}
                className="font-serif tracking-[0.15em] uppercase text-[11px] py-1.5 px-3 bg-transparent text-[var(--gold-deep)] border border-[var(--gold)]/40 hover:border-[var(--gold)] hover:bg-[var(--gold)]/10 transition-all min-h-8 cursor-pointer flex items-center justify-center gap-1"
              >
                ‹ Voltar
              </button>
            )}
            {onGoNext && (
              <button
                type="button"
                onClick={onGoNext}
                className="font-serif tracking-[0.15em] uppercase text-[11px] py-1.5 px-3 bg-transparent text-[var(--gold-deep)] border border-[var(--gold)]/40 hover:border-[var(--gold)] hover:bg-[var(--gold)]/10 transition-all min-h-8 cursor-pointer flex items-center justify-center gap-1"
              >
                Contracapa ›
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full gap-1 sm:gap-2 fade-up">
          <p className="font-serif tracking-[0.35em] text-[11px] sm:text-[13px] uppercase text-(--gold-deep)">
            Confirme
          </p>
          <h2 className="font-display text-[17px] sm:text-[22px] tracking-[0.06em] leading-tight text-(--emerald) max-w-70 text-center uppercase">
            Receba o Convite Oficial
          </h2>
          <div className="gold-line w-12 sm:w-16" />

          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-1.5 sm:gap-2.5 mt-0.5"
          >
            <div className="flex flex-col gap-0.5">
              <label className="font-serif text-[10px] sm:text-[12px] tracking-[0.2em] uppercase text-(--gold-deep) text-left">
                Nome completo *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent border-b border-(--gold)/50 focus:border-(--gold) outline-none font-serif text-(--ink) text-[14px] sm:text-[16px] py-0.5 sm:py-1 transition-colors text-left placeholder:text-(--ink)/50"
                placeholder="Seu nome completo"
                autoComplete="name"
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label className="font-serif text-[10px] sm:text-[12px] tracking-[0.2em] uppercase text-(--gold-deep) text-left">
                Nome do acompanhante (Opcional)
              </label>
              <input
                type="text"
                value={companionName}
                onChange={(e) => setCompanionName(e.target.value)}
                className="bg-transparent border-b border-(--gold)/50 focus:border-(--gold) outline-none font-serif text-(--ink) text-[14px] sm:text-[16px] py-0.5 sm:py-1 transition-colors text-left placeholder:text-(--ink)/50"
                placeholder="Nome do acompanhante"
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label className="font-serif text-[10px] sm:text-[12px] tracking-[0.2em] uppercase text-(--gold-deep) text-left">
                Mensagem aos noivos
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={1}
                className="bg-transparent border border-(--gold)/30 focus:border-(--gold) outline-none font-serif italic text-(--ink) text-[13px] sm:text-[15px] p-1 sm:p-1.5 resize-none transition-colors text-left placeholder:text-(--ink)/50 h-10 sm:h-12"
                placeholder="Opcional"
              />
            </div>

            <p className="font-serif italic text-center text-(--ink) text-[13px] sm:text-[15px]">
              PODEMOS CONFIRMAR A SUA PRESENÇA?
            </p>

            <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => setAnswer("sim")}
                className={`font-serif text-[12px] sm:text-[14px] tracking-wider py-1.5 sm:py-2 px-1 border transition-all rounded-sm min-h-8 sm:min-h-10 ${
                  answer === "sim"
                    ? "border-(--gold) bg-(--emerald)/10 text-(--emerald) shadow-[0_0_14px_rgba(212,175,55,0.45)] font-bold"
                    : "border-(--gold)/30 text-(--ink) hover:border-(--gold)/60"
                }`}
              >
                Sim
              </button>
              <button
                type="button"
                onClick={() => setAnswer("nao")}
                className={`font-serif text-[12px] sm:text-[14px] tracking-wider py-1.5 sm:py-2 px-1 border transition-all rounded-sm min-h-8 sm:min-h-10 ${
                  answer === "nao"
                    ? "border-(--gold) bg-(--emerald)/10 text-(--emerald) shadow-[0_0_14px_rgba(212,175,55,0.45)] font-bold"
                    : "border-(--gold)/30 text-(--ink) hover:border-(--gold)/60"
                }`}
              >
                Não
              </button>
            </div>

            {error && (
              <p className="text-[11px] sm:text-[13px] text-red-700 font-serif italic text-center leading-tight">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="font-serif tracking-[0.25em] uppercase text-[12px] sm:text-[14px] py-2 sm:py-2.5 px-3 bg-(--emerald) text-(--pearl) border border-(--gold) hover:bg-(--emerald-deep) hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all disabled:opacity-60 min-h-9 sm:min-h-11 cursor-pointer"
            >
              {sending ? "Enviando..." : "Enviar resposta"}
            </button>

            <div className="flex items-center justify-between w-full gap-2 mt-0.5 sm:hidden">
              {onGoBack && (
                <button
                  type="button"
                  onClick={onGoBack}
                  className="flex-1 font-serif tracking-[0.15em] uppercase text-[11px] py-1.5 px-2 bg-transparent text-[var(--gold-deep)] border border-[var(--gold)]/40 hover:border-[var(--gold)] hover:bg-[var(--gold)]/10 transition-all min-h-8 cursor-pointer flex items-center justify-center gap-1"
                >
                  ‹ Voltar
                </button>
              )}
              {onGoNext && (
                <button
                  type="button"
                  onClick={onGoNext}
                  className="flex-1 font-serif tracking-[0.15em] uppercase text-[11px] py-1.5 px-2 bg-transparent text-[var(--gold-deep)] border border-[var(--gold)]/40 hover:border-[var(--gold)] hover:bg-[var(--gold)]/10 transition-all min-h-8 cursor-pointer flex items-center justify-center gap-1"
                >
                  Contracapa ›
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </PageFrame>
  );
}
