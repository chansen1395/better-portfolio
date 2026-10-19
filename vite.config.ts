import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from the root of https://connorhansen.com (Cloudflare Workers static assets).
export default defineConfig({
  plugins: [react()],
  base: "/",
});
