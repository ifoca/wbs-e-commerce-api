import type { RequestHandler } from 'express';
import { Products } from '#models';

export const getProducts: RequestHandler = async (req, res) => {
  const products = await Products.find();
  if (!products) {
    throw new Error('Something went wrong, could not fetch products', { cause: 404 });
  }
  return res.status(200).json(products);
};

export const createProducts: RequestHandler = (req, res) => {
  console.log('POST products');
};

export const getProductById: RequestHandler = (req, res) => {
  console.log('GET product ID');
};

export const updateProduct: RequestHandler = (req, res) => {
  console.log('PUT product ID');
};

export const deleteProduct: RequestHandler = (req, res) => {
  console.log('DELETE product ID');
};
