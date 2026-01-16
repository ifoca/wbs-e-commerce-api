import { Router } from 'express';
import {
  getProducts,
  createProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '#controllers';
import { validateSchema } from '#middleware';
import { productsInputSchema } from '#schemas';

const productsRouter = Router();

// products
productsRouter.get('/', getProducts);
productsRouter.post('/', validateSchema(productsInputSchema), createProducts); // supports ` ?categoryId = filter`

// products/id
productsRouter.get('/:id', getProductById);
productsRouter.put('/:id', validateSchema(productsInputSchema), updateProduct);
productsRouter.delete('/:id', deleteProduct);

export default productsRouter;
