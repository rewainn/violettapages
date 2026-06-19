import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    // Корневой путь '/' — используем, потому что сайт будет открываться
    // по кастомному домену (yourdomain.com/), а не по адресу вида
    // username.github.io/repo-name/. Если решите отказаться от своего
    // домена и оставить только адрес rewainn.github.io/violettaproject/ —
    // поменяйте на base: '/violettaproject/'.
    base: '/',
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
