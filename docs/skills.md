# Skills inventory

Skills are instructions the AI follows, so we treat them like code: we **read them before adopting**,
**vendor them into the repo** (copy into `.claude/skills/`, each with a `SOURCE.md` saying where it came from), and **pin the commit** we copied from.
No auto-updating. Updates are a PR like any other change.

Reviewed: 2026-11-04. Current stable versions at review time: Angular 22.2, Angular Material 22.2,
Tailwind CSS 4.3, daisyUI 5.7.

## Adopt

| Skill | Source (pinned) | Why | Notes |
|---|---|---|---|
| `angular-developer` | `angular/angular` @ `57905ca`, `skills/dev-skills/angular-developer` | Official, maintained by the Angular team. Router-style: small SKILL.md that points to ~45 focused references (signals, signal forms, routing, testing, Tailwind, Angular Aria). | Requires `ng build` after every change. We keep that rule. |
| `angular-new-app` | `angular/angular` @ `57905ca`, `skills/dev-skills/angular-new-app` | Official scaffolding steps (`ng new ... --ai-config`, `ng add tailwindcss`). | Used once, in Phase 1. |
| `daisyui` (+ `install`, `usage`, `colors`, `config`, `components/*`) | `saadeghi/daisyui` @ `bf3bac3`, `skills/daisyui` | Official, from the daisyUI author. Has a per-component guide and a "component discovery protocol" (read candidate guides before choosing). That protocol fits our "interview, then build" goal well. | Rule 12 matters for teaching: default variants unless the user asks. |

## Adopt with limits

| Skill | Source (pinned) | Why limited |
|---|---|---|
| `angular-material` | `angular-sanctuary/angular-agent-skills` @ `79c4d81` | Community-generated from the official `angular/components` docs, but generated against **Material v21** (Jan 2026). We're on v22. Trimmed on 2026-11-05 to the allowlisted components only (see its SOURCE.md). |
| `tailwind-css` | `paulrberg/agent-skills` @ `5a1d627` | Good v4 rules, and "don't redesign beyond the request" fits us. But parts assume React tooling (`tailwind-variants`, `cn()`). We copy only `SKILL.md` + `references/tailwind-v4-rules.md`. The Angular skill's `tailwind-css.md` already covers setup. |

## Use as reference, not installed

| Item | Source | How we use it |
|---|---|---|
| Angular `pr_review` skill | `angular/angular/.agent/skills/pr_review` | Model for our AI reviewer: checklist-driven, explains *why*, never posts without approval, prefixes comments with `AGENT:`. Written for the framework repo, so we write our own smaller version. |
| daisyUI `pr-review` skill | `saadeghi/daisyui/.agents/skills/pr-review` | Good rules to borrow: "report only observed facts, no theoretical risks" and "safe to merge only when checks pass". This keeps reviews short enough for a beginner to read. |
| `angular-aria` skill | `angular-sanctuary/angular-agent-skills` | Headless accessible components (tabs, menu, combobox) that we style with daisyUI. Often a better fit than Material, since nothing clashes visually. Already covered by `angular-developer/references/angular-aria.md`. |

## Rejected

| Item | Why |
|---|---|
| Auto-scraped "tailwindcss" skills (several registries) | Generated dumps of docs with no rules. Low signal. |
| Community daisyUI wrappers | Superseded by the official skill. |
| DeadLibrary Angular skill | Requires a proprietary paid compiler. |
| Registry one-click installers (claudskills, etc.) | We vendor from source repos instead, so we can read and pin exactly what we use. |

## Still to look for (later phases)

- Git / GitHub Actions teaching skill (for explaining each step to the user). We'll likely write our own.
- Accessibility (WCAG) checks for the reviewer.
