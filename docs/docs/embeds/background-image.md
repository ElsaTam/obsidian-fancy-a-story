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

[![]({% link images/embeds/background-image.webp %})]({% link images/embeds/background-image.webp %})

```md
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie posuere viverra. Donec vitae dapibus nibh, sed venenatis risus. Nam eget lacinia elit. Pellentesque sed est congue, consectetur leo eget, gravida erat. Aenean tristique viverra magna, eget convallis ante. Donec pellentesque diam at massa porttitor auctor. Aliquam interdum tincidunt semper. Phasellus vehicula, dolor nec rhoncus euismod, risus nisl scelerisque leo, in aliquam enim nisi vel nisl. Proin cursus urna mauris, eget venenatis purus molestie vel. Etiam quis est efficitur, pharetra nisl non, iaculis nisi. Integer sagittis suscipit lectus, consectetur dignissim nunc commodo et. In mauris risus, hendrerit nec lorem sit amet, dictum scelerisque risus. Quisque convallis eros eu commodo efficitur. Aenean orci urna, bibendum sit amet pretium non, dignissim eget dolor.

Pellentesque mattis pulvinar enim ac molestie. In ac imperdiet leo. Integer fringilla dictum dapibus. Vivamus sodales magna nec diam euismod, vitae semper nibh vehicula. Sed ut neque in libero suscipit elementum. Quisque in rutrum erat. Aenean et dignissim arcu. Sed eget fringilla tellus, viverra aliquet metus. Mauris iaculis et sapien eget tempus. Nunc ut imperdiet mi.

![[Nebula.jpg|background]]

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie posuere viverra. Donec vitae dapibus nibh, sed venenatis risus. Nam eget lacinia elit. Pellentesque sed est congue, consectetur leo eget, gravida erat. Aenean tristique viverra magna, eget convallis ante. Donec pellentesque diam at massa porttitor auctor. Aliquam interdum tincidunt semper. Phasellus vehicula, dolor nec rhoncus euismod, risus nisl scelerisque leo, in aliquam enim nisi vel nisl. Proin cursus urna mauris, eget venenatis purus molestie vel. Etiam quis est efficitur, pharetra nisl non, iaculis nisi. Integer sagittis suscipit lectus, consectetur dignissim nunc commodo et. In mauris risus, hendrerit nec lorem sit amet, dictum scelerisque risus. Quisque convallis eros eu commodo efficitur. Aenean orci urna, bibendum sit amet pretium non, dignissim eget dolor.
```