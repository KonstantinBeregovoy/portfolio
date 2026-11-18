---
title: 'Bereg DS'
summary: 'Open-source design system behind bereg.dev: Figma library, design tokens, CSS and React components, published on npm.'
type: 'opensource'
year: 2026
role: 'Author'
status: 'live'
stack: ['Figma', 'Design tokens (DTCG)', 'Style Dictionary', 'CSS', 'React', 'TypeScript', 'Storybook']
featured: true
order: 15
links:
  - { label: 'Docs', href: 'https://ds.bereg.dev' }
  - { label: 'npm', href: 'https://www.npmjs.com/package/bereg-ds' }
  - { label: 'GitHub', href: 'https://github.com/KonstantinBeregovoy/bereg-ds' }
  - { label: 'Figma', href: 'https://www.figma.com/design/nWkFlhkomx90UBXw6nFAQj' }
---

## Problem

The "Engineering Blueprint" look of this site lived in one CSS file. Spacing and font sizes had drifted, and the same style could not be reused in my other projects without copying code.

## What I did

- Pulled every value out of the site CSS into design tokens: colors, type scale, spacing, radii, borders, shadows.
- Built the Figma library: 85 variables in 4 collections, 20 text styles, 2 effect styles and 17 components with hover and focus states.
- Rebuilt the bereg.dev home page in Figma from components only, to check that the system covers a real page.
- Shipped the `bereg-ds` npm package: DTCG tokens turned into CSS and JS by Style Dictionary, a CSS core and React components on top of the same classes.
- Documented it in Storybook at ds.bereg.dev, with an axe-core check on every story.

## Result

Version 1.0.0 is on npm under the MIT license: `npm i bereg-ds`. The Figma library is published, and the docs are live at ds.bereg.dev.

## Decisions

- A strict 4px scale with no exceptions in the system. Special cases stay in the project's own CSS.
- AAA contrast for text (7:1 and up). Borders of interactive elements are at least 3:1, every interactive component has a visible focus ring, and links are underlined.
- One package with plain CSS at the core. React is an optional layer, so any HTML site can use the same classes.
- Font sizes and spacing in rem, so the system follows the user's browser font size.
