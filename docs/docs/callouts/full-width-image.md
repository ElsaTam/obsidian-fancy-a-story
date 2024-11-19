---
title: Full width image
parent: Callouts
---

Source: [`callout-full-width-image.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/callouts/callout-full-width-image.css)

Change an image into a panoramic full width image (like a banner).

You can use the following aliases:
- `> [!full-width-image]`
- `> [!full-w-img]`
- `> [!fwi]`
- `> [!full-width-panoramic-image-:jack_o_lantern:]`
- `> [!fwpi-jol]`

And the following options:
- `|blur`: blur the image
- `|grayscale`: desaturate the image colors but keep the title colored

[![]({% link images/callouts/full-width-image.webp %})]({% link images/callouts/full-width-image.webp %})

```md
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget pellentesque magnas ...

> [!full-width-image|grayscale red] # Full width image
> ![[image.png]]

Nam non nunc felis. Curabitur faucibus nisi nisi, vitae ornare lectus feugiat id. ...

> [!fwi|wide blur]
> ![[image.png]]

Praesent in erat lacus. Proin risus est, facilisis tempor vulputate nec, ullamcorper dapibus sem. ...

> [!full-width-panoramic-image-:jack_o_lantern:|no-title]
> ![[image.png]]

Phasellus aliquam magna massa, non lobortis ligula rutrum eget. ...
```

## CSS Variables

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--callout-fwi-height` | Height of the image | `70px` |
| `--callout-fwi-title-shadow` | Shadow used for the title | `0px 0px 0.1em rgb(var(--mono-rgb-0)), 0px 0px 0.2em rgb(var(--mono-rgb-0)), 0px 0px 0.5em rgb(var(--mono-rgb-0))` |
| `--callout-fwi-title-blur` | Blur size | `5px` |