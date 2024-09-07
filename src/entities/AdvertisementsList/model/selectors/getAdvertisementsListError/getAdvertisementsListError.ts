import { StateSchema } from 'app/providers/StoreProvider';

export const getAdvertisementsListError = (state: StateSchema) => state.advertisementsList?.error;