import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const experience = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/content/experience',
    }),
    schema: z.object({
        company: z.string(),
        role: z.string(),
        location: z.string(),
        period: z.string().optional(),
        order: z.number().int(),
    }),
});

export const collections = {
    experience,
};