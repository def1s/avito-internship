import { StateSchema } from 'app/providers/StoreProvider';

export const getOrdersListError = (state: StateSchema) => state.ordersList?.error;