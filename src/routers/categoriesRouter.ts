import { Router } from 'express';
import {
  getCategories,
  createCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from '#controllers';
import { categoriesInputSchema } from '#schemas';
import { validateSchema } from '#middleware';

const categoriesRouter = Router();

// categories
categoriesRouter.get('/', getCategories);
categoriesRouter.post('/', validateSchema(categoriesInputSchema), createCategories);

// categories/id
categoriesRouter.get('/:id', getCategoryById);
categoriesRouter.put('/:id', validateSchema(categoriesInputSchema), updateCategory);
categoriesRouter.delete('/:id', deleteCategory);

export default categoriesRouter;
