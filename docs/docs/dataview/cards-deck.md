---
title: Cards deck (Dataview JS)
parent: Dataview
---

Source: [`_callout-dvjs-cards-deck.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/scss/editor/callouts/_callout-dvjs-cards-deck.scss)

See the [callout `cards-deck`]({% link docs/callouts/cards-deck.md %}) to create this effect with images in a callout.


Use the following code and adapte the query `LIST FROM "Path/To/Folder"` to create a deck of cards with the class `dataview-cards-deck`
````
```dataviewjs
let result = await dv.query(`LIST FROM "Path/To/Folder"`);
let values = result.value.values;
let embeds = values.map(p => "[" + dv.fileLink(p.path, true) + "](<" + p.path + ">)");
dv.el("p", embeds, { cls: "dataview-cards-deck" });
```
````

You can make it random and add a shuffle button by choosing a unique id for it
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
let result = await dv.query(`LIST FROM "05 - UGB/Ordre/Agora" WHERE type="lieu"`);
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
	}` }});
```
````