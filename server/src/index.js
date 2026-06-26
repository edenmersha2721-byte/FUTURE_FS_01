import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import { pool } from "./config/db.js";
import { verifyMailer } from "./services/mailer.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

// ── Middleware ────────────────────────────────────────────────
app.set("trust proxy", 1); // accurate IPs behind a proxy (Render, etc.)
app.use(
  cors({
    origin: env.clientOrigins,
    methods: ["GET", "POST"],
  })
);
app.use(express.json({ limit: "16kb" }));

// ── Routes ────────────────────────────────────────────────────
app.get("/api/health", async (_req, res) => {
  let db = "unknown";
  try {
    await pool.query("SELECT 1");
    db = "up";
  } catch {
    db = "down";
  }
  res.json({ status: "ok", db, env: env.nodeEnv });
});

app.use("/api/contact", contactRoutes);

// 404 for unknown API routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

// Centralized error handler
app.use((err, _req, res, _next) => {
  console.error("[server] Unhandled error:", err.message);
  res.status(500).json({ success: false, message: "Internal server error." });
});

// ── Startup ───────────────────────────────────────────────────
async function start() {
  // Non-fatal startup checks
  try {
    await pool.query("SELECT 1");
    console.log("[db] ✅ Connected to PostgreSQL.");
  } catch (err) {
    console.warn(
      "[db] ⚠️  Could not connect to PostgreSQL:",
      err.message,
      "\n      The server will still run; check your .env and run `npm run db:init`."
    );
  }

  await verifyMailer();

  app.listen(env.port, () => {
    console.log(`\n🚀 Server running at http://localhost:${env.port}`);
    console.log(`   Allowed origins: ${env.clientOrigins.join(", ")}\n`);
  });
}

start();
