import { StateSchema } from 'app/providers/StoreProvider';

export const getAdvertisementsListData = (state: StateSchema) => state.advertisementsList?.data;