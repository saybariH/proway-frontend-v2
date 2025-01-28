import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tsconfigPaths()
  ],

  preview: {
    port: 3000,
    strictPort: true,
   },
   server: {
    port: 3000,
    strictPort: true,
    host: true,
    hmr:{
      clientPort: 3000,
    },
    origin: "http://0.0.0.0:3000",
    watch: {
      usePolling: true,
    },
   },
})
