import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const githubPagesBase = "/better-portfolio/";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? githubPagesBase : "/",
}));
