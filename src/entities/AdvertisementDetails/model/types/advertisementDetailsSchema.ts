import { IAdvertisement } from 'shared/types';

export interface AdvertisementDetailsSchema {
	advertisement: IAdvertisement;
	isLoading: boolean;
	error?: string;
}