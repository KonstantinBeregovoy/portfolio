import rss from '@astrojs/rss';
import { getPosts } from '../lib/content';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: 'Konstantin Beregovoy',
    description: 'Frontend architecture, web standards, accessibility and AI-assisted engineering.',
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/blog/${p.id}/`,
    })),
  });
}
