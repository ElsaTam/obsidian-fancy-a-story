---
title: Autopsy report
parent: Callouts
---

Source: [`_callout-autopsy.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/callouts/_callout-autopsy.scss)

This callout is more stric than others. It let you write an autopsy report for your fiction. I took all of my inspiration from this [Reddit resource](https://www.reddit.com/r/Eberron/comments/o8ssdi/template_for_a_crown_necromancers_report_coroner/) that I tried to copy as best as I could.

[![]({% link images/callouts/autopsy.webp %})]({% link images/callouts/autopsy.webp %})

```markdown
> [!autopsy]+
> > [!decedent] Decedent
> > &nbsp;
>
> > [!species] Species
> > &nbsp;
>
> > [!gender] Gender
> > &nbsp;
>
> > [!age] Age
> > &nbsp;
>
> > [!residence|inline] Residence
> > &nbsp;
>
> > [!occupation|inline] Occupation
> > &nbsp;
>
> > [!circumstances]+ Circumstances of death
> > - [ ] Violent
> > - [ ] Accidental
> > - [ ] Magical
> > - [ ] Found-Dead
> > - [ ] Predation
> > - [ ] Suspicious or Unusual
>
> > [!remarks|hr]+ Remarks
> > &nbsp;
>
> > [!description]+ Description
> > - [ ] Clothed
> > - [ ] Unclothed
> > - [ ] Partly clothed
> >
> > | Eyes | Hair | Beard | Jewelry | Tattoos |
> > | ---- | ---- | ----- | ------- | ------- |
> > |      |      |       |         |         |
> > 
> > | Height | Weight | Other |
> > | ------ | ------ | ----- |
> > |        |        |       |
>
> > [!marks-wounds]+ Marks and Wounds
> > &nbsp;
>
> > [!body]+ Body
> > - [ ] front head
> > - [ ] front left arm
> > - [ ] front right arm
> > - [ ] front left hand
> > - [ ] front right hand
> > - [ ] belly
> > - [ ] pelvis
> > - [ ] front left leg
> > - [ ] front right leg
> > - [ ] over left foot
> > - [ ] over right foot
> > - [ ] back head
> > - [ ] back left arm
> > - [ ] back right arm
> > - [ ] back left hand
> > - [ ] back right hand
> > - [ ] back
> > - [ ] bottom
> > - [ ] back left leg
> > - [ ] back right leg
> > - [ ] under left foot
> > - [ ] under right foot
>
> > [!cause]+ Probable cause of death
> > &nbsp;
>
> > [!manner]+ Manner of death
> > &nbsp;
> 
> > [!recommendations]+ Recommendations
> > &nbsp;
> 
> > [!footnote|hr] Footnote
> > &nbsp;
> 
> > [!date] Date
> > &nbsp;
> 
> > [!city] City
> > &nbsp;
> 
> > [!signature] Signature
> > &nbsp;
```

{: .note }
After copying this template, remove the `&nbsp;`. They are non-breakable space that are only here as placeholders to insure each callout has a content (and the dotted underlines).


### The Grid Layout

This callout works with a grid layout inside the main calout's `.callout-content`.

The grid has 6 columns, following the following layout:

[![]({% link images/callouts/autopsy-layout.webp %})]({% link images/callouts/autopsy-layout.webp %})

**What you *can* do without modifying the CSS**
- Change the names of the displayed sections, by setting your own callout title.
- Remove sections, they will leave empty spaces.
- Add callouts with other names (or any block really): each of them will take one space (one row span, one column span), starting with the left of the footnote, then right, then it will start new lines.

**What you *cannot* do without overriding the CSS**
- Change the grid layout.
- Change the callout identifier (keywords used in `> [!callout-id]`) used in the grid layout.

### Optional styles from the markdown

The callout let you have just a few controls over the style of the final result, by using callouts metadata: `> [!callout-id|callout-metadata-1 callout-metadata-2]`. Following options are available:
- `hr`: add a bottom double border under the section (in example: `remarks` and `footnote` sections)
- `inline`: inline in the same flow the title of the section and its content (in example: `redisence` and `occupation` sections)
- `no-dots`: remove the dotted lines under the text (in example: `footnote` section)

### The body schema and its checkboxes

The *only* section you should not change, is the `> [!body]` callout. The checkboxes are placed just at the right position to match a schema of a human body in the background. Changing the content here will break this effect. However, you can change the labels, which will be shown when hovering the checkboxes in a tooltip.

If you wish to use your own background schema and your own checkboxes, you will have to override all the absolute positionings in the code. As well as this three variables:
```css
.callout[data-callout="body"] {
    --body-img-base-width: 750;  /* don't put unit here, its only to compute a ratio */
    --body-img-base-height: 768; /* don't put unit here, its only to compute a ratio */
    --body-img: url('');
}
```

The code expects a black schema outline readable for light theme, and will automatically add an inverse filter to make it usable in dark theme. So black outlines will be changed in white outlines, you do not have to provide two images.

### Specific elements behaviors

- **Tasks list** are inlined to expand horizontaly rather than stacked verticaly.
- **Spacings** between elements are controled by `gap` property and everything else (`margin` and `padding`) is mainly set to `0`.

### Controlling colors

Colors are set as follow:
```css
.callout[data-callout="autopsy"] {
    /* Color of the main callout background
       Splitted R G B values */
    --callout-color: var(--mono-rgb-0);

    /* Color of the nested callouts
       (used for the titles, checkboxes, borders, dots, table headers)
       Splitted R G B values */
    --callout-color-nested: var(--color-blue-rgb);

    /* Color of the main "Autopsy" title
       Splitted R G B values */
    --callout-title-color: rgb(var(--mono-rgb-100)); 
}
.callout[data-callout="autopsy"] .callout[data-callout="body"] {
    /* Color of the checked checkboxes on the body schema */
    --checkbox-color: var(--color-red);
}
```

You can copy this code in a new snippet and change them to override the default.