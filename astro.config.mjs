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
					autogenerate: { directory: 'mindset' },
				},
				{
					label: 'Workflow',
					autogenerate: { directory: 'workflow' },
				},
				{
					label: 'Economics',
					autogenerate: { directory: 'economics' },
				},
				{
					label: 'Quality',
					autogenerate: { directory: 'quality' },
				},
				{
					label: 'Organizational Knowledge',
					autogenerate: { directory: 'organizational-knowledge' },
				},
				{
					label: 'Human Element',
					autogenerate: { directory: 'human-element' },
				},
			],
		}),
	],
});
