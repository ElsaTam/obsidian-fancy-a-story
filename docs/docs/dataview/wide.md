---
title: Wide (Dataview JS)
parent: Dataview
---

Source: [`dataview-wide.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/plugins/community/dataview/dataview-wide.css)

Use the class `dataview-wide` in the elements you add directly within your editor with DataviewJS to make them full width.

[![]({% link images/dataview/wide.webp %})]({% link images/dataview/wide.webp %})


````
```dataviewjs
let result = await dv.query(`LIST FROM "Path/To/Folder"`);
let values = result.value.values;
let embeds = values.map(p => "[" + dv.fileLink(p.path, true) + "](<" + p.path + ">)");
dv.el("p", embeds, { cls: "dataview-wide dataview-cards-deck" });
```
````