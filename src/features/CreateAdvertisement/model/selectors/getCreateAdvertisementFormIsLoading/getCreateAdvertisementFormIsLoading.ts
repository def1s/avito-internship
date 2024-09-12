// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { StateSchema } from 'app/providers/StoreProvider';

export const getCreateAdvertisementFormIsLoading = (state: StateSchema) => state.createAdvertisementForm?.isLoading || false;