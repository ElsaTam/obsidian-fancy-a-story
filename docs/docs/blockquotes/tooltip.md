---
title: Tooltip
parent: Blockquotes
---

Hover on the image to see the tooltip appear in the top right corner.

Source: [`blockquote-tooltip.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/blockquotes/blockquote-tooltip.css)

[![]({% link images/blockquotes/tooltip.webp %}){: width="500" }]({% link images/blockquotes/tooltip.webp %})

The three following codes are correct.


```markdown
> ![[obsidian.jpeg]]
> <dialog>This is an obsidian stone</dialog>
```

```markdown
> ![[obsidian.jpeg]]
> <span class="caption-tooltip">This is an obsidian stone</span>
```

```markdown
> ![[obsidian.jpeg]]
> <s class="caption-tooltip">This is an obsidian stone</s>
```

{: .note }
The `<dialog>...</dialog>` option will be totally hiden in live preview.