---
title: 'Plain A11y'
summary: 'Free Chrome and Firefox extension that turns accessibility audit results into plain-language fixes for designers, writers and product teams.'
type: 'opensource'
year: 2026
role: 'Author'
status: 'live'
stack: ['TypeScript', 'Manifest V3', 'axe-core', 'React', 'WXT']
featured: true
order: 35
links:
  - { label: 'Chrome Web Store', href: 'https://chromewebstore.google.com/detail/plain-a11y/cnldihaficjignkhpgodanceilllbjfb' }
  - { label: 'Firefox Add-ons', href: 'https://addons.mozilla.org/en-US/firefox/addon/plain-a11y/' }
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
- Made the toolbar icon and the summary count elements in three separate groups: issues, manual review and AAA recommendations. A yellow "!" shows when only manual review or AAA items are left, and the icon stays empty when nothing is found, because an automated check cannot say that a page is accessible.
- Kept the last result of each tab, so reopening the window on the same page shows it again. It is dropped when the tab loads another page or is closed.
- Built the same code for Firefox for desktop and tested it in a real Firefox, which found a difference in how address changes of single-page sites are reported.

## Result

A free extension under the MIT license, published in the Chrome Web Store and on Firefox Add-ons, with the source on GitHub. Automated checks cover only part of accessibility problems: nested iframes are not checked, and browser service pages such as `chrome://` cannot be scanned. The interface is in English.

## Decisions

- Everything runs in the browser. No accounts, analytics or servers, and only three permissions: `activeTab`, `scripting` and `storage`.
- The kept result lives only in the memory of the browser and is never written by the extension to disk or sent anywhere.
- The axe-core version is pinned, so the explanations stay consistent with the rules that produce them.
- Results that need human judgment are shown as manual review, not as pass or fail.
