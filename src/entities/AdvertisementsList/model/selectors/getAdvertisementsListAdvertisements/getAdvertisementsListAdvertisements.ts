import { StateSchema } from 'app/providers/StoreProvider';

export const getAdvertisementsListAdvertisements = (state: StateSchema) => state.advertisementsList?.advertisements;