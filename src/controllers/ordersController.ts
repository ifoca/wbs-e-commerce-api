import type { RequestHandler } from 'express';
import { Orders } from '#models';

export const getOrders: RequestHandler = async (req, res) => {
  const orders = await Orders.find();
  if (!orders) {
    throw new Error('Something went wrong, could not get Orders', { cause: 404 });
  }
  return res.status(200).json(orders);
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
