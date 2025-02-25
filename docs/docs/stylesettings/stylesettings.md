---
title: Style settings
nav_order: 2
---

Source: [`_style-settings.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/scss/_style-settings.scss)

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

#### Inline margin (left/right) for float elements
Modify the space between the floating elements and the text. Float elements are for example the fas-infobox callout, the polaroid callout, floating images, etc.

#### Scrollbars width



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

#### Animate the hover effect in the file explorer

If enabled, hovering on files and folders in the File Explorer will have an slide-in animated effect.



# Editor

#### File line width
Set the file line width (width of notes).

{: .note }
If you change this value, the [asides]({% link docs/other/aside.md %}) elements might not switch correctly between in-text/in-margins positions.

## Callouts

#### Theme quote callout

Enable to use the Fancy-a-Story specific style for the `quote` and `cite` callouts (the style can still be used with `cite-fas` or `quote-fas` callout types if you keep this option disabled).

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

#### Center images
If enabled, the images will be centered if they are not in a paragraph (one empty line before and after)

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

## Properties

#### Number of columns

Number of columns for the frontmatter properties. If the note is smaller than 600px, only one column will be displayed.

## Tables

#### Table style
Default, with borders, or plain

[![]({% link images/tables/table-default-vs-plain.webp %}){: width="600" }]({% link images/tables/table-default-vs-plain.webp %})

#### Table position

Horizontal position of the table in preview mode.

#### Wrap in source mode

Wrap the table code in source mode so it isn't wider than the note.


# Features

#### Alternative checkboxes

Choose between
- Doodle style
- Normal style (mainly Lucide icons)
- Disabled

See [tasks]({% link docs/lists/tasks.md %}) for screenshots.

#### Floating button to switch note modes

{: .note }
Idea from the [Thing](https://github.com/colineckert/obsidian-things) theme, by colineckert, under MIT License.

The button to switch between editing and reading modes can be made floating.

The following css variables are used to define the button:

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--fas-floating-mode-button-color` | Color of the button | `var(--color-accent)` |
| `--fas-floating-mode-button-icon-color` | Color of the icon | `white` |
| `--fas-floating-mode-button-size` | Size of the button | `50px` |

#### Floating button position

Position of the floating button (to switch between editing and reading modes) on the screen.

You can also change the following css variables in a snippet:

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--fas-floating-mode-button-space-inline` | Left or Right margin | `20px` |
| `--fas-floating-mode-button-space-bottom` | Bottom margin | `50px` |

#### Highlight active note

{: .note }
Idea from the plugin [Obsidian Limelight](https://github.com/smikula/obsidian-limelight), by smikula, under MIT License.<br>Code adapted and shared by @tif on [Discord](https://discord.com/channels/686053708261228577/1283473301682786305/1292664955270860891). Thanks a lot!

Lower the opacity of non active notes.

#### Rainbow folders

Enable rainbow colors in the file explorer, for the top level folder

## App background image

Add a background image for the whole app.

[![]({% link images/stylesettings/app-background-image.webp %}){: width="400" }]({% link images/stylesettings/app-background-image.webp %})

#### Enable app background image

#### Image url

Must be either:
- the web url of an online image;
- the base64 encoded url of an embed image.

#### Blur

#### Opacity

## Notes background image

Add a background image to every note. See the cssclass [`background-image`]({% link docs/cssclasses/background-image.md %}).

#### Enable note background image for all notes

#### Image url

Must be either:
- the web url of an online image;
- the base64 encoded url of an embed image.

#### Blend mode, light/dark mode

#### Repeat background image

## Banners

#### Banner height

Height of the banners when set by the cssclass `banner`.

#### Banner slope angle

Angle of the slope for the `banner-slope` or `banner-slant` cssclasses.

#### Banner width in print mode

Define the type of banner for PDF exports. Full bleed will make the banner go from on edge to the page to the other. Inside margins will not cover the margins in order to leave free space for printing.

#### Banner style in edit mode

Select how the banner image will be displayed edit mode.
- Hidden will completely hide the image
- Small will reduce the width of the image to 100px
- Icon will show a small `🖼️ banner` that you can hover to see the image in a very small icon (approx. 60px wide)


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