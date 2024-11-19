---
title: Pinned
parent: Callouts
---

Source: [`callout-pinned.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/callouts/callout-pinned.css)

You can specify three sizes in the callout:
- `small` (200px)
- `medium` (300px)
- `large` (100%)

You can also add the option `dark` to have a black card with white text.

[![]({% link images/callouts/pinned.webp %})]({% link images/callouts/pinned.webp %})

```markdown
> [!pinned|medium]+
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac enim ut sapien imperdiet gravida. Nulla sed turpis et neque tincidunt convallis.
```

## CSS Variables

(defined in `.callout[data-callout="pinned"]`)

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--pinned-small-width` | Width with the `small` option | `200px` |
| `--pinned-medium-width` | Width with the `medium` option | `350px` |
| `--pinned-large-width` | Width with the `large` option | `100%` |
| `--pushpin-size` | Size of the pushpin image | `40px` |
| `--pushpin-scale-collapsed` | Scaling factor for the pushpin when the note is collapsed | `0.8` |