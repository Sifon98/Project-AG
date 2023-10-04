import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

// For GitHub Pages, safe to change after
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
    server: {
      port:3000,
    }
  }

  if (command !== 'serve') {
    config.base = '/Project-AG/'
  }

  return config
})
