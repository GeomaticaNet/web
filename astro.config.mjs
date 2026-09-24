// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://geomaticanet.github.io',
  base: '/mainweb',
  vite: {
    plugins: [tailwindcss()],
  },
});
