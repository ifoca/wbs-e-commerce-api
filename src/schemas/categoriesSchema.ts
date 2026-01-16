import { z } from 'zod/v4';
import { Types } from 'mongoose';

export const categoriesInputSchema = z.object({
  name: z.string({ error: 'Category name must be a string' }).min(1, {
    message: 'Category name is required',
  }),
});

export const categoriesOutputSchema = z.object({
  _id: z.instanceof(Types.ObjectId),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type CategoriesInput = z.infer<typeof categoriesInputSchema>;
export type CategoriesOutput = z.infer<typeof categoriesOutputSchema>;
