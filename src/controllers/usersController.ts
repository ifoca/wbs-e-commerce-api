import type { RequestHandler } from 'express';
import { Users } from '#models';
import { isValidObjectId } from 'mongoose';

export const getUsers: RequestHandler = async (req, res) => {
  const users = await Users.find();
  if (!users) {
    throw new Error('Something went wrong, could not get users', { cause: 404 });
  }
  return res.status(200).json(users);
};

export const createUsers: RequestHandler = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new Error('Name, email and password are mandatory', { cause: 400 });
  }

  const userExists = await Users.findOne({ email });
  if (userExists) {
    throw new Error('User already exists', { cause: 400 });
  }

  const newUser = Users.create({ name, email, password });

  if (!newUser) {
    throw new Error('Could not create a new user', { cause: 400 });
  }
  return res.status(201).json(newUser);
};

export const getUserById: RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    throw new Error('Invalid Category id', { cause: 400 });
  }

  const user = await Users.findById(id);

  if (!user) {
    throw new Error('User not found', { cause: 404 });
  }
  return res.status(200).json(user);
};

export const updateUser: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new Error('Name, email and password are required', { cause: 400 });
  }

  if (!isValidObjectId(id)) {
    throw new Error('Invalid Category id', { cause: 400 });
  }

  const found = await Users.findOne({ email, _id: { $ne: id } });
  if (found) {
    throw new Error('User already exists', { cause: 400 });
  }

  const updatedUser = await Users.findByIdAndUpdate(id, { name, email, password }, { new: true });

  if (!updatedUser) {
    throw new Error('User not found', { cause: 404 });
  }
  return res.status(200).json(updatedUser);
};

export const deleteUser: RequestHandler = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw new Error('Invalid Category id', { cause: 400 });
  }

  const user = await Users.findByIdAndDelete(id);
  if (!user) {
    throw new Error('User not found', { cause: 404 });
  }
  return res.status(200).json({ message: `User with id ${id} has been deleted` });
};
