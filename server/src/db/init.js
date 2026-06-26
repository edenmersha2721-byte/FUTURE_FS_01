import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { pool } from "../config/db.js";

/**
 * One-off script that applies schema.sql to the configured database.
 * Usage: npm run db:init
 */
const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  const schemaPath = join(__dirname, "schema.sql");
  const sql = await readFile(schemaPath, "utf8");

  console.log("[db:init] Applying schema...");
  await pool.query(sql);
  console.log("[db:init] ✅ Schema applied successfully.");
}

main()
  .catch((err) => {
    console.error("[db:init] ❌ Failed:", err.message);
    process.exitCode = 1;
  })
  .finally(() => pool.end());
