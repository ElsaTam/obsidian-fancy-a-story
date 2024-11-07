---
title: Family tree
parent: Lists
---

Source: [`family-tree.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/lists/family-tree.css)

[![]({% link images/lists/family-tree.webp %})]({% link images/lists/family-tree.webp %})

Start a list with the first item being the tag `#family-tree`. This will let know the CSS that the whole list must be turned into a family tree **in preview (reading) view**.

Each item of a list is linked to items in its direct sublist by the relation "Parent --> Children".

When the tag `#wed` is specifided. Then, the relationship becomes "Spouse <--> Spouse" and the wed partner is not rendered in the actual tree. Instead, a small ring icon is added and hovering it display the name of the wed partner.

[![]({% link images/lists/family-tree-hover.webp %})]({% link images/lists/family-tree-hover.webp %})

{: .warning }
You can't have more than one wedding partner by sublist, otherwise they will be on top of each other.


```markdown
- #family-tree
- Julius Caesar
- Julia Minor
    - #wed Marcus Atius Balbus
    - Atia
        - #wed Gaius Octavius
        - Augustus
            - #wed Livia Drusilla
            - Julia the Elder
                - #wed Marcus Vipsanius Agrippa
                - Julia the Younger
                    - #wed Lucius Aemilius Paullus
                    - Aemilia Lepida
                        - #wed Marcus Torquatus
                        - Junia Calvina
        - Octavia Minor
            - #wed Mark Antony
            - Antonia Minor
                - #wed Drusus the Elder
                - Germanicus
                    - #wed Agrippina the Elder
                    - Caligula
                        - #wed Milonia
                    - Agrippina the Younger
                        - #wed Gnaeus Domitius Ahenobarbus
                        - Nero
                    - Drusus Cesar
                        - #wed Aemilia Lepida
                - Claudius
```
