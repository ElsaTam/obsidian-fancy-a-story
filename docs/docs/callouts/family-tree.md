---
title: Family Tree
parent: Callouts
---


The `family-tree` callout allows you to create a family tree, exactly like with the [CSS Classes `family-tree`]({% link docs/cssclasses/family-tree.md %}), within a callout, so you can use regulat lists in the same note. Please refer to the cssclass page for further documentation.

Note that while it will create the tree layout in live preview (edit) mode, the collapsing indicators and the wedding rings won't appear. It's a limitation from Obsidian, where the code inside a rendered callout is not exactly the same in both modes.

```markdown
> [!family-tree]
> - Julius Caesar
> - Julia Minor #wed
>     - Marcus Atius Balbus
>     - Atia #wed
>         - Gaius Octavius
>         - Augustus #wed
>             - Livia Drusilla
>             - Julia the Elder #wed
>                 - Marcus Vipsanius Agrippa
>                 - Julia the Younger #wed
>                     - Lucius Aemilius Paullus
>                     - Aemilia Lepida #wed
>                         - Marcus Torquatus
>                         - Junia Calvina
>         - Octavia Minor #wed
>             - Mark Antony
>             - Antonia Minor #wed
>                 - Drusus the Elder
>                 - Germanicus #wed
>                     - Agrippina the Elder
>                     - Caligula #wed
>                         - Milonia
>                     - Agrippina the Younger #wed
>                         - Gnaeus Domitius Ahenobarbus
>                         - Nero
>                     - Drusus Cesar #wed
>                         - Aemilia Lepida
>                 - Claudius
```

Live preview:

[![]({% link images/callouts/family-tree-live-preview.webp %})]({% link images/callouts/family-tree-live-preview.webp %})

Preview:

[![]({% link images/callouts/family-tree-preview.webp %})]({% link images/callouts/family-tree-preview.webp %})