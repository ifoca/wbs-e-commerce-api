import type { RequestHandler } from 'express';
import { Categories, Products } from '#models';
import type { ProductsInput, ProductsOutput } from '#schemas';
import { isValidObjectId } from 'mongoose';

export const getProducts: RequestHandler<{}, ProductsOutput[]> = async (req, res) => {
  const products = await Products.find().populate('categoryId', 'name').lean();
  if (!products) {
    throw new Error('Something went wrong, could not fetch products', { cause: 404 });
  }
  return res.status(200).json(products);
};

export const createProducts: RequestHandler<{}, ProductsOutput, ProductsInput> = async (
  req,
  res
) => {
  const { name, description, price, categoryId } = req.body;
  if (!name || !description || !price || !categoryId) {
    throw new Error('Name, description, price and category Id are mandatory', { cause: 400 });
  }

  const categoryExists = await Categories.findById(categoryId);
  if (!categoryExists) {
    throw new Error('Invalid category id', { cause: 400 });
  }

  const newProduct = await Products.create({ name, description, price, categoryId });
  if (!newProduct) {
    throw new Error('Could not create a new product', { cause: 404 });
  }
  return res.status(201).json(newProduct);
};

export const getProductById: RequestHandler<{ id: string }, ProductsOutput> = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw new Error('Invalid Product id', { cause: 400 });
  }

  const product = await Products.findById(id).populate('categoryId', 'name');
  if (!product) {
    throw new Error('Product not found', { cause: 404 });
  }
  return res.status(200).json(product);
};

export const updateProduct: RequestHandler<{ id: string }, ProductsOutput, ProductsInput> = async (
  req,
  res
) => {
  const { id } = req.params;
  const { name, description, price, categoryId } = req.body;

  if (!isValidObjectId(id)) {
    throw new Error('Invalid Product id', { cause: 400 });
  }

  const categoryExists = await Categories.findById(categoryId);
  if (!categoryExists) {
    throw new Error('Invalid category id', { cause: 400 });
  }

  const updatedProduct = await Products.findByIdAndUpdate(
    id,
    { name, description, price, categoryId },
    { new: true }
  );
  if (!updatedProduct) {
    throw new Error('Could not update the product', { cause: 400 });
  }
  return res.status(200).json(updatedProduct);
};

export const deleteProduct: RequestHandler<{ id: string }, ProductsOutput> = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw new Error('Invalid Product id', { cause: 400 });
  }

  const product = await Products.findByIdAndDelete(id);
  if (!product) {
    throw new Error('Product not found', { cause: 404 });
  }
  return res.status(200).json(product);
};
