---
title: Banner
parent: CSS Classes
---

Source: [`banner.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/banner.css)

Add the cssclass `banner` to your note. This will use the first image as a banner in reading mode, hiding the properties.

You can add several variants for different effects, see screenshots below. You can also combine them, as long as you have the `banner` class active.

```markdown
---
cssclasses:
  - banner
---

![[banner.png]]

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis tortor a suscipit vulputate. Donec vitae hendrerit felis. In quis nibh vestibulum, cursus dolor in, pellentesque libero. Curabitur quam orci, vestibulum eget luctus ac, mollis eu tortor. Donec placerat lorem in dolor porttitor, vel viverra erat aliquam. Vivamus porta mauris nec dapibus auctor. Nam dapibus quam eget placerat ullamcorper.

Donec aliquam metus quis pellentesque semper. Sed non auctor nisi. Proin congue augue sed ante tincidunt sagittis. Duis eu risus tellus. Proin varius turpis nec arcu ultricies porta. Sed eget consectetur lacus. Morbi ligula odio, finibus in risus et, rhoncus tempor augue. Donec vestibulum urna eget tortor finibus, non accumsan nulla vestibulum.
```

---

```markdown
---
cssclasses:
    - banner
---
```

[![]({% link images/cssclasses/banner.webp %})]({% link images/cssclasses/banner.webp %})

---

```markdown
---
cssclasses:
    - banner
    - banner-title
---
```

[![]({% link images/cssclasses/banner-title.webp %})]({% link images/cssclasses/banner-title.webp %})

---

```markdown
---
cssclasses:
    - banner
    - banner-slope
---
```

```markdown
---
cssclasses:
    - banner
    - banner-slant
---
```

[![]({% link images/cssclasses/banner-slope.webp %})]({% link images/cssclasses/banner-slope.webp %})

---

```markdown
---
cssclasses:
    - banner
    - banner-gradient
---
```

[![]({% link images/cssclasses/banner-gradient.webp %})]({% link images/cssclasses/banner-gradient.webp %})

---

```markdown
---
cssclasses:
    - banner
    - no-title
---
```

[![]({% link images/cssclasses/banner-no-title.webp %})]({% link images/cssclasses/banner-no-title.webp %})

## CSS Variables

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--banner-height` | Height of the banner | `300px` |
| `--banner-title-shadow` | Text shadow of the inline title |  |
| `--banner-slope-angle` | Rising angle of the bottom border for the slope banner | `4deg` |
| `--banner-slope-border-width` | Thickness of the bottom border for the slope banner | `5px` |
| `--banner-slope-border-color` | Color of the bottom border for the slope banner | `var(--color-accent)` |