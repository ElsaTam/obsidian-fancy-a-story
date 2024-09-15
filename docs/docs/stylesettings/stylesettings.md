---
title: Style settings
nav_order: 2
---

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

# Accessibility

#### Enable Accessibility variant
Use a sans serif font, increase default font size and weight, remove doodle icons, etc.

#### Use sans serif font

#### Increase default font size and weight

#### Doodle icons
Use doodle (handwritten style) icons in some places, such as tasks icons and bullet lists.

#### Background textures
Disable all background textures

## Minor tweaks making big differences

#### Gap between the selected tab and the content in the sidebars

[![]({% link images/stylesettings/tab-header-gap.webp %}){: width="400" }]({% link images/stylesettings/tab-header-gap.webp %})


# Editor

#### File line width
Set the file line width (width of notes).

{: .note }
The [asides]({% link docs/other/aside.md %}) elements might not switch corectly between in-text/in-margins positions.

#### Use plain table style
Select the plain style for the tables

[![]({% link images/tables/table-default-vs-plain.webp %}){: width="400" }]({% link images/tables/table-default-vs-plain.webp %})

#### Color for the headings
See [Headings CSS Classes]({% link docs/cssclasses/cssclasses.md %})

#### Style for the first level heading (h1)
See [Headings CSS Classes]({% link docs/cssclasses/cssclasses.md %})

# Features

#### Rainbow folders
Enable rainbow colors in the file explorer, for the top level folder