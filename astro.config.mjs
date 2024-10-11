import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Cubtera',
        editLink: {
            baseUrl: 'https://github.com/cubtera/cubtera.github.io/edit/main/',
        },
        social: {
            github: 'https://github.com/cubtera/cubtera',
            slack: 'https://cubtera.slack.com',
        },
        // logo: {
        // 	src: './src/assets/logo.jpeg',
        // },
        sidebar: [
            {
                label: 'Introduction',
                items: [
                    { label: 'About Cubtera', link: '/about' },
                ],
            },
            {
                label: 'Getting started',
                autogenerate: { directory: 'start' },
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
		}), markdoc()],
});