---
title: Footer Image
parent: CSS Classes
---

Source: [`footer-img.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/footer-img.css)

Add the cssclass `footer-img` to your note. This will use the **last paragraph** as a footer in reading mode. In order to work properly, it must includes only one image, no text.

When exporting to PDF, the image will not be rendered.

## Footer color

This image will be blended with the background in a monotone color. White = background color; Black = footer color; Shades of grey = shades of the footer color.

By default, the footer color is white in dark mode and black in light mode. You can assign a specific color with the class name: `footer-img-{color}`, where `{color}` can be one of the following: `accent`, `gray`, `brown`, `red`, `orange`, `yellow`, `green`, `cyan`, `blue`, `purple`, `pink`.

## Notes

- If you want the text to go above the footer, using it as a background at the bottom of the page, you can add the class `footer-background` or `footer-bg`.
- If your note does not contain enough text, the footer will not be at the bottom.

{: .warning}
Make sure you have a blank line before your image.

## Examples

[![]({% link images/cssclasses/footer-img-dark.webp %}){: width="300" }]({% link images/cssclasses/footer-img-dark.webp %})
[![]({% link images/cssclasses/footer-img-light.webp %}){: width="300" }]({% link images/cssclasses/footer-img-light.webp %})

```markdown
---
cssclasses:
  - footer-img
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget pellentesque magna. Vivamus erat lorem, elementum vel nunc eu, elementum accumsan quam. Etiam nec enim pulvinar, efficitur nulla eget, elementum velit. Nunc feugiat finibus augue sed accumsan.

![[footer.png]]
```

---

[![]({% link images/cssclasses/footer-img-cyan-dark.webp %}){: width="300" }]({% link images/cssclasses/footer-img-cyan-dark.webp %})
[![]({% link images/cssclasses/footer-img-cyan-light.webp %}){: width="300" }]({% link images/cssclasses/footer-img-cyan-light.webp %})

```markdown
---
cssclasses:
  - footer-img-cyan
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget pellentesque magna. Vivamus erat lorem, elementum vel nunc eu, elementum accumsan quam. Etiam nec enim pulvinar, efficitur nulla eget, elementum velit. Nunc feugiat finibus augue sed accumsan.

![[footer.png]]
```

---

[![]({% link images/cssclasses/footer-img-accent-background-dark.webp %}){: width="300" }]({% link images/cssclasses/footer-img-accent-background-dark.webp %})

```markdown
---
cssclasses:
  - footer-img-accent
  - footer-background
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget pellentesque magna. Vivamus erat lorem, elementum vel nunc eu, elementum accumsan quam. Etiam nec enim pulvinar, efficitur nulla eget, elementum velit. Nunc feugiat finibus augue sed accumsan.

![[footer.png]]
```

## CSS Variables


| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--footer-img-height` | Height of the footer image | `220px` |
| `--footer-img-opacity` | Opacity of the footer image | `0.2` |
| `--footer-img-color` | Color of the footer image | `rgb(var(--mono-rgb-100))` |