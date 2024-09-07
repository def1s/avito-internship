import { StateSchema } from 'app/providers/StoreProvider';

export const getOrdersListOrders = (state: StateSchema) => state.ordersList?.orders;