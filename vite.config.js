import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import 'vite/modulepreload-polyfill'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: 'path/to/main.js',
    }
  },
  plugins: [react()],
})
