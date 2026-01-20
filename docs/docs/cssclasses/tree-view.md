---
title: Tree view
parent: CSS Classes
---

Source: [`tree-view.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/tree-view.css)

Use the cssclass `tree-view` to turn lists into tree views **in preview (reading) view**.

Hovering a leaf (an item without a sublist) will highlight the corresponding lines as well as the item itself.

[![]({% link images/lists/tree-view-hover.webp %})]({% link images/lists/tree-view-hover.webp %})


```md
---
cssclasses:
  - tree-view
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
        - Meteor
            - Bolide
        - Moons
            - Moonlets
            - Subsatellites (hypothet.)
        - Minor planets (see below)
            - Asteroids
            - Dwarf planets
            - Moons
            - Binaries
            - Synestia (hypothet.)
        - Planets (see below)
            - Ring system
        - Trans-Neptunian objects
        - Small Solar System body
            - Comets
            - Planetesimal
            - Contact binary
        - Sun
    - Planets
        - Mercury
        - Venus
        - Earth - Moon
        - Mars - moons
        - Jupiter - moons
        - Saturn - moons
        - Uranus - moons
        - Neptune - moons
```

[![]({% link images/lists/tree-view.webp %})]({% link images/lists/tree-view.webp %})


## CSS Variables

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--tree-view-guide-color` | Color of the connectors | `var(--background-secondary)` |
| `--tree-view-guide-width` | Width of the connectors | `2px` |

They are the same variables as for the [`bullet-threading`]({% link docs/cssclasses/bullet-threading.md %}), so modifying them will also alter the styling of the `bullet-threading`.