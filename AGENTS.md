# AGENTS.md — handbook

See `CLAUDE.md` for philosophy, content, and sidebar rules.

## Scope

Applies only to `handbook/`.

## Ecosystem role

- Handbook is the principles layer and portable operating system for human-AI collaboration within Turtleand.
- Its primary contribution is compression: turning broad ecosystem thinking into concise, reusable operating guidance.
- It should stay short, doctrine-like, and broadly applicable rather than drifting into tutorials or tool-specific implementation detail.

## Project summary

- Stack: Astro Starlight
- Status: Active
- Primary content: principle pages under `src/content/docs/`

## Workflow

1. Read `CLAUDE.md` before editing categories, navigation, or principle structure.
2. Prefer edits in `src/content/docs/`.
3. Keep pages concise and standalone.
4. Avoid editing generated output or unrelated framework files unless the task requires it.

## Content guidance

- Favor durable principles over rapidly dated tool specifics.
- Write for individuals and teams who need operating rules, not long tutorials.
- Keep doctrine portable, memorable, and machine-readable.
- Preserve the category structure around mindset, workflow, economics, quality, organizational knowledge, and human element unless explicitly changing the information architecture.

## Cross-project boundaries

- Route deep implementation tutorials to `ai-lab/`, `openclaw/`, or `build/` as appropriate.
- Route identity, featured work, and ecosystem navigation to `portal/`.
- Route tool-landscape mapping and category discovery to `ai-atlas/`.

## Commands

- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
