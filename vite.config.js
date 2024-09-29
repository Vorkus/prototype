import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/prototype/",
  build: {
    sourcemap: false, // Disable source maps for production
  },
  server: {
    sourcemap: true, // Ensure source maps are enabled for dev server
  }
})
