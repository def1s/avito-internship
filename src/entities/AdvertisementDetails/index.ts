export { AdvertisementDetailsSchema } from './model/types/advertisementDetailsSchema';

export { advertisementsDetailsActions, advertisementsDetailsReducer } from './model/slice/advertisementDetailsSlice';

export { fetchAdvertisementDetails } from './model/services/fetchAdvertisementDetails/fetchAdvertisementDetails';

export { AdvertisementDetails } from './ui/AdvertisementDetails';

export {
	getAdvertisementDetailsAdvertisement
} from './model/selectors/getAdvertisementDetailsAdvertisement/getAdvertisementDetailsAdvertisement';
export {
	getAdvertisementDetailsError
} from './model/selectors/getAdvertisementDetailsError/getAdvertisementDetailsError';
export {
	getAdvertisementDetailsIsLoading
} from './model/selectors/getAdvertisementDetailsIsLoading/getAdvertisementDetailsIsLoading';

