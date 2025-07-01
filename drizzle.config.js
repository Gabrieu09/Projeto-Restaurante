require("dotenv/config");
const { defineConfig } = require("drizzle-kit");

module.exports = defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle/migrations",
  driver: "pg",
  dialect: "postgresql",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
});
