---
title: Background Image
parent: Embeds
---

Source: [`embed-background-image.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/embeds/embed-background-image.css)

Change an embed image into a note background image, **in reading mode**.

To hide or the element in edit mode, you can use the following keywords:
- `|edit-small`: reduce the image to 100px wide, and remove the shadow;
- `|edit-icon`: replace the image with `🖼️ background`, and you can hover this to show the actual image in miniature (doesn't work with an external image);
- `|edit-hide`: completely hide the image in edit mode.

See [CSS Classes/Background image]({% link docs/cssclasses/background-image.md %}) for CSS variables available for customization. Unless you redefine them at a lower level in the DOM via a snippet, it will use the same as defined via the Style Settings plugin.