---
title: Timeline
parent: Callouts
---

Source: [`_callout-timeline.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/postcss/editor/callouts/_callout-timeline.scss)

Use this callout to create a timeline. Several options are available.:
- At the first level timeline callout `> ![timeline|option]`:
  - `no-icon`: remove all icons from callout title, the main and the nested ones.
  - `numbered`: add increasing numbers inside the bullets for each item.
  - `horizontal`: make the timeline horizontal (vertical by default).
- In nested callouts:
  - `no-icon`: remove the icon of this callout.
  - `skip`: don't count this block in the numbering (require `numbered` at the first level callout)

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