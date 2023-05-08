import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
//@ts-ignore
import crx from 'vite-plugin-crx-mv3';

import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    crx({
      manifest: './manifest.json'
    }),
    svgLoader()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@Auth': fileURLToPath(new URL('./src/auth', import.meta.url)),
      '@Core': fileURLToPath(new URL('./src/core', import.meta.url)),
      '@Shared': fileURLToPath(new URL('./src/shared', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // eslint-disable-next-line quotes
        additionalData: `@import "@/shared/styles/_theme.scss";`
      }
    }
  }
});