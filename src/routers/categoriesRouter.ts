import { Router } from 'express';
import {
  getCategories,
  createCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from '#controllers';

const categoriesRouter = Router();

// categories
categoriesRouter.get('/', getCategories);
categoriesRouter.post('/', createCategories);

// categories/id
categoriesRouter.get('/:id', getCategoryById);
categoriesRouter.put('/:id', updateCategory);
categoriesRouter.delete('/:id', deleteCategory);

export default categoriesRouter;
