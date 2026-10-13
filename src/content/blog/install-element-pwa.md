---
title: 'The HTML Tag Replacing JavaScript for PWAs: <install>'
description: 'Managing PWA installation has always meant writing boilerplate JavaScript. We had to capture the beforeinstallprompt event, handle custom UI states, a'
date: 2026-06-02
kind: article
tags: ['web-standards']
featured: false
# Draft: the LinkedIn export lost some code blocks and tag names, and images must be downloaded
# (media.licdn.com links expire around 29 Oct 2026). Fix, then set draft: false.
draft: true
---

Managing PWA installation has always meant writing boilerplate JavaScript. We had to capture the **beforeinstallprompt** event, handle custom UI states, and manage the installation ceremony entirely in script.

The Microsoft Edge and Chrome teams are changing this by introducing a declarative element to Chromium: **the** \<install\> **tag**. A single line of HTML now triggers the native installation flow.

While it eliminates JS overhead, the engineering trade-offs and vendor politics behind it are worth looking into.

### The Trade-off: Chromium Initiative vs. Web Standards

This element is driven directly by the Chrome and Edge teams and is currently gated behind a flag in Chromium 148+. It’s another example of dominant vendors forcing platform capabilities forward without waiting for W3C or Interop consensus. **This case looks like two giants simply decided to shape the web around their own business needs, bypassing the standardization stage entirely.**

This approach accelerates feature delivery, but it leaves Safari and Firefox out of the picture entirely. Furthermore, the browser completely locks down the button’s text, language, and styling.

The justification is security. Because the browser owns the UI rendering, it trusts the click as an explicit user intent, eliminating spoofing and clickjacking risks. You can see the resulting rigid UI layout in the official demo app catalog layout.

![TODO: image description](https://media.licdn.com/dms/image/v2/D4D12AQGJwR52mw_m-g/article-inline_image-shrink_1500_2232/B4DZ6Ivn1YK4AU-/0/1780410646966?e=1793232000&v=beta&t=pLadMPkyKHfmodlz30IuLrN5UvD3GJsfPrWdNp9LETA)

### Cross-Origin Installation: Building PWA Storefronts

The real architectural shift here is cross-origin capability. Historically, PWA installation was strictly bound to the current origin. You could not trigger an installation for an application hosted on a different domain.

The \<install\> tag removes this restriction via the **installurl** attribute, allowing developers to build decentralized app directories.

### Code Implementation

**1. Same-Origin Installation:** If your current origin points to a manifest with a defined **id**, use a single empty tag:

**2. Cross-Origin Installation:** Pass the target application domain directly:

If the target app lacks a computed manifest ID, provide it explicitly using manifestid:

### Native Fallbacks & Under the Hood

For unsupported browsers (including Safari and Firefox), the element falls back to rendering its inner HTML. A standard link handles compatibility gracefully:

To handle feature detection programmatically:

### The IDL Specification

The WICG interface details how the element interfaces with the underlying **navigator.install** layer:

The tag fires standard events that you can listen to for analytics and flow tracking:

- **promptaction** — fired when the installation succeeds.

- **promptdismiss** — fired when the user cancels the prompt.

- **validationstatuschanged** — fired if manifest fetching or data parsing fails.

**Privacy Control:** The element mitigates side-channel attacks natively. Developers cannot query button dimensions via JavaScript to determine whether an app is installed, thereby blocking potential fingerprinting vectors. If installed, the target transitions safely into a "Launch" state.

### \<install\> Element vs. Web Install API

Chrome and Edge are simultaneously running trials for the imperative Web Install API (navigator.install()). Here is the architectural contrast:

![TODO: image description](https://media.licdn.com/dms/image/v2/D4D12AQHk2cR222Gliw/article-inline_image-shrink_1500_2232/B4DZ6IZo08J8AQ-/0/1780404883372?e=1793232000&v=beta&t=D8US2tOam9ZLZmDbUv8pGokQjoipU4ZQJ2TphfAoiuw)

### Local Testing

The feature is currently running via Chromium Origin Trials (versions 148 to 153). To test it locally:

1.  Open Chrome or Edge (v148+).

2.  Go to **about://flags/#web-app-install-element**.

3.  Set **Web App Install Element** to **Enabled**.

4.  Relaunch the browser.

### Summary

The \<install\> tag replaces fragile JavaScript loops with native platform engineering. While the loss of UI control will bother product designers, the ability to safely handle cross-origin PWA deployment changes how web applications can be distributed.

Would you trade custom button styles for zero-JS implementations and native browser trust? Let's discuss below.
