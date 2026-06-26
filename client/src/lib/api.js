/**
 * Tiny API helper for talking to the Node/Express backend.
 * Base URL is configurable via VITE_API_URL; defaults to the Vite dev proxy.
 */
const API_BASE = import.meta.env.VITE_API_URL || "";

/**
 * Submit the contact form.
 * @param {{name: string, email: string, subject: string, message: string}} payload
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function sendContactMessage(payload) {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let data = {};
  try {
    data = await res.json();
  } catch {
    // non-JSON response (e.g. network/proxy error) — fall through
  }

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong. Please try again.");
  }

  return data;
}
