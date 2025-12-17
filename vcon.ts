import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ensure assets load correctly from GitHub Pages repo path
export default defineConfig({
  base: '/portfoliome/', // <-- Added for GitHub Pages
  plugins: [react()],
})
  // Ensure assets resolve correctly when hosted at /portfolio/
  base: '/portfolio/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
