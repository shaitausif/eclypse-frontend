import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      // This will append the http://localhost:3000 before api everywhere
      '/api' : 'https://eclypse-backend.vercel.app/'
      // It will also help us to get rid of that CORS error as now the vite can understand that both server and frontend request's are coming from the same port so it won't give any kind of error
    }
  },
  plugins: [
    tailwindcss(),
    react()],
})
