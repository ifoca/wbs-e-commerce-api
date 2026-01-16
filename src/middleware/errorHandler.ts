import { type ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  process.env.NODE_ENV === 'development' && console.error(`\x1b[31m${err.stack}\x1b[0m`);

  const statusCode = err.cause || 500;
  const message = err.message || 'An unexpected error occurred';

  res.status(statusCode).json({ message });
};

export default errorHandler;
