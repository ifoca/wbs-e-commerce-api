import { z } from 'zod/v4';
import { Types, isValidObjectId } from 'mongoose';

export const productsInputSchema = z.object({
  name: z.string({ error: 'Product name must be a string' }).min(1, {
    message: 'Product name is required',
  }),
  description: z.string({ error: 'Product description must be a string' }).min(1, {
    message: 'Product description is required',
  }),
  price: z
    .number({ error: 'Product price must be a number' })
    .min(0.01, { message: 'Product price is required' }),
  categoryId: z.string().refine(isValidObjectId, { message: 'Invalid category ID' }),
});

export const productsOutputSchema = z.object({
  _id: z.instanceof(Types.ObjectId),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  categoryId: z.instanceof(Types.ObjectId),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ProductsInput = z.infer<typeof productsInputSchema>;
export type ProductsOutput = z.infer<typeof productsOutputSchema>;
