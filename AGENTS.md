# AGENTS.md - handbook

Repository-level guidance for Codex automatic PR reviews and other AI agents working in `handbook/`.

## Scope

Applies only to `handbook/`.

## Ecosystem role

- Handbook is the compressed doctrine and portable operating-principles layer of Turtleand.
- Its job is to turn broad ecosystem thinking into concise, durable, reusable guidance.
- Keep Handbook short, principle-level, and broadly applicable.
- Avoid tutorial drift, tool-specific sprawl, and reflective essays that belong in Growth.
- Route deep implementation tutorials to `ai-lab/`, `build/`, `openclaw-lab/`, or `hermes-lab/` as appropriate. Route identity and navigation to `portal/`, and tool maps to `ai-atlas/`.

## Project summary

- Stack: Astro Starlight
- Status: Active
- Primary content: principle pages under `src/content/docs/`
- Primary style layer: `src/styles/custom.css`
- Primary navigation config: `astro.config.mjs`

## Workflow

1. Prefer focused edits in `src/content/docs/`, `src/styles/custom.css`, and `astro.config.mjs`.
2. Keep pages concise and standalone.
3. Avoid editing generated output or unrelated framework files unless the task requires it.
4. If navigation changes, verify sidebar structure, routes, and built output together.
5. Run local validation before PR creation.

## UI craft review

Handbook UI should feel like compressed operating doctrine: quiet, beautiful, direct, and low-noise.

- Prefer fewer elements over more decoration.
- Preserve clear hierarchy, generous reading rhythm, and fast orientation.
- Remove low-utility badges, panels, labels, sidebars, repeated links, and decorative chrome when they do not help comprehension.
- Keep one restrained visual signature rather than several competing effects.
- Favor semantic markup and maintainable CSS over brittle one-off styling.
- Check desktop, dark mode, and narrow mobile behavior when changing layout or style.
- Do not turn Handbook into a marketing page, dashboard, course platform, or generic SaaS landing page.

## Public-safety review

Reject changes that expose secrets, credentials, private infrastructure details, internal paths, specific vulnerabilities, or operational weaknesses. Safe public lessons are allowed when they describe general patterns, architecture trade-offs, defensive principles, or non-sensitive implementation choices.

Keep private things private. Share learnings, not exposure.

## Content quality review

- Favor clarity, compression, and durable usefulness over novelty.
- Preserve human agency, responsibility, judgment, taste, ethics, and consequences as central themes.
- Avoid overclaiming, hype, long essays, and temporary tool details that will age quickly.
- Preserve Turtleand voice: calm, precise, direct, reflective when useful, practical when needed.
- Do not introduce em dashes in public writing.
- Review sidebar and navigation changes carefully because Handbook structure is part of the artifact.

## Repository integrity review

- Keep changes focused to the branch purpose.
- Do not silently modify generated or build output unless the repo explicitly tracks it or the change requires regeneration.
- Keep routes, Starlight sidebar structure, sitemaps, indexes, and AI-readable artifacts in sync when the repo uses them.
- Run `npm run build` and `git diff --check` before PR creation.

## PR review checklist

Codex and other agents should check:

- Does the change strengthen Handbook as compressed operating doctrine?
- Is the guidance concise, durable, and principle-level?
- Is the UI leaner, clearer, and less noisy than before?
- Is anything private, unsafe, or operationally sensitive exposed?
- Are navigation, routes, generated files, and indexes still correct?
- Is the diff small, coherent, and free from unrelated cleanup?

## Commands

- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
