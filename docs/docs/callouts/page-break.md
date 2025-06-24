---
title: Page break
parent: Callouts
---

Source: [`callout-page-break.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/callouts/callout-page-break.css)

This callout creates a page break effect in your note and forces a page break when exporting to PDF.

[![]({% link images/callouts/page-break.webp %})]({% link images/callouts/page-break.webp %})

```markdown
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et placerat tellus, sit amet pellentesque lorem. Nullam faucibus quis metus in efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla feugiat id lorem quis venenatis. 

> [!page-break|thin]

Suspendisse malesuada ante in hendrerit iaculis. Nulla nisi dolor, fermentum at nisi quis, ultrices malesuada eros. Etiam nec metus vel erat tincidunt sodales. Suspendisse maximus, turpis quis posuere imperdiet, ligula metus pellentesque sapien, in volutpat ex velit a libero. Duis ac lacus nisl. Etiam sed odio ut neque viverra malesuada eu quis nisl.

> [!page-break]

Morbi ultrices felis vel eros tincidunt tincidunt. Vivamus dolor nisl, lobortis congue malesuada a, consequat viverra purus. Etiam venenatis maximus nunc at placerat. Aenean consectetur dignissim tellus, at sagittis nisi ornare ut. Vestibulum imperdiet, augue ornare accumsan faucibus, sapien augue blandit ex, quis eleifend nunc est quis ex.

> [!page-break|large]

In id libero libero. Nunc vestibulum ante ac purus gravida, eget aliquet nunc rutrum. Vivamus convallis gravida sem lobortis consectetur. Duis risus diam, scelerisque sed neque maximus, condimentum luctus ante. Vivamus sit amet semper est. Maecenas elementum tincidunt urna vel tincidunt. In et eros et elit consectetur aliquet.

> [!page-break|x-large]

Maecenas eget elit rutrum, porttitor massa non, cursus eros. Curabitur vel purus bibendum, placerat nunc et, consequat leo. Nulla blandit suscipit odio sed venenatis. Mauris eu mattis lorem. In quis malesuada libero. Praesent pharetra condimentum eros, ut aliquam nisi fringilla nec. Pellentesque convallis eros a ex faucibus auctor. Morbi consequat ipsum laoreet facilisis dapibus.
```


## CSS Variables

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--page-break-height-thin` | Thin page break height | `1.5em` |
| `--page-break-height-default` | Default page break height | `3em` |
| `--page-break-height-large` | Large page break height | `5em` |
| `--page-break-height-xlarge` | Extra large page break height | `7em` |