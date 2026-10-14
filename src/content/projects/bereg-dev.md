---
title: 'bereg.dev'
summary: 'This site, built as an engineering exercise: static, accessible and secure by default. Lighthouse 100 and Security Headers A+.'
type: 'personal'
year: 2026
role: 'Author'
status: 'live'
stack: ['Astro', 'CSS', 'Cloudflare', 'Ultra HDR', 'IBM Plex']
featured: false
order: 50
links:
  - { label: 'Source', href: 'https://github.com/KonstantinBeregovoy/portfolio' }
  - { label: 'Run Lighthouse', href: 'https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fbereg.dev%2F' }
  - { label: 'Check headers', href: 'https://securityheaders.com/?q=https%3A%2F%2Fbereg.dev&followRedirects=on' }
---

## Problem

A portfolio is a frontend engineer's most visible work, and it is often the place where performance, accessibility and security are skipped. I wanted a site that holds up to the same checks I ask of a team.

## What I did

- Built a static Astro site where every project, certificate and post is one Markdown file, hosted on Cloudflare with a build and deploy on every push to `main`.
- Designed the "Engineering Blueprint" theme in a single stylesheet: colour tokens, a drawing-grid background, scroll-driven line drawing, and a pointer light that follows the mouse.
- Self-hosted IBM Plex as one variable font file, with metric-matched fallbacks so the text does not jump when the font loads.
- Set a strict Content Security Policy and the other security headers: scripts and styles from the same origin only, no inline scripts.
- Rewrote the stylesheet from five stacked layers into one cascade and compared computed styles on every page before shipping, with identical results.
- Made the header logo and the hdr-glow card border and title glow on HDR screens, using my own tool [hdr-glow](/projects/hdr-glow/).

## Result

Lighthouse scores 100 in all four categories and Security Headers grades the site A+, measured on 14 October 2026. Both checks are public, so anyone can repeat them with the links above. The whole site ships one small script of about 16 lines, and the source is open.

## Decisions

- HTML and CSS first. The only script is decorative, so the site works the same without it.
- No third-party requests: fonts, images and scripts are all served from the same origin, which is good for speed, privacy and the security policy.
- Every effect has a fallback: HDR styling applies only on HDR screens, scroll animations only where the browser supports them, and reduced motion, print and forced colors are respected.
