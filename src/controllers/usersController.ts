import type { RequestHandler } from 'express';
import { Users } from '#models';

export const getUsers: RequestHandler = async (req, res) => {
  const users = await Users.find();
  if (!users) {
    throw new Error('Something went wrong, could not get users', { cause: 404 });
  }
  return res.status(200).json(users);
};

export const createUsers: RequestHandler = (req, res) => {
  console.log('POST users');
};

export const getUserById: RequestHandler = (req, res) => {
  console.log('GET users ID');
};

export const updateUser: RequestHandler = (req, res) => {
  console.log('PUT user ID');
};

export const deleteUser: RequestHandler = (req, res) => {
  console.log('DELETE user ID');
};
