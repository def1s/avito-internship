// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { StateSchema } from 'app/providers/StoreProvider';

export const getEditAdvertisementFormForm = (state: StateSchema) => state.editAdvertisementForm?.advertisementForm;