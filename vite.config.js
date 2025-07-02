import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/DearestFW',
  css: {
    postcss: './postcss.config.js'
  }
})