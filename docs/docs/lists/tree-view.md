---
title: Tree view
parent: Lists
---

Source: [`tree-view.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/lists/tree-view.css)

[![]({% link images/lists/tree-view.webp %})]({% link images/lists/tree-view.webp %})

Add the tag `#tree-view` on any item of your list. It will be used by the CSS as a flag to turn the whole list into a tree view **in preview (reading) view**.

Hovering a leaf (an item without a sublist) will highlight the corresponding lines as well as the item itself.

[![]({% link images/lists/tree-view-hover.webp %})]({% link images/lists/tree-view-hover.webp %})


```md
- Solar bodies #tree-view
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


## CSS Variables

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--tree-view-guide-color` | Color of the connectors | `var(--background-secondary)` |