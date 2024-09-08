// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { StateSchema } from 'app/providers/StoreProvider';

export const getAdvertisementDetailsAdvertisement = (state: StateSchema) => state.advertisementDetails?.advertisement;