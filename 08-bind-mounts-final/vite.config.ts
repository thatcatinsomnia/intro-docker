import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    watch: {
      // if you are using windows os, add this line to make hot reload work 
      usePolling: true
    }
  }
})
