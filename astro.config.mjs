// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import { transformerMetaHighlight } from '@shikijs/transformers'
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
				name: 'Google Sans Code',
				cssVariable: '--font-google-sans-code',
				weights: ['400 900'],
				display: 'swap',
				fallbacks: ['monospace'],
			},
		],
	},
	markdown: {
		shikiConfig: {
			theme: 'github-dark-dimmed',
			transformers: [transformerMetaHighlight()],
		},
	},
	integrations: [mdx(), react()],
	vite: {
		plugins: [tailwindcss()],
	},
})
