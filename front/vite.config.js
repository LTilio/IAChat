import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'X-Frame-Options': 'ALLOW-FROM http://localhost:3000', // Permite o iframe no Grafana
      'Content-Security-Policy': "frame-ancestors 'self' http://localhost:3000;", // Corrigido
      'Access-Control-Allow-Origin': '*', // Permite todas as origens (ou substitua por http://localhost:3000)
    },
  },
});