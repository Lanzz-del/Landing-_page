import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Tambahkan alias untuk memastikan resolusi path di Vercel
  resolve: {
    alias: {
      '/src': './src', 
    }
  }
})
