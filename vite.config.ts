import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/v1/symbols': 'https://api.bitfinex.com',
      '/v1/pubticker/': 'https://api.bitfinex.com',
      '/ws/2': 'wss://api-pub.bitfinex.com'
    }
  },
  plugins: [react()]
})
