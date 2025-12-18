// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	experimental: {
		fonts: [
			{
				provider: fontProviders.fontsource(),
				name: 'Gabarito',
				cssVariable: '--font-gabarito',
				weights: ['400 900'],
			},
			{
				provider: fontProviders.fontsource(),
				name: 'Geist Mono',
				cssVariable: '--font-geist-mono',
				weights: ['100 900'],
			},
		],
	},
	integrations: [mdx(), react()],
	vite: {
		plugins: [tailwindcss()],
	},
})
