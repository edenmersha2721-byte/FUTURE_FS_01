import dotenv from "dotenv";

dotenv.config();

/**
 * Centralized, validated environment configuration.
 */
export const env = {
  port: Number(process.env.PORT) || 5000,
  nodeEnv: process.env.NODE_ENV || "development",
  clientOrigins: (process.env.CLIENT_ORIGIN || "http://localhost:5173")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean),

  db: {
    connectionString: process.env.DATABASE_URL || "",
    host: process.env.PGHOST || "localhost",
    port: Number(process.env.PGPORT) || 5432,
    user: process.env.PGUSER || "postgres",
    password: process.env.PGPASSWORD || "",
    database: process.env.PGDATABASE || "eden_portfolio",
    ssl: String(process.env.PGSSL).toLowerCase() === "true",
  },

  mail: {
    user: process.env.MAIL_USER || "",
    // strip accidental spaces (Gmail shows App Passwords as "xxxx xxxx xxxx xxxx")
    pass: (process.env.MAIL_PASS || "").replace(/\s+/g, ""),
    to: process.env.MAIL_TO || process.env.MAIL_USER || "",
    // Optional explicit SMTP settings (any provider: Brevo, Mailtrap, etc.).
    // If SMTP_HOST is set, it takes priority over the Gmail service shortcut.
    host: process.env.SMTP_HOST || "",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: String(process.env.SMTP_SECURE).toLowerCase() === "true",
  },
};

/** True when email credentials are configured. */
export const isMailConfigured = Boolean(env.mail.user && env.mail.pass);
