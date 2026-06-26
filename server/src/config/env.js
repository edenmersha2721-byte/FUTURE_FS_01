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
    pass: process.env.MAIL_PASS || "",
    to: process.env.MAIL_TO || process.env.MAIL_USER || "",
  },
};

/** True when email credentials are configured. */
export const isMailConfigured = Boolean(env.mail.user && env.mail.pass);
