// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { StateSchema } from 'app/providers/StoreProvider';

export const getAdvertisementDetailsIsLoading = (state: StateSchema) => state.advertisementDetails?.isLoading || false;