import { Router } from 'express';
import {
  getProducts,
  createProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '#controllers';

const productsRouter = Router();

// products
productsRouter.get('/', getProducts);
productsRouter.post('/', createProducts); // supports ` ?categoryId = filter`

// products/id
productsRouter.get('/:id', getProductById);
productsRouter.put('/:id', updateProduct);
productsRouter.delete('/:id', deleteProduct);

export default productsRouter;
