---
title: Timeline
parent: Callouts
---

Source: [`callout-timeline.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/callouts/callout-timeline.css)

Use this callout to create a timeline. Several options are available.:
- At the first level timeline callout `> ![timeline|option]`:
  - `no-icon`: remove all icons from callout title, the main and the nested ones.
  - `numbered`: add increasing numbers inside the bullets for each item.
  - `horizontal`: make the timeline horizontal (vertical by default).
- In nested callouts:
  - `no-icon`: remove the icon of this callout.
  - `skip`: don't count this block in the numbering (require `numbered` at the first level callout)
  - `no-fancy`: remove the border style and use normal style for each element

Note that inside the timeline callout, you can use what you want. All blocks will be transformed into "date cards", not only callouts. So paragraphs, blockquotes, code, etc., they all work. But callouts are the only one you can add options to.

[![]({% link images/callouts/timeline.webp %})]({% link images/callouts/timeline.webp %})

```markdown
> [!timeline|blue numbered]+
> > [!note|skip no-icon] August 18
> > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia posuere fermentum
> 
> > [!note]- August 21, 11:45 PM
> > Etiam ac ipsum neque. Ut tincidunt in elit ornare viverra. Pellentesque auctor mi lectus.
> 
> > [!note|skip green]+ August 22, 10:00 AM
> > Etiam pretium sapien risus, in interdum tortor imperdiet quis.
> 
> ![[obsidian.jpeg]]
> 
> Proin sed urna vehicula ipsum posuere auctor. Nullam consectetur pharetra justo, eget sollicitudin mauris finibus et.
> 
> > [!danger]+ August 30
> > Nam sem est, eleifend vel diam at, gravida pellentesque quam.

> [!timeline|blue numbered horizontal]+
> > [!note|skip no-icon] August 18
> > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia posuere fermentum
> 
> > [!note]- August 21, 11:45 PM
> > Etiam ac ipsum neque. Ut tincidunt in elit ornare viverra. Pellentesque auctor mi lectus.
> 
> > [!note|skip green]+ August 22, 10:00 AM
> > Etiam pretium sapien risus, in interdum tortor imperdiet quis.
> 
> ![[obsidian.jpeg]]
> 
> Proin sed urna vehicula ipsum posuere auctor. Nullam consectetur pharetra justo, eget sollicitudin mauris finibus et.
> 
> > [!danger]+ August 30
> > Nam sem est, eleifend vel diam at, gravida pellentesque quam.
```

## CSS Variables

(defined in `.callout[data-callout="timeline"]`)

### Layout

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--col-gap` | Column gap | `20px` |
| `--row-gap` | Row gap | `10px` |

### Guideline

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--line-thickness` | Guideline thickness | `24px` |
| `--line-color` | Guideline color | `rgba(var(--callout-color), 0.4)` |
| `--line-fade-width` | Size of the fading gradient | `50px` |

### Cards

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--card-border-width` | Border width of a time card | `5px` |
| `--card-border-opacity` | Border opacity of a time card | `0.2` |
| `--card-padding` | Padding inside a time card | `12px` |
| `--card-width` | Width of a time card (horizontal layout only) | `300px` |

### Bullets

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--bullet-size` | Size of a normal bullet | `8px` |
| `--bullet-numbered-size` | Size of a numbered bullet | `20px` |
| `--bullet-radius` | Bullet radius | `50%` |
| `--bullet-color` | Bullet inner color | `var(--workleaves-background)` |
| `--bullet-border-width` | Bullet border width | `1px` |
| `--bullet-border-color` | Bullet border color | `rgb(var(--callout-color))` |
| `--bullet-outline-width` | Bullet outline width, creates a gap between the bullet and the segment | `3px` |

### Segments

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--segment-border-color` | Segment border color | `rgb(var(--callout-color))` |
| `--segment-thickness` | Segment thickness | `1px` |