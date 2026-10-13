import { getCollection, type CollectionEntry } from 'astro:content';

export async function getPosts(): Promise<CollectionEntry<'blog'>[]> {
  const all = await getCollection('blog', (p) => !p.data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getProjects(): Promise<CollectionEntry<'projects'>[]> {
  const all = await getCollection('projects');
  return all.sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}

export const PROJECT_TYPES = [
  { id: 'opensource', label: 'Open source' },
  { id: 'standards', label: 'Standards' },
  { id: 'professional', label: 'Professional' },
  { id: 'personal', label: 'Personal' },
] as const;

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
