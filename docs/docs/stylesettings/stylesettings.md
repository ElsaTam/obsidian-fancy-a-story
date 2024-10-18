---
title: Style settings
nav_order: 2
---

Source: [`_style-settings.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/postcss/_style-settings.scss)

1. TOC
{:toc}

# Colors

#### Light color scheme

Choose a predefined color scheme for the light mode.

#### Dark color scheme

Choose a predefined color scheme for the dark mode.

#### Opposite bacgkround

When enabled, the overall background of the app will be light in dark mode, and dark in light mode.

#### Custom - Primary

Select the background primary color for light and dark mode **with the color scheme "Custom"**.

#### Custom - Text

Select the text color for light and dark mode **with the color scheme "Custom"**.

#### Custom - Gradient color space

Select the color space for the gradient mixing **with the color scheme "Custom"**.

The base color gradient goes from the primary background to the text color. The interpolation is made [in a certain color space](https://developer.mozilla.org/en-US/docs/Web/CSS/color-interpolation-method). Each color space will give a different gradient.

If you don't know what to choose, I would suggest `srgb-linear` for both modes, or `lab` for dark mode.

## Note accent colors

Change the color accent for the cssclasses [`note-accent-i`]({% link docs/cssclasses/note-accent.md %}).

# Accessibility

#### Enable Accessibility variant
This option makes the vault easier to read, with sans serif fonts, and increased font size and weight.

#### Use sans serif font

#### Increase default font size and weight

#### Background textures
Enable the background texture in the sidebars.



# Workspace

#### Status bar position
- **(none)**: default position
- **Default on hover**: default position, show on hover only
- **Top**: at the top of the window
- **Ribbon**: split the ribbon space in two, the status-bar goes in the bottom part

## Sidebars

#### Bookmark style for the tabs

[![]({% link images/stylesettings/fas-bookmark-tabs.webp %})]({% link images/stylesettings/fas-bookmark-tabs.webp %})

#### Gap between the selected tab and the content in the sidebars

[![]({% link images/stylesettings/tab-header-gap.webp %}){: width="400" }]({% link images/stylesettings/tab-header-gap.webp %})

#### Color of the inside border

Change the color of the border of panels inside the sidebars

#### Use custom sidebar texture

Enable to use your own custom texture instead of the default paper one

#### Sidebar texture url

Url to the image for the sidebar texture. Use it as follow: `url("https://path/to/file.png")`

#### Sidebar texture blending mode

[Blending mode](https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode) for the background texture (one for each ligh/dark mode)

#### Sidebar texture size

[Size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size) of the background texture

#### Sidebar texture position

[Position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position) of the background texture

#### Sidebar texture opacity

Opacity of the background texture. Should be between 0 and 1.

#### Use custom file explorer decoration

Enable to use your own custom texture instead of the default paper one

#### File explorer decoration url

Url to the image for the file explorer decoration. Use it as follow: `url("https://path/to/file.png")`

#### File explorer decoration blending mode

[Blending mode](https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode) for the file explorer decoration (one for each ligh/dark mode)

#### File explorer decoration size

[Size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size) of the file explorer decoration

#### File explorer decoration position

[Position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position) of the file explorer decoration

#### File explorer decoration opacity

Opacity of the file explorer decoration. Should be between 0 and 1.




# Editor

#### File line width
Set the file line width (width of notes).

{: .note }
If you change this value, the [asides]({% link docs/other/aside.md %}) elements might not switch correctly between in-text/in-margins positions.

## Tables

#### Use plain table style
Select the plain style for the tables

[![]({% link images/tables/table-default-vs-plain.webp %}){: width="400" }]({% link images/tables/table-default-vs-plain.webp %})

## Headings

#### Color for the headings
See [Headings CSS Classes]({% link docs/cssclasses/cssclasses.md %})

#### Style for the first level heading (h1)
See [Headings CSS Classes]({% link docs/cssclasses/cssclasses.md %})

## Images

#### Shadow offset (px)
The theme adds by default a striped shadow to the embed images. You can change the offset of this shadow.

**Trick 1**: Make it 0 to make the shadow disappear.

**Trick 2**: Make it negative to keep the shadow exactly under the image (like if it was offset 0), but still display it under transparent images.

#### Shadow stripe thickness (px)
Thickness of the stripes of the image shadow

#### Shadow stripe gap (px)
Gap between the stripes of the image shadow

[![]({% link images/stylesettings/image-shadow.webp %})]({% link images/stylesettings/image-shadow.webp %})
[![]({% link images/stylesettings/image-shadow-modified.webp %})]({% link images/stylesettings/image-shadow-modified.webp %})

## Links

#### Internal link decoration
Choose between
- none
- doodle (on hover)
- underline
- overline
- underline overline

#### External link decoration
Choose between
- none
- doodle (on hover)
- underline
- overline
- underline overline

## Lists

#### Bullet style

Choose between
- Doodle style
- Normal style (no additional styling)

#### Checkbox style

Choose between
- Doodle style
- Normal style (no additional styling)

See [tasks]({% link docs/lists/tasks.md %}) for screenshots.

## PDFs

#### Blend mode, light mode

[Blending mode](https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode) for the PDFs in light mode. Multiply is a often a good choice.

#### Blend mode, dark mode

[Blending mode](https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode) for the PDFs in dark mode. Screen or exclusion are often good choices if you have the "Invert in dark mode" enabled.

#### Invert in dark mode

Invert your PDFs in dark mode.



# Features

#### Alternative checkboxes

Choose between
- Doodle style
- Normal style (mainly Lucide icons)
- Disabled

See [tasks]({% link docs/lists/tasks.md %}) for screenshots.

#### Highlight active note

{: .note }
Idea from the plugin [Obsidian Limelight](https://github.com/smikula/obsidian-limelight/tree/master), by smikula, under MIT License.<br>Code adapted and shared by @tif on [Discord](https://discord.com/channels/686053708261228577/1283473301682786305/1292664955270860891). Thanks a lot!

Lower the opacity of non active notes.

#### Rainbow folders

Enable rainbow colors in the file explorer, for the top level folder


# Additional content

#### Additional fonts
Multiple elements of this theme can use specific fonts if they are available. To download the required fonts, you can add the file [additional_fonts.css](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/css/additional_fonts.css) to your [snippets file](https://help.obsidian.md/Extending+Obsidian/CSS+snippets). This file can be very heavy. If you don't plan on using all of them, I would recommend deleting the unecessary @font-face from the snippet.

Fonts are used in the following:
- Chakra Petch: [`sci-fi`]({% link docs/cssclasses/sci-fi.md %}) css class
- Homemade Apple: [`letter`]({% link docs/callouts/letter.md %}) callout
- Orbitron: [`sci-fi`]({% link docs/cssclasses/sci-fi.md %}) css class, and [`sci-fi-banner`]({% link docs/cssclasses/sci-fi-banner.md %}) css class
- Playfair Display: [`newspaper`]({% link docs/cssclasses/newspaper.md %}) css class, and [`timeline`]({% link docs/callouts/timeline.md %}) callout
- ProFont: [`screen`]({% link docs/callouts/screen.md %}) callout
- Spectral: [`newspaper`]({% link docs/cssclasses/newspaper.md %}) css class
- Tangerine: [`letter`]({% link docs/callouts/letter.md %}) callout
- TT2020: [`pinned`]({% link docs/callouts/pinned.md %}) callout, [`h1-display`]({% link docs/cssclasses/cssclasses.md %}#headings) headings
- VTC Letterer Pro: [`comic`]({% link docs/callouts/comic.md %}) callout
- Walter Turncoat: [`paper-fold`]({% link docs/callouts/paper-fold.md %}) callout, and [`polaroid`]({% link docs/callouts/polaroid.md %}) callout

#### Canvas node tags
See [Canvas]({% link docs/canvas/canvas.md %}).