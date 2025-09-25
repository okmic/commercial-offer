import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/commercial-offer/',
  build: {
    outDir: 'build',
    emptyOutDir: true
  },
  server: {
    port: 3000
  }
})