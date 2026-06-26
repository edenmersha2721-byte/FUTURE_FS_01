/**
 * Validate & sanitize a contact form payload.
 * @returns {{ valid: boolean, errors: string[], data?: object }}
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(body = {}) {
  const errors = [];
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const subject = String(body.subject || "").trim();
  const message = String(body.message || "").trim();

  if (name.length < 2 || name.length > 120)
    errors.push("Name must be between 2 and 120 characters.");
  if (!EMAIL_RE.test(email) || email.length > 160)
    errors.push("A valid email address is required.");
  if (subject.length > 200)
    errors.push("Subject must be 200 characters or fewer.");
  if (message.length < 10 || message.length > 5000)
    errors.push("Message must be between 10 and 5000 characters.");

  if (errors.length) return { valid: false, errors };

  return {
    valid: true,
    errors: [],
    data: { name, email, subject, message },
  };
}
