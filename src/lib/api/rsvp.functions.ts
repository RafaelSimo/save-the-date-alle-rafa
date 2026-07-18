import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import nodemailer from "nodemailer";
import { getServerConfig } from "../config.server";

// Schema validation for RSVP input
const RSVPInputSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  companionName: z.string().optional(),
  answer: z.enum(["sim", "nao"]),
  message: z.string().optional(),
});

export const submitRSVP = createServerFn({ method: "POST" })
  .validator(RSVPInputSchema)
  .handler(async ({ data }) => {
    const config = getServerConfig();

    if (!config.smtpUser || !config.smtpPass) {
      console.warn("SMTP credentials not configured in environment variables. RSVP details:", data);
      throw new Error("O servidor de e-mail não está configurado. Por favor, configure as variáveis de ambiente SMTP.");
    }

    const transporter = nodemailer.createTransport({
      host: config.smtpHost,
      port: config.smtpPort,
      secure: config.smtpPort === 465, // true for 465, false for 587/other ports
      auth: {
        user: config.smtpUser,
        pass: config.smtpPass,
      },
    });

    const isYes = data.answer === "sim";
    const statusText = isYes
      ? "Confirmado! (Deseja receber o convite)"
      : "Não poderá comparecer";
    const statusBadgeColor = isYes ? "#0f5d3a" : "#7f1d1d";
    const companion = data.companionName?.trim() || "Nenhum";
    const userMessage = data.message?.trim() || "Sem mensagem.";

    // Premium HTML Email Template matching the "Save the Date" luxury styling (Emerald & Gold)
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nova Resposta de RSVP - Alleane & Rafael</title>
        <style>
          body {
            font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            background-color: #f7f5f0;
            color: #1a1a1a;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
          }
          .wrapper {
            width: 100%;
            background-color: #f7f5f0;
            padding: 40px 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border: 1px solid #e2d1a6;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            border-radius: 4px;
            overflow: hidden;
          }
          .header {
            background-color: #084023; /* Emerald Deep */
            background-image: linear-gradient(160deg, #084023 0%, #0f5d3a 100%);
            padding: 30px 20px;
            text-align: center;
            border-bottom: 3px solid #d4af37; /* Gold accent */
          }
          .header h1 {
            color: #fdfcf8;
            font-family: 'Cinzel', 'Playfair Display', serif;
            font-size: 24px;
            font-weight: 300;
            letter-spacing: 0.15em;
            margin: 10px 0 0 0;
            text-transform: uppercase;
          }
          .ornament {
            color: #d4af37;
            font-size: 20px;
            letter-spacing: 0.2em;
            margin-bottom: 5px;
          }
          .content {
            padding: 40px 30px;
          }
          .intro {
            font-size: 15px;
            line-height: 1.6;
            margin-bottom: 30px;
            text-align: center;
            color: #4a4a4a;
          }
          .details-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
          }
          .details-table td {
            padding: 14px 10px;
            border-bottom: 1px solid #f1ece1;
            font-size: 14px;
          }
          .details-table td.label {
            font-weight: 600;
            color: #8c712b; /* Gold Deep */
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: 0.1em;
            width: 35%;
          }
          .details-table td.value {
            color: #1a1a1a;
            font-family: 'Montserrat', sans-serif;
          }
          .badge {
            display: inline-block;
            padding: 6px 12px;
            background-color: ${statusBadgeColor};
            color: #ffffff;
            font-weight: bold;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            border-radius: 2px;
          }
          .message-box {
            background-color: #fdfcf9;
            border-left: 3px solid #d4af37;
            padding: 15px 20px;
            margin: 20px 0;
            font-style: italic;
            color: #333333;
            line-height: 1.5;
            font-size: 14px;
            white-space: pre-wrap;
          }
          .footer {
            background-color: #fbf9f4;
            padding: 20px;
            text-align: center;
            font-size: 11px;
            color: #8c712b;
            border-top: 1px solid #f1ece1;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="container">
            <div class="header">
              <div class="ornament">❦</div>
              <h1>Alleane & Rafael</h1>
              <div style="font-size: 10px; color: #d4af37; letter-spacing: 0.3em; text-transform: uppercase; margin-top: 5px;">Save the Date</div>
            </div>
            <div class="content">
              <div class="intro">
                Um convidado acabou de responder ao convite virtual através do site. Veja os detalhes abaixo:
              </div>
              <table class="details-table">
                <tr>
                  <td class="label">Convidado</td>
                  <td class="value" style="font-weight: 600;">${data.name}</td>
                </tr>
                <tr>
                  <td class="label">Acompanhante</td>
                  <td class="value">${companion}</td>
                </tr>
                <tr>
                  <td class="label">Status RSVP</td>
                  <td class="value"><span class="badge">${statusText}</span></td>
                </tr>
              </table>
              
              <div style="font-weight: 600; font-size: 11px; color: #8c712b; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 5px;">Mensagem aos noivos:</div>
              <div class="message-box">
                "${userMessage}"
              </div>
            </div>
            <div class="footer">
              21 de Novembro de 2026 &bull; Manaus, Amazonas
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"Save The Date" <${config.smtpFrom}>`,
      to: config.smtpTo,
      subject: `RSVP: ${data.name} - ${isYes ? "CONFIRMADO" : "NÃO COMPARECER"}`,
      text: `Resposta de RSVP:\n\nNome: ${data.name}\nAcompanhante: ${companion}\nResposta: ${statusText}\nMensagem: ${userMessage}`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return { success: true };
  });
