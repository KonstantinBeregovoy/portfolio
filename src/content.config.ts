import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file = one entry. Files starting with "_" are templates and are ignored.
const pattern = '**/[^_]*.md';

export const BLOG_TAGS = ['frontend', 'accessibility', 'web-standards', 'ai-tooling', 'leadership'] as const;

const blog = defineCollection({
  loader: glob({ pattern, base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(100),
    description: z.string().max(200),
    date: z.coerce.date(),
    kind: z.enum(['article', 'post']).default('article'),
    tags: z.array(z.enum(BLOG_TAGS)).max(3).default([]),
    // Link to the discussion on LinkedIn, added after publishing there.
    linkedin: z.string().url().optional(),
    // Preview image path in /public, 1200x630.
    cover: z.string().optional(),
    // true pins the entry in "Best writing" on Home (keep at most three).
    featured: z.boolean().default(false),
    // true keeps the entry off the site.
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern, base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    type: z.enum(['opensource', 'standards', 'professional', 'personal']),
    year: z.number(),
    role: z.string(),
    status: z.enum(['live', 'ongoing', 'archived']),
    stack: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), href: z.string().url() })).default([]),
    cover: z.string().optional(),
    // true shows the project on Home (three at the start, six at most).
    featured: z.boolean().default(false),
    // Slug of a related blog entry.
    post: z.string().optional(),
    // Lower number goes first.
    order: z.number().default(100),
  }),
});

const certificates = defineCollection({
  loader: glob({ pattern, base: './src/content/certificates' }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.coerce.date(),
    // Verification link. Leave out when there is none.
    credentialUrl: z.string().url().optional(),
    image: z.string().optional(),
    group: z.enum(['ai', 'learning', 'earlier']),
    // Slug of a certificate this one is part of (shown folded under it).
    bundle: z.string().optional(),
  }),
});

export const collections = { blog, projects, certificates };
