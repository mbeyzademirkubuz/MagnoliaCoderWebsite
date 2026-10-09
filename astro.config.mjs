// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://beyzademirkubuz.com',
  i18n: {
    locales: ['en', 'tr'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
