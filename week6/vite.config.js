import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import loadEnv from './loadEnv';

const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

export default defineConfig(({ mode }) => {
  loadEnv(mode);
  return ({
    base: process.env.NODE_ENV === 'production' ? `/${process.env.REPOSITORY_NAME}/` : '/',
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      rollupOptions: {
        output: {
          sanitizeFileName(name) {
            const match = DRIVE_LETTER_REGEX.exec(name);
            const driveLetter = match ? match[0] : '';
            return (
              driveLetter
              + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '')
            );
          },
        },
      },
    },
  });
});
