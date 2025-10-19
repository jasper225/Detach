import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        background: resolve(__dirname, "src/background.ts"),
        content: resolve(__dirname, "src/content.tsx"),
        overlayInjector: resolve(__dirname, "src/overlay-injector.tsx"),
        popup: resolve(__dirname, "src/popup.tsx"),
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});