import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
    // i18n: {
    //     defaultLocale: "en",
    //     locales: ["ru", "en", "ua"],
    // },
    integrations: [ starlight({
        // site: 'https://cubtera.com',
        title: 'Cubtera',
		tagline: 'The best way to build your next cloud project',
        lastUpdated: true,
		customCss: [
			// Relative path to your custom CSS file
            './src/styles/landing.css',
			'./src/styles/custom.css',

		],
        // editLink: {
        //     baseUrl: 'https://github.com/cubtera/cubtera.github.io/edit/main/',
        // },
        social: {
            github: 'https://github.com/cubtera/cubtera',
            slack: 'https://cubtera.slack.com',
        },
        components: {
            // Override the default `SocialIcons` component.

            // Footer with copyright
            Footer : './src/components/Footer.astro',

            // Table of contents with sponsors block
            // TableOfContents: './src/components/TableOfContents.astro',
        },

        // Translation settings
        // defaultLocale: 'root',
		locales: {
			root: {
				label: 'EN 🇺🇸',
                lang: 'en',
			},
            ru: {
                label: 'RU 🏳️',
                lang: 'ru',
            },
            ua: {
                label: 'UA 🇺🇦',
                lang: 'ua',
            },
		},

        // logo: {
        // 	src: './src/assets/logo.jpeg', // Relative path to your logo
        //  light: './src/assets/title_logo_light.svg', // Relative path to your light logo
        //  dark: './src/assets/title_logo_dark.svg', // Relative path to your dark logo
        //  replacesTitle: true,
        //  alt: "Cubtera Logo"
        // },
        sidebar: [
            {
                label: '👋 Introduction',
                translations: {
                    ru: '👋 Введение',
                    ua: '👋 Вступ',
                },
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
                label: '💻 Cubtera CLI',
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

