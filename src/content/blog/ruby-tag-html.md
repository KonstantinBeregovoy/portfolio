---
title: 'If <script> is for JS, then what is <ruby> for?'
description: 'The ruby element is a semantic HTML gem for phonetic annotations, with zero JavaScript and native accessibility.'
date: 2026-06-03
kind: post
tags: ['frontend', 'accessibility']
linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7467926267649216512/'
featured: true
draft: false
---

Spoiler: it has absolutely nothing to do with the Ruby programming language.

It's a hidden gem of semantic HTML, natively supported by browsers since Internet Explorer 5. The tag was designed for a very specific task: displaying phonetic guide characters (furigana) directly above East Asian text.

## How it works under the hood

- `<ruby>` is the base wrapper container for the entire text block.
- `<rt>` is the "Ruby Text" element. It specifies the tiny annotation text and automatically places it on top.
- `<rp>` is a brilliant fallback mechanism. If an ancient browser doesn't support ruby, it wraps the annotation in regular parentheses so it still makes sense structurally: 明日 (Ashita).

<p style="font-size: 28px;"><ruby>明日<rp>(</rp><rt>Ashita</rt><rp>)</rp></ruby></p>

I actually first used it in production around 2012-2013 when developing a website for a Japanese tea restaurant. It was a perfect, zero-JS way to handle authentic tea terms and their pronunciation natively.

Today, as I manage core engineering directions, I look at these features strictly through the lens of UI architecture and design systems. Creative frontend engineers often repurpose `<ruby>` for completely different tasks: inline acronym explanations, translation helpers, or minimalist pricing subtitles.

## What's the profit?

We strip away heavy CSS workarounds from our components, boost rendering performance, and ensure native web accessibility (WCAG) right out of the box. All without a single line of JavaScript.

Have you ever used the `<ruby>` tag for unconventional micro-layouts, or does your design system already rely on standard custom UI components for this? I'd like to discuss below!
