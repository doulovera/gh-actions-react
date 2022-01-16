import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://doulovera.github.io/gh-actions-react/',
  plugins: [react()]
})
