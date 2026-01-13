import type { RequestHandler } from 'express';

export const getProducts: RequestHandler = (req, res) => {
  console.log('GET products');
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
