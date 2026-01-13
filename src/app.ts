import express from 'express';
import '#db';
import cors from 'cors';
import { errorHandler } from '#middleware';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

console.log('Hello from the main app');

app.get('*splat', (req, res) => {
  throw new Error('eCommerce-API: Page Not Found', { cause: 404 });
});

app.use(errorHandler);

app.listen(port, () =>
  console.log(`\x1b[34mMain app listening at http://localhost:${port}\x1b[0m`)
);

/* To do:
- add error handler middleware
- create routes
- create controllers
- create modules
- create body validation middleware
- generate token and save it in cookies
- create token validation middleware
- add schemas
- add type safety and zod validation middleware
*/
