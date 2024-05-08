import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
export default defineConfig(() => {
  return {
    build: {
      outDir: 'dist',
    },
    server: {
        open: true,
      },
    plugins: [react(),eslint(),svgr({ svgrOptions: { icon: true } })],
    base:'https://rufi512.github.io/CRUD-React-Redux-LocalStorage'
  };
});