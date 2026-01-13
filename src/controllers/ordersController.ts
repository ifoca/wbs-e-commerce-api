import type { RequestHandler } from 'express';

export const getOrders: RequestHandler = (req, res) => {
  console.log('GET orders');
};

export const createOrders: RequestHandler = (req, res) => {
  console.log('POST orders');
};

export const getOrderById: RequestHandler = (req, res) => {
  console.log('GET order ID');
};

export const updateOrder: RequestHandler = (req, res) => {
  console.log('PUT order ID');
};

export const deleteOrder: RequestHandler = (req, res) => {
  console.log('DELETE order ID');
};
