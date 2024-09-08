// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { StateSchema } from 'app/providers/StoreProvider';

// название странное, но по правилам
export const getCreateAdvertisementFormForm = (state: StateSchema) => state.createAdvertisementForm?.advertisementForm;