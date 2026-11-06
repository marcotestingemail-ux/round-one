# Decisions log

Each decision: what we chose, why, and what would make us revisit it.
New decisions get appended; old ones are never edited, only marked "superseded by #N".

---

## 1. Two separate projects
**Chose:** the *Builder* (the three-panel tool, owned by Marco) and the *Site* (the friend's website, a normal Angular repo) live in separate repos.
**Why:** keeps the Site clean and portable. Anything the friend learns about git and PRs is real, not Builder-specific.
**Revisit if:** never, expected to hold.

## 2. Builder runs locally on Marco's MacBook Air (M1, 8 GB)
**Chose:** a local Node backend + Angular frontend, started with one command. The backend holds API keys, talks to GitHub, runs `ng serve` for the playground preview, and calls the AI models.
**Why:** free, no hosting, keys never leave the machine.
**Constraint:** 8 GB is tight. The Site's `ng serve`, the Builder, a browser, and a local model all share that memory.
**Revisit if:** the machine swaps heavily during normal use, or the friend needs to use it from his own computer.

## 3. Model routing (cheap first, Claude when it matters)
**Chose:** every AI request goes through one router with three tiers, configured in one file:

| Tier | Model | Used for |
|---|---|---|
| Local | Ollama, small model (start with `qwen3.5:4b`, ~2.5 GB) | Checkpoint titles, short summaries, "what does this git command do?", sorting the user's request into a category |
| Cloud-free | Ollama Cloud free tier (light usage, limits reset every 5 h / 7 days) | Fallback when the local model is too slow or the Mac is under memory pressure |
| Claude | Anthropic API | Writing or changing code, planning a component, PR review |

**Why:** on an 8 GB Mac, 7B+ models load but leave little room for context and the rest of the system. A 3–4B model is fine for short text tasks and poor at code. Code is where mistakes cost the most, so it always goes to Claude.
**Rule:** the router logs which tier answered each request, so we can see the real cost split.
**Revisit if:** Claude costs are higher than expected (move more work down a tier), or the local model's answers are bad (move it up).

## 4. Git exposure: Option A (Builder runs git, user sees it)
**Chose:** the user clicks buttons like "Save checkpoint" or "Send for review". The Builder runs the git/GitHub commands and shows each command with a one-line plain-English explanation.
**Revisit later:** move to Option B (user does the steps with guidance) once he's comfortable.

## 5. All changes go through pull requests, with AI review the user decides on
**Chose:**
- `main` is protected. Nothing is pushed to it directly.
- Each feature = a branch → PR → CI checks (lint, test, build) in GitHub Actions → AI review → **user decides** → merge → deploy to GitHub Pages.
- The AI review runs **from the Builder** (not as a GitHub Action), is posted to the PR as a comment prefixed `AI review:`, and is shown in the chat panel.
- For each finding, the user picks one: **Fix it** (AI makes the change on the same branch), **Explain more**, **Ignore** (must give a short reason, recorded on the PR), or **Ask Marco**.
- The user can merge only when CI is green. Unresolved AI findings don't block, but they stay visible on the PR.

**Why review runs from the Builder:** cost control (it runs only when he asks), and the result has to show up in the Builder anyway. CI (lint/test/build) runs in GitHub Actions because it's free for public repos and must be independent of the AI.
**Revisit if:** we want reviews on PRs not opened from the Builder.

## 6. UI library roles
**Chose:** daisyUI is the default for everything. Angular Material is used only from an allowlist (see CLAUDE.md). For accessible interactive widgets (tabs, menus, comboboxes), prefer Angular Aria (headless) styled with daisyUI.
**Why:** daisyUI and Material each bring their own theme system. Mixing them freely makes the site look inconsistent and doubles the CSS.
**Revisit if:** the user needs something daisyUI + Aria can't do well.

## 7. Escape hatches (no endless prompting)
**Chose:**
- **Check status first.** Before blaming the code, the Builder checks GitHub's status page, whether the latest Actions run failed, and whether the network is up. If GitHub is down, it says so plainly and suggests waiting. It doesn't send the problem to the AI.
- **Retry budget.** The same error after 2 AI fix attempts → stop. Show "This one needs Marco" with a **Send to Marco** button that opens a pre-filled GitHub issue (error, last prompts, diff, CI link), labeled `needs-marco`.
- **Known failures.** A short list of failures (build failed, deploy failed, merge conflict, GitHub down, out of Claude credit, Ollama not running), each with a plain-language explanation and one safe action.

## 8. Skills are vendored and pinned
See `docs/skills.md`.

## 9. Versions
Start on latest stable at Phase 1: Angular 22.x, Angular Material 22.x, Tailwind 4.x, daisyUI 5.x. Version bumps are their own PRs, never mixed with features.

## 10. Remote access through Tailscale (refines #2)
**Chose:** the friend reaches the Builder on Marco's Mac over Tailscale, using machine sharing (not inviting him into Marco's tailnet). The Builder backend listens on `127.0.0.1` only, and `tailscale serve` is the only way in from outside. Never Tailscale Funnel (public).
**Who is who:** Serve adds identity headers to each request, so the Builder can tell Marco from the friend without its own login system. Marco-only actions (settings, model config) check that header.
**Known failure:** Mac asleep, offline, or Builder not running means the friend can't connect. The friend gets a plain explanation and a "text Marco" step, not an AI loop.
**GitHub access:** the Builder acts on GitHub as the friend, using a fine-grained token he creates, scoped to the one repo, with an expiry date. It's stored only on Marco's Mac. (Set up in Phase 1.)
**Revisit if:** the Mac being asleep blocks him too often. Then we look at a small always-on machine.

