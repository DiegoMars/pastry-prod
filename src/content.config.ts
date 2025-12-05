import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/collections/products"}),
  schema: z.object({
    title: z.string(),
    price: z.number(),               // e.g. 12.5 => $12.50
    stock: z.number().optional(),    // how many left
    inStock: z.boolean().optional(), // optional override
    description: z.string().optional(),
    image: z.string().or(z.instanceof(URL)).optional(), // depending on how you store it
    imageAlt: z.string().optional(),
  }),
});

export const collections = { products };
