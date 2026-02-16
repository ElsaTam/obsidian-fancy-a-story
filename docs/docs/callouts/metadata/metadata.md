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
| `blank`                  | Zero styling, no title, no spacing, no border, etc. |
| `clear`                  | Allows the callout to be below (cleared) floating elements |
| `default-font`           | Don't use specific font for the callout             |
| `handwritten`            | Handwritten/cursive font                            |
| `inline`                 | Inline the callout, placing the title on the left and the content on the right |
| `float-right`, `right`   | Floating element on the right                       |
| `float-left`, `left`     | Floating element on the left                        |
| `monospace`              | Monospace font                                      |
| `no-background`, `no-bg` | No background                                       |
| `no-blending`            | No blending                                         |
| `no-icon`                | No icon                                             |
| `no-title`               | No title                                            |
| `only-icon`              | No title text but keep icon                         |
| `sans-serif`             | Sans-serif font                                     |
| `wide`                   | Make the element full wide                          |

Source: [`callouts-metadata.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/callouts/callouts-metadata.css)