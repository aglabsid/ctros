import { defineCollection, z } from 'astro:content'
import { file } from 'astro/loaders'

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

export const collections = {
	software,
}
