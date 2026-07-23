import type { Request, Response } from "express";
import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const { name, companionName, answer, message } = body;

    if (!name || !answer) {
      return res.status(400).json({ error: "Nome e resposta são obrigatórios." });
    }

    const smtpUser = process.env.SMTP_USER || "alleaneerafael@gmail.com";
    const smtpPass = process.env.SMTP_PASS || "ycuorgzjsovyeisa";
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpTo = process.env.SMTP_TO || "alleaneerafael@gmail.com";
    const smtpFrom = process.env.SMTP_FROM || `"Save The Date" <${smtpUser}>`;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      connectionTimeout: 15000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
      tls: {
        rejectUnauthorized: false,
      },
    });

    const isYes = answer === "sim";
    const statusText = isYes
      ? "Confirmado! (Deseja receber o convite)"
      : "Não poderá comparecer";
    const statusBadgeColor = isYes ? "#0f5d3a" : "#7f1d1d";
    const companion = companionName?.trim() || "Nenhum";
    const userMessage = message?.trim() || "Sem mensagem.";

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
            background-color: #084023;
            background-image: linear-gradient(160deg, #084023 0%, #0f5d3a 100%);
            padding: 30px 20px;
            text-align: center;
            border-bottom: 3px solid #d4af37;
          }
          .header h1 {
            color: #fdfcf8;
            font-family: serif;
            font-size: 24px;
            font-weight: 300;
            letter-spacing: 0.15em;
            margin: 10px 0 0 0;
            text-transform: uppercase;
          }
          .ornament {
            color: #d4af37;
            font-size: 20px;
          }
          .content {
            padding: 40px 30px;
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
            color: #8c712b;
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: 0.1em;
            width: 35%;
          }
          .badge {
            display: inline-block;
            padding: 6px 12px;
            background-color: ${statusBadgeColor};
            color: #ffffff;
            font-weight: bold;
            font-size: 11px;
            text-transform: uppercase;
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
              <p style="text-align: center; color: #4a4a4a; margin-bottom: 30px;">
                Um convidado acabou de responder ao convite virtual através do site. Veja os detalhes abaixo:
              </p>
              <table class="details-table">
                <tr>
                  <td class="label">Convidado</td>
                  <td style="font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td class="label">Acompanhante</td>
                  <td>${companion}</td>
                </tr>
                <tr>
                  <td class="label">Status RSVP</td>
                  <td><span class="badge">${statusText}</span></td>
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

    const fromAddress = smtpFrom.includes("<")
      ? smtpFrom
      : `"Save The Date" <${smtpFrom}>`;

    const info = await transporter.sendMail({
      from: fromAddress,
      to: smtpTo,
      subject: `RSVP: ${name} - ${isYes ? "CONFIRMADO" : "NÃO COMPARECER"}`,
      text: `Resposta de RSVP:\n\nNome: ${name}\nAcompanhante: ${companion}\nResposta: ${statusText}\nMensagem: ${userMessage}`,
      html: htmlContent,
    });

    console.log("Vercel API RSVP email sent successfully:", info.messageId);
    return res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error: any) {
    console.error("Vercel Serverless Function SMTP Error:", error);
    return res.status(500).json({
      error: error.message || "Erro ao enviar e-mail pelo servidor.",
    });
  }
}
