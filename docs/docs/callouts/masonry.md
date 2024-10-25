---
title: Masonry
parent: Callouts
---

Source: [`_callout-masonry.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/callouts/_callout-masonry.scss)

This callout create a masonry layout to display images.

[![]({% link images/callouts/masonry.webp %})]({% link images/callouts/masonry.webp %})

```markdown
> [!masonry]
> ![[image-1.jpg]]
> ![[image-2.jpg]]
> ![[image-3.jpg]]
> [![[image-4.jpg]]](<Note.md>)
> ![[image-5.jpg]]
> [![[image-6.jpg]]](<unresolved.md>)
> ![[image-7.jpg]]
> ![[image-8.jpg]]
> ![[image-9.jpg]]
> ![[image-10.jpg]]
```

{: .warning }
This is a *fake* masonry layout, as the images are displayed in a column-major order, instead of the classical row-major order.

You can enclose images within links. An unresolved link will have a soft sepia filter.

[![]({% link images/callouts/masonry-unresolved.webp %})]({% link images/callouts/masonry-unresolved.webp %})

When a linked image is hovered, the other images get blurred.

[![]({% link images/callouts/masonry-hover.webp %})]({% link images/callouts/masonry-hover.webp %})

You can also add the `|horizontal` option to have an horizontal masonry layout (and this will keep the images in a row-major order).

[![]({% link images/callouts/masonry-horizontal.webp %})]({% link images/callouts/masonry-horizontal.webp %})