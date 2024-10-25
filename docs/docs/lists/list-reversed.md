---
title: List reversed
parent: Lists
---

Source: [`_list-reversed.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/lists/_list-reversed.scss)

Use the tag `#list-reversed` in an item of the list to reverse this list order in reading view.

[![]({% link images/lists/reversed-ol.webp %}){: width="150" }]({% link images/lists/reversed-ol.webp %})

```markdown
1. Item 1 #list-reversed
2. Item 2
    - Item 2.1
        - Item 2.1.1
        - Item 2.1.2
        - Item 2.2.3
    - Item 2.2
3. Item 3
```

The tag will affect only the items at its level, not the parent list, not the sublists. To invert a sublist, you need to add the tag at the desired level.

[![]({% link images/lists/reversed-ul.webp %}){: width="150" }]({% link images/lists/reversed-ul.webp %})

```markdown
- Item 1
- Item 2
    - Item 2.1
        - Item 2.1.1 #list-reversed
        - Item 2.1.2
        - Item 2.2.3
    - Item 2.2
- Item 3
```

If you want to reverse the whole list, including sublists and ancestor lists, you can use the tag `#list-reversed-all`

[![]({% link images/lists/reversed-all.webp %}){: width="150" }]({% link images/lists/reversed-all.webp %})

```markdown
1. Item 1 #list-reversed-all
2. Item 2
    - Item 2.1
        - Item 2.1.1
        - Item 2.1.2
        - Item 2.2.3
    - Item 2.2
3. Item 3
```