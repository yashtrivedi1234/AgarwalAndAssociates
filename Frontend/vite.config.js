import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // server: {
  //   host: '0.0.0.0', 
  //   allowedHosts: [
  //     '4555-2409-4089-bec6-e816-39a7-c55a-d349-5b89.ngrok-free.app' 
  //   ]
  // }
})
