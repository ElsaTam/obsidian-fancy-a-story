---
title: Cards deck (Dataview JS)
parent: Dataview
---

Source: [`_dataview-cards-deck.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/scss/plugins/community/dataview/_dataview-cards-deck.scss)

See the [callout `cards-deck`]({% link docs/callouts/cards-deck.md %}) to create this effect with images in a callout.

[![]({% link images/dataview/cards-deck-gif.webp %})]({% link images/dataview/cards-deck-gif.webp %})

{: .warning}
If you try to embed a lot of notes, the vault can be slowed down a lot, especially if the notes contain complex HTML/CSS. The CSS code behing the cards deck do try to optimize everything but it's not magic.

## DataviewJS code

Use the following code and adapte the query `LIST FROM "Path/To/Folder"` to create a deck of cards with the class `dataview-cards-deck`
````
```dataviewjs
let result = await dv.query(`LIST FROM "Path/To/Folder"`);
let values = result.value.values;
let embeds = values.map(p => "[" + dv.fileLink(p.path, true) + "](<" + p.path + ">)");
dv.el("p", embeds, { cls: "dataview-cards-deck" });
```
````

## Shuffling code

[![]({% link images/dataview/cards-deck-shuffle-gif.webp %})]({% link images/dataview/cards-deck-shuffle-gif.webp %})

You can make it random and add a shuffle button by choosing a unique id for it (`dataview-id-values`) in the example
````
```dataviewjs
function shuffleArray(array) {
    let currentIdx = array.length;
    while (currentIdx != 0) {
        let rdmIdx = Math.floor(Math.random() * currentIdx);
        currentIdx--;
        [array[currentIdx], array[rdmIdx]] = [array[rdmIdx], array[currentIdx]];
    }
}
let result = await dv.query(`LIST FROM "Path/To/Folder"`);
let values = result.value.values;
shuffleArray(values);
let embeds = values.map(p => "[" + dv.fileLink(p.path, true) + "](<" + p.path + ">)");
dv.el("p", embeds, { cls: "dataview-cards-deck", attr: { id: "dataview-id-values" } });
```

```dataviewjs
dv.el("button", "Shuffle", { cls: "dataview-shuffle-button", attr: { onclick: `
    let dataview_wrapper = document.querySelector(".workspace-leaf.mod-active .view-content #dataview-id-values .dataview-result-list-root-ul");
    for (var i = dataview_wrapper.children.length; i >= 0; i--) {
        dataview_wrapper.appendChild(dataview_wrapper.children[Math.random() * i | 0]);
    }`
}});
```
````