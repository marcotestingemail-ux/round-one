# round-one

My website, built step by step with the Builder.

**Live site:** https://marcotestingemail-ux.github.io/round-one/

## How changes get here

1. A change is made on its own **branch** (a separate copy, so `main` stays safe).
2. The branch becomes a **pull request** (PR): a request to add the change to `main`.
3. **CI** runs automatically on the PR. It checks style and accessibility (lint), runs the tests, and builds the site.
4. The **AI review** comments on the PR. You decide what to do with each point.
5. When CI is green, you **merge**. The site redeploys on its own a minute or two later.

`main` is protected: nothing lands there without a PR.

## What's in here

| Path | What it is |
| --- | --- |
| `src/app/pages/` | One folder per page of the site |
| `src/app/layout/` | Pieces on every page (navbar, footer) |
| `src/app/shared/` | Small pieces reused in several places |
| `src/app/data/` | The site's text and links. Edit words here. |
| `CLAUDE.md` | Rules the AI follows when it writes code here |
| `docs/` | Decisions we've made, and which AI skills we use |
| `.claude/skills/` | Pinned copies of those skills |
| `.github/workflows/` | The automatic checks (CI) and deploy |

## Running it on a computer (for Marco)

Needs Node 22.22+ or 24.

```
npm ci
npm start          # http://localhost:4200
npm run lint
npm run test:ci
npm run build:pages
```

Stack: Angular 22, Tailwind CSS 4, daisyUI 5.
