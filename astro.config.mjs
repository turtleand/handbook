// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Human-AI Collaboration Handbook',
			social: [
				{ 
					icon: 'github', 
					label: 'GitHub', 
					href: 'https://github.com/turtleand/handbook' 
				}
			],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Welcome', slug: 'index' },
					],
				},
				{
					label: 'Mindset',
					collapsed: false,
					items: [
						{
							label: 'AI Innovation Accelerates Daily',
							collapsed: false,
							items: [
								{ label: 'Your Assumptions Expire Fast', slug: 'mindset/ai-innovation-accelerates' },
								{ label: "Today's Models Are the Worst", slug: 'mindset/todays-models-worst' },
							],
						},
						{
							label: 'Be a Navigator, Not a Passenger',
							collapsed: false,
							items: [
								{ label: 'Validate and Steer', slug: 'mindset/navigator-not-passenger' },
								{ label: 'Seek a Plurality of Voices', slug: 'mindset/plurality-of-voices' },
							],
						},
						{ label: 'Always Invite AI to the Table', slug: 'mindset/invite-ai' },
						{ label: 'Human Strength Is the Intent', slug: 'mindset/human-strength-is-intent' },
					],
				},
				{
					label: 'Workflow',
					collapsed: true,
					items: [
						{ label: 'Automated First Pass, Human Final Review', slug: 'workflow/automated-first-pass' },
						{ label: 'Reduce the Human Bottleneck', slug: 'workflow/voice-first' },
						{ label: 'Plan Before You Build', slug: 'workflow/plan-before-execution' },
						{ label: 'Agents Scan, Humans Verify', slug: 'workflow/agents-scan-for-errors' },
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
					],
				},
				{
					label: 'Organizational Knowledge',
					collapsed: true,
					items: [
						{ label: 'Document Everything', slug: 'organizational-knowledge/document-everything' },
						{ label: 'Compound Your Context', slug: 'organizational-knowledge/compound-your-context' },
						{ label: 'Agent-Friendly Content', slug: 'organizational-knowledge/agent-friendly-content' },
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
