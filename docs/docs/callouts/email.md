---
title: Email
parent: Callouts
---

Source: [`_callout-email.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/callouts/_callout-email.scss)

Use this callout to create email-like callouts. Any nested callout will be given the visual effect of an input, so best is to keep them at the beginning. To have a separator, add `sep` as an option of your last nested callout, this will give it a bottom border.

[![]({% link images/callouts/email.webp %})]({% link images/callouts/email.webp %})

```markdown
> [!email]+ 
> > [!note] Subject
> > &nbsp;
>
> > [!note] From
> > &nbsp;
>
> > [!note] To
> > &nbsp;
>
> > [!note|sep] At
> > &nbsp;
> 
> Hey,
>
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac enim ut sapien imperdiet gravida. Nulla sed turpis et neque tincidunt convallis. Phasellus posuere nisi eros, non tincidunt erat tincidunt ut.
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac enim ut sapien imperdiet gravida. Nulla sed turpis et neque tincidunt convallis. Phasellus posuere nisi eros, non tincidunt erat tincidunt ut.
>
> Thanks
```

{: .note }
After copying this template, remove the `&nbsp;`. They are non-breakable space that are only here as placeholders to insure each callout has a content (and the dotted underlines).