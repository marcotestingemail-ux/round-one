---
name: angular-material
description: Angular Material UI component library based on Material Design 3
metadata:
  author: Gerome Grignon
  version: "2026.1.31"
  source: Generated from https://github.com/angular/components, scripts located at https://github.com/angular-sanctuary/angular-agent-skills
---

> **Trimmed for this project (2026-11-05):** only the components on the CLAUDE.md allowlist are kept. See SOURCE.md.

> The skill is based on Angular Material v21.x (v21.2.0-next.2), generated at 2026-01-31.

Angular Material is the official UI component library for Angular, implementing Material Design 3 (M3). It provides a comprehensive set of pre-built, accessible components along with the Component Dev Kit (CDK) for building custom components.

## When to Apply

Use this skill when:

- Building one of the components on this project's allowlist: **datepicker**, **table** (with sort and paginator), **autocomplete** (these use **mat-form-field** and **matInput**)
- Using **CDK** primitives on the allowlist: overlay, portal, drag-drop, virtual scrolling, a11y, SelectionModel
- **Theming** Material so it matches the daisyUI theme
- Writing tests with **component harnesses**

Do NOT use this skill when:

- The component isn't on the allowlist in CLAUDE.md (buttons, cards, dialogs, menus, tabs and so on): use daisyUI, or Angular Aria styled with daisyUI
- Using a different UI library (PrimeNG, ngx-bootstrap, etc.)
- Building completely custom UI without Material Design
- Working with Angular Aria headless primitives (use the angular-aria skill instead)

## Core References

| Topic | Description | Reference |
|-------|-------------|-----------|
| Theming | M3 theming system with color palettes, typography, density, and CSS variables | [core-theming](references/core-theming.md) |
| Schematics | Angular CLI schematics for scaffolding components and generating themes | [core-schematics](references/core-schematics.md) |
| Component Harnesses | Test harnesses for reliable, maintainable component testing | [core-harnesses](references/core-harnesses.md) |

## Components

### Form Controls

| Topic | Description | Reference |
|-------|-------------|-----------|
| Form Field | Form field wrapper with labels, hints, errors | [component-form-field](references/components/component-form-field.md) |
| Input | Native input and textarea with mat-form-field | [component-input](references/components/component-input.md) |
| Autocomplete | Text input with dropdown suggestions | [component-autocomplete](references/components/component-autocomplete.md) |
| Datepicker | Date and date range pickers | [component-datepicker](references/components/component-datepicker.md) |

### Tables

| Topic | Description | Reference |
|-------|-------------|-----------|
| Table | Material Design data table with features | [component-table](references/components/component-table.md) |
| Sort | Sortable column headers | [component-sort](references/components/component-sort.md) |
| Paginator | Pagination controls for paged data | [component-paginator](references/components/component-paginator.md) |

## CDK (Component Development Kit)

### Overlays & Positioning

| Topic | Description | Reference |
|-------|-------------|-----------|
| Overlay | Floating panels with positioning strategies | [cdk-overlay](references/cdk/cdk-overlay.md) |
| Portal | Dynamic content rendering | [cdk-portal](references/cdk/cdk-portal.md) |

### Accessibility

| Topic | Description | Reference |
|-------|-------------|-----------|
| Accessibility | Focus management, keyboard navigation, live announcer | [cdk-a11y](references/cdk/cdk-a11y.md) |

### Data & Collections

| Topic | Description | Reference |
|-------|-------------|-----------|
| Collections | SelectionModel for managing selection state | [cdk-collections](references/cdk/cdk-collections.md) |
| Virtual Scrolling | Performant rendering of large lists | [cdk-scrolling](references/cdk/cdk-scrolling.md) |

### Interaction

| Topic | Description | Reference |
|-------|-------------|-----------|
| Drag and Drop | Reordering lists and transferring items | [cdk-drag-drop](references/cdk/cdk-drag-drop.md) |

## Advanced

| Topic | Description | Reference |
|-------|-------------|-----------|
| Theme Customization | CSS variables and utility classes in custom components | [advanced-theme-customization](references/advanced-theme-customization.md) |
