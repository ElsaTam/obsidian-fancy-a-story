---
title: Bullet threading
parent: CSS Classes
---

Source: [`bullet-threading.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/bullet-threading.css)

Use the cssclass `bullet-threading` to add a thread between bullet points in your lists when hovering them **in preview (reading) view**.

Hovering an item with a sublist will add a vertical thread next to all of its sublist.

[![]({% link images/lists/tree-view-hover.webp %})]({% link images/lists/tree-view-hover.webp %})


```md
---
cssclasses:
  - bullet-threading
---

- Solar bodies
    - Solar System
        - Terrestrial planet
        - Giant planet
            - Gas giant
            - Ice giant
        - Heliosphere
        - Oort cloud
            - Hills Cloud
        - Meteoroid
            - Micrometeoroid
```

[![]({% link images/lists/bullet-threading.webp %})]({% link images/lists/bullet-threading.webp %})


## CSS Variables

Same as for the [`tree-view`]({% link docs/cssclasses/tree-view.md %}).