---
title: 'hdr-glow'
summary: 'Free open-source tool that makes selected colors of a logo, image or text glow on HDR screens.'
type: 'opensource'
year: 2026
role: 'Author'
status: 'live'
stack: ['TypeScript', 'React', 'Web Workers', 'OKLab']
featured: true
order: 10
links:
  - { label: 'Live tool', href: 'https://glow.bereg.dev' }
  - { label: 'GitHub', href: 'https://github.com/KonstantinBeregovoy/hdr-glow' }
---

## Problem

On the web, CSS colors stop at white, so a logo looks flat next to an HDR photo or video. There was no simple way to make a brand mark glow on HDR screens.

## What I did

- Built a browser tool: drop in an image (PNG, JPEG, WebP, AVIF or SVG), pick the colors that should glow, download the result.
- Added brightness of up to 7.5x white to the selected colors.
- Export an HDR JPEG with a gain map for websites and a Rec.2100 PQ JPEG for LinkedIn.
- Added a text demo: glowing text with a few lines of CSS (`background-clip: text`) and a 3 KB image, with the exact HTML and CSS to copy.
- Wrote the JPEG encoder, the ISO 21496-1 gain-map container and the PQ color profile from scratch in TypeScript.

## Result

A free tool under the MIT license. It works on HDR screens in Chrome 137+ and Safari 26+.

## Decisions

- Everything runs in the browser, in a Web Worker. There is no backend and nothing is uploaded.
- Colors are matched in OKLab, so the selection follows how people see color.
- No encoder dependencies: the JPEG and gain-map code is written in TypeScript to control the exact output.
