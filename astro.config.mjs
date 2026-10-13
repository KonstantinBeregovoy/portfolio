import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bereg.dev',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // i18n-ready: English is the default and lives at the root.
  // To add a language later, add it to locales and create src/pages/<locale>/.
  markdown: { shikiConfig: { theme: 'github-dark-high-contrast' } },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
});
