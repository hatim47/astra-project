// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
   site: 'https://hatim47.github.io',   // Must be the root
  base: '/astra-project/', 
  vite: {    
    plugins: [tailwindcss()],
  },
});