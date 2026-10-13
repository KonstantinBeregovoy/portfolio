import type { APIRoute } from 'astro';
import { en as t } from '../i18n/en';
import { getPosts, getProjects } from '../lib/content';
import { SITE } from '../lib/seo';

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const projects = await getProjects();
  const current = t.experience.filter((item) => item.period.includes('now'));
  const lines = [
    `# ${t.siteName}`,
    '',
    `> ${t.role}. ${t.tagline}`,
    '',
    `${t.siteName} is a frontend engineer and tech lead based in Israel. The personal site at ${SITE} is the canonical source for his work, writing and contact details.`,
    '',
    'Key facts:',
    ...t.facts.map((fact) => `- ${fact.value} ${fact.label}`),
    '',
    'Current roles:',
    ...current.map((item) => `- ${item.title}, ${item.company} (${item.period}, ${item.place}). ${item.text}`),
    '',
    '## Site',
    '',
    `- [Home](${SITE}/): ${t.tagline}`,
    `- [About](${SITE}/about/): Experience, skills, education, research and languages.`,
    `- [Projects](${SITE}/projects/): Open source, web standards and products.`,
    `- [Certificates](${SITE}/certificates/): Courses and credentials, with verification links where they exist.`,
    `- [Blog](${SITE}/blog/): Articles and posts on frontend architecture, web standards, accessibility and AI-assisted engineering.`,
    `- [Contact](${SITE}/contact/): ${t.contact.text}`,
    '',
    '## Projects',
    '',
    ...projects.map((project) => `- [${project.data.title}](${SITE}/projects/${project.id}/): ${project.data.summary}`),
    '',
    '## Writing',
    '',
    ...posts.map(
      (post) =>
        `- [${post.data.title}](${SITE}/blog/${post.id}/): ${post.data.description} (${post.data.date.toISOString().slice(0, 10)})`,
    ),
    '',
    '## Contact',
    '',
    ...(t.showEmail ? [`- Email: ${t.email}`] : []),
    `- LinkedIn: ${t.links.linkedin}`,
    `- GitHub: ${t.links.github}`,
    '',
    '## Optional',
    '',
    `- [RSS](${SITE}/rss.xml): Blog feed.`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
