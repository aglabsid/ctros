import { defineCollection, z } from 'astro:content'
import { file, glob } from 'astro/loaders'

const software = defineCollection({
	loader: file('src/data/software.json'),
	schema: z.object({
		name: z.string(),
		items: z.array(
			z.object({
				name: z.string(),
				link: z.string(),
			}),
		),
	}),
})

const hardware = defineCollection({
	loader: file('src/data/hardware.json'),
	schema: z.object({
		name: z.string(),
		items: z.array(
			z.object({
				name: z.string(),
				subitems: z.array(z.string()).optional(),
			}),
		),
	}),
})

const about = defineCollection({
	loader: file('src/data/about.json'),
	schema: ({ image }) =>
		z.object({
			avatar: image(),
			name: z.string(),
			username: z.string(),
			summary: z.string(),
			description: z.array(z.string()),
			skills: z.array(
				z.object({
					name: z.string(),
					items: z.array(z.string()),
				}),
			),
			social: z.object({
				description: z.string(),
				links: z.array(
					z.object({
						name: z.string(),
						url: z.string(),
					}),
				),
			}),
		}),
})

const project = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/project' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			thumbnail: image(),
			description: z.string(),
			github: z.string().optional(),
			demo: z.string().optional(),
			position: z.number().optional(),
		}),
})

const post = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/post' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			thumbnail: image(),
			thumbnailCredit: z.string(),
			summary: z.string(),
			tags: z.array(z.string()),
			author: z.string(),
			createdAt: z.string(),
			updatedAt: z.string(),
		}),
})

export const collections = {
	software,
	hardware,
	about,
	project,
	post,
}
