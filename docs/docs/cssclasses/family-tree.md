---
title: Family tree
parent: CSS Classes
---

Source: [`family-tree.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/family-tree.css)

Use the cssclass `family-tree` to turn unordered lists into family trees **in preview (reading) view**.

Each item of a list is linked to items in its direct sublist by the relation "Parent --> Children".

When the tag `#wed` (or an html element with class `wed` such as `<span class="wed"></span>`) is specifided. Then, the relationship with the first children becomes "Spouse <--> Spouse" and the wed partner is not rendered in the actual tree. Instead, a small ring icon is added and hovering it display the name of the wed partner.

[![]({% link images/lists/family-tree-hover.webp %})]({% link images/lists/family-tree-hover.webp %})

The following means than Marcus Atius Balbus is the spouse of Julia Minor.
```markdown
- Julia Minor #wed
    - Marcus Atius Balbus
```

[![]({% link images/lists/family-tree.webp %})]({% link images/lists/family-tree.webp %})


```markdown
---
cssclasses:
  - family-tree
---

- Julius Caesar
- Julia Minor #wed
    - Marcus Atius Balbus
    - Atia #wed
        - Gaius Octavius
        - Augustus #wed
            - Livia Drusilla
            - Julia the Elder #wed
                - Marcus Vipsanius Agrippa
                - Julia the Younger #wed
                    - Lucius Aemilius Paullus
                    - Aemilia Lepida #wed
                        - Marcus Torquatus
                        - Junia Calvina
        - Octavia Minor #wed
            - Mark Antony
            - Antonia Minor #wed
                - Drusus the Elder
                - Germanicus #wed
                    - Agrippina the Elder
                    - Caligula #wed
                        - Milonia
                    - Agrippina the Younger #wed
                        - Gnaeus Domitius Ahenobarbus
                        - Nero
                    - Drusus Cesar #wed
                        - Aemilia Lepida
                - Claudius
```


## CSS Variables

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--family-tree-connectors-color` | Color of the connectors | `var(--background-secondary)` |