import nodemailer from "nodemailer";
import { env, isMailConfigured } from "../config/env.js";

/**
 * Lazily-created Nodemailer transport using Gmail SMTP.
 * Returns null when mail credentials are not configured.
 */
let transporter = null;

function getTransporter() {
  if (!isMailConfigured) return null;
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: env.mail.user,
      pass: env.mail.pass,
    },
  });
  return transporter;
}

/** Basic HTML escaping so user input can't break the email markup. */
function escapeHtml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Send the contact form submission as an email to the site owner.
 * @param {{name:string,email:string,subject:string,message:string}} data
 */
export async function sendContactEmail({ name, email, subject, message }) {
  const tx = getTransporter();
  if (!tx) {
    throw new Error("MAIL_NOT_CONFIGURED");
  }

  const safeSubject = subject?.trim() || "New portfolio contact message";

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:auto;background:#0b0c14;color:#e8eaf2;border-radius:16px;overflow:hidden;border:1px solid #20222e">
      <div style="background:linear-gradient(135deg,#3b82f6,#8b5cf6);padding:24px 28px">
        <h1 style="margin:0;font-size:18px;color:#fff">📬 New Contact Message</h1>
        <p style="margin:4px 0 0;font-size:13px;color:rgba(255,255,255,.85)">From your portfolio website</p>
      </div>
      <div style="padding:24px 28px">
        <p style="margin:0 0 16px;font-size:14px;color:#aab">Someone reached out through your contact form:</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:8px 0;color:#8a8fa3;width:90px">Name</td><td style="padding:8px 0">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px 0;color:#8a8fa3">Email</td><td style="padding:8px 0"><a style="color:#8b9bff" href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:8px 0;color:#8a8fa3">Subject</td><td style="padding:8px 0">${escapeHtml(safeSubject)}</td></tr>
        </table>
        <div style="margin-top:16px;padding:16px;background:#13141d;border:1px solid #20222e;border-radius:12px;font-size:14px;line-height:1.6;white-space:pre-wrap">${escapeHtml(message)}</div>
      </div>
      <div style="padding:14px 28px;background:#0e0f17;border-top:1px solid #20222e;font-size:12px;color:#6b6f82">
        Sent automatically from edenmersha portfolio • Reply directly to respond.
      </div>
    </div>`;

  await tx.sendMail({
    from: `"Portfolio Contact" <${env.mail.user}>`,
    to: env.mail.to,
    replyTo: `"${name}" <${email}>`,
    subject: `[Portfolio] ${safeSubject}`,
    text: `New message from ${name} (${email})\nSubject: ${safeSubject}\n\n${message}`,
    html,
  });
}

/** Verify the SMTP connection on startup (logs only — never throws). */
export async function verifyMailer() {
  const tx = getTransporter();
  if (!tx) {
    console.warn(
      "[mail] ⚠️  Email not configured (set MAIL_USER & MAIL_PASS). Messages will still be saved to the database."
    );
    return;
  }
  try {
    await tx.verify();
    console.log("[mail] ✅ SMTP transport ready.");
  } catch (err) {
    console.warn("[mail] ⚠️  SMTP verification failed:", err.message);
  }
}
