---
title: '<geolocation>: The New HTML Element That Fixes Location Permissions (With Code)'
description: 'Permission prompts break trust on the web. Constantly.'
date: 2026-08-25
kind: article
tags: ['web-standards']
featured: false
# Draft: the LinkedIn export lost some code blocks and tag names, and images must be downloaded
# (media.licdn.com links expire around 29 Oct 2026). Fix, then set draft: false.
draft: true
---

Permission prompts break trust on the web. Constantly.

A script fires . A dialog interrupts the user mid-scroll. They dismiss it without thinking, and that's it. No recovery. No hint about what to do next.

Just a feature that quietly stopped working. Forever, unless the user digs through browser settings on their own.

Chrome 144 ships a fix. Not a JS patch. An HTML element: .

I went through the spec, tested the fallback pattern, and here's what you need to know.

### Where it came from

It didn't start as . First it was a generic element with a attribute, one tag meant to cover camera, mic, and location access at once. Chrome ran an origin trial on that for over a year.

The results were good. Immobiliare saw 20% more successful geolocation flows. ZapImóveis recovered over half of previously blocked users, just by switching to the element.

But Apple and Mozilla weren't sold on "one tag for everything." Each permission type has its own quirks. Cramming them into one generic control doesn't scale well.

So the team split it. Capability-specific elements instead. shipped first. , for camera and mic, is running its own origin trial right now.

### What it does, in practice

![TODO: image description](https://media.licdn.com/dms/image/v2/D4D12AQGc1T9xYlai6g/article-inline_image-shrink_1500_2232/B4DaA5cE3EKUAU-/0/1787670056628?e=1793232000&v=beta&t=-Jm-I6rHr9__6h78fg_yDP7bi2S22rfxXpaArXZSHxE)

The element renders a button the browser controls, not you. Click it, and depending on the user's permission history, one of three things happens.

First-time visit: they get asked. Previously denied: they get a shot at undoing that. Already granted: they get a fresh position, no re-prompt.

Here's the markup:

That inside is your fallback content, and the logic for it lives entirely in JS, further down. Browsers that support skip the button and render their own native one. Browsers that don't, just show the button as written.

No feature detection needed for the basic case. It works both ways on its own.

### Three attributes, that's most of it

. Same idea as from the old API. is the default, faster, easier on the battery. costs more power for a tighter radius.

. Tries to fetch location on load, but only if permission was already granted before. It will never surprise the user with an unexpected prompt. That part's non-negotiable by design.

. Switches from a one-shot fetch to continuous tracking. Fires events as the user moves. Same battery cost as . Worth knowing it exists, but the examples below stick to a single fetch, the more common case.

All three together, if you need them:

### Handling the data

One event covers everything: . No separate success and error callbacks to juggle, honestly the part of the old API I disliked most.

One more thing, for debugging. There's an / pair that tells you why the button might be disabled. Element scrolled off screen, obscured by something, too many tags on one page. All developer mistakes. None of this should ever reach a real user.

### The fallback isn't optional yet

![TODO: image description](https://media.licdn.com/dms/image/v2/D4D12AQFyoUd9H0Oowg/article-inline_image-shrink_1500_2232/B4DaA5eFeKJ0AQ-/0/1787670583403?e=1793232000&v=beta&t=1Uy23z3i32MMsajwNiUCYyW_M9zY0EOBuTaC_wEfI-w)

Support today is Chromium, and only Chromium. Chrome 144+, Edge 144+, Opera 144+ on desktop. Chrome Android on mobile, and nothing else. Firefox, Safari, every other mobile browser: zero. Firefox and WebKit have both said they're open to implementing it eventually. Eventually isn't now.

![TODO: image description](https://media.licdn.com/dms/image/v2/D4D12AQGB_lO_DisPPg/article-inline_image-shrink_1500_2232/B4DaA5dlFJI4AQ-/0/1787670450792?e=1793232000&v=beta&t=X6sk7svhPQ-bcLfmnbFfSWFiU31NvX8zYgDGycp3jUs)

So the old fallback still has to be there. All the logic stays in JS, keeping the HTML clean:

Disable the button on click. This matters more than it looks. This API isn't rate-limited by the browser the way is, so nothing stops a user from spam-clicking and blocking themselves through sheer impatience.

Want continuous tracking instead of a single fetch? Swap for , and clear the watcher ID before you register a new one. Same pattern, one extra step.

Don't want to write this by hand at all? There's a polyfill on npm, . It swaps in a custom element backed by the same old API when native support is missing.

### Styling has guardrails, not freedom

You can theme it. Background, color, border, radius, shadow, all fair game. But the browser enforces limits against deceptive UI. Minimum contrast. No transparency. No negative margins. No gradients, no distortion. Bounded min and max size.

Cross any of those lines and returns . The button just stops working. No warning banner, no console error you'll notice right away. It silently breaks.

One new pseudo-class ships with it:

### Where I land on this

Good direction. Explicit intent instead of ambient script prompts, recovery built in, way less boilerplate than the old approach.

But it's Chromium-only, still experimental, and I wouldn't ship it as your only path to location data right now. The pattern above, native element with a classic-API fallback baked in, is the only way I'd use this in production today.

Are you planning to adopt once broader support lands, or is the old API still doing the job fine for your use case?

\#HTML \#WebStandards \#WebDevelopment \#Frontend
