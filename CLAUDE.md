# CLAUDE.md — Human-AI Collaboration Handbook

## Purpose

This is a practical principles handbook for the AI era. It targets organizations, teams, and individuals who are integrating AI into their work and need clear, opinionated guidance.

## Content Philosophy

**Level:** High-level to mid-level. Not implementation details, not code tutorials. These are the concepts and principles that every organization and group of people should internalize as AI becomes infrastructure.

Think of it like a safety handbook for a factory, but for cognitive work in the AI age. You don't need to understand the chemistry of every compound. You need to know the rules that keep things running well.

**Density:** Each principle should be the minimum-core idea. No filler, no padding, no "here are 5 examples" sections. State the principle, explain why it matters, link to deeper resources if they exist. If a principle page is longer than ~200 words, it's probably too long. Strip it to the skeleton.

**Scope:**
- How to think about AI adoption (Mindset)
- How to structure human-AI workflows (Workflow)
- How to manage costs and resources (Economics)
- How to maintain quality standards (Quality)
- How to build lasting organizational knowledge (Organizational Knowledge)
- Where humans must stay in the loop (Human Element)

**Voice:**
- Practical over theoretical
- Opinionated over neutral
- Short over exhaustive (300-600 words per principle)
- Builder perspective, from real experience
- Write like a human: contractions, varied rhythm, no corporate speak
- No em dashes, no "delve", no "leverage", no "landscape"

## Architecture

- Each principle is a standalone page you can link to directly
- Categories group related principles but each page works independently
- Cross-links to [lab.turtleand.com](https://lab.turtleand.com) for deep dives on specific topics
- This is the quick reference. AI Lab is the full course.

## What Belongs Here

- Principles that apply broadly across industries and team sizes
- Lessons learned from real AI integration (not hypothetical scenarios)
- Guidance that stays useful even as specific models and tools change
- Frameworks for decision-making, not step-by-step instructions

## What Doesn't Belong Here

- Tool-specific tutorials (those go in AI Lab or OpenClaw Lab)
- Code samples or implementation details
- Speculative predictions about AI capabilities
- Content that will be outdated in 3 months

## Tech Stack

- Astro Starlight (documentation framework)
- MDX content files in `src/content/docs/`
- Deployed on Netlify at handbook.turtleand.com
- Part of the Turtleand ecosystem (turtleand.com, lab, atlas, blog, build)

## Adding New Principles

1. Pick the right category (or propose a new one)
2. Create an MDX file with title and description frontmatter
3. Write 300-600 words: what the principle is, why it matters, how to apply it
4. Include real examples where possible
5. Cross-link to deeper resources if they exist
