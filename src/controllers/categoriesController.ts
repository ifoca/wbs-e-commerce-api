import type { RequestHandler } from 'express';

export const getCategories: RequestHandler = (req, res) => {
  console.log('GET categories');
};

export const createCategories: RequestHandler = (req, res) => {
  console.log('POST categories');
};

export const getCategoryById: RequestHandler = (req, res) => {
  console.log('GET category ID');
};

export const updateCategory: RequestHandler = (req, res) => {
  console.log('PUT category ID');
};

export const deleteCategory: RequestHandler = (req, res) => {
  console.log('DELETE category ID');
};
