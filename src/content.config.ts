import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guitar = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guitar' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
  }),
});

const engineering = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/engineering' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
  }),
});

export const collections = { guitar, engineering };
