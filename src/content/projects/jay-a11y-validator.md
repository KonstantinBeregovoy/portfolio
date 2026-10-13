---
title: 'Jay Framework: a11y-validator'
summary: 'Open-source accessibility rules for Jay Framework (Wix): structural gaps that Lighthouse does not catch.'
type: 'opensource'
year: 2026
role: 'Contributor'
status: 'ongoing'
stack: ['TypeScript', 'WCAG 2.x', 'HTML semantics', 'Static analysis']
featured: true
order: 30
links:
  - { label: 'GitHub', href: 'https://github.com/jay-framework/jay' }
---

## Problem

Surface-level tools such as Lighthouse miss structural accessibility gaps: page-level semantics, heading hierarchy and violations of the HTML content model.

## What I did

- Authored and merged a rule that detects nested interactive elements (rule DL163, PR #190). It flags invalid HTML such as a `<button>` inside a clickable `<a>`, a common pattern in product cards.
- Keep adding incremental fixes and rules in different areas of the validator as issues come up, instead of one large feature.
- Worked with Yoav Abrahami (Head of Code Products, Wix and Wix Studio) on real edge cases, for example DOM patterns for product cards that combine a page-level link with quick-action buttons, grounded in the WHATWG spec and WCAG 4.1.2.

## Result

A merged rule in the validator and an ongoing stream of contributions.

## Decisions

- Rules follow the HTML specification and WCAG, not personal taste.
- Small, reviewable changes that maintainers can merge quickly.
