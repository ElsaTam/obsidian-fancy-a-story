---
title: CSS Classes
nav_order: 6
---

| Class                                                              | Description                                          | Source                                                           |
|:-------------------------------------------------------------------|:-----------------------------------------------------|:-----------------------------------------------------------------|
| [`background-image`]({% link docs/cssclasses/background-image.md %}) | Adds a background image (with Style Settings) | [`background-image.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/background-image.css) |
| [`banner` and variants]({% link docs/cssclasses/banner.md %})      | Adds a banner with different options                 | [`banner.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/banner.css) |
| [`black-and-white`]({% link docs/cssclasses/black-and-white.md %}) | Turns the page in black and white                    | [`black-and-white.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/black-and-white.css) |
| [`columns-x`]({% link docs/cssclasses/columns.md %})               | Use a 2, 3 or 4 columns layout                       | [`columns.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/columns.css) |
| `confidential`                                                     | Replace `==highlights==` with unreadable black marks | [`confidential.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/confidential.css) |
| [`footer-img` and variants]({% link docs/cssclasses/footer-img.md %}) | Adds a footer image with different options        | [`footer-img.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/footer-img.css) |
| `hide-properties`                                                  | Hide properties in reading view                      | [`hide-properties.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/hide-properties.css) |
| `minimalist`                                                       | Simple and minimal styling                           | [`minimalist.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/minimalist.css) |
| [`movie-script`]({% link docs/cssclasses/movie-script.md %})       | Movie-script styling with specific callouts          | [`movie-script.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/movie-script.css) |
| [`newspaper`]({% link docs/cssclasses/newspaper.md %})             | Transform the page into an old newspaper             | [`newspaper.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/newspaper.css) |
| [`note-accent`]({% link docs/cssclasses/note-accent.md %})         | Change the accent color                              | [`note-accent.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/note-accent.css) |
| `no-title`                                                         | Remove the inline title in reading view              | [`no-title.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/no-title.css) |
| `wide-page`                                                        | Disable the readable line length only for this page  | [`wide-page.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/wide-page.css) |
| [`sci-fi`]({% link docs/cssclasses/sci-fi.md %})                   | Gives a sci-fi vibe to the note                      | [`sci-fi.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/sci-fi.css) |
| [`sci-fi-banner`]({% link docs/cssclasses/sci-fi-banner.md %})     | Adds a planet aura to the note inline title          | [`sci-fi-banner.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/sci-fi-banner.css) |

# Headings

Source: [`fas-headings.css`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/fas-headings.css)

| Class                 | Description                                  |                 |
|:----------------------|:---------------------------------------------|:---------------:|
| `h1-display`          | H1 headings style                            | [![]({% link images/cssclasses/h1-display.webp %}){: width="200" }]({% link images/cssclasses/h1-display.webp %})         |
| `h1-stroke`           | H1 headings style                            | [![]({% link images/cssclasses/h1-stroke.webp %}){: width="200" }]({% link images/cssclasses/h1-stroke.webp %}) |
| `headings-hue`        | Use a middle hue between background and text | [![]({% link images/cssclasses/headings-hue.webp %}){: width="100" }]({% link images/cssclasses/headings-hue.webp %}) |
| `headings-complement` | Use the complementary of the middle hue      | [![]({% link images/cssclasses/headings-complement.webp %}){: width="100" }]({% link images/cssclasses/headings-complement.webp %}) |
| `headings-accent`     | Use the accent color                         | [![]({% link images/cssclasses/headings-accent.webp %}){: width="100" }]({% link images/cssclasses/headings-accent.webp %}) |

{: .note }
- If both of your primary and text color are shades of grey (0% saturation), the middle hue and its complement will also be shades of grey.
- If one of your primary or text color is a shade of grey with the Custom color scheme, it will be considered as red hue to compute the middle hue, hence giving a mix between red and the other primary/text color.