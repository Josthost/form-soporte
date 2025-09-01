import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  build:{
    outDir:'dist'
  },
  server: {
    host: '0.0.0.0', // Escucha en todas las interfaces de red
    port: 5173,      // Puerto por defecto de Vite (cámbialo si es necesario)
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
