import { Router } from 'express';
import { getOrders, createOrders, getOrderById, updateOrder, deleteOrder } from '#controllers';

const ordersRouter = Router();

// orders
ordersRouter.get('/', getOrders);
ordersRouter.post('/', createOrders);

// orders/id
ordersRouter.get('/:id', getOrderById);
ordersRouter.put('/:id', updateOrder);
ordersRouter.delete('/:id', deleteOrder);

export default ordersRouter;
