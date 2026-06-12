---
title: Recreating KOF XI's Spinning Disc in Pure CSS
date: 2026-04-18
tags: [css, y2k]
---

PLACEHOLDER POST — replace with a real write-up of the disc build.

The centerpiece of KOF XI's PS2 menus is a giant engraved disc that spins
behind everything and tilts into the floor when you pick a menu option. This
site recreates it with one SVG and about sixty lines of CSS.

## The structure

Three nested elements: a positioned wrapper with `perspective`, a tilt layer
with `rotateX()`, and the SVG face with an infinite spin animation. Because the
tilt layer flattens its child, the 2D spin happens *inside* the tilted plane —
which reads as 3D rotation.

## The transition

The disc carries `view-transition-name: disc` on every page. When you navigate,
the browser morphs it from the face-on menu position into the tilted background
position — the exact PS2 effect, with a graceful fallback to a normal page load
in browsers that don't support view transitions yet.
