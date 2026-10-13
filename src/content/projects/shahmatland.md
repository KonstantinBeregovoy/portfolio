---
title: 'Shahmatland'
summary: 'Chess education platform that grew from a personal MVP to 20+ schools and 13+ instructors.'
type: 'personal'
year: 2024
role: 'Founder and Technical Lead'
status: 'live'
stack: ['React 19', 'Vite', 'WebSocket', 'Stockfish', 'Vitest']
featured: true
order: 20
links:
  - { label: 'Platform', href: 'https://portal.shahmatland.com' }
---

## Problem

Chess lessons in schools needed one place for lessons, puzzles and live games, in several languages, and it had to meet Ministry of Education requirements.

## What I did

- Designed a modular frontend on React 19 and Vite with a WebSocket layer for real-time multiplayer games and Stockfish-powered game analysis.
- Introduced a spec-driven development workflow with AI tools (Cursor, Kiro): more than 90% of the code is AI-generated, under strict architectural control and with 80% test coverage (Vitest).
- Migrated the build from Create React App to Vite: builds take 1 to 2 seconds and the entry bundle is about 75 KB gzipped.
- Led a volunteer team of teachers and a grandmaster who build lessons and puzzles.

## Result

Used by 20+ schools and 13+ professional chess instructors, available in 5 languages. It is an installable PWA, now in testing as a native Google Play app.

## Decisions

- Compliance first: Ministry of Education requirements, SOC security audits passed, WCAG accessibility for inclusive learning.
- AI writes most of the code, but the architecture, the specs and the tests stay under human control.
- A lean entry bundle, because many students use school devices and slow networks.
