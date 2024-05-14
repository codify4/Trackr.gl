
import { defineConfig } from "drizzle-kit"

export default defineConfig({
    schema: "./db/schema.ts",
    out: "./drizzle/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.NEON_DATABASE_URL! as string,
    }
});