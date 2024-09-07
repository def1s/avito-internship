import { IAdvertisement } from 'shared/types';

export interface AdvertisementsListSchema {
	advertisements: IAdvertisement[];
	isLoading: boolean;
	error?: string;
}