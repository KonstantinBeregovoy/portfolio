---
title: 'CSS Unit Rulebook'
summary: 'Reference site for all 63 CSS units, with live demos and browser support computed from MDN data.'
type: 'personal'
year: 2026
role: 'Author'
status: 'live'
stack: ['Astro', 'TypeScript', 'CSS', 'Web Components', 'Playwright', 'axe-core']
featured: true
order: 25
cover: '/img/units-rulebook.png'
links:
  - { label: 'Website', href: 'https://units.bereg.dev/' }
---

## Problem

Units like `vw`, `rem` or `dvh` are hard to explain with a static example: their value depends on the viewport and the root font size, which a normal page cannot change.

## What I did

- One page for each of the 63 units in seven groups, with the formula, an example and related units.
- Demos run in same-origin iframes, where the frame is the viewport and its root, so the numbers are measured, not modelled.
- Browser support and Baseline are generated from `@mdn/browser-compat-data`, never typed by hand.
- Guides, a glossary, a decision tree and a CSS checker for unit mistakes.

## Result

A static site at units.bereg.dev. About 550 Playwright tests in Chromium, Firefox and WebKit, including axe checks of every page.

The book with the same title, [CSS Unit Rulebook: What each CSS unit comes to, and what changes it](https://www.amazon.com/dp/B0HR65PS11), is out in paperback on Amazon (2026 edition, 106 pages).

## Decisions

- Astro static with a strict CSP: no inline scripts or styles.
- Every page reads without JavaScript; demos are an enhancement with a static table as fallback.
- Logical CSS only, checked by a linter, so a right-to-left version needs no rewrite.
