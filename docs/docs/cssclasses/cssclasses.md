---
title: CSS Classes
nav_order: 6
---

| Class                                                              | Description                                          | Source                                                           |
|:-------------------------------------------------------------------|:-----------------------------------------------------|:-----------------------------------------------------------------|
| [`banner` and variants]({% link docs/cssclasses/banner.md %})      | Adds a banner with different options                 | [`_banner.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/_banner.scss) |
| [`black-and-white`]({% link docs/cssclasses/black-and-white.md %}) | Turns the page in black and white                    | [`_black-and-white.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/_black-and-white.scss) |
| [`columns-x`]({% link docs/cssclasses/columns.md %})               | Use a 2, 3 or 4 columns layout                       | [`_columns.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/_columns.scss) |
| `confidential`                                                     | Replace `==highlights==` with unreadable black marks | [`_confidential.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/_confidential.scss) |
| `minimalist`                                                       | Simple and minimal styling                           | [`_minimalist.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/_minimalist.scss) |
| [`movie-script`]({% link docs/cssclasses/movie-script.md %})       | Movie-script styling with specific callouts          | [`_movie-script.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/_movie-script.scss) |
| [`newspaper`]({% link docs/cssclasses/newspaper.md %})             | Transform the page into an old newspaper             | [`_newspaper.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/_newspaper.scss) |
| [`note-accent`]({% link docs/cssclasses/note-accent.md %})         | Change the accent color                              | [`_note-accent.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/_note-accent.scss) |
| `no-title`                                                         | Remove the inline title in reading view              | [`_no-title.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/_no-title.scss) |
| `wide-page`                                                        | Disable the readable line length only for this page  | [`_wide-page.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/_wide-page.scss) |
| [`sci-fi`]({% link docs/cssclasses/sci-fi.md %})                   | Gives a sci-fi vibe to the note                      | [`_sci-fi.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/_sci-fi.scss) |
| [`sci-fi-banner`]({% link docs/cssclasses/sci-fi-banner.md %})     | Adds a planet aura to the note inline title          | [`_sci-fi-banner.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/cssclasses/_sci-fi-banner.scss) |

# Headings

Source: [`_kpr-headings.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/snippets/editor/_kpr-headings.scss)

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