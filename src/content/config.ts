import { defineCollection, z } from "astro:content";

const jobsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        company: z.string(),
        tags: z.array(z.string()),
        salary: z.string(),
        basedIn: z.string().optional(),
        isRemote: z.boolean()
    })
});

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        category: z.array(z.string())
    })
})

export const collections = {
    jobs: jobsCollection,
}