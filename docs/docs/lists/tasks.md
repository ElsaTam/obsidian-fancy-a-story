---
title: Tasks
parent: Lists
---


Source: [`_tree-view.scss`](https://github.com/ElsaTam/obsidian-fancy-a-story/blob/main/scss/editor/lists/_tasks.scss)

[![]({% link images/lists/tasks.webp %})]({% link images/lists/tasks.webp %})


The code for one task icon is the following:
```css
:is(.HyperMD-task-line, .task-list-item)[data-task="{label}"] {
    --checkbox-color: var(--color-base-50);
}
:is(.HyperMD-task-line, .task-list-item)[data-task="{label}"] input[type=checkbox] {
    pointer-events: none;
}
:is(.HyperMD-task-line, .task-list-item)[data-task="{label}"] input[type=checkbox],
:is(.HyperMD-task-line, .task-list-item)[data-task="{label}"] input[type=checkbox]:checked {
    background: none;
    border: none;
}
:is(.HyperMD-task-line, .task-list-item)[data-task="{label}"] input[type=checkbox]::after,
:is(.HyperMD-task-line, .task-list-item)[data-task="{label}"] input[type=checkbox]:checked::after {
    content: "";
    display: block;
    width: var(--checkbox-size);
    height: var(--checkbox-size);
    position: absolute;
    top: -1px;
    inset-inline-start: -1px;
    mask-size: 100% 100%;
    mask-position: center;
    mask-repeat: no-repeat;
    background-color: var(--checkbox-color);
    mask-image: var(--icon-forwarded);
}
```

The code for one checkbox icon with a doodle effect, is the following, where `#{i}` is between 1 and 6 and `#{label}` is in (`' '`, `''`, `'x'`, `'X'`, `'-'`, `'/'`).
```scss
:is(.HyperMD-task-line, .task-list-item) input[type=checkbox],
:is(.HyperMD-task-line, .task-list-item) input[type=checkbox]:hover {
    background: none;
    border: none;
}
:is(.HyperMD-task-line, .task-list-item) input[type=checkbox]::after {
    content: "";
    display: block;
    width: var(--checkbox-size);
    height: var(--checkbox-size);
    position: absolute;
    top: -1px;
    inset-inline-start: -1px;
    mask-size: 100% 100%;
    mask-position: center;
    mask-repeat: no-repeat;
    background-color: var(--checkbox-color);
}
:is(.HyperMD-task-line, .task-list-item) input[type=checkbox]:hover::after {
    background-color: var(--checkbox-color-hover);
}
:is(.HyperMD-task-line, .task-list-item)[data-task="#{label}"]:nth-child(6n+#{i}) {
    --checkbox-color-hover: var(--checkbox-border-color-hover); /* Can change between {label} */
    --checkbox-color: var(--checkbox-border-color); /* Can change between {label} */
}
:is(.HyperMD-task-line, .task-list-item)[data-task="#{label}"]:nth-child(6n+#{i}) input[type=checkbox]::after {
    mask-image: var(--box-#{i}); /* Can change between {label} */
}
```