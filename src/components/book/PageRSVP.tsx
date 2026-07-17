import { useState } from "react";
import emailjs from "@emailjs/browser";
import { PageFrame } from "./PageFrame";
import { EMAILJS_CONFIG } from "@/lib/emailjs-config";
import monogram from "@/assets/ar-monogram-transparent.png";

export function PageRSVP() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState<"sim" | "nao" | "">("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const isConfigured =
    EMAILJS_CONFIG.SERVICE_ID &&
    EMAILJS_CONFIG.TEMPLATE_ID &&
    EMAILJS_CONFIG.PUBLIC_KEY &&
    !EMAILJS_CONFIG.SERVICE_ID.includes("YOUR_") &&
    !EMAILJS_CONFIG.TEMPLATE_ID.includes("YOUR_") &&
    !EMAILJS_CONFIG.PUBLIC_KEY.includes("YOUR_");

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
          subject: "Save The Date - Resposta de Convidado",
        },
        { publicKey: EMAILJS_CONFIG.PUBLIC_KEY },
      );
      setSent(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Não foi possível enviar. Tente novamente em instantes.");
    } finally {
      setSending(false);
    }
  };

  return (
    <PageFrame pageNumber="VIII">
      {sent ? (
        <div className="flex flex-col items-center justify-center h-full gap-3 sm:gap-5 fade-up text-center px-2 sm:px-4">
          <div className="ornament text-lg sm:text-2xl">— ❦ —</div>
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl leading-tight text-(--emerald) max-w-75 shimmer">
            Obrigado
          </h2>
          <div className="gold-line w-20 sm:w-24" />
          <p className="font-serif italic text-(--ink) text-[14px] sm:text-[16px] max-w-75 leading-relaxed">
            Obrigado por sua resposta.
            <br />
            <br />
            Em breve você receberá mais informações sobre este momento tão
            especial.
          </p>
          <div className="mt-3 sm:mt-4 shimmer">
            <img
              src={monogram}
              alt="Alleane & Rafael"
              className="w-14 sm:w-16 h-14 sm:h-16 object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full gap-1 sm:gap-2 fade-up">
          <p className="font-serif tracking-[0.35em] text-[8px] sm:text-[9px] uppercase text-(--gold-deep)">
            Confirme
          </p>
          <h2 className="font-display text-[14px] sm:text-[16px] tracking-[0.06em] leading-snug text-(--emerald) max-w-70 text-center uppercase">
            Receba o Convite Oficial
          </h2>
          <div className="gold-line w-12 sm:w-16" />

          <p className="font-serif italic text-center text-(--ink) text-[11px] sm:text-[12px] leading-snug max-w-70">
            Gostaríamos de saber se você deseja receber nosso convite oficial.
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-2 sm:gap-2.5 mt-1 sm:mt-2"
          >
            <div className="flex flex-col gap-0.5 sm:gap-1">
              <label className="font-serif text-[8px] sm:text-[10px] tracking-[0.25em] uppercase text-(--gold-deep) text-left">
                Nome completo *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent border-b border-(--gold)/50 focus:border-(--gold) outline-none font-serif text-(--ink) text-[13px] sm:text-[15px] py-1 sm:py-1.5 transition-colors text-left placeholder:text-(--ink)/50"
                placeholder="Seu nome completo"
                autoComplete="name"
              />
            </div>

            <div className="flex flex-col gap-0.5 sm:gap-1">
              <label className="font-serif text-[8px] sm:text-[10px] tracking-[0.25em] uppercase text-(--gold-deep) text-left">
                Mensagem aos noivos
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={2}
                className="bg-transparent border border-(--gold)/30 focus:border-(--gold) outline-none font-serif italic text-(--ink) text-[12px] sm:text-[14px] p-1.5 sm:p-2 resize-none transition-colors text-left placeholder:text-(--ink)/50"
                placeholder="Opcional"
              />
            </div>

            <p className="font-serif italic text-center text-(--ink) text-[12px] sm:text-[13px]">
              Deseja receber nosso convite oficial?
            </p>

            <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => setAnswer("sim")}
                className={`font-serif text-[10px] sm:text-[12px] tracking-wider py-2 sm:py-2.5 px-1.5 sm:px-2 border transition-all rounded-sm min-h-10 sm:min-h-11 ${
                  answer === "sim"
                    ? "border-(--gold) bg-(--emerald)/10 text-(--emerald) shadow-[0_0_14px_rgba(212,175,55,0.45)]"
                    : "border-(--gold)/30 text-(--ink) hover:border-(--gold)/60"
                }`}
              >
                Sim
              </button>
              <button
                type="button"
                onClick={() => setAnswer("nao")}
                className={`font-serif text-[10px] sm:text-[12px] tracking-wider py-2 sm:py-2.5 px-1.5 sm:px-2 border transition-all rounded-sm min-h-10 sm:min-h-11 ${
                  answer === "nao"
                    ? "border-(--gold) bg-(--emerald)/10 text-(--emerald) shadow-[0_0_14px_rgba(212,175,55,0.45)]"
                    : "border-(--gold)/30 text-(--ink) hover:border-(--gold)/60"
                }`}
              >
                Não
              </button>
            </div>

            {error && (
              <p className="text-[10px] sm:text-[12px] text-red-700 font-serif italic text-center leading-snug">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="font-serif tracking-[0.3em] uppercase text-[11px] sm:text-[12px] py-2.5 sm:py-3 px-3 sm:px-4 bg-(--emerald) text-(--pearl) border border-(--gold) hover:bg-(--emerald-deep) hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all disabled:opacity-60 min-h-11 sm:min-h-12"
            >
              {sending ? "Enviando..." : "Enviar resposta"}
            </button>

            {!isConfigured && !sent && (
              <p className="text-[9px] sm:text-[10px] text-(--gold-deep) font-serif italic text-center leading-snug">
                O envio abrirá seu app de e-mail com a resposta preenchida.
              </p>
            )}
          </form>
        </div>
      )}
    </PageFrame>
  );
}