// EmailJS credentials (publishable — safe to commit).
// Replace these with your EmailJS account values:
//   1. Create account at https://www.emailjs.com/
//   2. Add a Gmail service → copy SERVICE_ID
//   3. Create a template with variables {{from_name}}, {{response}}, {{message}}
//      Set "To Email" = alleaneerafael@gmail.com
//      Subject: Save The Date - Resposta de Convidado
//      → copy TEMPLATE_ID
//   4. Account → API Keys → copy PUBLIC_KEY
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
};
