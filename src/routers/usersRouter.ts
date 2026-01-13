import { Router } from 'express';
import { getUsers, createUsers, getUserById, updateUser, deleteUser } from '#controllers';

const usersRouter = Router();

// users
usersRouter.get('/', getUsers);
usersRouter.post('/', createUsers);

// users/id
usersRouter.get('/:id', getUserById);
usersRouter.put('/:id', updateUser);
usersRouter.delete('/:id', deleteUser);

export default usersRouter;
