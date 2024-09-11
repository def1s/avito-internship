// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { StateSchema } from 'app/providers/StoreProvider';

export const getOrdersListFilter = (state: StateSchema) => state.ordersList?.filter;