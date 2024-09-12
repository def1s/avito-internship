// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { StateSchema } from 'app/providers/StoreProvider';

export const getOrdersListError = (state: StateSchema) => state.ordersList?.error;