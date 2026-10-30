const SITE_HOST = 'bereg.dev';

/** True for http(s) links whose host is not bereg.dev and not one of its subdomains. */
export function leavesSite(href: string): boolean {
  let url: URL;
  try {
    url = new URL(href, `https://${SITE_HOST}`);
  } catch {
    return false;
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;
  const host = url.hostname.replace(/\.$/, '').toLowerCase();
  return host !== SITE_HOST && !host.endsWith(`.${SITE_HOST}`);
}

/** New-tab attributes for off-site links. Same-site and subdomain links stay in this tab. */
export function externalAttrs(href: string, rel?: string): { target?: '_blank'; rel?: string } {
  const keep = rel?.trim();
  if (!leavesSite(href)) return keep ? { rel: keep } : {};
  const tokens = new Set((keep ?? '').split(/\s+/).filter(Boolean));
  tokens.add('noopener');
  tokens.add('noreferrer');
  return { target: '_blank', rel: [...tokens].join(' ') };
}
