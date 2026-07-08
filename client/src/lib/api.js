/**
 * Contact form submission — frontend only, via Static Forms.
 * No backend required. Docs: https://www.staticforms.dev/docs
 *
 * Set your Static Forms API key in an env var (client/.env):
 *   VITE_STATICFORMS_KEY=your_api_key_here
 */
const STATICFORMS_ENDPOINT = "https://api.staticforms.dev/submit";
const API_KEY = import.meta.env.VITE_STATICFORMS_KEY || "";

/**
 * Submit the contact form to Static Forms, which emails it to you.
 * @param {{name: string, email: string, subject: string, message: string}} payload
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function sendContactMessage(payload) {
  if (!API_KEY) {
    throw new Error(
      "Contact form is not configured yet. Please set VITE_STATICFORMS_KEY."
    );
  }

  const res = await fetch(STATICFORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      apiKey: API_KEY,
      name: payload.name,
      email: payload.email,
      subject: payload.subject,
      message: payload.message,
      // Static Forms uses the sender's email as the reply-to address.
      replyTo: payload.email,
      // Spam trap — any field containing "honeypot" is stripped from the email.
      honeypot: "",
    }),
  });

  let data = {};
  try {
    data = await res.json();
  } catch {
    // non-JSON response — fall through to the status check
  }

  if (!res.ok) {
    throw new Error(
      data.message || "Something went wrong. Please try again."
    );
  }

  return {
    success: true,
    message: "Thanks! Your message has been sent.",
  };
}
