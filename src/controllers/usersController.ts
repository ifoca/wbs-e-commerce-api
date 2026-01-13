import type { RequestHandler } from 'express';

export const getUsers: RequestHandler = (req, res) => {
  console.log('GET users');
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
