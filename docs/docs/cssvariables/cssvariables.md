---
title: CSS Variables
nav_order: 7
---

1. TOC
{:toc}

# Editor

## Headings

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--h1-border-color` | Border or strike line color for H1 headings | `currentColor` |
| `--h1-border-color-collapsed` | Border or strike line color for collapsed H1 headings | `var(--collapse-icon-color-collapsed)` |

## Images

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--image-shadow-offset`           | Offset of the images stripe shadow     | `8px`                           |
| `--image-shadow-stripe-thickness` | Stripes thickness of the images shadow | `2px`                           |
| `--image-shadow-stripe-gap`       | Stripes gap of the images shadow       | `2px`                           |
| `--image-shadow-color`            | Color of the images stripe shadow      | `var(--background-primary-alt)` |

## Links

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--link-decoration-thickness-hover` | Link text decoration thickness (hover) | `1px` |

## Tables

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--table-header-line-height` | Line height for table headers | `1.8` |


# Typography

## Fonts

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--font-typewriter` | Typewriter font-family | `"TT2020StyleE", "Courier", monospace` |



# Workspace

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--workleaves-foreground`      | Normal text color above the workleaves | `var(--text-normal)`          |
| `--workleaves-background`      | Workleaves background                  | `var(--background-primary)`   |
| `--workspace-foreground`       | Normal text color above the workspace  | `var(--text-normal)`          |
| `--workspace-foreground-muted` | Muted text color above the workspace   | `var(--text-muted)`           |
| `--workspace-foreground-faint` | Faint text color above the workspace   | `var(--text-faint)`           |
| `--workspace-background`       | Workspace background                   | `var(--background-secondary)` |

[![]({% link images/cssvariables/workspace-workleaves.webp %}){: width="300" }]({% link images/cssvariables/workspace-workleaves.webp %})

## Sidedocks

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--sidedock-tab-header-padding-bottom` | Gap between the selected tab and the content in the sidebars | `0px` |

## Corner cutouts

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--cutout-corner-radius`     | Radius of cropped circles in the sidebars                              | `13px`   |
| `--cutout-corner-angle`      | Size of the cropped angles in the h1 headings                          | `0.25em` |
| `--cutout-outline-inset`     | Space between the boundaries of a cutout element and its inside border | `3px`    |
| `--cutout-outline-thickness` | Inline border thickness of a cutout element                            | `3px`    |

## File explorer

| Variable | Description | Default value |
|:---------|:------------|:--------------|
| `--active-file-bullet-size` | Size of the active file bullet indicator (require [Highlight active folder section](https://github.com/justanotherjurastudent/highlight-active-folder-section) plugin) | `6px` |
