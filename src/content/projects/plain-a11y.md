---
title: 'Plain A11y'
summary: 'Free Chrome extension that turns accessibility audit results into plain-language fixes for designers, writers and product teams.'
type: 'opensource'
year: 2026
role: 'Author'
status: 'live'
stack: ['TypeScript', 'Manifest V3', 'axe-core', 'React', 'WXT']
featured: true
order: 35
links:
  - { label: 'Chrome Web Store', href: 'https://chromewebstore.google.com/detail/plain-a11y/cnldihaficjignkhpgodanceilllbjfb' }
  - { label: 'Website', href: 'https://a11y-ext.bereg.dev/' }
  - { label: 'GitHub', href: 'https://github.com/KonstantinBeregovoy/plain-a11y' }
---

## Problem

Accessibility tools report problems in the language of engineers. A designer, a content editor or a product manager gets a list of rule names and cannot tell what is wrong, who it affects or whose job it is to fix it.

## What I did

- Wrote plain-language explanations for 94 rules: the 90 default axe-core rules, plus `target-size` and three optional AAA rules. Each issue says what is wrong, who it affects and how to fix it.
- Sorted issues by severity (Critical, Serious, Minor) and by role (Design, Content, Code). The role filter is remembered between sessions.
- Added "Show on page", which outlines the element and scrolls to it, including inside open shadow DOM.
- Added a copyable Markdown checklist grouped by role, ready to paste into an issue tracker.
- Added a "Needs manual review" section for cases an automated check cannot decide, so they are not reported as passed.

## Result

A free extension under the MIT license, published in the Chrome Web Store, with the source on GitHub. Automated checks cover only part of accessibility problems: nested iframes are not checked, and `chrome://` pages cannot be scanned. The interface is in English.

## Decisions

- Everything runs in the browser. No accounts, analytics or servers, and only three permissions: `activeTab`, `scripting` and `storage`.
- The axe-core version is pinned, so the explanations stay consistent with the rules that produce them.
- Results that need human judgment are shown as manual review, not as pass or fail.
