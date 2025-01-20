---
title: Grid
parent: Callouts
---

Source: [`callout-grid.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/callouts/callout-grid.css)

Applies a grid-layout to the content. You can set the callout to display 2 to 6 columns. Replace `{x}` by the desired number in the following: `> [!grid|col-{x}]`. Default is 3 if you don't specify any.

You can use the attributes `span-{x}` to a subcallout to make it span across multiple spans (replace `{x}` by a number between 2 and 6).

[![]({% link images/callouts/grid.webp %})]({% link images/callouts/grid.webp %})

```markdown
> [!grid|col-3]
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac enim ut sapien imperdiet gravida. Nulla sed turpis et neque tincidunt convallis.
> 
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac enim ut sapien imperdiet gravida. Nulla sed turpis et neque tincidunt convallis. Phasellus posuere nisi eros, non tincidunt erat tincidunt ut.
> 
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac enim ut sapien imperdiet gravida. Nulla sed turpis et neque tincidunt convallis. Phasellus posuere nisi eros, non tincidunt erat tincidunt ut.
> 
> > [!note|span-2] span-2
> > Content
> 
> ![[obsidian.jpeg]]
```