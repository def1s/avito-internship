// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { StateSchema } from 'app/providers/StoreProvider';

export const getOrdersListIsLoading = (state: StateSchema) => state.ordersList?.isLoading || false;