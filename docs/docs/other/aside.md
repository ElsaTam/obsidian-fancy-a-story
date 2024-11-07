---
title: Aside
parent: Other components
---

Source: [`aside.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/aside.css)

Asides are elements in the margins of the note.

[![]({% link images/other/aside.webp %}){: width="800" }]({% link images/other/aside.webp %})

If the margins get too narrow (based on a File line width of default 700px), asides are placed inside the text.

[![]({% link images/other/aside-narrow.webp %}){: width="400" }]({% link images/other/aside-narrow.webp %})

{: .note }
You can use `<span>...</span>` instead of `<s>...</s>`.

```markdown
## Asides

na aliqua. Ultricies mi et, consecteore et dolore magna aliqua. Ultricies mi quis hendrerit dolor magna. Massa eget egestas.

<aside>this is an aside using <code>&lt;aside&gt;</code>. Note that *markdown* formatting does not work in this kind of block. Eleanor recommends against putting these in the middle of a paragraph.</aside>

Lordunt ut labore et dolore magna aliqua. Ultricies mi quis hendrerit dolor magna. Massa eget egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dopor incididua. Ultricies mi quis hendrerit dolor magna. Massa eget egestas.

### Alternate aside using `<s...><\/s>`

An alternate form of aside uses the strikethrough element, as that allows markdown within the block to function as normal.

<s class="aside-right">this is an aside using `<s class="aside-right">`. Note that *markdown* formatting works in this kind of block. Eleanor recommends against putting these in the middle of a paragraph.</s>

Sed posuere eu nisl et consectetur. Curabitur dignissim, nisl eu blandit scelerisque, tortor elit bibendum augue, ut scelerisque dui quam elementum velit. Nunc ullamcorper purus non ex condimentum, id porttitor diam pharetra. 

<s class="aside-left">this is an aside using `<s class="aside-left">`. Note that *markdown* formatting works in this kind of block. Eleanor recommends against putting these in the middle of a paragraph.</s>

Integer ac accumsan lacus, sed varius erat. Proin mollis felis quis elementum consequat. Etiam faucibus congue arcu et finibus. Duis efficitur ipsum eget feugiat ullamcorper. Proin sed porta lectus, vitae cursus felis. Nulla at nibh nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur malesuada dolor et feugiat. 
```