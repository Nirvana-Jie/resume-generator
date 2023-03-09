import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

//确定路径重命名
const pathSrc = path.resolve(__dirname, 'src');
const typingSrc = path.resolve(__dirname, 'types');

// https://vitejs.dev/config/
export default defineConfig({
  root: '',
  plugins: [react()],
  build: {
    minify: false,
  },
  resolve: {
    alias: {
      '~/': `${typingSrc}/`,
      '@/': `${pathSrc}/`,
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