## 11. GitHub setup
The friend has his own GitHub account and owns the public repo. Marco is a collaborator. Repo: `marcotestingemail-ux/round-one` (renamed from `roundOne`). Site URL: `https://marcotestingemail-ux.github.io/round-one/`. `main` is protected by a ruleset: PR required (0 approvals), no deletion, no force push. CI status check gets added to the ruleset after its first run. Guide: "Getting set up on GitHub" doc.

## 12. Lessons from Phase 1 (2026-11-05)
- **GitHub's own servers fail sometimes.** We saw `fatal error in commit_refs_rules` on push and a GraphQL error on `gh pr create`. Each succeeded on one retry, and the PR had in fact been created despite the error. Builder rule: on these errors, check the result first (did the PR or branch get created?), retry once, then show "GitHub is having trouble, not you" and stop. These become the first two entries in the known-failures list.
- **Workflow files are human-only.** Claude's remote tools can't write into `.github/workflows/`. That matches rule 5 in CLAUDE.md: CI changes are Marco's, done by hand.
- **The required check is named `checks`** (job in `ci.yml`). Renaming that job breaks the ruleset, so rename both together.
- **Merged branches auto-delete** on GitHub (owner setting). Local clones use `fetch.prune true`.
- **Pipeline proven end to end:** branch → PR → required check (46 s) → merge → Pages deploy (about 3.5 min) → live at `/round-one/`.

## 13. Feature tracking and rich commit messages (2026-11-05)
**Chose:** every feature is listed in `docs/features.json` (id, name, files), its root element carries `data-feature="<id>"`, and every commit has a title, a `What`/`Why`/`Decisions` paragraph and searchable labels (`Feature`, `Change`, `Files`, `Made-with`). The Builder fills the labels from the actual changed files and `features.json`, so they're facts, not AI guesses. The free local model drafts the title and `What`; the user edits them. `Why` and `Decisions` come from the user (later also from the component interview).
**Why:** when the site has many features, the user will want to find "when did the testimonials change?" or bring an old feature back. That needs a reliable link between features, files and commits. Adding it now is cheap; reconstructing it later for a big site isn't.
**Not git notes:** GitHub doesn't show them and they're easy to lose. Plain commit messages are permanent and visible everywhere.
**Revisit if:** features.json drifts from the real files often. Then the Builder checks it in CI.

## 14. How Claude builds (2026-11-06)
**Chose:** the free local model interviews the user (plain-language options with hints, plus "Not sure, show me"). When the plan is ready, the user presses **Build it** (with a cost estimate). Claude gets the project rules, `docs/features.json`, the file map and the code, and answers with whole files. The Builder:
- only lets it write under `src/` and `docs/features.json` (at most 25 files, 80 KB each), never workflows, packages or config;
- puts the files in, then runs the site's own `ng build` and `ng lint` (the same checks as CI);
- on a failure gives Claude **at most 2 fix tries**; after that it puts every file back and says it needs Marco (decision #7);
- shows the result in the playground with **Keep** or **Undo** (and an A/B switch when two versions were asked for). Nothing is committed until the user keeps it and saves a checkpoint, with Claude's description filled in.
**Why:** the user sees and tries the real thing before anything is saved, the site is never left half-built, and a failure can't turn into an endless (paid) loop.
**Cost:** Claude Sonnet 5.5; a build is usually a few cents. Two limits: the spend limit in the Anthropic Console, and the Builder's own monthly budget.
**Revisit if:** builds often need the 2 fixes (better context or rules), or the site grows past what fits in Claude's context (send only the relevant features).
