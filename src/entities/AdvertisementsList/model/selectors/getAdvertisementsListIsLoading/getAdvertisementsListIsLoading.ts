// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { StateSchema } from 'app/providers/StoreProvider';

export const getAdvertisementsListIsLoading = (state: StateSchema) => state.advertisementsList?.isLoading || false;