import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    "/api": {
      target: "http://localhost:3000",
      changeOrigin: true,
    },
    "/public": {
      target: "http://localhost:3000",
      changeOrigin: true,
    },
  }
  plugins: [react()],
});
