// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'The AI Handbook',
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
					label: 'Foundations',
					items: [
						{ label: "Ethan Mollick's Four Principles", slug: 'foundations/ethan-mollick-principles' },
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
