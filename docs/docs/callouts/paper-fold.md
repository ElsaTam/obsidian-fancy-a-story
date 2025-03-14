---
title: Paper fold
parent: Callouts
---

Source: [`callout-paper-fold.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/callouts/callout-paper-fold.css)

[![]({% link images/callouts/paper-fold.webp %})]({% link images/callouts/paper-fold.webp %})

Usage:
```
> [!paper-fold] Paper fold
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac enim ut sapien imperdiet gravida. Nulla sed turpis et neque tincidunt convallis. Phasellus posuere nisi eros, non tincidunt erat tincidunt ut.
```

To override the values defining the folding angle, use the snippet:
```css
body {
    /* Define the starting folding */
    --paper-fold-corner-diag: 100px;
    --paper-fold-corner-angle: 30deg;

    /* Define the final folding on hover */
    --paper-fold-corner-diag-hover: 10px;
    --paper-fold-corner-angle-hover: 60deg;
}
```

## CSS Variables

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--paper-fold-corner-diag` | Length of the diagonal of the folding part | `100px` (`25px` on mobile) |
| `--paper-fold-corner-diag-hover` | Length of the diagonal of the folding part on hover | `10px` |
| `--paper-fold-corner-angle` | Angle of the folding part | `30deg` (`70deg` on mobile) |
| `--paper-fold-corner-angle-hover` | Angle of the folding part on hover | `60deg` |
| `--paper-fold-color` | Color of the paper fold | `255, 247, 64` in light mode, `255, 255, 153` in dark mode |