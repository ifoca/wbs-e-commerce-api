import type { RequestHandler } from 'express';
import { Orders, Products, Users } from '#models';
import { isValidObjectId } from 'mongoose';
import type { OrdersInput, OrdersOutput } from '#schemas';

export const getOrders: RequestHandler = async (req, res) => {
  const orders = await Orders.find();
  if (!orders) {
    throw new Error('Something went wrong, could not get Orders', { cause: 404 });
  }
  return res.status(200).json(orders);
};

export const createOrders: RequestHandler<{}, OrdersOutput, OrdersInput> = async (req, res) => {
  const { userId, products } = req.body;

  const userExists = await Users.findById(userId);
  if (!userExists) {
    throw new Error('Invalid User id', { cause: 400 });
  }

  // get the ids of the products in the req body
  const productIds = products.map((p) => p.productId);
  // returns the full document of that product when found
  const foundProducts = await Products.find({ _id: { $in: productIds } });

  if (foundProducts.length !== products.length) {
    throw new Error('Product id(s) not valid', { cause: 400 });
  }

  let total = 0;
  for (const item of products) {
    const existingProduct = foundProducts.find((p) => p._id.toString() === item.productId);
    // to get back here to see if i can add type safety instead of using !
    total += existingProduct!.price * item.quantity;
  }

  const newOrder = await Orders.create({ userId, products, total });
  if (!newOrder) {
    throw new Error('Something went wrong, could not create order', { cause: 400 });
  }

  return res.status(201).json(newOrder);
};

export const getOrderById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw new Error('Invalid Product id', { cause: 400 });
  }

  const order = await Orders.findById(id);
  if (!order) {
    throw new Error('Oder not found', { cause: 404 });
  }
  return res.status(200).json(order);
};

export const updateOrder: RequestHandler<{ id: string }, OrdersOutput, OrdersInput> = async (
  req,
  res
) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    throw new Error('Invalid Product id', { cause: 400 });
  }

  const order = await Orders.findByIdAndUpdate(id);
  if (!order) {
    throw new Error('Order not found', { cause: 404 });
  }

  const { userId, products } = req.body;
  // get the ids of the products in the req body
  const productIds = products.map((p) => p.productId);
  // returns the full document of that product when found
  const foundProducts = await Products.find({ _id: { $in: productIds } });

  if (foundProducts.length !== products.length) {
    throw new Error('Product id(s) not valid', { cause: 400 });
  }

  let total = 0;
  for (const item of products) {
    const existingProduct = foundProducts.find((p) => p._id.toString() === item.productId);
    // to get back here to see if i can add type safety instead of using !
    total += existingProduct!.price * item.quantity;
  }

  const updatedOrder = await Orders.findByIdAndUpdate(
    id,
    { userId, products, total },
    { new: true }
  );
  if (!updatedOrder) {
    throw new Error('Something went wrong, could not create order', { cause: 400 });
  }

  return res.status(200).json(updatedOrder);
};

export const deleteOrder: RequestHandler = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw new Error('Invalid Product id', { cause: 400 });
  }
  const deletedOrder = await Orders.findByIdAndDelete(id);
  if (!deletedOrder) {
    throw new Error('Oder not found', { cause: 404 });
  }
  return res.status(200).json({ message: `Order with id ${id} has been deleted` });
};
