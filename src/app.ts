import cors from 'cors';
import express from 'express';
import '#db';
import { errorHandler } from '#middleware';
import { usersRouter, categoriesRouter, ordersRouter, productsRouter } from '#routers';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);
app.use('/orders', ordersRouter);

app.get('*splat', (req, res) => {
  throw new Error('eCommerce-API: Page Not Found', { cause: 404 });
});

app.use(errorHandler);

app.listen(port, () =>
  console.log(`\x1b[34mMain app listening at http://localhost:${port}\x1b[0m`)
);

/* To do:
- add schemas
- create controllers
- create body validation middleware
- add type safety and zod validation middleware
*/
