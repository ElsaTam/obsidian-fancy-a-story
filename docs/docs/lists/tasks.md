---
title: Tasks
parent: Lists
---


Source: [`_tasks.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/scss/editor/lists/_tasks.scss)

**Default normal checkboxes**

[![]({% link images/lists/normal-checkboxes.webp %}){: width="125" }]({% link images/lists/normal-checkboxes.webp %})

**Default doodle checkboxes**

[![]({% link images/lists/doodle-checkboxes.webp %}){: width="250" }]({% link images/lists/doodle-checkboxes.webp %})

{: .note}
The checkboxes style can be chosen in the Style Settings plugin, under `Fancy-a-story > Editor > Lists > Checkbox style`.

**Normal alternative checkboxes**

[![]({% link images/lists/alternate-normal-icons.webp %})]({% link images/lists/alternate-normal-icons.webp %})

**Doodle alternative checkboxes**

[![]({% link images/lists/alternate-doodle-icons.webp %})]({% link images/lists/alternate-doodle-icons.webp %})

[![]({% link images/lists/alternate-doodle-checkboxes.webp %}){: width="250" }]({% link images/lists/alternate-doodle-checkboxes.webp %})

{: .note}
The alternative checkboxes can be disabled/changed in the Style Settings plugin, under `Fancy-a-story > Features > Alternative checkbox`.


The code for one task icon is the following:
```scss
:is(.HyperMD-task-line, .task-list-item.task-list-item)[data-task=#{$label}] {
    --checkbox-color: #{$color};
    --checkbox-icon: #{$icon};
}
:is(.HyperMD-task-line, .task-list-item)[data-task=#{$label}] input[type=checkbox],
:is(.HyperMD-task-line, .task-list-item)[data-task=#{$label}] input[type=checkbox]:hover {
    background: none;
    border: none;
}
:is(.HyperMD-task-line, .task-list-item)[data-task=#{$label}] input[type=checkbox]::after {
    -webkit-mask-size: 100% 100%;
    -webkit-mask-position: center;
    -webkit-mask-image: var(--checkbox-icon);
    background-color: var(--checkbox-color);
}
```

The code for one checkbox icon with a doodle effect, is the following, where `#{i}` is between 1 and 6 and `#{$label}` is in (`' '`, `''`, `'x'`, `'X'`, `'-'`, `'/'`).
```scss
:is(.HyperMD-task-line, .task-list-item)[data-task="#{$label}"]:nth-child(6n+#{i}) {
    --checkbox-color-hover: #{$color};
    --checkbox-color: #{$color-hover};
    --checkbox-icon: #{$icon};
}
:is(.HyperMD-task-line, .task-list-item) input[type=checkbox],
:is(.HyperMD-task-line, .task-list-item) input[type=checkbox]:hover {
    background: none;
    border: none;
}
:is(.HyperMD-task-line, .task-list-item) input[type=checkbox]::after {
    -webkit-mask-size: 100% 100%;
    -webkit-mask-position: center;
    -webkit-mask-image: var(--checkbox-icon);
}
:is(.HyperMD-task-line, .task-list-item)[data-task="#{$label}"] input[type=checkbox]::after {
    background-color: var(--checkbox-color);
}
:is(.HyperMD-task-line, .task-list-item)[data-task="#{$label}"] input[type=checkbox]:hover::after {
    background-color: var(--checkbox-color-hover);
}
```