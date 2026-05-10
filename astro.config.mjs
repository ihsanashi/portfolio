// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@/assets': '/src/assets',
      },
    },
  },

  integrations: [react()],
  adapter: cloudflare(),
});
