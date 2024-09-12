// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { StateSchema } from 'app/providers/StoreProvider';

export const getAdvertisementDetailsError = (state: StateSchema) => state.advertisementDetails?.error;