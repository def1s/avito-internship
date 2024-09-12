// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { StateSchema } from 'app/providers/StoreProvider';

export const getEditAdvertisementFormIsLoading = (state: StateSchema) => state.editAdvertisementForm?.isLoading || false;