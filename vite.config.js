import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite el acceso desde otras IPs en la red local
    port: 5173, // Cambia el puerto si es necesario
  },
})
