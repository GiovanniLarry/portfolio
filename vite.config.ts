import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig(...) top-level config
export default defineConfig({
  plugins: [react()],
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
