---
title: Cards deck (Callout)
parent: Callouts
---

Source: [`_callout-cards-deck.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/postcss/editor/callouts/_callout-cards-deck.scss)

See the [`dataview-cards-deck` class]({% link docs/dataview/cards-deck.md %}) to create this effect with embed notes.

[![]({% link images/callouts/cards-deck.webp %})]({% link images/callouts/cards-deck.webp %})

[![]({% link images/callouts/cards-deck-gif.webp %})]({% link images/callouts/cards-deck-gif.webp %})

(images from [SugarySweetSprites](https://www.deviantart.com/sugarysweetsprites/art/Cluedo-Cards-633344381))

Images from the same deck must be in the same block, i.e. no empty line between them.

```markdown
> [!cards-deck]+ Clue
> ## Who
> 
> ![[image1.png]]
> ![[image2.png]]
> ![[image3.png]]
> 
> ## How
> 
> ![[image4.png]]
> ![[image5.png]]
> ![[image6.png]]
>
> ## Where
> 
> ![[image7.png]]
> ![[image8.png]]
> ![[image9.png]]
```