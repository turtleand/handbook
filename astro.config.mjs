// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://handbook.turtleand.com',
	integrations: [
		starlight({
			title: 'Turtleand Handbook',
			head: [
				{ tag: 'link', attrs: { rel: 'alternate', type: 'application/rss+xml', title: 'Turtleand Handbook RSS', href: '/rss.xml' } },
				{ tag: 'meta', attrs: { property: 'og:site_name', content: 'Turtleand Handbook' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://handbook.turtleand.com/social-card.png' } },
				{ tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
				{ tag: 'meta', attrs: { name: 'twitter:image', content: 'https://handbook.turtleand.com/social-card.png' } },
			],
			sidebar: [
				{
					label: 'Start',
					items: [
						{ label: 'Welcome', slug: 'index' },
					],
				},
				{
					label: 'Mindset',
					collapsed: true,
					items: [
						{ label: 'Assumptions Expire Fast', slug: 'mindset/ai-innovation-accelerates' },
						{ label: "Today's Models Are the Worst", slug: 'mindset/todays-models-worst' },
						{ label: 'Validate and Steer', slug: 'mindset/navigator-not-passenger' },
						{ label: 'Plurality of Voices', slug: 'mindset/plurality-of-voices' },
						{ label: 'Invite AI', slug: 'mindset/invite-ai' },
						{ label: 'Human Intent', slug: 'mindset/human-strength-is-intent' },
					],
				},
				{
					label: 'Workflow',
					collapsed: true,
					items: [
						{ label: 'Automated First Pass', slug: 'workflow/automated-first-pass' },
						{ label: 'Capture, Clarify, Review', slug: 'workflow/capture-clarify-ready-review' },
						{ label: 'Frontier Signal Loop', slug: 'workflow/frontier-signal-loop' },
						{ label: 'Public Artifact Synthesis', slug: 'workflow/public-artifact-synthesis' },
						{ label: 'Positioning as Proof', slug: 'workflow/positioning-as-proof-of-direction' },
						{ label: 'Reduce the Human Bottleneck', slug: 'workflow/voice-first' },
						{ label: 'Plan Before You Build', slug: 'workflow/plan-before-execution' },
						{ label: 'Agents Scan, Humans Verify', slug: 'workflow/agents-scan-for-errors' },
						{ label: 'Provider Independence', slug: 'workflow/provider-independence' },
					],
				},
				{
					label: 'Economics',
					collapsed: true,
					items: [
						{ label: 'Give People the Best Models', slug: 'economics/give-people-the-best-models' },
					],
				},
				{
					label: 'Quality',
					collapsed: true,
					items: [
						{ label: 'Quality Is Iterations', slug: 'quality/iterations-are-the-ceiling' },
						{ label: 'Understanding Preserves Optionality', slug: 'quality/preserve-understanding' },
					],
				},
				{
					label: 'Organizational Knowledge',
					collapsed: true,
					items: [
						{ label: 'Document Everything', slug: 'organizational-knowledge/document-everything' },
						{ label: 'Compound Your Context', slug: 'organizational-knowledge/compound-your-context' },
						{ label: 'Agent-Friendly Content', slug: 'organizational-knowledge/agent-friendly-content' },
						{ label: 'If AI Becomes the Framework', slug: 'organizational-knowledge/ai-as-framework' },
						{ label: 'Living Institutional Memory', slug: 'organizational-knowledge/living-institutional-memory' },
					],
				},
				{
					label: 'Human Element',
					collapsed: true,
					items: [
						{ label: 'Humans Set the Direction', slug: 'human-element/humans-set-the-direction' },
					],
				},
			],
			tableOfContents: false,
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
