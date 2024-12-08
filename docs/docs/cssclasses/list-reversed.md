---
title: List reversed
parent: CSS Classes
---

Source: [`list-reversed.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/cssclasses/list-reversed.css)

Use the cssclass `list-reversed-{n}` to reverse order of list items at depth `n` (up to 10). To reverse all the orders at once, use the cssclass `list-reversed-all`.

---

[![]({% link images/lists/reversed-ol.webp %}){: width="150" }]({% link images/lists/reversed-ol.webp %})

```markdown
---
cssclasses:
  - list-reversed-1
---

1. Item 1
2. Item 2
    - Item 2.1
        - Item 2.1.1
        - Item 2.1.2
        - Item 2.2.3
    - Item 2.2
3. Item 3
```

---

[![]({% link images/lists/reversed-ul.webp %}){: width="150" }]({% link images/lists/reversed-ul.webp %})

```markdown
---
cssclasses:
  - list-reversed-3
---

- Item 1
- Item 2
    - Item 2.1
        - Item 2.1.1 #list-reversed
        - Item 2.1.2
        - Item 2.2.3
    - Item 2.2
- Item 3
```

---

[![]({% link images/lists/reversed-all.webp %}){: width="150" }]({% link images/lists/reversed-all.webp %})

```markdown
---
cssclasses:
  - list-reversed-all
---

1. Item 1 #list-reversed
2. Item 2
    - Item 2.1
        - Item 2.1.1
        - Item 2.1.2
        - Item 2.2.3
    - Item 2.2
3. Item 3
```