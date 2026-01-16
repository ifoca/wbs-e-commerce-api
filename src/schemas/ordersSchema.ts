import { z } from 'zod/v4';
import { Types, isValidObjectId } from 'mongoose';

// Schema for a single product
const productItemSchema = z.object({
  productId: z.string().refine(isValidObjectId, { message: 'Invalid Product ID' }),
  quantity: z.number().min(1, { message: 'Quantity must be at least 1' }),
});

export const ordersInputSchema = z.object({
  userId: z.string().refine(isValidObjectId, { message: 'Invalid User ID' }),
  products: z.array(productItemSchema).min(1, { message: 'At least one product is required' }),
});

export const ordersOutputSchema = z.object({
  _id: z.instanceof(Types.ObjectId),
  userId: z.instanceof(Types.ObjectId),
  products: z.array(
    z.object({
      productId: z.instanceof(Types.ObjectId),
      quantity: z.number(),
    })
  ),
  total: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type OrdersInput = z.infer<typeof ordersInputSchema>;
export type OrdersOutput = z.infer<typeof ordersOutputSchema>;
