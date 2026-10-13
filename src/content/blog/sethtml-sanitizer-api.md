---
title: 'Forget innerHTML: we are moving to setHTML()'
description: 'The native Sanitizer API gives secure defaults against DOM-based XSS, fewer dependencies and an easier path to SOC compliance.'
date: 2026-05-18
kind: post
tags: ['frontend', 'web-standards']
linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7462103609015476224/'
featured: true
draft: false
---

Forget everything you knew about `innerHTML` in 2026. We are moving to `setHTML()`.

Client-side security is a priority when building resilient, mission-critical platforms in Fintech and Enterprise. DOM-based XSS has been a core menace for over two decades. For years, we dealt with it by adding external dependencies, inflating bundles, and increasing technical debt. Now, it's a native web platform primitive.

## What does that mean in practice?

Firefox 148 and Chrome 146 already support the Sanitizer API. The `setHTML()` method introduces robust, secure defaults that strip out harmful script execution at the browser level.

## "Safety First" architecture and compliance (SOC / code audits)

As a Technical Anchor, I prioritize isolation and predictability for critical systems. Fintech operations require a reliable server confirmation before client-side updates; instant animations are inadequate because data accuracy matters more than fast UI feedback.

However, the biggest advantage of native sanitization combined with Trusted Types is its long-term compliance-readiness. The "Perfect Types" configuration (which blocks legacy unsafe sinks like `innerHTML` via CSP, leaving `setHTML()` as the only option) lets you clear code audits and achieve SOC compliance effortlessly, without writing complex custom security policies.

## Process efficiency and time-to-market

Does a strict focus on security mean development has to slow down? Not at all. Using the platform's native features improves product metrics for low-risk areas (social features, transaction history, external feeds):

- **Reduced maintenance overhead:** We strip about 23 kB of third-party JS libraries (such as DOMPurify) from the application. Less external code means fewer supply chain risks.
- **Lower code review overhead:** Since the platform handles security at the parser level, it frees up team time from manually scanning PRs for unsafe HTML string injections.
- **TTM optimization:** Minimizing technical debt and relying on predictable browser behavior allows us to ship new features to production significantly faster.

## The reality check

- **Custom configuration:** A strict allow-list configuration that permits only paragraph tags and class attributes. The API is highly strict: any contradictory configuration immediately throws a `TypeError`, catching design errors early in development.
- **The Safari gap:** WebKit is still lagging; there is no support even in Safari Technology Preview yet. While Safari stays on the sidelines, reliable polyfills remain our safety net for cross-browser compatibility.

Moving to built-in platform features is the ultimate path to an architecture that is secure by design. It's time to audit our codebases and set new engineering standards.

How do you balance compliance requirements with shipping velocity? Have you started experimenting with `setHTML()` yet? Let's discuss!
