// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { StateSchema } from 'app/providers/StoreProvider';

export const getAdvertisementsListAdvertisements = (state: StateSchema) => state.advertisementsList?.advertisements;