import { StateSchema } from 'app/providers/StoreProvider';

export const getAdvertisementsListIsLoading = (state: StateSchema) => state.advertisementsList?.isLoading || false;