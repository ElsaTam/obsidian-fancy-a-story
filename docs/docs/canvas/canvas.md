---
title: Canvas
nav_order: 5
---

[![]({% link images/canvas/canvas-showcase-1.webp %}){: width="300" }]({% link images/canvas/canvas-showcase-1.webp %})
[![]({% link images/canvas/canvas-showcase-titles.webp %}){: width="323" }]({% link images/canvas/canvas-showcase-titles.webp %})

{: .note}
Usage of tags to define specific styling for canvas card can be very powerful. However, it requires a code that can cause performance issues. Also, such styling come as independant snippets. You can add the file [canvas-node-bundle](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/css/canvas/canvas-node-bundle.css) to your [snippets file](https://help.obsidian.md/Extending+Obsidian/CSS+snippets) to download all the effects. Or choose individual ones from [this list](https://github.com/ElsaTam/obsidian-fancy-a-story/tree/main/css/canvas).

# Helper tags

| Tag   | Description | Source |
|:------|:------------|:-------|
| `#node-background` | Keep the node in the background | [`_canvas-node-background.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/scss/canvas/_canvas-node-background.scss) |
| `#node-blur` | Everything behind the node will be blured | [`_canvas-node-blur.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/scss/canvas/_canvas-node-blur.scss) |
| `#node-image` | To be used with one image, make the image be displayed as such. Useful to combine with `#node-background` | [`_canvas-node-blur.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/scss/canvas/_canvas-node-blur.scss) |
| `#node-large` | Make the text very large (5em). Useful with the title tags | [`_canvas-node-large.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/scss/canvas/_canvas-node-large.scss) |
| `#node-only-text` | Remove border and background | [`_canvas-node-only-text.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/scss/canvas/_canvas-node-only-text.scss) |
| `#node-text-color-invert` | Text color black in dark mode, white in light mode | [`_canvas-node-text-color-invert.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/scss/canvas/_canvas-node-text-color-invert.scss) |

# Title tags

| Tag   | Description | Source |
|:------|:------------|:-------|
| `#node-title-arcane` | Inspired by the Arcane font | [`_canvas-node-title-arcane.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/scss/canvas/_canvas-node-title-arcane.scss) |
| `#node-title-neon` | Text with neon effect | [`_canvas-node-title-neon.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/scss/canvas/_canvas-node-title-neon.scss) |
| `#node-title-poster` | Old poster title text | [`_canvas-node-title-poster.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/scss/canvas/_canvas-node-title-poster.scss) |
| `#node-title-vintage` | Vintage title | [`_canvas-node-title-vintage.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/scss/canvas/_canvas-node-title-vintage.scss) |

# Styling tags

| Tag   | Description | Source |
|:------|:------------|:-------|
| `#node-comic` | Deform the borders and use a comic font | [`_canvas-node-comic.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/scss/canvas/_canvas-node-comic.scss) |

# Other special tags

| Tag   | Description | Source |
|:------|:------------|:-------|
| `#node-crime-scene-tape` | Create a "crime scene" tape | [`_canvas-node-crime-scene-tape.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/scss/canvas/_canvas-node-crime-scene-tape.scss) |