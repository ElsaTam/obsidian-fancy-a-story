---
title: Comic
parent: Callouts
---

Source: [`callout-comic.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/callouts/callout-comic.css)

Options for `comic`:
- `straight`: use only straight borders

Options for `comic-panel`:
- `overflow`: let an image slightly overflow the content from the top
- `bubble`: display the text in a speech bubble
  - `top`, `bottom`: vertical position of the bubble (default is centered)
  - `left`, `right`: horitonzal position of the bubble (default is centered)

{: .note }
This snippet doesn't change between light and dark theme.

[![]({% link images/callouts/comic.webp %})]({% link images/callouts/comic.webp %})

```md
> [!comic]
> > [!comic-panel]
> > > ![[Spiderman 1.png]]
> > 
> > Something’s not right...
> 
> > [!comic-panel|bubble top left]
> > > ![[Spiderman 2.png]]
> > 
> > Okay, Peter, let's bounce!
> 
> > [!comic-panel]
> > > ![[Spiderman 3.png]]
> > 
> > Note to self: figure out a cooler catchphrase.
> 
> > [!comic-panel|bubble left]
> > > ![[Spiderman 4.png]]
> > 
> > Wait a second... is that who I think it is?
> 
> > [!comic-panel|bubble bottom left]
> > > ![[Spiderman 5.png]]
> > 
> > Well, hello to you...
> 
> > [!comic-panel|overflow]
> > > ![[Iron man.png]]
> > 
> > I'm just here to test overflow!
```

## CSS Variables

(defined in `.callout[data-callout="comic"]`)

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--comic-color-rgb` | Color of the lines, text, etc. | `0, 0, 0` |
| `--comic-background-rgb` | Background of the whole comic | `255, 255, 255` |
| `--strip-height` | Height of a comic strip | `200px` |
| `--gutter` | Gap between each panel | `20px` |