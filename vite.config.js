import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // INI WAJIB UNTUK GITHUB PAGES. Ganti 'Landing_page' jika nama repo Anda berbeda.
  base: '/Landing_page/', 
})
