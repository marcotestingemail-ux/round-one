# Project rules for AI assistants

This is a website built by a **beginner** with AI help. The user is learning. Your job is to build
the right thing *with* them, not *for* them. When in doubt, ask, show, and explain. Don't assume.

Stack: Angular 22 (standalone, signals, zoneless, Vitest), Tailwind CSS 4, daisyUI 5, limited Angular Material.
Skills: `.claude/skills/` (see `docs/skills.md`). Decisions: `docs/decisions.md`.

## 1. Before building anything: interview
For any new UI piece (navbar, hero, footer, form, page):
1. Ask **3–5 short questions**, each with clickable options plus "something else". Example for a navbar:
   logo or text? which links? what happens on mobile? sticky or not? which color?
2. Follow the daisyUI component discovery protocol: read the candidate component guides, then pick.
3. Offer **2 variants** when the choice is visual. The user picks one and can edit it.
4. Build only what was agreed. Don't add extra sections, animations, or features nobody asked for.

## 2. Structure
- One component = one job. A navbar is its own component. Its links come from an input or a small data file, not hard-coded across pages.
- Generate with the Angular CLI (`ng generate component ...`), never by hand-creating files.
- Folders:
  - `src/app/layout/`: pieces used on every page (navbar, footer)
  - `src/app/pages/<page>/`: one folder per route
  - `src/app/shared/`: small reusable pieces (button groups, cards) used in 2+ places
  - `src/app/data/`: site content (text, links, images list) as typed constants
- Content (text, links) goes in `data/`, not inside templates, so the user can edit it easily.
- Limits: a component template over ~120 lines or a class over ~150 lines gets split. Say so and propose the split.
- No new npm dependency without asking Marco (flag it with `needs-marco`).

## 3. Styling
- daisyUI classes first, Tailwind utilities second, custom CSS last (and explain why it was needed).
- Use the default daisyUI variant unless the user asked for a color or style.
- Use theme colors (`primary`, `base-100`, etc.), not raw hex values, so themes keep working.
- Responsive prefixes on every `flex`/`grid` layout.
- Tailwind v4 only. Never create `tailwind.config.js` or use `@tailwind` directives.

### Angular Material allowlist
Use Material **only** for: Datepicker, Table (+ sort, paginator), Autocomplete, and the CDK
(drag-drop, virtual scroll, overlay). Anything else: daisyUI, or Angular Aria styled with daisyUI.
Material isn't installed yet. When the first allowlisted component is needed, Marco adds it in its own PR
together with a theme bridge (`src/material-bridge.css`) so Material matches the daisyUI theme.

## 4. Every change
1. Run `ng build`. Fix errors before saying you're done.
2. Run `ng test` if logic changed.
3. Explain to the user, in plain words, in this format:
   - **What I did**: one or two sentences
   - **Where**: the files, and what each one is for
   - **Why**: the reason for any choice they didn't make themselves
   - **Try it**: what to click in the playground to check it works
4. The commit message follows the format in section 7, so the history explains itself.

## 5. When things go wrong
- If the same error survives **2 fix attempts**, stop. Don't try a third time. Tell the user it needs Marco and prepare the "Send to Marco" report.
- If the problem is outside the code (GitHub down, network, Ollama not running, out of credit), say so plainly. Don't change code to "fix" it.
- Never force-push, rewrite history, change CI workflows, change branch protection, or touch secrets. Those are Marco's.
- Never delete a user-made component or page without explicit confirmation.

## 6. Reviewing a PR
- Prefix with `AI review:`.
- Report only real problems you can point to (a line, a failing check, a broken behavior). No theoretical risks.
- At most 5 findings, most important first. For each: what's wrong, why it matters (one sentence a beginner understands), suggested fix.
- Check: rules above followed, build/tests pass, accessibility basics (alt text, labels, contrast, keyboard use), mobile layout, no hard-coded content that belongs in `data/`.
- Never approve or merge. The user decides.

## 7. Tracking features (so they can be found and brought back later)
Every feature has an id (lowercase-with-dashes, e.g. `testimonials`), and three things point to it:
1. **`docs/features.json`** lists each feature with its name and files (`*` = inside one folder, `**` = any depth).
   Add the entry in the same commit that creates the feature. Update it when files move. Remove it when the feature is deleted.
2. **`data-feature="<id>"`** goes on the outermost element of the feature's component template, so it can be picked by clicking it in the playground.
3. **Commit messages** use this format. The Builder writes it; follow it by hand too:
   ```
   Add a testimonials section to the home page      <- title: one line, starts with a verb, under 72 characters

   What: Three customer quotes in cards under the hero.
   Why: Visitors should see that real people like the coffee.
   Decisions: Cards instead of a slider (easier to read on phones).

   Feature: testimonials                              <- one line per feature touched
   Change: add                                        <- add, edit, remove or restore
   Files: src/app/pages/home/testimonials/..., src/app/data/testimonials.ts
   Made-with: Builder
   ```
   `What` is required; `Why` and `Decisions` only when there is a real reason or choice to record. Never invent a reason.
   The last block (labels, called *trailers*) must stay together with no blank lines, so `git log` can search it:
   `git log --grep="Feature: testimonials"` lists the whole history of one feature.
- One feature per checkpoint where possible. A checkpoint that mixes unrelated features is harder to bring back.
- Don't put a feature's files in another feature's folder. If two features share a piece, it goes in `src/app/shared/` with its own entry.
