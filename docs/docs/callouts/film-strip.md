---
title: Film strip
parent: Callouts
---

Source: [`callout-film-strip.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/callouts/callout-film-strip.css)

[![]({% link images/callouts/film-strip.webp %})]({% link images/callouts/film-strip.webp %})

Create an empty line with only one chevron `>` before starting to add pictures again, and it will create a new strip.

```md
> [!film-strip|wide]
> ![[Image1.jpg]]
> ![[Image2.jpg]]
> ![[Image3.jpg]]
> ![[Image4.jpg]]
> ![[Image5.jpg]]
> ![[Image6.jpg]]
> ![[Image7.jpg]]
> ![[Image8.jpg]]
> ![[Image9.jpg]]
> ![[Image10.jpg]]
```

## CSS Variables

(defined in `.callout[data-callout="film-strip"]`)

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--frame-height` | Height of the picture | `140px` |
| `--n-holes` | Number of holes, used to compute the width of the image | `8` |
| `--hole-width` | Width of each hole, used to compute the width of the image | `15px` |
| `--hole-height` | Height of each hole | `10px` |
| `--gap` | Gap between each holes | `5px` |
| `--img-fading` | Bluring the edges of the images. Set to 0 for sharp edges | `2px` |
| `--hole-fading` | Bluring the edges of the holes. Set to 0 for sharp edges | `1px` |