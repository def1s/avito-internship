// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { StateSchema } from 'app/providers/StoreProvider';

export const getAdvertisementsListLimit = (state: StateSchema) => state.advertisementsList?.limit || 10;