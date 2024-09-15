---
title: Faded
parent: Embeds
---

Source: [`_embed-faded.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/scss/editor/_embed-faded.scss)

Use the option `faded` to create an embed that will be as much as possible "in the flow" of the current text.

When it can, the embed will be inlined. Otherwise, it will start a new block with no title, no border, and no spacing.

The link icon of faded embed is moved to the right of the text, and can be hovered to highlight the associated content.

# Examples

**Markdown**
```markdown
This is a ![[#^word|faded]] inlined in the sentence.
```
**Result**
```
This is a word inlined in the sentence.
```

**Image**
[![]({% link images/embeds/embeds-word.webp %})]({% link images/embeds/embeds-word.webp %})

---

**Markdown**
```markdown
The following sentence comes from an embed. ![[#^sentence|faded]]
```
**Result**
```
The following sentence comes from an embed. The quick brown fox jumps over the lazy dog.
```

**Image**
[![]({% link images/embeds/embeds-sentence.webp %})]({% link images/embeds/embeds-sentence.webp %})

---

**Markdown**
```markdown
Trying to embed a multi-lines block won't make it inline. ![[linebreaks|faded]]
```
**Result**
```
Trying to embed a multi-lines block won't make it inline.
This block contains line breaks.
Therefore, it won't be inline.
```

**Image**
[![]({% link images/embeds/embeds-linebreaks.webp %})]({% link images/embeds/embeds-linebreaks.webp %})

---

**Markdown**
```markdown
Trying to embed a list won't make it inline either. ![[list|faded]]
```
**Result**
```
Trying to embed a list won't make it inline either.
    - Otherwise, it would break the flow
```

**Image**
[![]({% link images/embeds/embeds-list.webp %})]({% link images/embeds/embeds-list.webp %})

---

**Image**
[![]({% link images/embeds/embeds-blocks.webp %})]({% link images/embeds/embeds-blocks.webp %})