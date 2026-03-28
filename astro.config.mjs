// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/lib/remark.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://techtremolo.com',
  // Inline layout CSS so the first paint is not blocked on a separate stylesheet fetch (LCP).
  build: {
    inlineStylesheets: 'always',
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: 'gruvbox-dark-medium',
    },
  },
  vite: {
    // Spread: tailwindcss() returns an array of plugins; nesting breaks Vite 7 hook resolution.
    plugins: [...tailwindcss()],
  },
  integrations: [
    sitemap({
      // Error page should not be listed even if the build ever emits it.
      filter: (page) => !page.endsWith('/404') && !page.includes('/404.html'),
    }),
    mdx({
      optimize: true,
      syntaxHighlight: 'shiki',
    }),
  ],
  // Single variable font: one preload + one @font-face (avoids 5 static files competing with LCP text).
  fonts: [
    {
      name: 'InterVariable',
      cssVariable: '--font-inter-variable',
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/InterVariable.woff2'],
            style: 'normal',
            weight: 'variable',
          },
        ],
      },
    },
  ],
});
