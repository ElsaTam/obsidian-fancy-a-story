---
title: Faded & Inline
parent: Embeds
---

Sources:
- [`embed-faded.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/embeds/embed-faded.css)
- [`embed-inline.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/embeds/embed-inline.css)

{: .warning }
The `inline` option is not included in the theme due to performance issues, it needs to be downloaded on the side.

Use the option `faded` to remove borders, paddings and title to the embed note.

Use the option `inline` to create an embed that will be as much as possible "in the flow" of the current text. When it can, the embed will be inlined.

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