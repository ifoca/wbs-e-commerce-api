import type { RequestHandler } from 'express';
import { Categories } from '#models';
import { isValidObjectId } from 'mongoose';
import type { CategoriesInput, CategoriesOutput } from '#schemas';

export const getCategories: RequestHandler<{}, CategoriesOutput[]> = async (req, res) => {
  const categories = await Categories.find();
  return res.status(200).json(categories);
};

export const createCategories: RequestHandler<{}, CategoriesOutput, CategoriesInput> = async (
  req,
  res
) => {
  const { name } = req.body;

  const newCategory = await Categories.create({ name });
  if (!newCategory) {
    throw new Error('Something went wrong, could not create Category', { cause: 400 });
  }
  return res.status(201).json(newCategory);
};

export const getCategoryById: RequestHandler<{ id: string }, CategoriesOutput> = async (
  req,
  res
) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    throw new Error('Invalid Category id', { cause: 400 });
  }

  const category = await Categories.findById(id);

  if (!category) {
    throw new Error('Category not found', { cause: 404 });
  }
  return res.status(200).json(category);
};

export const updateCategory: RequestHandler<
  { id: string },
  CategoriesOutput,
  CategoriesInput
> = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!isValidObjectId(id)) {
    throw new Error('Invalid Category id', { cause: 400 });
  }

  const updatedCategory = await Categories.findByIdAndUpdate(id, { name: name }, { new: true });

  if (!updatedCategory) {
    throw new Error('Category not found', { cause: 404 });
  }
  return res.status(200).json(updatedCategory);
};

export const deleteCategory: RequestHandler<
  { id: string },
  CategoriesOutput,
  CategoriesInput
> = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    throw new Error('Invalid Category id', { cause: 400 });
  }

  const category = await Categories.findByIdAndDelete(id);

  if (!category) {
    throw new Error('Category not found', { cause: 404 });
  }
  return res.status(200).json(category);
};
