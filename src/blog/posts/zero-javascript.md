---
title: Why This Site Ships Zero JavaScript
date: 2026-03-04
tags: [css, performance]
---

PLACEHOLDER POST — replace with real writing whenever.

Open devtools on this page and check the network tab: no `.js` files. Not a
single one. The spinning disc, the page transitions, the color picker on the
About page — all CSS.

## The trick list

- The 3D disc is an inline SVG inside a `rotateX()` wrapper with an infinite
  `rotate` animation.
- Page-to-page morphing uses cross-document View Transitions: a CSS at-rule
  (`@view-transition`) and shared `view-transition-name`s. Zero scripting.
- The About page palette is radio buttons plus `body:has(input:checked)`
  flipping custom properties.

## Why bother

Partly performance, partly principle, mostly because constraints are fun. A
page that does this much with stylesheets alone says more about CSS skill than
a paragraph claiming "proficient in CSS" ever could.
