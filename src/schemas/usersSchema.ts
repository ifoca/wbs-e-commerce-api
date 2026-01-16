import { z } from 'zod/v4';
import { Types } from 'mongoose';

export const userInputSchema = z.object({
  name: z
    .string({ error: 'Name is required' })
    .min(2, { message: 'Name needs to have at least 2 characters' }),
  email: z.email({ error: 'Email is required' }),
  password: z
    .string({ error: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 characters long' }),
});

export const userOutputSchema = z.object({
  _id: z.instanceof(Types.ObjectId),
  name: z.string(),
  email: z.string().email(),
  createdAt: z.date(),
  updatedAt: z.date(),
  // password is NOT included in output for security!
});

export type UserInput = z.infer<typeof userInputSchema>;
export type UserOutput = z.infer<typeof userOutputSchema>;
