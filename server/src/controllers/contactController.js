import { query } from "../config/db.js";
import { sendContactEmail } from "../services/mailer.js";
import { validateContact } from "../utils/validateContact.js";

/**
 * POST /api/contact
 * Validates the payload, persists it to PostgreSQL, and emails the owner.
 *
 * The DB write and the email are independent: if one fails we still try the
 * other, so a message is never silently lost.
 */
export async function handleContact(req, res) {
  const { valid, errors, data } = validateContact(req.body);
  if (!valid) {
    return res.status(400).json({
      success: false,
      message: errors[0],
      errors,
    });
  }

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    null;

  let savedToDb = false;
  let emailed = false;

  // 1) Persist to database
  try {
    await query(
      `INSERT INTO contact_messages (name, email, subject, message, ip_address)
       VALUES ($1, $2, $3, $4, $5)`,
      [data.name, data.email, data.subject || null, data.message, ip]
    );
    savedToDb = true;
  } catch (err) {
    console.error("[contact] DB insert failed:", err.message);
  }

  // 2) Send email notification
  try {
    await sendContactEmail(data);
    emailed = true;
  } catch (err) {
    if (err.message === "MAIL_NOT_CONFIGURED") {
      console.warn("[contact] Email skipped — mailer not configured.");
    } else {
      console.error("[contact] Email send failed:", err.message);
    }
  }

  // If neither path worked, report a real failure.
  if (!savedToDb && !emailed) {
    return res.status(500).json({
      success: false,
      message:
        "Sorry, your message couldn't be delivered right now. Please email me directly.",
    });
  }

  return res.status(201).json({
    success: true,
    message: "Thanks for reaching out! Your message has been sent. 🚀",
    delivery: { savedToDb, emailed },
  });
}
