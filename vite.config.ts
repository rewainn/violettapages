import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    // Сейчас сайт открывается по адресу rewainn.github.io/violettapages/
    // (без своего домена), поэтому base должен совпадать с именем репозитория.
    // Когда подключите кастомный домен — поменяйте обратно на base: '/'.
    base: '/violettapages/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});