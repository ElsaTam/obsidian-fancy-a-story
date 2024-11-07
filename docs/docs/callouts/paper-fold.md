---
title: Paper fold
parent: Callouts
---

Source: [`callout-paper-fold.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/callouts/callout-paper-fold.css)

[![]({% link images/callouts/paper-fold.webp %})]({% link images/callouts/paper-fold.webp %})

To override the values defining the folding angle, use the snippet:
```css
/* Define the starting folding */
.callout[data-callout="paper-fold"] {
    --corner-diag: 100px;
    --corner-angle: 30deg;
}

/* Define the final folding on hover */
.callout[data-callout="paper-fold"]:hover {
    --corner-diag: 10px;
    --corner-angle: 60deg;
}
```