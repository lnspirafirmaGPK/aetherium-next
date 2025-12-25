import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⚠️ สำคัญ: ชื่อ aetherium-next คือชื่อโปรเจกต์คุณ
  base: '/aetherium-next/', 
  build: {
    outDir: 'dist',
  }
})
