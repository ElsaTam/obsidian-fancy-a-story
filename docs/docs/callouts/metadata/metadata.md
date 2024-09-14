---
title: Callouts metadata
parent: Callouts
nav_order: 1
---

# Callouts metadata

Write `> [!callout-name|option-1 option-2 option-3]` to customize your callout.

| Option                   | Description                                         |
|:-------------------------|:----------------------------------------------------|
| [`{color}`]({% link docs/callouts/metadata/color.md %}) | Set the color of the callout |
| `black-and-white`, `b-w` | Desaturate everything inside the callout            |
| `no-background`, `no-bg` | No background                                       |
| `no-icon`                | No icon                                             |
| `no-title`               | No title                                            |
| `blank`                  | Zero styling, no title, no spacing, no border, etc. |
| `wide`                   | Make the element full wide                          |

Source: [`_callouts-metadata.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/scss/editor/callouts/_callouts-metadata.scss)