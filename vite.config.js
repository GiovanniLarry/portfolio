import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',            // <- Vercel root
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['23da334c1f35.ngrok-free.app'],
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})