import { defineCollection, z } from "astro:content"

const recipesCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtext: z.string().optional(),
      date: z.string(),
      tags: z.union([z.array(z.string()), z.null()]).optional(),
      image: image(),
      sortOrder: z.number().optional(),
      accent: z.string(),
      accent_alt: z.union([z.string(), z.null()]),
      specs: z.object({
        prep_time: z.string().optional(),
        time: z.string(),
        serves: z.string(),
      }),
      intro: z.string(),
      ingredients: z.array(
        z.object({
          quantity: z.union([z.string(), z.number(), z.null()]),
          ingredient: z.string(),
        }),
      ),
      steps: z.array(z.string()),
      ogp: z.object({
        og: z.object({
          description: z.string(),
          image: z.object({
            secure_url: z.string(),
            type: z.string(),
            width: z.number(),
            height: z.number(),
          }),
        }),
        twitter: z.object({
          label1: z.string(),
          data1: z.string(),
          label2: z.string(),
          data2: z.string(),
          card: z.string(),
          image: z.string(),
        }),
      }),
    }),
})

export const collections = {
  recipes: recipesCollection,
}
