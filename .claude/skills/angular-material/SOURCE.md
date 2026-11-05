# Source

- Repo: https://github.com/angular-sanctuary/angular-agent-skills
- Path: `skills/angular-material`
- Pinned commit: `79c4d8127969c1eb20a68984df9381310210e296`
- Copied: 2026-11-04
- License: MIT (see LICENSE in this folder)

Community skill generated from official Angular Material docs, written against Material v21 (we're on v22). Use only for the allowlisted components in CLAUDE.md.

Do not edit these files directly. To update, copy a newer commit in its own PR and update docs/skills.md.

## Local changes

- **2026-11-05, trimmed to the allowlist.** Kept only the reference pages for components CLAUDE.md allows (datepicker, table, sort, paginator, autocomplete and the form-field/input they need), the allowlisted CDK pages (overlay, portal, a11y, collections, scrolling, drag-drop), and the theming, schematics and harness pages. SKILL.md's tables and "When to Apply" were edited to match. Why: pages for non-allowed components (buttons, dialogs, menus...) made it more likely the AI would reach for Material instead of daisyUI. When the allowlist grows, copy the needed pages back from the pinned commit in their own PR.
