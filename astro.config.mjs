// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false // 'es' no lleva prefijo (/proyectos), 'en' sí (/en/proyectos)
    }
  },
  site: 'https://cabetodev.onrender.com', // Ajusta este dominio por la URL final de tu portafolio de desarrollo
  integrations: [sitemap()],
});