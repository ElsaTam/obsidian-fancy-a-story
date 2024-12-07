---
title: Citation
parent: Callouts
---

Source: [`callout-cite.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/callouts/callout-cite.css)

[![]({% link images/callouts/citation.webp %}){: width="500" }]({% link images/callouts/citation.webp %})

```markdown
> [!cite]
> Nunc non lacus enim. Donec id doliam lurta orci, eget commodo est euismod a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
> <cite>— by [[Embeds|Internal Link]]</cite>

And another (just a name)

> [!quote]
> Nunc non lacus enim. Donec id doliam lurta orci, eget commodo est euismod a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae
> <cite>— @Eleanor</cite>

And another (external link, note specific href)

> [!cite]
> Nunc non lacus enim. Donec id doliam lurta orci, eget commodo est euismod a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae
> <cite>— <a href="https://twitter.com/obsdmd/status/1458523572448727051?s=20">@obsdmd</a></cite>
```

## CSS Variables

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--cite-decoration-width` | Width of the left decoration | `50px` |