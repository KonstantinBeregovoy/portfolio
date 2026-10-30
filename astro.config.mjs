import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { leavesSite } from './src/lib/external.ts';

// Tables scroll inside a box. Code blocks are keyboard-focusable. Shiki already highlights.
// Tags written in prose (`<style>`, `<pre>`) are Markdown HTML. Left as tags, an
// unclosed one swallows the rest of the page. For the articles listed here, show the
// characters instead. This is opt-in on purpose: other posts (ruby-tag-html,
// dancing-numbers-tabular-nums) contain live HTML demos that must stay HTML.
// To add an article, put its path below.
const ESCAPE_PROSE_HTML = ['/src/content/blog/hdr-glow.md'];

const escapeProseHtml = {
  name: 'escape-prose-html',
  html(node, ctx) {
    const path = ctx.fileURL?.pathname ?? '';
    if (!ESCAPE_PROSE_HTML.some((file) => path.endsWith(file))) return;
    ctx.replaceNode(node, { type: 'text', value: node.value });
  },
};

const articleMarkdown = {
  name: 'article-layout',
  element: [
    {
      filter: ['table'],
      visit(node, ctx) {
        ctx.wrapNode(node, {
          type: 'element',
          tagName: 'div',
          properties: { className: ['table-scroll'], tabindex: '0' },
          children: [],
        });
      },
    },
    {
      filter: ['pre'],
      visit(node, ctx) {
        ctx.setProperty(node, 'tabindex', '0');
      },
    },
    {
      filter: ['a'],
      visit(node, ctx) {
        const href = node.properties?.href;
        const value = Array.isArray(href) ? href[0] : href;
        if (typeof value !== 'string' || !leavesSite(value)) return;
        ctx.setProperty(node, 'target', '_blank');
        const current = node.properties?.rel;
        const text = Array.isArray(current) ? current.join(' ') : String(current ?? '');
        const tokens = new Set(text.split(/\s+/).filter(Boolean));
        tokens.add('noopener');
        tokens.add('noreferrer');
        ctx.setProperty(node, 'rel', [...tokens].join(' '));
      },
    },
  ],
};

export default defineConfig({
  site: 'https://bereg.dev',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // i18n-ready: English is the default and lives at the root.
  // To add a language later, add it to locales and create src/pages/<locale>/.
  markdown: {
    shikiConfig: {
      theme: 'github-dark-high-contrast',
      langAlias: { text: 'plaintext' },
    },
    processor: satteri({ mdastPlugins: [escapeProseHtml], hastPlugins: [articleMarkdown] }),
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
});
