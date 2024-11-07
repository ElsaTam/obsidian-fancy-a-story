---
title: (FAS) Infobox
parent: Callouts
---

Source: [`callout-fas-infobox.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/callouts/callout-fas-infobox.css)

{: .important}
The `fas-infobox` callout was inspired by the infobox callout from [ITS theme](https://publish.obsidian.md/slrvb-docs/ITS+Theme/ITS+Theme), by SlRvb, distributed under the [GPL-2.0 License](https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/LICENSE). Thanks to her to let me keep a similar name. To add the wikipedia style to the theme, [see below](https://elsatam.github.io/obsidian-fancy-a-story/docs/callouts/fas-infobox.html#its-wikipedia-style).

Callout option (`> [!fas-infobox|option1 option2]`)
- `left`: place the infobox on the left
- `center`: centers the infobox
- `right`: place the infobox on the right (default)
- `corners`: add two triangle in the corners
- `no-thead` or `no-th`: remove table headers

Specific elements inside an infobox
- `# Header 1`: creates a divider ribbon accross the callout. Can be used in the title.
- `![[image.png|cover]]`: adds a thick bottom border to the image.
- `![[image.png|icon]]`: best to use right after the cover, turns the image into a small icon
- `![[image.png|background]]`: use the image as a background for the whole callout
- `> > [!footer]`: nested callout to add a footer area (opaque + dashed top border)

---

[![]({% link images/callouts/fas-infobox-1.webp %}){: width="250" }]({% link images/callouts/fas-infobox-1.webp %})

```markdown
> [!fas-infobox]+
> # Header 1
> ![[obsidian.png|cover]]
> ![[aurora.png|icon]]
> 
> ## Header 2
> | Table Header | Table Header |
> | ---- | --- |
> | Text | Text |
> | Text | Text |
> 
> Nam dignissim dui vitae turpis cursus condimentum. Curabitur lobortis dolor urna, et dapibus elit ornare et
> 
> > [!footer]
> > Sed metus metus, condimentum at vulputate ac, accumsan sed metus. Donec in faucibus sapien.
```

---

[![]({% link images/callouts/fas-infobox-2.webp %}){: width="250" }]({% link images/callouts/fas-infobox-2.webp %})

```markdown
> [!fas-infobox]+ # Header 1
> ![[aurora.png|background]]
> 
> ## Header 2
> | Table Header | Table Header |
> | ---- | --- |
> | Text | Text |
> | Text | Text |
> 
> Nam dignissim dui vitae turpis cursus condimentum. Curabitur lobortis dolor urna, et dapibus elit ornare et
```

---

[![]({% link images/callouts/fas-infobox-3.webp %}){: width="250" }]({% link images/callouts/fas-infobox-3.webp %})

```markdown
> [!fas-infobox|corners no-title]
> ![[obsidian.png|cover]]
> 
> | Table Header | Table Header |
> | ---- | --- |
> | Text | Text |
> | Text | Text |
>
> Nam dignissim dui vitae turpis cursus condimentum. Curabitur lobortis dolor urna, et dapibus elit ornare et
```

---

## ITS Wikipedia style

The Wikipedia style is an awesome option to the *ITS* infobox callouts that is not included in the *Fancy a Story* theme.
If you wish to use it with the `fas-infobox` callouts, follow these steps:
- Go the code for the ITS callouts: [`S - Callouts.css`](https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/Snippets/S%20-%20Callouts.css)
- Search the blocks containing `[data-callout-metadata~=wikipedia] table`. At the time of writing this doc, they go from line 614 to 626.
- Copy this part of the code in a new css snippet in your `.obsidian/snippets/` folder
- Replace `[data-callout~=infobox]` with `[data-callout~=fas-infobox]`
- Save the file
- Enable the snippet in Settings > Appearance > CSS snippets
- Write a callout with the syntax `> [!fas-infobox|wikipedia]`
- Enjoy

{: .note}
This has been written with the approval of SlRvb (ITS theme's creator). If you consider sharing this snippet publicly, remember that this code is distributed under the [GPL-2.0 License](https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/LICENSE).