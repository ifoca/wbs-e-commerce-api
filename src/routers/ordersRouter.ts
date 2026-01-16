import { Router } from 'express';
import { getOrders, createOrders, getOrderById, updateOrder, deleteOrder } from '#controllers';
import { validateSchema } from '#middleware';
import { ordersInputSchema } from '#schemas';

const ordersRouter = Router();

// orders
ordersRouter.get('/', getOrders);
ordersRouter.post('/', validateSchema(ordersInputSchema), createOrders);

// orders/id
ordersRouter.get('/:id', getOrderById);
ordersRouter.put('/:id', validateSchema(ordersInputSchema), updateOrder);
ordersRouter.delete('/:id', deleteOrder);

export default ordersRouter;
