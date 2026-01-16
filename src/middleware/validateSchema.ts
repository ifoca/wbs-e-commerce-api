import type { Response, Request, NextFunction } from 'express';
import { z } from 'zod';

const validateSchema = (schema: z.ZodType) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // safeParse returns { success: boolean, data?: T, error?: ZodError }
    const result = schema.safeParse(req.body);

    if (!result.success) {
      // Validation failed - send error response
      return res.status(400).json({
        message: 'Validation error',
        errors: result.error.issues,
        /* 
        The issues array contains objects with properties like:
        - path - which field has the error
        - message - the error message
        - code - the error type 
        */
      });
    }

    // Validation succeeded - continue to next middleware
    next();
  };
};

export default validateSchema;
