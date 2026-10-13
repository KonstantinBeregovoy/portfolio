---
title: 'Stop the Dancing Numbers with One Line of CSS'
description: 'Proportional digits make prices and timers jitter. font-variant-numeric: tabular-nums fixes it without a monospace font.'
date: 2026-04-06
kind: post
tags: ['frontend']
linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7446950866097463296/'
featured: true
draft: false
---

Ever noticed how numbers in a vertical list or a pricing table "vibrate" because they don't align perfectly?

Most modern fonts (like Inter, Roboto, or San Francisco) use "proportional" figures by default. The digit "1" is narrower than "8". This looks natural in a sentence, but in a UI, it creates a jagged mess when you're trying to compare values or build a countdown.

## The fix

`font-variant-numeric: tabular-nums;`

This CSS property tells the browser to use "tabular" figures, where each digit has the same width. It's like turning your numbers into a grid without switching to a monospace font.

## Why this matters for your product

- **Readability:** Users can compare prices or metrics at a glance because decimals and digits align vertically.
- **Zero jitter (layout shift):** When a timer counts down or a balance updates, the container won't jitter or change width.
- **Visual polish:** It's a tiny detail that separates a "quick fix" from a professional, high-end product.

## The code

```css
/* The magic line */
.numeric-data {
  font-variant-numeric: tabular-nums;
}
```

## See the difference

In the left column the digit "1" breaks the vertical rhythm. In the right column everything stays in line.

<div class="demo">
  <div>
    <b>without</b>
    <ul>
      <li>1,111.11</li>
      <li>8,888.88</li>
      <li>1,181.18</li>
      <li>4,321.09</li>
    </ul>
  </div>
  <div class="tab">
    <b>with tabular-nums</b>
    <ul>
      <li>1,111.11</li>
      <li>8,888.88</li>
      <li>1,181.18</li>
      <li>4,321.09</li>
    </ul>
  </div>
</div>

As a Lead, I always look for this during code reviews, especially for dashboards and fintech apps. It's a low-effort, high-impact win for the UX.

Are you letting your numbers dance, or are you keeping them in line?
