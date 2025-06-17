import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    host: "ep-wandering-mode-a511lybe.us-east-2.aws.neon.tech", // 👈 Update this!
    user: "TIMRACE_owner",
    password: "npg_PsKi5oAgmE7G",
    database: "TIMRACE",
    ssl: "require"
  }
});
