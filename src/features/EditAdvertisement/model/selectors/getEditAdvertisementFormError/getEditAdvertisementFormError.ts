// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { StateSchema } from 'app/providers/StoreProvider';

export const getEditAdvertisementFormError = (state: StateSchema) => state.editAdvertisementForm?.error;