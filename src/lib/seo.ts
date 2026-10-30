import { en as t } from '../i18n/en';

export const SITE = 'https://bereg.dev';
export const PERSON_ID = `${SITE}/#person`;
export const SITE_ID = `${SITE}/#website`;

export type JsonLd = Record<string, unknown>;

export const abs = (path: string) => new URL(path, SITE).toString();

export function personNode(): JsonLd {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: t.siteName,
    jobTitle: t.role,
    description: t.tagline,
    url: `${SITE}/`,
    image: abs('/img/konstantin.jpg'),
    ...(t.showEmail ? { email: t.email } : {}),
    homeLocation: { '@type': 'Place', name: 'Israel' },
    knowsLanguage: t.languages,
    knowsAbout: t.skills.flatMap((group) => group.items),
    sameAs: [t.links.linkedin, t.links.github],
    alumniOf: t.education.map((item) => ({ '@type': 'EducationalOrganization', name: item.school })),
    worksFor: t.experience
      .filter((item) => item.period.includes('now'))
      .map((item) => ({ '@type': 'Organization', name: item.company })),
  };
}

export function websiteNode(): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: `${SITE}/`,
    name: t.siteName,
    description: t.tagline,
    inLanguage: t.lang,
    publisher: { '@id': PERSON_ID },
  };
}

export function breadcrumb(items: { name: string; path: string }[]): JsonLd {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function graphLd(opts: { pageType: string; title: string; description: string; url: string; extra?: JsonLd[] }) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      personNode(),
      websiteNode(),
      {
        '@type': opts.pageType,
        '@id': `${opts.url}#webpage`,
        url: opts.url,
        name: opts.title,
        description: opts.description,
        inLanguage: t.lang,
        isPartOf: { '@id': SITE_ID },
        about: { '@id': PERSON_ID },
        ...(opts.pageType === 'ProfilePage' ? { mainEntity: { '@id': PERSON_ID } } : {}),
      },
      ...(opts.extra ?? []),
    ],
  };
}
