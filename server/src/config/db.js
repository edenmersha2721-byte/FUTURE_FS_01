import pg from "pg";
import { env } from "./env.js";

const { Pool } = pg;

/**
 * Shared PostgreSQL connection pool.
 * Uses DATABASE_URL when provided, otherwise the individual PG* settings.
 */
const poolConfig = env.db.connectionString
  ? {
      connectionString: env.db.connectionString,
      ssl: env.db.ssl ? { rejectUnauthorized: false } : false,
    }
  : {
      host: env.db.host,
      port: env.db.port,
      user: env.db.user,
      password: env.db.password,
      database: env.db.database,
      ssl: env.db.ssl ? { rejectUnauthorized: false } : false,
    };

export const pool = new Pool(poolConfig);

pool.on("error", (err) => {
  console.error("[db] Unexpected error on idle client:", err.message);
});

/** Convenience query helper. */
export const query = (text, params) => pool.query(text, params);
