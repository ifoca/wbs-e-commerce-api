import { Router } from 'express';
import { getUsers, createUsers, getUserById, updateUser, deleteUser } from '#controllers';
import { validateSchema } from '#middleware';
import { userInputSchema } from '#schemas';

const usersRouter = Router();

// users
usersRouter.get('/', getUsers);
usersRouter.post('/', validateSchema(userInputSchema), createUsers);

// users/id
usersRouter.get('/:id', getUserById);
usersRouter.put('/:id', validateSchema(userInputSchema), updateUser);
usersRouter.delete('/:id', deleteUser);

export default usersRouter;
