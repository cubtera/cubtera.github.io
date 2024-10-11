import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from '@astrojs/markdoc';


// https://astro.build/config
export default defineConfig({
    integrations: [ starlight({
        title: 'Cubtera',
		tagline: 'The best way to build your next project',
		customCss: [
			// Relative path to your custom CSS file
			'./src/styles/custom.css',
		],
        // editLink: {
        //     baseUrl: 'https://github.com/cubtera/cubtera.github.io/edit/main/',
        // },
        social: {
            github: 'https://github.com/cubtera/cubtera',
            slack: 'https://cubtera.slack.com',
        },
        // logo: {
        // 	src: './src/assets/logo.jpeg',
        // },
        sidebar: [
            {
                label: '👋 Introduction',
                items: [
                    { label: 'About Cubtera', slug: 'about' },
                    { label: 'How it works', slug: 'how' },
					{ label: 'Why Cubtera', slug: 'why' },
					// { label: 'Roadmap', slug: 'roadmap' },
                ],
            },
            {
                label: '🚀 Getting started',
                autogenerate: { directory: 'start' },
            },
			{
                label: '💻 Cubteral CLI',
				collapsed: false,
				items: [
					'cubtera/config',
					{ 
						label: 'Dimensions',
						autogenerate: { directory: '/cubtera/dimensions', collapsed: true } 
					},
					{ 
						label: 'Runners', 
						autogenerate: { directory: '/cubtera/runners', collapsed: true } 
					},
					{ 
						label: 'Inventory',
						autogenerate: { directory: '/cubtera/inventory', collapsed: true } 
					},
				],
			},
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', link: '/guides/example/' },
                    { label: 'Another Guide', link: '/guides/test/' },
                ],
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
        ],
	}), 
	markdoc()],
});

