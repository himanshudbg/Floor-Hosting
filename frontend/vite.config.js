import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './', // Use relative paths instead of absolute
  build: {
    outDir: '../backend/build',
    assetsDir: 'assets',
    emptyOutDir: true,
    manifest: true,
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})