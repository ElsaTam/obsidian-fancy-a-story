---
title: Full Width Image
parent: Embeds
---

Source: [`embed-full-width-image.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/embeds/embed-full-width-image.css)

Change an image into a panoramic full width image (like a banner).

You can use the following aliases:
- `|full-width-image`
- `|full-w-img`
- `|fwi`
- `|full-width-panoramic-image-:jack_o_lantern:`
- `|fwpi-jol`

[![]({% link images/embeds/full-width-image.webp %})]({% link images/embeds/full-width-image.webp %})

```md
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget pellentesque magnas ...

![[image.png|full-width-image]]

Nam non nunc felis. Curabitur faucibus nisi nisi, vitae ornare lectus feugiat id. ...

![[image.png|fwi wide]]

Praesent in erat lacus. Proin risus est, facilisis tempor vulputate nec, ullamcorper dapibus sem. ...
```

## CSS Variables

{: .warning }
This variables is also used by the [callout `full-width-image`]({% link docs/callouts/full-width-image.md %})

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--fwi-height` | Height of the image | `70px` |