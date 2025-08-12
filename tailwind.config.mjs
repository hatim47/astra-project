import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // This line is important!
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()], // This line is also important!
  },
  // ...other configurations
});